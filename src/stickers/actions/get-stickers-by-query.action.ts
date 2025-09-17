import axios from "axios"
import type { GiphyResponse } from "../interfaces/giphy.response"

export const getStickersByQuery = async(query:string)=>{

    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/stickers/search',{
        params:{
            q:query,
            limit:10,
            lang:'es',
            api_key:'WqSxx1cSZMovkBcbR5UT7Z4WHjdbIhUU'

        }
    })

    console.log(response.data)

    // fetch(`https://api.giphy.com/v1/stickers/search?api_key=WqSxx1cSZMovkBcbR5UT7Z4WHjdbIhUU&q=${query}&limit=10&lang=es`)
}