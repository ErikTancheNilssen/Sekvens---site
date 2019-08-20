import React, { useState, useEffect } from "react";
import { Flex, Text, Box } from "rebass";

import { getOrderLines } from "../impleo/api.js";

const Row = ({ value, title }) =>
  !!value && (
    <Flex>
      <Box width={200}>
        <Text color="black">{title}</Text>
      </Box>
      <Box width={0.6}>
        <Text>{value}</Text>
      </Box>
    </Flex>
  );

const OrderLine = ({
  ident,
  extItemNo,
  quantity,
  price,
  template: { templateName, templateID }
}) => (
  <Box my="3" ml="3">
    <Row value={quantity} title="Quantity" />
    <Row value={templateName} title="TemplateName" />
    <Row value={ident} title="Ident" />
    <Row value={extItemNo} title="Ext" />
    <Row value={price} title="price" />
  </Box>
);

const OrderLines = ({ orderID }) => {
  const [order, setOrder] = useState();

  useEffect(() => {
    getOrderLines(orderID).then(order => {
      setOrder(order);
    });
  }, [orderID]);

  if (!order) return null;

  const {
    date,
    deliveryCompanyname,
    externalOrderID,
    templateOrderLines,
    deliveryAddress: {
      address1,
      address2,
      postal: {
        country: { countryName },
        postalAddress,
        postalCode
      }
    }
  } = order;

  return (
    <Box ml="5" mt="3" mb="5">
      <Row value={orderID} title="ID" />
      <Row value={date} title="Date" />
      <Row value={deliveryCompanyname} title="Company Name" />
      <Row value={externalOrderID} title="Ext Order ID" />
      <Row value={address1} title="Address 1" />
      <Row value={address2} title="Address 2" />
      <Row value={postalCode} title="Postal Code" />
      <Row value={postalAddress} title="City" />
      <Row value={countryName} title="Country" />
      {templateOrderLines.map(orderLine => (
        <OrderLine key={orderLine.templateOrderLinesID} {...orderLine} />
      ))}
    </Box>
  );
};

export default OrderLines;
