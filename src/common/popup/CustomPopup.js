import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Form } from 'react-bootstrap';
import { IoCloseOutline } from 'react-icons/io5';
import {registrationUser, userAuthenticated} from "../../redux/function/function-service";
import CustomButton from "../button/Button";
// import { registrationUser, uploadCheck, loginUser } from './actions';
import "./CustomPopup.css"
import Card from 'react-bootstrap/Card';

export const CustomPopup = ({ open, onClose, formType}) => {
    const [formData, setFormData] = useState({
        first_name: '',
        family_name: '',
        email: '',
        phone: '',
        password: '',
        file: null,
        checkNumber: '',
        date: '',
        amount: '',
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const handleSubmit = () => {
        if (formType === 'registration') {
            dispatch(registrationUser(formData));
        } else if (formType === 'authorization') {
            dispatch(userAuthenticated(formData));
        } else if (formType === 'uploadCheck') {
            const data = new FormData();
            data.append('file', formData.file);
            data.append('checkNumber', formData.checkNumber);
            data.append('date', formData.date);
            data.append('amount', formData.amount);
            // dispatch(uploadCheck(data));
        }
    };

    const renderFormFields = () => {
        if (formType === 'registration') {
            return (
                <Card>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">Имя</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="text"
                            placeholder="Введите имя"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">Фамилия</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="text"
                            placeholder="Введите фамилию"
                            name="family_name"
                            value={formData.family_name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">Телефон</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="text"
                            placeholder="+7 (___)___-___-__-__"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">E-mail</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="text"
                            placeholder="Введите e-mail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Согласие на обработку персональных данных"
                            className="form-check-orange"
                        />
                    </Form.Group>
                </Card>
            );
        } else if (formType === 'authorization') {
            return (
                <>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">E-mail</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="text"
                            placeholder="Введите e-mail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">Пароль</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="password"
                            placeholder="Введите пароль"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </>
            );
        } else if (formType === 'uploadCheck') {
            return (
                <>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">Файл чека</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="file"
                            onChange={handleFileChange}
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">Номер чека</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="text"
                            placeholder="Введите номер чека"
                            name="checkNumber"
                            value={formData.checkNumber}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">Дата</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label-custom">Сумма</Form.Label>
                        <Form.Control
                            className="form-control"
                            size="lg"
                            type="text"
                            placeholder="Введите сумму"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </>
            );
        }
    };

    return (

        <Modal className="modal-container" show={open} onHide={onClose} centered>
            <Modal.Header>
                <Modal.Title className="modal-title">
                    {formType === 'registration' && 'Регистрация'}
                    {formType === 'authorization' && 'Авторизация'}
                    {formType === 'uploadCheck' && 'Загрузить Чек'}
                </Modal.Title>
                <IoCloseOutline size={24} onClick={onClose} className="close-button" />
            </Modal.Header>
            <Modal.Body>
                <Form className="form-container">
                    {renderFormFields()}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <CustomButton
                    text={formType === 'registration' ? 'РЕГИСТРАЦИЯ' : formType === 'authorization' ? 'ВОЙТИ' : 'ОТПРАВИТЬ'}
                    color="green"
                    textColor="white"
                    size="lr"
                    onClick={handleSubmit}
                />
            </Modal.Footer>
        </Modal>
    );
};

