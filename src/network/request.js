import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 2000
    })
    instance.interceptors.request.use(res => {
        return res
    }, err => {
        console.log(err)
        return err
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}