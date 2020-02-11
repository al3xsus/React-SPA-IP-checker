import {Form} from "semantic-ui-react";
import React from "react";

const IPForm = (props) => {
    return (<Form>
        <Form.Input
            placeholder='Input IP here'
            name='IP'
            value={props.searchValue}
            onChange={props.handleSearchChange}
            error={!props.checkForErrors(props.searchValue)}
        />
        <Form.Button
            content='Get Info'
            basic={true}
            color={'green'}
            onClick={props.handleInfoButtonClick}
            disabled={!props.checkForErrors(props.searchValue)}
        />
    </Form>)
};

export default IPForm