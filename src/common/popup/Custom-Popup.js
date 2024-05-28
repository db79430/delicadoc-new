import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Modal, Box, Typography, TextField, Button, Checkbox, FormControlLabel, Card, CardContent} from '@mui/material';
import {IoCloseOutline} from 'react-icons/io5';
import {registrationUser, restorePassword, userAuthenticated} from '../../redux/function/function-service';
import CustomButton from '../button/Button';
import {useNavigate} from 'react-router-dom';

import "./CustomPopup.css"
import {
    CloseButton, FormContainer,
    FormGroup, StyledCheck, StyledContainer, StyledFormControlLabel,
    StyledFormLabel,
    StyledModal,
    StyledTextField,
    StyledTitle,
    StyleModalDialog
} from "./StyledPopup";


export const CustomPopupNew = ({open, onClose, formType}) => {
        const [openPopupAuth, setOpenPopupAuth] = useState(false)
        const [openPopupRecovery, setOpenPopupRecovery] = useState(false)
        const [formData, setFormData] = useState({
            first_name: '',
            family_name: '',
            email: '',
            email_phone: '',
            phone: '',
            password: '',
        });

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleOpenPopupAuth = () => {
            setOpenPopupAuth(true)
        }

        const handleClosePopupAuth = () => {
            setOpenPopupAuth(false)
        }

        const handleOpenPopupRecovery = () => {
            setOpenPopupRecovery(true)
        }

        const handleClosePopupRecovery = () => {
            setOpenPopupRecovery(false)
        }


        // const handleFileChange = (e) => {
        //     setFormData({
        //         ...formData,
        //         file: e.target.files[0],
        //     });
        // };

        const handleSubmit = () => {
            if (formType === 'registration') {
                dispatch(registrationUser(formData));
            } else if (formType === 'authorization') {
                dispatch(userAuthenticated({email: formData.email,
                    password: formData.password})).then(response => {
                    if (response.status === 200) {
                        navigate('/cabinet')
                        setOpenPopupAuth(false)
                    }
                }).catch(error => {

                });
            } else if (formType === 'recovery') {
                (dispatch(restorePassword({email_phone: formData.email_phone})))
            }
        };

        const renderFormFields = () => {
            if (formType === 'registration') {
                return (
                    <div>
                        <div>
                            <FormGroup>
                                <StyledFormLabel>Имя</StyledFormLabel>
                                <StyledTextField
                                    placeholder="Введите имя"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    title="Имя"
                                />
                            </FormGroup>
                            <FormGroup>
                                <StyledFormLabel>Фамилия</StyledFormLabel>
                                <StyledTextField
                                    placeholder="Введите фамилию"
                                    name="family_name"
                                    value={formData.family_name}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <StyledFormLabel>Телефон</StyledFormLabel>
                                <StyledTextField
                                    placeholder="+7 (___)___-___-__-__"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <StyledFormLabel>E-mail</StyledFormLabel>
                                <StyledTextField
                                    placeholder="Введите e-mail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <StyledFormControlLabel
                                control={<StyledCheck/>}
                                label="Согласие на обработку персональных данных"
                            />
                        </div>
                    </div>
                );
            } else if (formType === 'authorization') {
                return (
                    <>
                        <FormGroup>
                            <StyledFormLabel>E-mail</StyledFormLabel>
                            <StyledTextField
                                placeholder="Введите e-mail"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <StyledFormLabel>Пароль</StyledFormLabel>
                            <StyledTextField
                                placeholder="Введите пароль"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </>
                );
            } else if (formType === 'recovery') {
                return (
                    <>
                        <p className="text-email-recovery">Введите почту, к которой был привязан аккаунт</p>
                        <FormGroup>
                            <StyledFormLabel>E-mail</StyledFormLabel>
                            <StyledTextField
                                placeholder="Введите e-mail"
                                name="email_phone"
                                value={formData.email_phone}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </>
                );
            }
        };

        const modalStyles = {
            registration: {
                height: '700px',
            },
            authorization: {
                height: '500px',
            },
            recovery: {
                height: '400px',
            },
        };
        return (
            <StyleModalDialog open={open} onClose={onClose}>
                <StyledModal sx={modalStyles[formType]}>
                    <Box>
                        <StyledTitle className="modal-title">
                            {formType === 'registration' && 'Регистрация'}
                            {formType === 'authorization' && 'Авторизация'}
                            {formType === 'recovery' && 'Восстановление пароля'}
                        </StyledTitle>
                        <CloseButton onClick={onClose}/>
                    </Box>
                    <StyledContainer>
                        <FormContainer>
                            {renderFormFields()}
                        </FormContainer>
                    </StyledContainer>
                    <Box display="flex" justifyContent="center" padding={2} flexDirection="column">
                        <CustomButton
                            text={formType === 'registration' ? 'РЕГИСТРАЦИЯ' : formType === 'authorization' ? 'ВОЙТИ' : 'ОТПРАВИТЬ'}
                            color="green"
                            textColor="white"
                            size="lr"
                            onClick={handleSubmit}
                        />
                    </Box>
                    {!openPopupAuth && formType === "registration" &&
                        <div className="account-container">
                            <p className="text-account">Уже есть аккаунт?
                                {
                                    formType !== 'authorization' &&
                                    <a onClick={handleOpenPopupAuth} className="auth-text">ВОЙТИ</a>
                                }
                            </p>
                        </div>
                    }
                    {
                        openPopupAuth && <CustomPopupNew
                            open={openPopupAuth}
                            onClose={handleClosePopupAuth}
                            formType="authorization"
                        />
                    }
                    {
                        formType === "authorization" &&
                        <div className="account-container">
                            <a onClick={handleOpenPopupRecovery} className="text-account">
                                Забыли пароль?
                            </a>
                        </div>
                    }
                    {
                        openPopupRecovery && <CustomPopupNew
                            open={openPopupRecovery}
                            onClose={handleClosePopupRecovery}
                            formType="recovery"
                        />
                    }
                </StyledModal>
            </StyleModalDialog>
        )
            ;
    }
;

