import { mockStickers } from "./mock-data/stickers.mock";
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './stickers/components/PreviousSearches';


export const StickersApp = () => {
  return (
    <>
      <CustomHeader
        title="Buscador de Stickers"
        description="Descubre y comparte el sticker perfecto"
      />

      <SearchBar placeholder="Busca el stiker que quieras" />
      <PreviousSearches />

      <div className="stickers-container">
        {mockStickers.map((sticker) => (
          <div key={sticker.id} className="sticker-card">
            <img src={sticker.url} alt={sticker.title} />
            <h3>{sticker.title}</h3>
            <p>
              {sticker.width}x{sticker.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
