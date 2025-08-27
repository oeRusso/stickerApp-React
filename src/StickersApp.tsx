import { mockStickers, Sticker } from './mock-data/stickers.mock';
import { useState } from 'react';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './stickers/components/PreviousSearches';
import { StickerList } from './stickers/components/StickerList';


export const StickersApp = () => {

  const [previousTerms, setpreviousTerms] = useState(['naruto'])

  const handleTermClicked = (term : string)=>{
    console.log({term})
  }
  return (
    <>
      <CustomHeader
        title="Buscador de Stickers"
        description="Descubre y comparte el sticker perfecto"
      />

      <SearchBar placeholder="Busca el stiker que quieras" />
      <PreviousSearches searches={previousTerms} 
      onLabelClicked={handleTermClicked}/>
      {/* pq aca se manda lo que tiene el props y dentro lo de la funcion y no al revez? */}
      {/* pq el componente hijo recibe una funcion del componente padre */}
      {/* ver que exactamente envia ese term y si eso que recibe la funcion hija es una funcion padre o generica */}
      <StickerList stickers={mockStickers} />
    </>
  );
};
