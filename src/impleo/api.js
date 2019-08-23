import axios from "axios";
import store from "store2";

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

//1265 // normal
//1266 // Rek

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
  } catch ({ response: { data } }) {
    return { token: false, error: data };
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
