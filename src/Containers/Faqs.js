import React from "react";
import { Accordion } from "../components/Accordion";
// Data set
import faqsData from "../fixtures/faqs.json";

export const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently asked questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item></Accordion.Item>
    </Accordion>
  );
};
