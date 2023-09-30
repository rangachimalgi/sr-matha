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
import FemaleAdvancePackage from "../Images/FemaleAdvancePackage.jpg"
import maleadvancepackage from "../Images/maleadvancepackage.jpg"
import FemaleSeniorCitizen from "../Images/FemaleSeniorCitizen.jpg"
import seniorcitizen from "../Images/seniorcitizen.jpg"
import GenaralHealthPackage from "../Images/GenaralHealthPackage.jpg"
import labtestslider from "../Images/labtestslider.png"
import Untitleddesign from "../Images/Untitleddesign.png"

export const SliderData = [
  {
    id: 1,
    title: "Book Your Test Now",
    desc: "Book Your Test Now near by to your place .",
    cover: labtestslider,
  },
  {
    id: 2,
    title: "We serve all around the country",
    desc: "Book your Test now.",
    cover: Untitleddesign,
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

export const popularTests = [
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
    productName: "ERYTHROCYTE SEDIMENTATION RATE (ESR)",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 200,
    shortDesc:
      "An erythrocyte sedimentation rate (ESR) is a type of blood test that measures how quickly erythrocytes (red blood cells) settle at the bottom of a test tube that contains a blood sample.",
    description:
      "An erythrocyte sedimentation rate (ESR) is a type of blood test that measures how quickly erythrocytes (red blood cells) settle at the bottom of a test tube that contains a blood sample. Normally, red blood cells settle relatively slowly. A faster-than-normal rate may indicate inflammation in the body.",
  },
  {
    id: "04",
    productName: "FREE THYROXINE (FT4)",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 310,
    shortDesc:
      "FT4 and FT3 are also two of the most important tests. Knowingly, T3 only represents just 5% of normal thyroid hormone.",
    description:
      "FT4 and FT3 are also two of the most important tests. Knowingly, T3 only represents just 5% of normal thyroid hormone. Measurement of free triiodothyronine is the prime reason why this test is run. Decreasing amount of FT4 may cause hypothyroidism, which may cause several types of disorders. FT4 is known for comprising a little fraction of total thyroxine that remains available to the body tissues. Free T3 and T4 blood tests are included in all kinds of FT4 tests. You must inform your doctor before the test if you are already on medication or having any kind of allergies. No other specific preparations are needed for these tests. However, 10-12 hours of complete fasting is necessary before appearing for the test. The test results may vary depending upon gender and age or the health condition of the patient.",
  },

]

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
    productName: "Female Advanced Health Package (108 Tests)",
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
    imgUrl: FemaleAdvancePackage,
    category: "sofa",
    price: 2499,
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
    productName: "Male Advanced Health Package (105 Tests)",
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
    imgUrl: maleadvancepackage,
    category: "sofa",
    price: 1199.0,
    discount: 30,
    shortDesc: "Sample Type: Blood",
    description:
      "The MALE ADVANCED HEALTH PACKAGE includes 105 vital tests to screen health status, such as Cardiac Risk Markers, Complete Hemogram, Diabetes, Iron, Lipid, Liver, Kidney, Thyroid, Vitamins, Pancreatic, Electrolytes, CEA (a type of Tumour Marker), Prostate Cancer (PSA), and Hormones. This package is recommended for men aged between 25 and 50 years.",
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
    productName: "Female Senior Citizen Health Package (108 Tests)",
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
    imgUrl: FemaleSeniorCitizen,
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
    productName: "Male Senior Citizen Health Package (108 Tests)",
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
    imgUrl: seniorcitizen,
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
    productName: "General Health Package (111)",
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
    imgUrl: GenaralHealthPackage,
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
    productName: "ERYTHROCYTE SEDIMENTATION RATE (ESR)",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 200,
    shortDesc:
      "An erythrocyte sedimentation rate (ESR) is a type of blood test that measures how quickly erythrocytes (red blood cells) settle at the bottom of a test tube that contains a blood sample.",
    description:
      "An erythrocyte sedimentation rate (ESR) is a type of blood test that measures how quickly erythrocytes (red blood cells) settle at the bottom of a test tube that contains a blood sample. Normally, red blood cells settle relatively slowly. A faster-than-normal rate may indicate inflammation in the body.",
  },
  {
    id: "04",
    productName: "FREE THYROXINE (FT4)",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 310,
    shortDesc:
      "FT4 and FT3 are also two of the most important tests. Knowingly, T3 only represents just 5% of normal thyroid hormone.",
    description:
      "FT4 and FT3 are also two of the most important tests. Knowingly, T3 only represents just 5% of normal thyroid hormone. Measurement of free triiodothyronine is the prime reason why this test is run. Decreasing amount of FT4 may cause hypothyroidism, which may cause several types of disorders. FT4 is known for comprising a little fraction of total thyroxine that remains available to the body tissues. Free T3 and T4 blood tests are included in all kinds of FT4 tests. You must inform your doctor before the test if you are already on medication or having any kind of allergies. No other specific preparations are needed for these tests. However, 10-12 hours of complete fasting is necessary before appearing for the test. The test results may vary depending upon gender and age or the health condition of the patient.",
  },

  {
    id: "05",
    productName: "C-REACTIVE PROTEIN (CRP)",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 500,
    shortDesc:
      "C-reactive protein test or CRP test helps to detect lower levels of the protein in the bloodstream. The level increases in case of inflammation. Determining the potentiality of inflammation is possible through this test.",
    description:
      "C-reactive protein test or CRP test helps to detect lower levels of the protein in the bloodstream. The level increases in case of inflammation. Determining the potentiality of inflammation is possible through this test. In case you are going through acute conditions that can cause inflammation, experts can recommend you to go for a CRP blood test. Doctors say, CRP test in Covid is very important. You can now easily avail the facility of CRP test at home because CRP test cost is not really too high.",
  },

  {
    id: "06",
    productName: "BETA HCG",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 610,
    shortDesc:
      "HCG represents human chorionic gonadotropin, a hormone which is produced during pregnancy.",
    description:
      "HCG represents human chorionic gonadotropin, a hormone which is produced during pregnancy. The Free Beta HCG test helps to detect the presence of HCG in your blood.",
  },
  {
    id: "07",
    productName: "PROLACTIN (PRL)",
    imgUrl: bloodTest01,
    category: "chair",
    price: 475,
    shortDesc:
      "This test is performed to measure the amount of Prolactin in Blood. Prolactin is a specific type of hormone that is produced by the Pituitary gland.",
    description:
      "This test is performed to measure the amount of Prolactin in Blood. Prolactin is a specific type of hormone that is produced by the Pituitary gland. For both men and women, this hormone plays a very important role to maintain a proper reproductive system. The test is mostly run on women in case of irregular menstrual period or infertility issues. Abnormal growth of body, facial hair, decreased sex drive are some of the symptoms of the crisis of Prolactin. No specific preparations are required to appear for this test. However, the perfect time to collect blood samples for this test is 3-4 hours after waking up in the morning as prolactin levels in the blood may vary over a 24 hours span. The test results may vary depending on age, gender and health condition. Low prolactin level may cause a disorder named hypopituitarism. Similarly, high prolactin level may cause some types of physical complexions. However, high prolactin levels are normal in pregnant women.",
  },

  {
    id: "27",
    productName: "FREE TRIIODOTHYRONINE (FT3)",
    imgUrl: bloodTest01,
    category: "sofa",
    price: 285,
    shortDesc:
      "This test is also known as Triiodothyronine blood test. This test is merely run to measure the actual amount of free Triiodothyronine or FT-3 in blood.",
    description:
      "This test is also known as Triiodothyronine blood test. This test is merely run to measure the actual amount of free Triiodothyronine or FT-3 in blood. Triiodothyronine is a type of hormone that is produced by the Thyroid gland. The main objective of this test is to determine that the thyroid gland is hyperactive or underactive. Imbalancement of such hormone production may cause irritability, irregular heartbeats and many other physical complexions and disorders. This is why Free Triiodothyronine test is also important for everyone. You may need to fast for a certain span of time before appearing for the test. There are some types of drugs including birth control pills that may affect the test results. This is why consulting a doctor is necessary before appearing for Free Triiodothyronine test. Test results may vary depending upon age, gender and health condition of the patient.",
  },

  {
    id: "08",
    productName: "PROSTATE SPECIFIC ANTIGEN (PSA)",
    imgUrl: bloodTest01,
    category: "chair",
    price: 500,
    shortDesc:
      "This is also one of the major tests. PSA is one type of protein that is produced by the prostate cells of a male body.",
    description:
      "This is also one of the major tests. PSA is one type of protein that is produced by the prostate cells of a male body. A PSA test is merely run to determine the chances of prostate cancer. If somebody has a family history of Prostate cancer, then he must go for this test. PSA test is a prime chapter of prostate cancer treatment. The patient need to stay away from masterbation for at least 3 days before appearing for this test. Following all the instructions given by the doctor is also necessary before appearing for the test. The test results may vary depending upon age, gender and health conditions.",
  },

  {
    id: "09",
    productName: "RHEUMATOID FACTOR (RF)",
    imgUrl: bloodTest01,
    category: "chair",
    price: 500,
    shortDesc:
      "Diagnosing autoimmune disorders like rheumatoid arthritis is the prime objective of this test.",
    description:
      "Diagnosing autoimmune disorders like rheumatoid arthritis is the prime objective of this test. Besides, this test is also performed to diagnose the severity of any disease. Knowingly, the Rheumatoid Factor test price is very reasonable.",
  },

  {
    id: "10",
    productName: "VITAMIN B-12",
    imgUrl: bloodTest01,
    category: "mobile",
    price: 800,
    shortDesc:
      "Through this test, the level of Vitamin-B12 in blood is tested. Vitamin B12 is one of the most important elements of the human body that helps to improve blood and nerve cells.",
    description:
      "Through this test, the level of Vitamin-B12 in blood is tested. Vitamin B12 is one of the most important elements of the human body that helps to improve blood and nerve cells. It also plays a vital role in the synthesis of DNA. Vitamin B-12 test is mainly performed to check that a person is having a normal level of Vitamin B-12 or not. Lack of Vitamin B-12 may cause a massive decrement of red blood cells that can cause Anemia. This is why Vitamin B-12 test is recommended for everyone. You must inform your doctor and follow all the given instructions before appearing for the test. You must fast for one complete night or 8-12 long hours before the date of test. No other precautions are required to appear for this test. If the test result shows that the level of Vitamin B-12 is lower than normal, then it may be a primary symptom of Anemia. Consulting a doctor after getting the test results is recommended. Vitamin B-12 test price is Rs.800 with Free Home Sample Collection.",
  },
  {
    id: "25",
    productName: "RANDOM BLOOD SUGAR ( RBS)",
    imgUrl: bloodTest01,
    category: "chair",
    price: 149,
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
