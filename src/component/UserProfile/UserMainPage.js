import Sidebar from "./SideBar";
import React, {use, useState} from 'react'
import ConferenceCard from "./Conference/ConferenceCard";
import {Switch, Route, useLocation} from 'react-router-dom'
import Cart from './Conference/CreateConferenceHoverCard'
import CreateConferenceDrawer from "./Conference/CreateConferenceDrawer";
import SessionContextProvider from "../../store/session-context/session-context";


const UserMainPage = () => {

    return (
        <>
            <SessionContextProvider>
                <Sidebar style={{display: 'inline'}}>
                    <Route path={`/user-profile-${localStorage.email}`} exact>
                        <h1>Welcome to your user profile!</h1>
                    </Route>
                    <Route path={`/user-profile-${localStorage.email}/conference`}>
                        <ConferenceCard/>
                        <ConferenceCard/>
                        <ConferenceCard/>
                        <ConferenceCard/>
                        <ConferenceCard/>
                    </Route>
                    <Route path={`/user-profile-${localStorage.email}/team`}>
                        <ConferenceCard/>
                        <ConferenceCard/>
                    </Route>
                </Sidebar>
            </SessionContextProvider>
        </>
    )
}

export default UserMainPage