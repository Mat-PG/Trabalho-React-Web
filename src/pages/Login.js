import React, {useState} from 'react';
import "../assets/css/main.css"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Firebase from "../services/FirebaseConnect"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [lembreme, setLembreme] = useState(false)
    const [lista, setLista] = useState([])
    const [listaPolicia, setListaPolicia] = useState([])

    const login = () => {
      Firebase
        .auth()
        .signInWithEmailAndPassword(
          email, password)
        .then(retorno => {
          console.log("Usuário Logado: " + retorno.user.uid)
        })
        .catch(
          erro => {
            console.log(erro)
          }
        )
  
    }
  
  
    return (
        <>
            <Header />
            <Banner titulo="Login"/>
            <Grid textAlign='center' style={{ height: '500px' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' value={email} onChange={(e)=> setEmail(e.target.value)} />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Senha'
                                type='password'
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                            <Button onClick={login} color='teal' fluid size='large'>
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
