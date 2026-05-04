import Cookies from 'js-cookie';
import { ENV } from '../config/env';
const TOKEN_KEY = ENV.ACESS_TOKEN_KEY;

export const tokenService = {
    setToken: (token: string,expires=1) => {
        Cookies.set(TOKEN_KEY, token, { expires,secure: true, sameSite: 'strict' }); 
    },
    getToken: () => {
        return Cookies.get(TOKEN_KEY) || null;
    }
,
    removeToken: () => {
        Cookies.remove(TOKEN_KEY);
    },

    hasToken: () => {
        return !!Cookies.get(TOKEN_KEY);
    }
}