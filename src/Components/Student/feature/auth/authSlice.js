import { useState } from "react";
import authService from "./authService";

const user =JSON.parse(localStorage.getItem("users"));

const initialState = {
    user: user ? user : null,
    userInfo: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

const useAuth = () => {
    const [state, setState] = useState(initialState);

    const resetState = () => {
        setState((prev) => ({
            ...prev,
            isLoading: false,
            isError: false,
            isSuccess: false,
            message: "",
        }));
    };

    const register = async (userData) => {
        resetState();
        setState((prev) => ({...prev, isLoading: true}));

        try {
            const response = await authService.register(userData);
            setState((prev) => ({
                ...prev,
                isLoading: false,
                isSuccess: true,
                user: response,
            }));
        } catch (error) {
            const message = 
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

            setState((prev) => ({
                ...prev,
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: message,
                user: null,
            }));
        }
    };

    const login = async (userData) => {
        resetState();
        setState((prev) => ({ ...prev, isLoading: true }));

        try{
            const response = await authService.login(userData);
            setState((prev) => ({
              ...prev,
              isLoading: false,
              isSuccess: true,
              user: response,
            }));
        } catch (error) {
            const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

            setState((prev)=> ({
                ...prev,
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: message,
                user: null,
            }))

        }
    };

    const getUserInfo =  async () => {
        resetState();
        setState((prev) => ({ ...prev, isLoading: true }));

        try {
            await authService.getUserInfo(state.user.access);
        } catch (error) {
            const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

            setState((prev) => ({
            ...prev,
            isLoading: false,
            isError: true,
            message: message,
        }));
        }
    }

    // useEffect อื่นๆ

    return {
        state,
        register,
        login,
        getUserInfo
    };
};

export default useAuth;