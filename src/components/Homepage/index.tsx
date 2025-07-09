import Card from "../Card/index.tsx";

interface IImageData {
  id: number;
  src: string;
  alt: string;
  isFavorite: boolean;
}

const Hompage: React.FC<{
  data: IImageData[];
  onToggleFavorite: (id: number) => void;
}> = ({ data, onToggleFavorite }) => {
  return (
    <div className="gallery">
      {data.map((image) => (
        <Card
          key={image.id}
          image={image}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default Hompage;
