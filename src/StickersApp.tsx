import { type Sticker } from './mock-data/stickers.mock';
import { useState } from 'react';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './stickers/components/PreviousSearches';
import { StickerList } from './stickers/components/StickerList';
import { getStickersByQuery } from './stickers/actions/get-stickers-by-query.action';


export const StickersApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [currentStickers, setCurrentStickers] = useState<Sticker[]>([]) //se inicializa con stickers de prueba

  const handleTermClicked = (term : string)=>{
    console.log({term})
  }

  const handleSearch = async (query: string) => {

    if (query === "") return;

    const minusQuery = query.toLowerCase().trim(); 

    if(previousTerms.includes(minusQuery)) return;

    setPreviousTerms([minusQuery, ...previousTerms].slice(0, 6));

    const stickers = await getStickersByQuery(minusQuery)

    setCurrentStickers( stickers ) //se actualiza con los nuevos stickers que van llegando desde la api
  };

  
  
  return (
    <>
      <CustomHeader
        title="Buscador de Stickers"
        description="Descubre y comparte el sticker perfecto"
      />

      <SearchBar 
      placeholder="Busca el stiker que quieras"
      onQuery = {handleSearch} 
      />
      <PreviousSearches searches={previousTerms} 
      onLabelClicked={handleTermClicked}/>
      
      <StickerList stickers={currentStickers} /> {/* se pasan los valores actualizados */}
      {/* TODO: SEGUIR PULIENDO SOBRE EL MOCK DE LOS STICKERS */}
      
    </>
  );
};

// TODO: TAREA (LEER EN LA ULTIMA PARTE DEL VIDEO)