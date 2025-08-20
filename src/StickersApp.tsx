import { mockStickers } from "./mock-data/stickers.mock";
import { CustomHeader } from './shared/components/CustomHeader';


export const StickersApp = () => {
  return (
    <>
      <CustomHeader/>

      <div className="search-container">
        <input type="text" placeholder="Buscar stickers" />
        <button>Buscar</button>
      </div>

      <div className="previous-searches">
          <h2>Busquedas Previas</h2>
          <ul className="previous-searches-list">
              <li>Goku</li>
              <li>Saitama</li>
              <li>Naruto</li>
              <li>Sasuke</li>
          </ul>
      </div>

      <div className="stickers-container">
          {
            mockStickers.map((sticker) => (
              <div key={sticker.id} className="sticker-card">
                <img src={sticker.url} alt={sticker.title} />
                <h3>{sticker.title}</h3>
                <p>
                  {sticker.width}x{sticker.height} (1.5mb)

                </p>
              </div>
            ))
          }
      </div>
    </>
  );
};
