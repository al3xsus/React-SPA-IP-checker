import React from "react";
import {Header, Icon} from 'semantic-ui-react'

const FormHeader = () => {
    return (
        <Header as='h2' icon>
            <Icon name='react' />
            IP checker
            <Header.Subheader>Get info about IP.</Header.Subheader>
        </Header>
    )
}

export default FormHeader
