import populartest01 from "../Images/test-image-01.avif";
import womenhealth from "../Images/womanhealthpackage.jpg";
import menhealth from "../Images/MaleHealthPackage.jpg"
import GenaralHealthPackage from "../Images/GenaralHealthPackage.jpg"
import FemaleAdvancePackage from "../Images/FemaleAdvancePackage.jpg"
import maleadvancepackage from "../Images/maleadvancepackage.jpg"
import FemaleSeniorCitizen from "../Images/FemaleSeniorCitizen.jpg"
import seniorcitizen from "../Images/seniorcitizen.jpg"
import Temple from "../Images/temple.jpg"

export const healthPackagesArray = [
    {
      id: "01",
      productName: "Seva",
      type: "package",
      includedTests: [
        {
          categoryName: "Pooja",
          tests: ["01", "02"],
        },
        {
          categoryName: "Seva",
          tests: ["03", "04", "05"],
        },
        // ... more categories can be added similarly
      ],
      imgUrl: Temple,
      category: "Basic",
      price: 1199.0,
      discount: 30,
      shortDesc: "Sample Type: Blood",
      description:
        "Pooja and Sevas in Package",
      reviews: [
        {
          rating: 4.7,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.5,
    },

          
  ]

  