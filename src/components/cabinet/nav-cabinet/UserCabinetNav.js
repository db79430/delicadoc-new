import React, {useState} from "react";
import {NavigationMenu} from "../../navigation/NavigationMenu";
import {Nav} from "react-bootstrap";
import CustomButton from "../../../common/button/Button";
import {RegistrationPopup} from "../../../common/registration/popup-registration";
import {FiMenu} from "react-icons/fi";
import "./UserCabinetNav.css"

export const UserCabinetNav = () => {
    const [showMenuPopup, setShowMenuPopup] = useState(false);
    const handleMenuClick = () => {
        setShowMenuPopup(true);
    };
    return (
        <div className="nav-container-cabinet">
            <NavigationMenu/>
            <div className="button-container-cabinet">
                <Nav.Item className="button-word">
                    <CustomButton textColor="white"
                                  size="sm"
                                  color="green"
                                  text={"Играть"}/>
                </Nav.Item>
                <Nav.Item className="button-word">
                    <CustomButton
                        textColor="white"
                        size="sm"
                        color="green"
                        text={"Выйти"}
                    />
                </Nav.Item>
                <Nav className="burger-menu-container">
                    <FiMenu onClick={handleMenuClick}
                            className="icon-burger-menu"
                            size={50}
                    />
                </Nav>
            </div>
        </div>
    )


}