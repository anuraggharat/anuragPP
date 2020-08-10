import travelgram from "../images/travelgram.png"
import shoee from "../images/rove.png"
import medinspire from "../images/medinspire.png"
import bechde from "../images/bechde.png"
import getfit from "../images/getfit.png"

export const works = [
  {
    id: 1,
    title: "TravelGram",
    description:
      "TravelGram is a Instagram inspired Social-Media App that allows the users to post pictures along with captions and share them with other users!. All the users can see the list of available users and like or dislike each others posts. The app uses Angular 9 as a Front-End framework and uses Authentication, Database and Storage services of Firebase.",
    imgId: travelgram,
    technologies: [
      "Angular 9",
      "Bootstrap 4",
      "Rxjs",
      "Typescript",
      "Firebase",
    ],
    link: "https://lcoproject1.web.app/",
  },
  {
    id: 2,
    title: "Rove",
    description:
      "A fullfledged E-commerce store for shopping of shoes.The project is built on MERN Stack.Users can create their profile and start buying products.The Admin has all the access to add,delete and edit new items and categories.Also 2 payment gateways namely Stripe and Paypal are added.",
    imgId: shoee,
    technologies: ["React", "MongoDb", "Bootstrap", "Node", "Express"],
    link: "https://github.com/anuraggharat/ECom",
  },
  {
    id: 3,
    title: "MedInspire",
    description:
      "A fullfledged E-commerce store for shopping of shoes.The project is built on MERN Stack.Users can create their profile and start buying products.The Admin has all the access to add,delete and edit new items and categories.Also 2 payment gateways namely Stripe and Paypal are added.",
    imgId: medinspire,
    technologies: ["Vue.Js", "Firebase", "Vuetify"],
    link: "https://github.com/anuraggharat/ECom",
  },
  {
    id: 4,
    title: "BechDe",
    description:
      "React Native app Front-End for buying and selling of stuff online. The App allows users to post products that the users don't use anymore and also recieve mssg of people intrested for buying the product. ",
    imgId: bechde,
    technologies: ["React-Native", "Formik"],
    link: "https://github.com/anuraggharat/BechDe",
  },
  {
    id: 5,
    title: "Get fit",
    description:
      "A Bootstrap Theme built on October CMS for a GYM. The theme comes with Blogs as well as Forums functionality added.",
    imgId: getfit,
    technologies: ["HTML5", "CSS3", "Bootstrap", "Laravel", "Php"],
    link: "https://github.com/anuraggharat/OctoberCMS-Blog",
  },
]
