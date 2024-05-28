import {apiWeb} from "../../api/Api";
import {setInfoPromo, setUserAuthenticated, setUserRecoveryPassword, setWeekIngoPromo} from "../action/action";


export const getInfoPromoUsers = () => {
    return (dispatch) => {
        apiWeb.getInfoGiftPromo().then(data => {
            dispatch(setInfoPromo(data.data))
        })
    }
}

export const registrationUser = (newUser) => dispatch => {
        return apiWeb.postRegistrationUser(newUser).then(response => {
            // dispatch(setRegistrationUser(data))
            return response
        })
}


export const getWeekInfoPromo = () => {
    return (dispatch) => {
        apiWeb.getInfoPromo().then(data => {
            dispatch(setWeekIngoPromo(data.data))
        })
    }
}

export const userAuthenticated = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await apiWeb.postUserAuthenticated(credentials);
            dispatch({ type: 'AUTH_SUCCESS', payload: response.data });
            return response;  // Return the response so we can handle it later
        } catch (error) {
            dispatch({ type: 'AUTH_FAILURE', error });
            throw error;
        }
    };
};

export const restorePassword = (data) => {
    return async (dispatch) => {
        await apiWeb.postRecoveryPassword(data).then(data => {
            dispatch(setUserRecoveryPassword(data.data))
        })
    }
};

