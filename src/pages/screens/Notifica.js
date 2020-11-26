import React, { useState, useLayoutEffect } from 'react'
import { Grid, Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

import Firebase from '../../services/FirebaseConnect'
import { v4 as uuidv4 } from 'uuid';

export default function Notifica() {

    const [eei, setEEI] = useState(false);
    const [satelites, setSatelites] = useState(false);
    const [starlink, setStarlink] = useState(false);
    const [radioSate, setRadioSate] = useState(false);
    const [cometas, setCometas] = useState(false);
    const [planetas, setPlanetas] = useState(false);

    const salvarEvento = () => {

        let objeto = {
            eei: eei,
            satelites: satelites,
            starlink: starlink,
            radioSate: radioSate,
            cometas: cometas,
            planetas: planetas
        }

        let code = uuidv4()

        Firebase
            .database()
            .ref(`notificacoes/${code}`)
            .set(objeto)

            .catch((erro) => {
                console.log(erro)
            })
    }

    return (
        <Grid container spacing={1} >
            <Grid item sm={10} xs={12}>
                Escolha quais dos eventos a seguir você gostaria de ser notificado:
            </Grid>
            <Grid item sm={10} xs={12}>
                <ToggleButton
                    color={0,0,0}
                    value="check"
                    selected={eei}
                    onChange={() => {
                        setEEI(!eei);
                    }}
                >
                    <CheckIcon />
                </ToggleButton>
                 Gostaria de ser notificado sobre EEIs que aparecerão na minha localização.
            </Grid>
            <Grid item sm={10} xs={12}>
                <ToggleButton
                    value="check"
                    selected={satelites}
                    onChange={() => {
                        setSatelites(!satelites);
                    }}
                >
                    <CheckIcon />
                </ToggleButton>
                Gostaria de ser notificado sobre Satélites que aparecerão na minha localização.
            </Grid>
            <Grid item sm={10} xs={12}>
                <ToggleButton
                    value="check"
                    selected={starlink}
                    onChange={() => {
                        setStarlink(!starlink);
                    }}
                >
                    <CheckIcon />
                </ToggleButton>
                Gostaria de ser notificado sobre Starlinks que aparecerão na minha localização.
            </Grid>
            <Grid item sm={10} xs={12}>
                <ToggleButton
                    value="check"
                    selected={radioSate}
                    onChange={() => {
                        setRadioSate(!radioSate);
                    }}
                >
                    <CheckIcon />
                </ToggleButton> 
                Gostaria de ser notificado sobre Rádio Satélites que aparecerão na minha localização.
            </Grid>
            <Grid item sm={10} xs={12}>
                <ToggleButton
                    value="check"
                    selected={cometas}
                    onChange={() => {
                        setCometas(!cometas);
                    }}
                >
                    <CheckIcon />
                </ToggleButton> 
                Gostaria de ser notificado sobre Cometas que aparecerão na minha localização.
            </Grid>
            <Grid item sm={10} xs={12}>
                <ToggleButton
                    value="check"
                    selected={planetas}
                    onChange={() => {
                        setPlanetas(!planetas);
                    }}
                >
                    <CheckIcon />
                </ToggleButton> 
                Gostaria de ser notificado sobre Planetas que aparecerão na minha localização.
            </Grid>
            <Button
                    variant="contained"
                    color="primary"
                    onClick={salvarEvento}
                    style={{ float: "right" }}>
                    Enviar Dados
                </Button>
        </Grid >

    )
}