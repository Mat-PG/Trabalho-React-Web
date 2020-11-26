import React, { useState, useLayoutEffect } from 'react'
import Head from "../components/Head";
import Footer from "../components/Footer";
import { Button, Grid, Paper, MenuList, MenuItem } from '@material-ui/core';
import Notifica from './screens/Notifica'
import EventoCadastro from './screens/EventoCadastro'
import EventosEnviados from './screens/EventosEnviados'
import Contato from './screens/Contato'
import Firebase from '../services/FirebaseConnect'
import Image from 'material-ui-image'
import { useHistory, Link } from "react-router-dom";

export default function Menu() {
    
    let history = useHistory();

    const [screen, setScreen] = useState(0)

    const logoff = () => {
        sessionStorage.removeItem("uuid")
        Firebase
            .auth()
            .signOut()
            .then(() => {
                history.push("/");
            }).catch(() => {
                history.push("/");
            })
    }


    return (
        <div>
            <Head />
            <Grid container spacing={1}>
                <Grid item sm={10} xs={12}>
                    <Image aspectRatio={1 / 1} src="https://image.freepik.com/vetores-gratis/mapa-de-estrelas-do-ceu-de-vetor-com-estrelas-de-constelacoes_53562-2129.jpg" />
                </Grid>
                <Grid item sm={2} xs={12}>
                    <Grid item sm={12} xs={12}>
                        <Paper>
                            <MenuList>
                                <MenuItem onClick={() => setScreen(1)}>NOTIFICAR-ME</MenuItem>
                                <MenuItem onClick={() => setScreen(2)}>ENVIAR EVENTO</MenuItem>
                                <MenuItem onClick={() => setScreen(3)}>LISTA DE EVENTOS</MenuItem>
                                <MenuItem onClick={() => setScreen(4)}>Entre em contato conosco</MenuItem>
                                <MenuItem>
                                    <Button
                                        onClick={logoff}
                                        variant="contained"
                                        color="primary"
                                        >
                                        Logout
                                    </Button>
                                </MenuItem>
                            </MenuList>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item sm={10} xs={12}>
                    <Paper>
                        {screen === 0 &&
                            <Notifica setScreen={setScreen} />
                        }
                        {screen === 1 &&
                            <Notifica setScreen={setScreen} />
                        }
                        {screen === 2 &&
                            <EventoCadastro setScreen={setScreen} />
                        }
                        {screen === 3 &&
                            <EventosEnviados setScreen={setScreen} />
                        }
                        {screen === 4 &&
                            <Contato setScreen={setScreen} />
                        }

                    </Paper>
                </Grid>

            </Grid>
            <Footer />
        </div>
    )
}