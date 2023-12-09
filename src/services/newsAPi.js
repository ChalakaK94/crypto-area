import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'b83976f888msh6a7734d7a6ad385p17c140jsnd45fc6910496',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const  baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) =>({url,newsApiHeaders});

export const newsApi = createApi({
    reducerPath:'newsAPi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints:(builder)=>({
        getNews: builder.query({
            query:({newsCategory,count})=> createRequest(`/news/search?q${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}` )
        })
    })
})

export const {
    useGetNewsQuery
} =newsApi