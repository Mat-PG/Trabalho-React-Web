import React, { useState } from 'react'
import { Button, Paper, MenuItem, MenuList, Grid, TextField } from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect'
import { v4 as uuidv4 } from 'uuid';

export default function EventoCadastro(props) {

    const [evento, setEvento] = useState("")
    const [local, setLocal] = useState("")
    const [direcao, setDirecao] = useState("")
    const [data, setData] = useState("")
    const [hora, setHora] = useState("")

    const limpar = () => {

        setEvento("")
        setLocal("")
        setDirecao("")
        setData("")
        setHora("")
    }

    const salvarEvento = () => {

        let objeto = {
            evento: evento,
            local: local,
            data: data,
            hora: hora,
            direcao: direcao
        }

        let code = uuidv4()

        Firebase
            .database()
            .ref(`eventos/${code}`)
            .set(objeto)
            .then(() => {
                limpar()
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    return (
        <Grid container spacing={1} >
            <Grid item sm={10} xs={12}>
                <TextField
                    label="Evento"
                    variant="outlined"
                    value={evento}
                    onChange={(e) => setEvento(e.target.value)}
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    value={local}
                    onChange={(e) => setLocal(e.target.value)}
                    label="Local"
                    variant="outlined"
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    label="Data e Hora"
                    variant="outlined"
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    label="Direcao"
                    variant="outlined"
                    value={direcao}
                    onChange={(e) => setDirecao(e.target.value)}
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    label="Hora"
                    variant="outlined"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={salvarEvento}
                    style={{ float: "right" }}>
                    Enviar Dados
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.setScreen(1)}
                    style={{ float: "right" }}>
                    Cancelar
                </Button>
            </Grid>
        </Grid >

    )
}