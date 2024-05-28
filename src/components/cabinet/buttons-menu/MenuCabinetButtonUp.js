import React, {useState} from "react";
import "./MenuCabinetButtonUp.css"
import {Profile} from "../profile/Profile";
import CustomButton from "../../../common/button/Button";
import {Col, Row} from "react-bootstrap";
import {PrizesContainer} from "../../../containers/prizes-container/PrizesContainer";
import {Checks} from "../cheks/Checks";
import "./MenuCabinetButtonUpMedia.css"

export const MenuCabinetButtonUp = () => {
    const [currentPage, setCurrentPage] = useState('personalData');
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div>
            <div className="cabinet-menu-button">
                <div className="cabinet-button">
                    <CustomButton size="dg" color="border"
                                  textColor="white" text={"Персональные данные"}
                                  onClick={() => handlePageChange('personalData')}/>
                </div>
                <div className="cabinet-button">
                    <CustomButton size="dg" color="border" textColor="white" text={"Чеки"}
                                  onClick={() => handlePageChange('checks')}
                    />
                </div>
                <div className="cabinet-button">
                    <CustomButton size="dg" color="border" textColor="white" text={"Призы"}
                                  onClick={() => handlePageChange('prizes')}
                    />
                </div>
            </div>
            <div className="data-cabinet">
                {currentPage === 'personalData' && <Profile/>}
                {currentPage === 'checks' && <Checks/>}
                {currentPage === 'prizes' && <PrizesContainer/>}
            </div>
        </div>
    )

}