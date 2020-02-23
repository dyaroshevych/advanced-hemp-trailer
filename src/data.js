import productPreview1Jpg from "./assets/img/product-preview-1.jpg";
import productPreview2Jpg from "./assets/img/product-preview-2.jpg";
import productPreview3Jpg from "./assets/img/product-preview-3.jpg";
import howItWorks1Svg from "./assets/img/how-it-works-1.svg";
import howItWorks2Svg from "./assets/img/how-it-works-2.svg";
import howItWorks3Svg from "./assets/img/how-it-works-3.svg";
import benefits1Svg from "./assets/img/benefits-1.svg";
import benefits2Svg from "./assets/img/benefits-2.svg";
import benefits3Svg from "./assets/img/benefits-3.svg";
import benefits4Svg from "./assets/img/benefits-4.svg";

export default {
  product: {
    name: "The Product",
    subheading: `The Advanced Hemp Dryer is capable of drying 12,000 pounds of
    biomass per day. Our patented design is 53’ and has a 40% open
    drying floor which allows for the correct moisture levels to
    assure the best possible hemp.`,
    images: [productPreview1Jpg, productPreview2Jpg, productPreview3Jpg]
  },
  howItWorks: {
    name: "How It Works",
    subheading: `The Advanced Hemp Dryer offers the highest technology for drying, all while being easy
    to use. The drying process is easy to teach to anyone!`,
    process: [
      {
        icon: howItWorks1Svg,
        name: "Load",
        description: `After harvesting all of your hemp, load the Advanced Hemp Dryer up to four feet
        high. Our design allows for easy loading and accessibility.`
      },
      {
        icon: howItWorks2Svg,
        name: "Dry",
        description: `Once you have loaded all your hemp, attach the dryer with the specific temperature
        for your desired terpene levels. Let the dryer run during the day or over the night for
        your desired results.`
      },
      {
        icon: howItWorks3Svg,
        name: "Repeat",
        description: `Once your hemp is dried after a 12-16 hours, unload the Advanced Hemp
        Dryer and repeat the process.`
      }
    ]
  },
  benefits: {
    name: "Our Benefits",
    subheading: "",
    items: [
      {
        icon: benefits1Svg,
        name: "Scalability",
        description: `The Advanced Hemp Dryer is designed in a way to be both cheap enough
        for smaller farmers, but also designed to be scalable for larger operations.`
      },
      {
        icon: benefits2Svg,
        name: "Transportability",
        description: `Unlike industrial dryers, the Advanced Hemp Dryer can be transported
        with ease. If you need to move your dryer from your farm to an operation to a
        processing plant, look no further.`
      },
      {
        icon: benefits3Svg,
        name: "High Quality Hemp",
        description: `Have full control over the drying process. Dictate what temperature
        you dry your hemp at to get the desired terpene levels you want. Our design allows for
        even drying across all hemp that is loaded in the Advanced Hemp Dryer.`
      },
      {
        icon: benefits4Svg,
        name: "Durability",
        description: `The Advanced Hemp Dryer have an average shelf life of 15 years. This is the
        highest amongst all competitors. With minimal issues and maintenance cost, lose the
        headache of using other alternatives. Having been in the drying industry since 1995, we
        understand how to create a high-quality product that lasts!`
      }
    ]
  }
};
