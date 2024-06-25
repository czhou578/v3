import BCollege1 from "../public/images/BC1.png";
import BCollege2 from "../public/images/BC2.png";
import ElpisUI1 from "../public/images/ElpisUI1.png";
import ElpisUI2 from "../public/images/ElpisUI2.png";
import FoodApp1 from "../public/images/FoodApp1.png";
import FoodApp2 from "../public/images/FoodApp2.png";
import UIDesign1 from "../public/images/UIDesign1.png";
import UIDesign2 from "../public/images/UIDesign2.png";
import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";

const images = [
  { src: BCollege1, alt: "BCollege Design 1" },
  { src: BCollege2, alt: "BCollege Design 2" },
  { src: ElpisUI1, alt: "Elpis UI Design 1" },
  { src: ElpisUI2, alt: "Elpis UI Design 2" },
  { src: FoodApp1, alt: "Food App Design 1" },
  { src: FoodApp2, alt: "Food App Design 2" },
  { src: UIDesign1, alt: "UI Design 1" },
  { src: UIDesign2, alt: "UI Design 2" },
];

export default function Designs() {
  const [enlargedImage, setEnlargedImage] = useState<StaticImageData | null>(
    null
  );

  const handleViewLarger = (image: StaticImageData) => {
    setEnlargedImage(image);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-lg transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={() => handleViewLarger(image.src)}
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
              >
                View Larger
              </button>
            </div>
          </div>
        ))}
      </div>

      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-w-screen-2xl">
            <Image
              src={enlargedImage}
              alt="Enlarged image"
              layout="responsive"
              width={1000}
              height={600}
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
