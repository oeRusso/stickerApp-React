import type { FC } from 'react';
import { Sticker } from '../../mock-data/stickers.mock';
interface Props{
    stickers: Sticker[];
}

export const StickerList: FC<Props> = ({stickers}) => {
  return (
    <div className="stickers-container">
      {stickers.map((sticker) => (
        <div key={sticker.id} className="sticker-card">
          <img src={sticker.url} alt={sticker.title} />
          <h3>{sticker.title}</h3>
          <p>
            {sticker.width}x{sticker.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};
