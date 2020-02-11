import React from "react";
import {Header} from 'semantic-ui-react'
import {ReactComponent as Logo} from '../Images/ip.svg';


const FormHeader = () => {
    return (
        <Header as='h2'>
            <Logo style={{"height": "20%", "width": "20%"}}/>
            <br/>
            IP checker
            <Header.Subheader>Get info about IP.</Header.Subheader>
        </Header>
    )
};

export default FormHeader
