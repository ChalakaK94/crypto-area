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
            query:(count)=> createRequest(`/coins?limit=${count}` )
        }),
        getCryptosDetails: builder.query({
            query:(coinId)=> createRequest(`/coin/Qwsogvtv82FCd` )
        })
    })
})

export const {useGetCryptoDetailsQuery,useGetCryptosQuery } = cryptoApi;

