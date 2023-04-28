import BCollege1 from "../public/images/BC1.png";
import BCollege2 from "../public/images/BC2.png";
import ElpisUI1 from "../public/images/ElpisUI1.png";
import ElpisUI2 from "../public/images/ElpisUI2.png";
import FoodApp1 from "../public/images/FoodApp1.png";
import FoodApp2 from "../public/images/FoodApp2.png";
import UIDesign1 from "../public/images/UIDesign1.png";
import UIDesign2 from "../public/images/UIDesign2.png";
import Image from "next/image";

export default function Designs() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:max-md:grid-cols-1 gap-4">
        <div>
          <Image
            src={BCollege1}
            alt="Picture of BC1"
            className="h-auto max-w-lg rounded-lg"
          />
        </div>
        <div>
          <Image
            src={BCollege2}
            alt="Picture of BC1"
            className="h-auto max-w-lg rounded-lg"
          />
        </div>
        <div>
          <Image
            src={ElpisUI1}
            alt="Picture of BC1"
            className="h-auto max-w-lg rounded-lg"
          />
        </div>
        <div>
          <Image
            src={ElpisUI2}
            alt="Picture of BC1"
            className="h-auto max-w-lg rounded-lg"
          />
        </div>
        <div>
          <Image
            src={FoodApp1}
            alt="Picture of BC1"
            className="h-auto max-w-lg rounded-lg"
          />
        </div>
        <div>
          <Image
            src={FoodApp2}
            alt="Picture of BC1"
            className="h-auto max-w-lg rounded-lg"
          />
        </div>
        <div>
          <Image
            src={UIDesign1}
            alt="Picture of BC1"
            className="h-auto max-w-lg rounded-lg"
          />
        </div>
        <div>
          <Image
            src={UIDesign2}
            alt="Picture of BC1"
            className="h-auto max-w-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
