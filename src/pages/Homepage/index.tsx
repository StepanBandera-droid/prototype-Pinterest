import Card from "../../components/Card/index.tsx";
import type { IImageData } from "../../domains/image";

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
