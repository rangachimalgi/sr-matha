import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

import populartest01 from "../Images/test-image-01.avif";
import slider01 from "../Images/slide-show-01.png";
import slider02 from "../Images/slide-show-02.jpg";
import bloodTest01 from "../Images/blood-test-01.avif";

export const SliderData = [
  {
    id: 1,
    title: "Book Your Test Now",
    desc: "Book Your Test Now near by to your place .",
    cover: slider01,
  },
  {
    id: 2,
    title: "We serve all around the country",
    desc: "Book your Test now.",
    cover: slider02,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="globe-outline"></ion-icon>,
    title: "Book Your Test Online",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="home-outline"></ion-icon>,
    title: "Home Sample Pick Up",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "We Process in NABL AND ISO Certified Labs",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="newspaper-outline"></ion-icon>,
    title: "View Your Reports Online",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
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
    category: "sofa",
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
    productName: "FEMALE ADVANCED HEALTH PACKAGE (108 Tests)",
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
    category: "sofa",
    price: 253,
    discount: 20,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
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
    category: "sofa",
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
    category: "sofa",
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
    category: "sofa",
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
    category: "sofa",
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
];

export const products = [
  {
    id: "01",
    productName: "Fasting Blood Sugar (FBS)",
    imgUrl: bloodTest01,
    category: "Blood",
    price: 149,
    shortDesc:
      "Fasting Blood Sugar test is generally run to measure the amount of blood sugar after minimum 8 long hours of complete fasting.",
    description:
      "Fasting Blood Sugar test is generally run to measure the amount of blood sugar after minimum 8 long hours of complete fasting. After a whole night without any kind of food, this test is run to properly monitor the chances of diabetes in individuals. This test is the fastest and simplest test to detect the probabilities of diabetes. Diseases like Diabetes do not generate any symptoms initially. There lies the importance of this test. This is why this test is recommended for everyone who are above 45 age. You must fast for a whole night before the test or at least for 8 to 12 hours. Following the instructions of your doctor is also necessary even if you are on medication. If your Fasting Blood Sugar level is lower than normal, then it may cause a disease named hypoglycemia.",
  },

  {
    id: "02",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "blood",
    price: 375,
    shortDesc:
      "HbA1c Test is used to quickly measure the amount of blood sugar that remains attached with Haemoglobin.",
    description:
      "HbA1c Test is used to quickly measure the amount of blood sugar that remains attached with Haemoglobin. Knowingly, the combination of Haemoglobin and glucose is known as HbA1c (glycated or glycosylated haemoglobin). Generally, this test is run to detect the possibilities of diabetes and prediabetes in adults. Everyone should go for this test for at least once in three months because the lifespan of red blood cells is usually 3 months. Your habit of smoking may affect your test results passively. Tests like Glycosylated HB Blood, Diabetes test, A1c Test, H1C test, A1c Haemoglobin test, Glycosylated HB are included in an HbA1c test. No hardcore preparations are needed to go for this test. You just need to follow the instructions given by your doctor before the test. If the value remains greater than 5.7 in your test results, then its normal. HBA1C Test Price is Rs. 375.",
  },

  {
    id: "03",
    productName: "THYROID STIMULATING HORMONE (TSH)",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 173,
    shortDesc:
      "This test is merely done to measure the level of Thyroid Stimulating Hormone quickly.",
    description:
      "This test is merely done to measure the level of Thyroid Stimulating Hormone quickly. This is one specific kind of pituitary hormone that stimulates the thyroid gland. This test is also necessary for everyone as thyroid disorders are also known for turning incurable if not detected or treated on time. The prime objective of this test is to determine that the thyroid gland is hyperactive or underactive. If you are having any kind of thyroid disorders, then your doctor may suggest you to go for a test. If the thyroid gland starts to produce huge amount of Thyroid Stimulating Hormone, then a specific health condition starts to occur that is known as hypothyroidism. No specific preparations are required for this test. You just need to follow the instructions of your doctor in a proper manner. The thyroid gland functionality remains different in every person, which impacts the test results. Besides, the test results may also vary depending upon age, gender or health condition.",
  },
  {
    id: "26",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 253,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },
  {
    id: "04",
    productName: "Fasting Blood Sugar (FBS)",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 163,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "05",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 163,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "06",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 163,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },
  {
    id: "07",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "chair",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "27",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 173,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "08",
    productName: "THYROID STIMULATING HORMONE (TSH)",
    imgUrl: bloodTest01,
    category: "chair",
    price: 89,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "09",
    productName: "Fasting Blood Sugar (FBS)",
    imgUrl: bloodTest01,
    category: "chair",
    price: 112,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "10",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },
  {
    id: "25",
    productName: "THYROID STIMULATING HORMONE (TSH)",
    imgUrl: bloodTest01,
    category: "chair",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },
  {
    id: "11",
    productName: "Fasting Blood Sugar (FBS)",
    imgUrl: bloodTest01,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "12",
    productName: "THYROID STIMULATING HORMONE (TSH)",
    imgUrl: bloodTest01,
    category: "mobile",
    price: 599,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "13",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "14",
    productName: "Fasting Blood Sugar (FBS)",
    imgUrl: bloodTest01,
    category: "mobile",
    price: 899,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "15",
    productName: "THYROID STIMULATING HORMONE (TSH)",
    imgUrl: bloodTest01,
    category: "mobile",
    price: 699,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "16",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "17",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "18",
    productName: "THYROID STIMULATING HORMONE (TSH)",
    imgUrl: bloodTest01,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "19",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "watch",
    price: 399,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "20",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },

  {
    id: "21",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },
  {
    id: "22",
    productName: "THYROID STIMULATING HORMONE (TSH)",
    imgUrl: bloodTest01,
    category: "wireless",
    price: 169,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },
  {
    id: "23",
    productName: "HBA1C",
    imgUrl: bloodTest01,
    category: "wireless",
    price: 139,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  },
];
