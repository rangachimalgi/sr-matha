import populartest01 from "../Images/test-image-01.avif";

export const healthPackagesArray = [
    {
      id: "01",
      productName: "BASIC HEALTH PACKAGE (66 Tests)",
      includedTests: [
        {
          categoryName: "Thyroid Profile",
          tests: ["01", "02"],
        },
        {
          categoryName: "Lipid Profile",
          tests: ["03", "04", "05"],
        },
        // ... more categories can be added similarly
      ],
      imgUrl: populartest01,
      category: "Basic",
      price: 1199.0,
      discount: 30,
      shortDesc: "Sample Type: Blood",
      description:
        "Full body checkup is an essential health test that can detect hidden diseases. Reliable pathology labs like Thyrocare offer a perfect solution to this challenge by providing comprehensive health packages with blood test at home services. These preventive health checkups include specific tests recommended by certified doctors and expert pathologists. It is a great way to stay on top of your health and take proactive measures to prevent any potential health issues.",
      reviews: [
        {
          rating: 4.7,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.5,
    },
    {
        id: "02",
        productName: "BASIC HEALTH PACKAGE (66 Tests)",
        includedTests: [
          {
            categoryName: "Thyroid Profile",
            tests: ["01", "02"],
          },
          {
            categoryName: "Lipid Profile",
            tests: ["03", "04", "05"],
          },
          // ... more categories can be added similarly
        ],
        imgUrl: populartest01,
        category: "Basic",
        price: 1199.0,
        discount: 30,
        shortDesc: "Sample Type: Blood",
        description:
          "Full body checkup is an essential health test that can detect hidden diseases. Reliable pathology labs like Thyrocare offer a perfect solution to this challenge by providing comprehensive health packages with blood test at home services. These preventive health checkups include specific tests recommended by certified doctors and expert pathologists. It is a great way to stay on top of your health and take proactive measures to prevent any potential health issues.",
        reviews: [
          {
            rating: 4.7,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.5,
      },
  ]

  