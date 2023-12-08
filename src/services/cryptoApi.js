import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
        'X-RapidAPI-Key': 'b83976f888msh6a7734d7a6ad385p17c140jsnd45fc6910496',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const  baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url)=>({url,headers: cryptoApiHeaders})

export const  cryptoApi = createApi({
    reducerPath:'cryptoAPi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints:(builder)=>({
        getCryptos: builder.query({
            query:()=> createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;


// const axios = require('axios');
//
// const options = {
//     method: 'GET',
//     url: ,
//     params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         timePeriod: '24h',
//         'tiers[0]': '1',
//         orderBy: 'marketCap',
//         orderDirection: 'desc',
//         limit: '50',
//         offset: '0'
//     },
//     headers: {

//     }
// };
//
// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }