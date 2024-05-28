import {Col, Form, Row, Container} from "react-bootstrap";
import React from "react";
import "./Profile.css"
import {MenuCabinetButtonDown} from "../buttons-checks-play/MenuCabinetButtonDown";

export const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-title">
                <p className="profile-date-title">Данные профиля</p>
                <div className="points">
                    <p>Начисленные баллы</p>
                    <p className="number-points">25</p>
                </div>
            </div>
            <div className="form-cabinet">
                <div>
                    <Form>
                        <Form.Group className="form-group">
                            <Form.Control
                                className="form-control"
                                size="lg"
                                type="text"
                                placeholder="Введите имя"
                                name="Имя"
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <Form>
                        <Form.Group className="form-group">
                            <Form.Control
                                className="form-control"
                                size="lg"
                                type="text"
                                placeholder="Введите имя"
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <Form>
                        <Form.Group className="form-group">
                            <Form.Control
                                className="form-control"
                                size="lg"
                                type="text"
                                placeholder="Введите имя"
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div className="form-cabinet-two">
                <div>
                    <Form>
                        <Form.Group className="form-group">
                            <Form.Control
                                className="form-control"
                                size="lg"
                                type="text"
                                placeholder="Введите имя"
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <Form>
                        <Form.Group className="form-group">
                            <Form.Control
                                className="form-control"
                                size="lg"
                                type="text"
                                placeholder="Введите имя"
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div className="update-data">
                    <a>Изменить данные</a>
                </div>
            </div>
            <div>
                <MenuCabinetButtonDown/>
            </div>
        </div>
    )
        ;
}