import React from "react";
import {Grid} from 'semantic-ui-react'

import {syntaxHighlight} from "../Components/AuxFns";

const ResultForm = props => {
  return (
    <Grid>
      <Grid.Row columns={1} divided>
        <Grid.Column>
          <strong>{props.currentResult[0]}</strong>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} divided>
        <Grid.Column>
          <strong>Geo IP info</strong>
          <div>{syntaxHighlight(props.currentResult[1])}</div>
        </Grid.Column>
        <Grid.Column>
          <strong>Provider IP info</strong>
          <div>{syntaxHighlight(props.currentResult[2])}</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
};

export default ResultForm
