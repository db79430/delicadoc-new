import {
    SET_AUTHENTICATED_USER,
    SET_INFO_PROMO,
    SET_RECOVERY_PASSWORD,
    SET_REGISTRATION_USER,
    SET_WEEK_INFO_PROMO
} from "../constant/constant";

export const setInfoPromo = promoUsers => ({
    type: SET_INFO_PROMO,
    promoUsers
});

export const setRegistrationUser = user => ({
    type: SET_REGISTRATION_USER,
    user

})

export const setUserAuthenticated = data => ({
    type: SET_AUTHENTICATED_USER,
    data

})

export const setUserRecoveryPassword = email_phone => ({
    type: SET_RECOVERY_PASSWORD,
    email_phone

})


export const setWeekIngoPromo = week_day => ({
    type: SET_WEEK_INFO_PROMO,
    week_day
})