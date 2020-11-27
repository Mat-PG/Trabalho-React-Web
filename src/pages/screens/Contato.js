import React, { useState } from 'react'
import { Button, Paper, MenuItem, MenuList, Grid, TextField } from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect'
import { v4 as uuidv4 } from 'uuid';

function Contato() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [assunto, setAssunto] = useState("")
    const [menssagem, setMenssagem] = useState("")

    const limpar = () => {

        setNome("")
        setEmail("")
        setAssunto("")
        setMenssagem("")
    }

    const salvarMensagem = () => {

        let objeto = {
            nome: nome,
            email: email,
            assunto: assunto,
            menssagem: menssagem,
        }

        let code = uuidv4()

        Firebase
            .database()
            .ref(`menssagem/${code}`)
            .set(objeto)
            .then(() => {
                limpar()
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    return (
        <Grid container textAlign='center' spacing={1}>
            <Grid item sm={10} xs={12}>
                <TextField
                    label="nome"
                    variant="outlined"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    size="small"
                    type="name"
                    style={{ width: "20%", marginLeft: '15%', marginBottom: 10 }} />
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="email"
                    variant="outlined"
                    size="small"
                    type="email"
                    style={{ width: "100%", marginLeft: '15%', marginBottom: 10 }} />
                  <TextField
                    label="assunto"
                    variant="outlined"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    size="small"
                    type="name"
                    style={{ width: "20%", marginLeft: '15%', marginBottom: 10 }} />
                <TextField
                    value={menssagem}
                    onChange={(e) => setMenssagem(e.target.value)}
                    label="Menssagem"
                    multiline
                    id="standard-multiline-flexible"
                    variant="outlined"
                    size="small"
                    type="email"
                    style={{ width: "100%", marginLeft: '15%', marginBottom: 10 }} />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={salvarMensagem}
                    style={{ float: "right" }}>
                    Enviar Mensagem
                </Button>
            </Grid>
        </Grid >

    )
}

export default Contato;
