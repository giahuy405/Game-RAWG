import axios from "axios";

export const https = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: '6025283974c041c580f2ab14ff23ad52'
    }
})