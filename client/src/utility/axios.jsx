import axios from "axios";

const instance = axios.create({
    baseURL: "https://odd-cyan-mite-cuff.cyclic.app",
    withCredentials: true,
})

export default instance;