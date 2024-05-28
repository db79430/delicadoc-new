import {
    SET_AUTHENTICATED_USER,
    SET_INFO_PROMO,
    SET_RECOVERY_PASSWORD,
    SET_REGISTRATION_USER,
    SET_WEEK_INFO_PROMO
} from "../constant/constant";


export const initialState = {
    promoUsers: [],
    user: {},
    data: {},
    week_day: [],
    email_phone: {}
}
export const infoPromoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_PROMO:
            return {
                ...state,
                promoUsers: action.promoUsers
            };
        case SET_REGISTRATION_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_AUTHENTICATED_USER:
            return {
                ...state,
                data: action.data
            }
        case SET_WEEK_INFO_PROMO:
            return {
                ...state,
                week_day: action.week_day
            }
        case SET_RECOVERY_PASSWORD:
            return {
                ...state,
                email_phone: action.email_phone
            }
        default:
            return state;

    }

}