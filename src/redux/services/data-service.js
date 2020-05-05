import axios from "axios"

export { getDataServices, getDataProviders }


const getDataServices = () => {
    const serviceAPIURL = "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services";

    return axios.get(`${serviceAPIURL}`).then(
        res => {
            return res.data;
        })
        .catch(
            error => {
                return Promise.reject(error)
            })
}

const getDataProviders = () => {
    const providerAPIURL = "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10";
    return axios.get(`${providerAPIURL}`).then(
        res => {
            return res.data;
        })
        .catch(
            error => {
                return Promise.reject(error)
            })
};