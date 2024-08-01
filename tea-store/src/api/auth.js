import requester from "./requester";


const BASE_URL = 'http://localhost:3030/users';

export const login = (email, password) =>
    requester.post(`${BASE_URL}/login`, { email, password });

export const register = (username, email, password, tel) =>
    requester.post(`${BASE_URL}/register`, { username, email, password, tel });