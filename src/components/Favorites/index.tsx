import Card from "../Card";

interface IImageData {
  id: number;
  src: string;
  alt: string;
  isFavorite: boolean;
}

const Favorites: React.FC<{
  data: IImageData[];
  onToggleFavorite: (id: number) => void;
}> = ({ data, onToggleFavorite }) => {
  const favoriteImages = data.filter((image) => image.isFavorite);

  const favoritesContent =
    favoriteImages.length === 0 ? (
      <p>Избранных фотографий пока что нет</p>
    ) : (
      <div className="gallery">
        {favoriteImages.map((image) => (
          <Card
            key={image.id}
            image={image}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    );
  return (
    <div>
      <h1>Избранные фотографии:</h1>
      {favoritesContent}
    </div>
  );
};

export default Favorites;
