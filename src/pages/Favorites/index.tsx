import Card from "../../components/Card";
import type { IImageData } from "../../domains/image";

const Favorites: React.FC<{
  data: IImageData[];
  onToggleFavorite: (id: number) => void;
}> = ({ data, onToggleFavorite }) => {
  const favoriteImages = data.filter((image) => image.isFavorite);

  if (!favoriteImages.length) {
    return <p>Избранных фотографий нет</p>;
  }
  return (
    <div>
      <h1>Избранные фотографии:</h1>
      <div className="gallery">
        {favoriteImages.map((image) => (
          <Card
            key={image.id}
            image={image}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
