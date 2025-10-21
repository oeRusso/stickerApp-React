import  { useState } from 'react'
import { type Sticker } from '../interfaces/sticker.interface';
import { getStickersByQuery } from '../actions/get-stickers-by-query.action';




export const useStickers = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [currentStickers, setCurrentStickers] = useState<Sticker[]>([]) //se inicializa con stickers de prueba

  const handleTermClicked = async(term : string)=>{
    const stickers = await getStickersByQuery(term)
    setCurrentStickers( stickers )
  }

  const handleSearch = async (query: string) => {

    if (query === "") return;

    const minusQuery = query.toLowerCase().trim(); 

    if(previousTerms.includes(minusQuery)) return;

    setPreviousTerms([minusQuery, ...previousTerms].slice(0, 6));

    const stickers = await getStickersByQuery(minusQuery)

    setCurrentStickers( stickers ) //se actualiza con los nuevos stickers que van llegando desde la api
  };

  
  return {
    currentStickers,
    handleTermClicked,
    handleSearch,
    getStickersByQuery,
    previousTerms,
  }
}
