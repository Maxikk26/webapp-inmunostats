import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import {useState} from "react";

const drawerWidth = 240;

export default function Header(props){

    return (
        <AppBar
            position="fixed"
            sx={styles.appBar}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleToggle}
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const styles = {
    appBar:{
        backgroundColor: 'rgb(105,149,204)',
        background: 'linear-gradient(90deg, rgba(105,149,204,1) 32%, rgba(248,249,249,1) 83%)',
        width: {sm: `calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`},
    },
}