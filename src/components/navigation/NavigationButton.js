import {Modal, Nav} from "react-bootstrap";
import CustomButton from "../../common/button/Button";
import React, {useState} from "react";
import {IoCloseOutline} from "react-icons/io5";
import {FiMenu} from "react-icons/fi";
import './NavigationMenu.css'
import {CustomPopup} from "../../common/popup/CustomPopup";
import {RegistrationPopup} from "../../common/registration/popup-registration";
import NestedModal from "../../common/button/Example";
import {CustomPopupNew} from "../../common/popup/Custom-Popup";

export  const NavigationButton = () => {
    const [openPopup, setOpenPopup] = useState(false);



    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleButtonClick = () => {
        setOpenPopup(true);
    };

    return (
        <>
            <div className="button-container">
                <Nav.Item className="button-word">
                    <CustomButton textColor="green" size="sm" color="primary" text={"Играть"}/>
                </Nav.Item>
                <Nav.Item className="button-word">
                        <CustomButton
                            textColor="white"
                            size="sm"
                            color="green"
                            text={"Войти"}
                            onClick={handleButtonClick}
                        />
                    <CustomPopupNew open={openPopup} onClose={handleClosePopup} formType="registration"/>
                    {/*<RegistrationPopup open={openPopup} onClose={handleClosePopup}/>*/}
                </Nav.Item>
            </div>
        </>
    )
}