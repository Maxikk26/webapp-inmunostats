import {useEffect, useState} from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const iconColor = '#f8f9f9'

export default function Sidebar(props) {
    const [state, setState] = useState({
        mobileOpen: props.mobileOpen ?? false,
        openAdministration: false,
    })

    const SIDEBAR = [
        {
            label: 'Tiempo de Respuesta',
            icon: <DeliveryDiningIcon sx={{color: iconColor}}/>,
            link: '/delivery-time',
            nestedOptions: []
        },
        {
            label: 'Administración',
            icon: <SettingsIcon sx={{color: iconColor}}/>,
            openerState: 'openAdministration',
            nestedOptions: [
                {
                    label: 'Usuarios',
                    link: '/administration/users',
                    icon: <PersonIcon sx={{color: iconColor}}/>,

                }
            ]
        }
    ]

    const handleClick = (key) => {
        setState({...state, [key]: !state[key]})
    };

    return (
        <div style={styles.drawerContainer}>
            <Toolbar>
                {/* <img src="/img/inmuno-logo.png" alt="logo" style={{width:'50%', height:'50%'}}/>*/}
                <h2 style={{color: '#f8f9f9'}}>Inmunostats</h2>
            </Toolbar>
            <List>
                {
                    SIDEBAR.map((option, index) => (
                        <ListItem key={index} disablePadding>
                            {
                                option.nestedOptions.length === 0 ?
                                    <Link href={option.link}>
                                        <ListItemButton>
                                            <ListItemIcon style={{minWidth: '35px'}}>
                                                {option.icon}
                                            </ListItemIcon>
                                            <ListItemText sx={{color: '#f8f9f9'}} primary={option.label}/>
                                        </ListItemButton>
                                    </Link> :
                                    option.nestedOptions.map((nestedOption) => (
                                        <div style={{width: '100%'}} key={nestedOption.label}>
                                            <ListItemButton onClick={() => handleClick(option.openerState)}>
                                                <ListItemIcon style={{minWidth: '35px'}}>
                                                    {option.icon}
                                                </ListItemIcon>
                                                <ListItemText sx={{color: '#f8f9f9'}} primary={option.label}/>
                                                {state[option.openerState] ? <ExpandLess style={styles.iconColor}/> :
                                                    <ExpandMore style={styles.iconColor}/>}
                                            </ListItemButton>
                                            <Collapse in={state[option.openerState]} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <Link href={nestedOption.link}>
                                                        <ListItemButton sx={{pl: 4}}>
                                                            <ListItemIcon style={{minWidth: '35px'}}>
                                                                {nestedOption.icon}
                                                            </ListItemIcon>
                                                            <ListItemText sx={{color: '#f8f9f9'}}
                                                                          primary={nestedOption.label}/>
                                                        </ListItemButton>
                                                    </Link>
                                                </List>
                                            </Collapse>
                                        </div>

                                    ))
                            }
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );
}

const styles = {
    drawerContainer: {
        height: '100vh',
        backgroundColor: 'rgb(24,64,119)',
        background: 'linear-gradient(180deg, rgba(24,64,119,1) 32%, rgba(105,149,204,1) 83%, rgba(248,249,249,1) 100%)',
    },
    iconColor: {
        color: '#f8f9f9'
    }
}