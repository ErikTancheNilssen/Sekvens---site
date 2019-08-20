import React, { useState, useEffect } from "react";
import OrderLines from "./OrderLines.js";

import { getOrders } from "../impleo/api.js";

const Orders = ({ personID }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(personID).then(orders => setOrders(orders));
  }, [personID]);

  return orders.map(({ orderID }) => (
    <OrderLines key={orderID} orderID={orderID} />
  ));
};

export default Orders;
