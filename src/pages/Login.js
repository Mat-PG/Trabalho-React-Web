import React from 'react';
import "../assets/css/main.css"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Header />
            <Banner titulo="Login"/>
            <Grid textAlign='center' style={{ height: '500px' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Senha'
                                type='password'
                            />
                            <Button color='teal' fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Novo por aqui? <Link to='#'>Registre-se</Link>
                    </Message>
                </Grid.Column>
            </Grid>
            <Footer />
        </>
    )
}
export default Login;
