import React, { useState, useLayoutEffect } from 'react';
import "../assets/css/main.css"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import { Checkbox, Input } from '@material-ui/core'
import { Link } from "react-router-dom";
import Firebase from "../services/FirebaseConnect"
import { useHistory } from "react-router-dom";

const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [lembreme, setLembreme] = useState(false)
    const [lista, setLista] = useState([])
    const [listaPolicia, setListaPolicia] = useState([])

    useLayoutEffect(() => {
        
        let emailStorage = localStorage.getItem("email")
        let passwordStorage = localStorage.getItem("password")
        if (emailStorage && passwordStorage) {
            setEmail(emailStorage)
            setPassword(passwordStorage)
            setLembreme(true)
        }

    }, [])

    const login = () => {
        if (!lembreme){
            localStorage.removeItem("email")
            localStorage.removeItem("password")
        }

        Firebase
            .auth()
            .signInWithEmailAndPassword(
                email, password)
            .then(retorno => {
                sessionStorage.setItem("uuid", retorno.user.uid)
                if (lembreme){
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                }
                setMsg("")
                setTimeout(() => {
                    history.push("/Menu");
                }, 100);
            })
            .catch(
                erro => {
                    console.log(erro)
                    setMsg("Usuario ou senha incorretos.")
                }
            )

    }


    return (
        <>
            <Header />
            <Banner titulo="Login" />
            <Grid textAlign='center' style={{ height: '500px' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Senha'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button onClick={login} color='teal' fluid size='large'>
                                Login
                            </Button>
                            {msg}
                            <p></p>
                            <Checkbox
                                checked={lembreme}
                                onClick={(e) => setLembreme(!lembreme)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            /> Lembre-me
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
