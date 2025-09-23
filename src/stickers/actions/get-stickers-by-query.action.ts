import axios from "axios"
import type { GiphyResponse } from "../interfaces/giphy.response"
import type { Sticker } from "../interfaces/sticker.interface"

export const getStickersByQuery = async(query:string): Promise<Sticker[]>=>{

    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/stickers/search',{
        params:{
            q:query,
            limit:10,
            lang:'es',
            api_key:'WqSxx1cSZMovkBcbR5UT7Z4WHjdbIhUU'

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