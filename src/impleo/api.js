import axios from "axios";
import store from "store2";
import save from "save-csv";
import { format } from "date-fns";

export const impleo = axios.create({
  baseURL: "https://api.sekvens.app"
});

export const updateToken = token => {
  if (token) {
    impleo.defaults.headers.common["Authorization"] = token;
    return token;
  } else if (impleo.defaults.headers.common["Authorization"]) {
    delete impleo.defaults.headers.common["Authorization"];
  }
};

export const getProfile = async () => {
  try {
    const { data } = await impleo.get("/api/v1/userprofile");
    return data;
  } catch ({ response: { data } }) {
    return { error: data };
  }
};

export const getUserInfo = async (companyid, id) => {
  try {
    const { data } = await impleo.get(
      `/api/v1/companies/${companyid}/users/${id}`
    );
    return data;
  } catch ({ response: { data } }) {
    return { error: data };
  }
};

export const getCompanies = async () => {
  try {
    const {
      data: { items }
    } = await impleo.get("/api/v1/companies");
    return items;
  } catch ({ response: { data } }) {
    return { error: data };
  }
};

export const getUsers = async companyId => {
  try {
    const {
      data: { items }
    } = await impleo.get(`/api/v1/companies/${companyId}/users/`);
    return items;
  } catch ({ response: { data } }) {
    return [];
  }
};

export const downloadExcel = async (start, end, companyId) => {
  try {
    const {
      data: { items = [] }
    } = await impleo.get(
      `/api/v1/companies/${companyId}/ordersbydates/${format(
        start,
        "YYYY-MM-DD"
      )}/${format(end, "YYYY-MM-DD")}`
    );

    const orders = await Promise.all(
      items.map(({ orderID }) => getOrderLines(orderID))
    );

    save(
      orders.map(
        ({
          date,
          deliveryCompanyname,
          externalOrderID,
          reference,
          contactPerson,
          contactEmail,
          contactPhone,
          comment,
          orderID,
          deliveryAddress: {
            address1,
            address2,
            postal: {
              country: { countryName },
              postalAddress,
              postalCode
            }
          }
        }) => ({
          Order: orderID,
          Date: format(date, "DD/MM/YY"),
          "Ext Id": externalOrderID,
          Company: deliveryCompanyname,
          Person: contactPerson,
          Email: contactEmail,
          Phone: contactPhone,
          Reference: reference,
          "Address 1": address1,
          "Address 2": address2,
          City: postalAddress,
          Code: postalCode,
          Country: countryName,
          Comment: comment
        })
      ),
      {
        sep: ";",
        filename: `addresses_${companyId}__${format(
          start,
          "DD-MM-YYYY"
        )}__${format(end, "DD-MM-YYYY")}.tsv`
      }
    );

    const cols = {
      Order: "",
      "S-Number": "",
      Date: "",
      Address: "",
      Quantity: "",
      Product: ""
    };
    save(
      orders.reduce(
        (
          out,
          {
            date,
            deliveryCompanyname,
            externalOrderID,
            templateOrderLines,
            customOrderLines,
            reference,
            contactPerson,
            contactEmail,
            contactPhone,
            comment,
            orderID,
            deliveryAddress: {
              address1,
              address2,
              postal: {
                country: { countryName },
                postalAddress,
                postalCode
              }
            }
          }
        ) => [
          ...out,
          {
            ...cols,
            Order: orderID,
            "S-Number": externalOrderID,
            Date: format(date, "DD/MM/YY"),
            Address:
              deliveryCompanyname + " //  " + contactPerson + " // " + address1
          },

          ...templateOrderLines.map(
            ({
              ident,
              extItemNo,
              quantity,
              template: { templateName, templateID }
            }) => ({
              ...cols,
              Quantity: quantity,
              Product: `${templateID} - ${templateName} ${
                ident ? '\n"' + ident + '"' : ""
              }`
            })
          ),
          ...customOrderLines.map(
            ({
              ident,
              extItemNo,
              quantity,
              jobDescription,
              uploadedFileType
            }) => ({
              ...cols,
              Quantity: quantity,
              Product: `${uploadedFileType}${ident ? '\n"' + ident + '"' : ""}${
                jobDescription ? '\n"' + jobDescription + '"' : ""
              }`
            })
          ),
          cols,
          cols
        ],
        []
      ),
      {
        sep: ";",
        filename: `orders_${companyId}__${format(
          start,
          "DD-MM-YYYY"
        )}__${format(end, "DD-MM-YYYY")}.tsv`
      }
    );
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getOrders = async personid => {
  try {
    const {
      data: { items }
    } = await impleo.get(`/api/v1/users/${personid}/orders/1/999`);

    return items;
  } catch ({ response: { data } }) {
    return [];
  }
};

export const getOrderLines = async orderid => {
  try {
    const { data } = await impleo.get(`/api/v1/orders/${orderid}/orderlines`);
    return data;
  } catch ({ response: { data } }) {
    return false;
  }
};

export const login = async formData => {
  try {
    const {
      data: {
        impleoToken: { token, expires }
      }
    } = await impleo.post("/sts/v1/token", Object.fromEntries(formData));
    updateToken(token);
    storeToken(token, expires);
    return { token };
  } catch (e) {
    return { token: false, error: e.data || { Message: "Error, try again" } };
  }
};

export const logout = () => {
  updateToken();
  storeToken();
};

export const checkLogin = action => {
  const token = store.get("impleoToken");
  const tokenExpires = Number(store.get("impleoTokenExpires"));

  return tokenExpires > new Date().valueOf() / 1000
    ? updateToken(token)
    : updateToken(false);
};

export const storeToken = (token, expires) => {
  if (token) {
    store.set("impleoToken", token);
    store.set("impleoTokenExpires", expires);
  } else {
    store.remove("impleoToken");
    store.remove("impleoTokenExpires");
  }
};
