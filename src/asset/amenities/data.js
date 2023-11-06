import bed from "../svg/bed.svg";
import Cleaning from "./svg/cleaning.svg";
import hair from "./svg/hair.svg";
import hanger from "./svg/cleaning.svg";
import iron from "./svg/iron.svg";
import lake from "./svg/lake.svg";
import Shampoo from "./svg/shampoo.svg";
import soap from "./svg/soap.svg";
import washing from "./svg/washinmachine.svg";
export const data = [
  {
    title: "Scenic views",
    items: [
      { img: Cleaning, desc: "Garden view" },
      { img: lake, desc: "River view" },
    ],
  },
  {
    title: "Bathroom",
    items: [
      { img: soap, desc: "Bath" },
      { img: hair, desc: "Cleaning products" },
      { img: Shampoo, desc: "Shampoo" },
      { img: soap, desc: "Body soap" },
      { img: bed, desc: "Hot water" },
    ],
  },
  {
    title: "Bedroom and laundry",
    items: [
      { img: washing, desc: "Washing machine" },
      { img: soap, desc: "Essentials" },
      { img: hanger, desc: "Hangers" },
      { img: bed, desc: "Bed linen" },
      { img: bed, desc: "Extra pillows and blankets" },
      { img: iron, desc: "Clothes storage: wardrobe" },
    ],
  },
  {
    title: "Entertainment",
    items: [{ img: bed, desc: "Books and reading material" }],
  },
  {
    title: "Family",
    items: [
      { img: bed, desc: "Cot" },
      { img: soap, desc: "Children’s books and toys" },
      { img: lake, desc: "Window guards" },
    ],
  },
  {
    title: "Heating and cooling",
    items: [
      { img: iron, desc: "Ceiling fan" },
      { img: bed, desc: "Portable fans" },
    ],
  },
  {
    title: "Home safety",
    items: [
      { img: bed, desc: "Security cameras on property" },
      { img: soap, desc: "First aid kit" },
    ],
  },
  {
    title: "Internet and office",
    items: [
      { img: bed, desc: "Dedicated workspace" },
      { img: Cleaning, desc: "Pocket wifi" },
    ],
  },
];
