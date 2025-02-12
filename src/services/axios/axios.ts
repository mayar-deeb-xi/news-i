import axios from "axios";
import { env } from "~/environment";

export const api = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params: {
        apiKey: env.API_KEY
    },
    headers: {
        "Accept": "application/json"
    }
});

