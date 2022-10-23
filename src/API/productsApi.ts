import axios from 'axios';

const Api = axios.create({
    baseURL: './api.json'
})

export const apiData = {
    getData: async () => {
        let response = await Api.get('')
        return response.data
    }
}