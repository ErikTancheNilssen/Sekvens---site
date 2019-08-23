import React, { useState, useEffect } from "react";
import OrderLines from "./OrderLines.js";
import { Box } from "rebass";
import { getOrders } from "../impleo/api.js";

const Orders = ({ personID }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(personID).then(orders => setOrders(orders));
  }, [personID]);

  return (
    <Box my="3">
      {orders.map(({ orderID }) => (
        <OrderLines key={orderID} orderID={orderID} />
      ))}
    </Box>
  );
};

export default Orders;
