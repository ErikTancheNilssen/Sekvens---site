import React, { useState, useEffect } from "react";
import { Flex, Text, Box } from "rebass";
import { format, parse } from "date-fns";
import styled from "styled-components";
import { getOrderLines } from "../impleo/api.js";

const Toggle = styled(Flex)`
  cursor: pointer;
  user-select: none;
`;

const OrderBox = styled(Box)`
  border-top: solid 1px ${({ theme: { colors } }) => colors.b_20};
`;

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
  <OrderBox py="3">
    <Row value={<strong>{quantity}</strong>} title="Quantity" />
    <Row value={templateName} title="TemplateName" />
    <Row value={ident} title="Ident" />
    <Row value={extItemNo} title="Ext" />
    <Row value={price} title="price" />
  </OrderBox>
);

const OrderLines = ({ orderID }) => {
  const [order, setOrder] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getOrderLines(orderID).then(order => {
      setOrder(order);
    });
  }, [orderID]);

  if (!order)
    return (
      <Box ml="5" mt="3" mb="5">
        <Text>Loading order {orderID}</Text>
      </Box>
    );

  const {
    date,
    deliveryCompanyname,
    externalOrderID,
    templateOrderLines,
    reference,
    contactPerson,
    contactEmail,
    contactPhone,
    comment,
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
    <Box my="1">
      <Toggle
        p="2"
        ml={-2}
        bg={open ? "p4" : null}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Text fontWeight="bold" color="p1" width="1rem">
          {open ? "-" : "+"}
        </Text>
        <Text width="150px" fontWeight="bold">
          {format(parse(date), "DD MMMM'YY")}{" "}
        </Text>
        <Text width="200px" ml="4">
          {contactPerson}
        </Text>
        <Text ml="4">{reference}</Text>
      </Toggle>
      {!!open && (
        <Box mt="4">
          <Row value={orderID} title="Id" />
          <Row value={externalOrderID} title="Ext Order ID" />
          <Row value={contactEmail} title="Email" />
          <Row value={contactPhone} title="Phone" />
          <Row
            value={
              <Box mb="2">
                <Text>{contactPerson}</Text>
                <Text>{reference}</Text>
                <Text>{deliveryCompanyname}</Text>
                <Text>{address1}</Text>
                <Text>{address2}</Text>
                <Text>{postalCode}</Text>
                <Text>{postalAddress}</Text>
                <Text>{countryName}</Text>
              </Box>
            }
            title="Address"
          />
          <Row value={comment} title="Comment" />
          <Box my="4">
            {templateOrderLines.map(orderLine => (
              <OrderLine key={orderLine.templateOrderLinesID} {...orderLine} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OrderLines;
