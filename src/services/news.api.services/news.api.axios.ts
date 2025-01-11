import axios from "axios";
import { env } from "~/environment";

export const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params: {
        apiKey: env.NEWS_API_KEY
    },
    headers: {
        "Accept": "application/json"
    }
});

export const theGuardianApi = axios.create({
    baseURL: 'https://content.guardianapis.com',
    params: {
        "api-key": env.THE_GUARDIAN_API_KEY
    },
    headers: {
        "Accept": "application/json"
    }
});

export const NyTimesApi = axios.create({
    baseURL: 'https://api.nytimes.com/svc/search/v2/',
    params: {
        "api-key": env.NY_TIMES_API_KEY
    },
    headers: {
        "Accept": "application/json"
    }
});