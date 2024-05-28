import React from "react";
import {UserCabinetNav} from "./nav-cabinet/UserCabinetNav";
import {MenuCabinetButtonUp} from "./buttons-menu/MenuCabinetButtonUp";
import {Footer} from "../footer/Footer";
import "./UserCabinetContainer.css"
import "./UserCabinetContainerMedia.css"

export const UserCabinetContainer = () => {

    return (
        <>
            <UserCabinetNav/>
            <MenuCabinetButtonUp/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    )
}