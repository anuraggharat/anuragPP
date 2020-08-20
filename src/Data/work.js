import travelgram from "../images/travelgram.png"
import shoee from "../images/rove.png"
import medinspire from "../images/medinspire.png"
import bechde from "../images/bechde.png"
import getfit from "../images/getfit.png"
import newsbits from "../images/newsbits.jpg"

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
      "A Platform for Patients suffering from similiar diseases and illness to connect with each other. The app provides the patients to share and talk about there illness and sufferenings while keeping their identity disclosed. The platform also lets them take expert opinions from doctors and specialists with one to one chat.The application was developed at ERR404 Hackathon and is built on VUE.js and Firebase.",
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
    title: "NewsBits",
    description:
      "A React Native app that shows News Headlines from a Free Rest API newsapi.org. The App has a screen showing the headlines, also a search screen that allows the users to search the news as per their requirement.",
    imgId: newsbits,
    technologies: ["React-Native", "Rest API"],
    link: "https://github.com/anuraggharat/NewsApp",
  },
  {
    id: 6,
    title: "Get fit",
    description:
      "A Bootstrap Theme built on October CMS for a GYM. The theme comes with Blogs as well as Forums functionality added.",
    imgId: getfit,
    technologies: ["HTML5", "CSS3", "Bootstrap", "Laravel", "Php"],
    link: "https://github.com/anuraggharat/OctoberCMS-Blog",
  },
]
