import React from 'react';
import {List} from "semantic-ui-react";

export const checkInput = (IPAddress) => {
  console.log(IPAddress);
  if (IPAddress !== '') {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(IPAddress);
  }
  return false
};

export const syntaxHighlight = (json) => {
  let result = [];
  Object.keys(json).forEach((key, i) => {
    result.push(<List.Item key={`${key}-${json[key]}-${i}`}>
      <List.Content floated={'left'}>
        {key}
      </List.Content>
      <List.Content floated={'right'}>
        {json[key].length > 25 ? json[key].slice(0, 21) + '...' : json[key]}
      </List.Content>
    </List.Item>)
  });
  return (<pre><List celled>{result}</List></pre>)
};
