import about1Jpg from "./assets/img/about-1.jpg";
import about2Jpg from "./assets/img/about-2.jpg";
import about3Jpg from "./assets/img/about-3.jpg";
import about4Jpg from "./assets/img/about-4.jpg";
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
import video1Mov from "./assets/img/video-1.mov";

export const videos = [video1Mov];

export const about = {
  id: "about",
  name: "About Us",
  subheading: "",
  content: [
    `Advanced Hemp has been providing drying units since 1995. We are the
  largest manufacturer in the peanut industry with over 10,000 of our
  units currently in use.`,
    `Working with someone of our experience assures
  you always receiving the best product at the best price available on
  the market. We are continually working to revolutionize and improve
  the drying and transportation industry day by day.`
  ],
  images: [about1Jpg, about2Jpg, about3Jpg, about4Jpg]
};

export const product = {
  id: "product",
  name: "The Product",
  subheading: `The Advanced Hemp Dryer is capable of drying a minimum of 2,000 plants in a 16-20 hour period. Our patented design is 53’ long, 100” wide, and has a 40% open drying floor. This creates an environment where conditioned air, NOT HOT AIR, can dry the hemp in a uniform and efficient manor. 
  `,
  images: [productPreview1Jpg, productPreview2Jpg, productPreview3Jpg]
};

export const howItWorks = {
  id: "howItWorks",
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
};

export const benefits = {
  id: "benefits",
  name: "Our Benefits",
  subheading: "",
  items: [
    {
      icon: benefits1Svg,
      name: "Scalability",
      description: `The Advanced Hemp Dryer is designed in a way to be both cost effective
      for smaller farmers, but also designed to be scalable for larger operations.`
    },
    {
      icon: benefits2Svg,
      name: "Transportability",
      description: `Unlike industrial dryers, the Advanced Hemp Dryer can be transported with ease. Simply hook to the mobile unit and take it to the field where it can be easily loaded. Once loaded, return the unit back to your facility for drying. If you need to move the entire unit from one farm to another, simply load the dryer in the back of the mobile unit and take it to another farming operation down the road.
      `
    },
    {
      icon: benefits3Svg,
      name: "High Quality Hemp",
      description: `Have full control over the drying process. Dictate what Set the thermostat at your desired temperature to achieve the end product that you prefer for your operation/processor. Our design also allows for even drying across all hemp that is loaded in the Advanced Hemp Dryer.`
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
};
