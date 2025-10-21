import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './stickers/components/PreviousSearches';
import { StickerList } from './stickers/components/StickerList';
import { useStickers } from './stickers/hooks/useStickers';



export const StickersApp = () => {

  const {currentStickers,handleTermClicked,handleSearch,previousTerms} = useStickers();
  
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

// TODO: FIJARSE ACA PQ NO BUSCA, LUEGO VOLVER A LAS TAREAS DE NUEVO DEL CAPITULO HOOKS PERSONALIZADOS