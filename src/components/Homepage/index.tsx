import type { ReactElement } from "react";
import photo from "../../assets/data/photos.json?raw";

interface IImageTemplate {
  id: number;
  src: string;
  alt: string;
}
const Hompage = (): ReactElement => {
  const images: IImageTemplate[] = JSON.parse(photo);

  // const images = [
  //   { id: 1, src: "./src/assets/images/image1.jpg", alt: "Image 1" },
  //   { id: 2, src: "./src/assets/images/image2.jpg", alt: "Image 2" },
  //   { id: 3, src: "./src/assets/images/image3.jpg", alt: "Image 3" },
  //   { id: 4, src: "./src/assets/images/image4.jpg", alt: "Image 4" },
  //   { id: 5, src: "./src/assets/images/image5.jpg", alt: "Image 5" },
  //   { id: 6, src: "./src/assets/images/image6.jpg", alt: "Image 6" },
  //   { id: 7, src: "./src/assets/images/image7.jpg", alt: "Image 7" },
  //   { id: 8, src: "./src/assets/images/image8.jpg", alt: "Image 8" },
  //   { id: 9, src: "./src/assets/images/image9.jpg", alt: "Image 9" },
  //   { id: 10, src: "./src/assets/images/image10.jpg", alt: "Image 10" },
  //   { id: 11, src: "./src/assets/images/image11.jpg", alt: "Image 11" },
  //   { id: 12, src: "./src/assets/images/image12.jpg", alt: "Image 12" },
  //   { id: 13, src: "./src/assets/images/image13.jpg", alt: "Image 13" },
  //   { id: 14, src: "./src/assets/images/image14.jpg", alt: "Image 14" },
  //   { id: 15, src: "./src/assets/images/image15.jpg", alt: "Image 15" },
  //   { id: 16, src: "./src/assets/images/image16.jpg", alt: "Image 16" },
  //   { id: 17, src: "./src/assets/images/image17.jpg", alt: "Image 17" },
  //   { id: 18, src: "./src/assets/images/image18.jpg", alt: "Image 18" },
  // ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default Hompage;
