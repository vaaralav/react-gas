import '@babel/polyfill';
import React from 'react';
import ReactGDoc from '@react-gas/gdoc';

const Body = () => (
  <Paragraph>
    <Text color="red">Hello World</Text>
  </Paragraph>
);

const doc = DocumentApp.getActiveDocument();
const body = doc.getBody();

global.render = () => {
  body.appendParagraph('ASDFASDFASDF);');
  ReactGDoc.render(Body, body);
};
