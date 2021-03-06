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

export const getOrderLine = async (start, end, companyId) => {
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

  return orders;
};

export const downloadAddresses = async (start, end, companyId) => {
  try {
    const orders = await getOrderLine(start, end, companyId);
    save(
      orders.map(
        ({
          date,
          deliveryCompanyname,
          externalOrderID,
          reference,
          contactPerson,
          deliveryContactPerson,
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
          Ordrenummer: orderID,
          Dato: format(date, "DD/MM/YY"),
          "Ext Id": externalOrderID,
          Firma: deliveryCompanyname,
          Att: deliveryContactPerson,
          "Adresse 1": address1,
          "Adresse 2": address2,
          Sted: postalAddress,
          Postnummer: postalCode,
          Land: countryName,
          Referanse: reference,
          Kontaktperson: contactPerson,
          "E-post": contactEmail,
          Telefon: contactPhone,
          Kommentar: comment
        })
      ),
      {
        sep: ";",
        filename: `adresser_${companyId}__${format(
          start,
          "DD-MM-YYYY"
        )}__${format(end, "DD-MM-YYYY")}.csv`
      }
    );
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const downloadOrders = async (start, end, companyId) => {
  const orders = await getOrderLine(start, end, companyId);
  const cols = {
    Ordrenummer: "",
    "S-Nummer": "",
    Dato: "",
    Adresse: "",
    Antall: "",
    Produkt: ""
  };

  save(
    orders.reduce(
      (
        out,
        {
          date,
          deliveryCompanyname,
          externalOrderID,
          extItemNo,
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
          Ordrenummer: orderID,
          "S-Nummer": externalOrderID,
          Dato: format(date, "DD/MM/YY"),
          Adresse:
            deliveryCompanyname + " //  " + contactPerson + " // " + address1 + " // " + postalCode + "  " + postalAddress
        },

        ...templateOrderLines.map(
          ({
            ident,
            extItemNo,
            quantity,
            template: { templateName, templateID }
          }) => ({
            ...cols,
            Antall: quantity,
            Produkt: `${extItemNo} ${templateName} ${
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
            Antall: quantity,
            Produkt: `${uploadedFileType}${ident ? '\n"' + ident + '"' : ""}${
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
      filename: `bestillinger_${companyId}__${format(start, "DD-MM-YYYY")}__${format(
        end,
        "DD-MM-YYYY"
      )}.csv`
    }
  );
};

export const pasientRapport = async (start, end, companyId) => {
  const orders = await getOrderLine(start, end, companyId);
  const cols = {
    Ordrenummer: "",
    Dato: "",
    "Bestillers navn": "",
    "HPR nummer": "",
    "Virksomhetens navn": "",
    Avdeling: "",
    Leveringsadresse: "",
    Postnummer: "",
    Poststed: "",
    "Bestillers e-post": "",
    "Bestillers telefonnummer": "",
    "Antall blokker": ""
  };

  save(
    orders.reduce(
      (
        out,
        {
          date,
          deliveryCompanyname,
          externalOrderID,
          extItemNo,
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
          Ordrenummer: orderID,
          Dato: format(date, "DD/MM/YY"),
          "Bestillers navn": contactPerson,
          "HPR nummer": reference,
          "Virksomhetens navn": deliveryCompanyname,
          Avdeling: address2,
          Leveringsadresse: address1,
          Postnummer: postalCode,
          Poststed: postalAddress,
          "Bestillers e-post": contactEmail,
          "Bestillers telefonnummer": contactPhone,
        },
          ...templateOrderLines.map(
              ({

                   quantity,

               }) => ({
                  ...cols,
                  "Antall blokker": quantity,
              })
          ),
      ],
      []
    ),
    {
      sep: ";",
      filename: `Pasientreiser_Rekvisisjonsblokker__${format(start, "DD-MM-YYYY")}__${format(
        end,
        "DD-MM-YYYY"
      )}.csv`
    }
  );
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
    } = await impleo.post("/sts/v1/token", {
      password: formData.get("password"),
      username: formData.get("username")
    });

    updateToken(token);
    storeToken(token, expires);
    return { token };
  } catch (e) {
    console.log(e);
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

export const interfloraOrders = async (start, end, companyId) => {
    const orders = await getOrderLine(start, end, companyId);
    const cols = {
        Ordrenummer: "",
        Medlemsnummer: "",
        Dato: "",
        "Firmanavn": "",
        Produkt: "",
        Merknad: "",
        Varenummer: "",
        "Pris inkl mva": "",
        Antall: "",
        "Total pris - eks porto": ""
    };


    save(
        orders.reduce(
            (
                out,
                {
                    orderID,
                    date,
                    invoiceExtCustomerNo,
                    deliveryCompanyname,
                    extDatasetRef,
                    templateOrderLines, // ident, extItemNo, price, costPrice, quantity, template
                    startupCost,
                    totalPriceIncVAT
                }
            ) => [
                ...out,
                {
                    ...cols,
                    Ordrenummer: orderID,
                    Dato: format(date, "DD/MM/YY"),
                    "Medlemsnummer": extDatasetRef,
                    "Firmanavn": deliveryCompanyname,
                },

                ...templateOrderLines.map(
                    ({
                      ident,
                        extItemNo,
                        price,
                        costPrice,
                        quantity,
                        template: {
                            templateName,
                         },
                     }) => ({
                        ...cols,
                        "Medlemsnummer": extDatasetRef,
                        Produkt: templateName,
                        Merknad: ident.replace(/\r\n/g,' / '),
                        Varenummer: extItemNo,
                        //using de-DE instead of de-DE due to thousand separator
                        "Pris inkl mva": (price*1.25).toLocaleString('de-DE').replace('.',''),
                        Antall: quantity,
                    })
                ),
                {
                    ...cols,
                    "Medlemsnummer": extDatasetRef,
                    Produkt: 'Esker, pakking og ekspedisjon',
                    "Pris inkl mva": (startupCost*1.25).toLocaleString('de-DE').replace('.',''),
                },
                {
                    ...cols,
                    "Medlemsnummer": extDatasetRef,
                    "Total pris - eks porto": totalPriceIncVAT.toLocaleString('de-DE').replace('.','')
                },
                {
                    ...cols,
                    "Medlemsnummer": extDatasetRef,
                    Produkt: "Porto",
                    "Pris inkl mva": 0
                },
                cols,

            ],
            []
        ),
        {
            sep: ";",
            filename: `interflora__${format(start, "DD-MM-YYYY")}__${format(
                end,
                "DD-MM-YYYY"
            )}.csv`
        }
    );
};


export const nbfRapport = async (start, end, companyId) => {
  try {
    const orders = await getOrderLine(start, end, companyId);
    save(
      orders.map(
        ({
          date,
          deliveryCompanyname,
          reference,
          contactPerson,
          deliveryContactPerson,
          deliveryEmail,
          contactEmail,
          contactPhone,
          comment,
          orderID,
          deliveryPhone,
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
          Ordrenummer: orderID,
          Dato: format(date, "DD/MM/YY"),
          Firma: deliveryCompanyname,
          Att: deliveryContactPerson,
          "Adresse 1": address1,
          "Adresse 2": address2,
          Sted: postalAddress,
          Postnummer: postalCode,
          Land: countryName,
          Referanse: reference,
          "Leveranse telefon": deliveryPhone, 
          "Leveranse e-post": deliveryEmail, 
          Bestiller: contactPerson,
          "Bestiller e-post": contactEmail,
          "Bestiller telefon": contactPhone,
          Kommentar: comment
        })
      ),
      {
        sep: ";",
        filename: `NBF_adresser_${companyId}__${format(
          start,
          "DD-MM-YYYY"
        )}__${format(end, "DD-MM-YYYY")}.csv`
      }
    );
  } catch (e) {
    console.error(e);
    return false;
  }
};