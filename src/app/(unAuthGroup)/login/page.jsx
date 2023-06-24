'use client'

import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Button, TextField} from "@mui/material";
import 'primeicons/primeicons.css';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Login() {
    return (
        <div style={{backgroundColor: "white", width: "85vw", height: "85vh", borderRadius: 20}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-between',height:"100%"}}>
                <div style={{flex:0.5,display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
                    <div style={{paddingBottom:"3%",textAlign:"center"}}>
                        <h1>¡Bienvenido a Inmunostats!</h1>
                        <h3>Inicia sesión para acceder a todas las características</h3>
                    </div>
                    <div style={{width:"60%"}}>
                        <TextField style={{paddingBottom:"5%",borderRadius:10}} fullWidth id="outlined-basic" label="Usuario" variant="outlined" />
                        <TextField style={{paddingBottom:"5%",borderRadius:10}} fullWidth id="outlined-basic" label="Contraseña" variant="outlined" />
                        <Button style={{borderRadius:10}} fullWidth variant="contained" size="large">Iniciar sesión</Button>
                    </div>
                </div>
                <div style={{flex:0.5,backgroundImage:`url(/img/pexels-photomix-company.jpg)`,backgroundSize:'cover',backgroundPosition: 'center',borderRadius:20, margin:20}}>
                </div>
            </div>

        </div>
    )
}

const styles = {}