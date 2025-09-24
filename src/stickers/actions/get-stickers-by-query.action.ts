// import axios from "axios"
import { giphyApi } from "../api/giphy.api"
import type { GiphyResponse } from "../interfaces/giphy.response"
import type { Sticker } from "../interfaces/sticker.interface"

export const getStickersByQuery = async(query:string): Promise<Sticker[]>=>{

    const response = await giphyApi<GiphyResponse>('/search',{
        params:{
            q:query,
            limit:10,
            // esto ya esta configurado en giphy.api.ts
            // lang:'es',
            // api_key:import.meta.env.VITE_GIPHY_API_JEY
            // api_key:'WqSxx1cSZMovkBcbR5UT7Z4WHjdbIhUU'

        }
    })

    // console.log(response.data)

    return response.data.data.map((sticker) => (({
            id: sticker.id,
            title: sticker.title,
            url: sticker.images.original.url,
            width: Number( sticker.images.original.width,),
            height: Number(sticker.images.original.height,),

        }))
    )

    


    
}