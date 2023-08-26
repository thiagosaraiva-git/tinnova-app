import axios from "axios";

export const baseURL = 'https://private-9d65b3-tinnova.apiary-mock.com/users';

export const api = axios.create({
    baseURL: baseURL,
});