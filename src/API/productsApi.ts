import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
})

export const apiData = {
    getData: async () => {
        let response = await Api.get('')
        return response.data
    }
}