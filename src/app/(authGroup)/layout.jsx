"use client"

import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const drawerWidth = 240;

export default function AuthLayout(props) {
    const [state, setState] = useState({
        mobileOpen: false,
    })
    const {window} = props;
    const handleDrawerToggle = () => {
        setState({...state, mobileOpen: !state.mobileOpen})
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Header handleToggle={() => handleDrawerToggle()}/>
                <Box component="nav" sx={styles.navContainer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={state.mobileOpen}
                        onClose={handleDrawerToggle}
                        // Better open performance on mobile.
                        ModalProps={{keepMounted: true}}
                        sx={styles.temporaryDrawer}
                    >
                        <Sidebar mobileOpen={state.mobileOpen}/>
                    </Drawer>
                    <Drawer variant="permanent" sx={styles.permanentDrawer} open>
                        <Sidebar mobileOpen={state.mobileOpen}/>
                    </Drawer>
                </Box>
                <Box component="main" sx={styles.mainContainer}>
                    <Toolbar/>
                    {props.children}
                </Box>
            </Box>
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
    },
    temporaryDrawer:{
        display: {xs: 'block', sm: 'none'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
    },
    permanentDrawer:{
        display: {xs: 'none', sm: 'block'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
    },
    mainContainer: {
        flexGrow: 1,
        p: 3,
        width: {sm: `calc(100% - ${drawerWidth}px)`}
    },
    navContainer:{
        width: {sm: drawerWidth},
        flexShrink: {sm: 0}
    },
}