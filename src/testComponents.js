import React from 'react';
import { Accordion, AccordionGroup } from '@bandwidth/shared-components';

// all shared component test cases go under here
var testComponents = {};

testComponents["Accordion"] = () => (
  <Accordion label="Hello" isExpanded="true">
    Some content
  </Accordion>
);

testComponents["AccordionGroup"] = () => (
  <AccordionGroup startExpandedKey={3}>
    <Accordion key={0} label="Option 1">Content 1</Accordion>
    <Accordion key={1} label="Option 2">Content 2</Accordion>
    <Accordion key={2} label="Option 2">Content 2</Accordion>
    <Accordion key={3} label="Option 3">Content 3</Accordion>
    <Accordion key={4} label="Option 4">Content 4</Accordion>
    <Accordion key={5} label="Option 5">Content 5</Accordion>
    <Accordion key={6} label="Option 6">Content 6</Accordion>
  </AccordionGroup>
);


export default testComponents;