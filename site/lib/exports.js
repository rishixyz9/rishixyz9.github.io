import logo1 from '../public/sf-logo.png'
import logo2 from '../public/acm.png'

const exp1 = {
    company: "State Farm",
    img: logo1,
    date: "May 2022 -- Present",
    title: "Software Engineering Intern",
    desc: [
      "Built react web application for internal facing self-service tool hosted on AWS used by 12+ people daily",
      "Worked on CI/CD pipeline to streamline and optimize time to deploy by at least 20% and automate manual components",
      "Utilized python, JavaScript, YAML, HTML, CSS, AWS, Lambda, S3, CloudFront, API Gateway, and WAF",
    ]
  }

  const exp2 = {
    company: "Association of Computing Machinery",
    img: logo2,
    date: "September 2021 -- Present",
    title: "Member",
    desc: [
      "Member and active participant of the UTD chapter of the ACM organization",
      "Former member of the Projects Division in charge of developing apps",
    ]
  }

  const proj1 = {
    company: "SimpliFarm",
    img: logo1,
    date: "October 2022",
    title: "SimpliFarm",
    desc: [
      "Created an application to provide useful metrics to farmers to select optimal crop locations in all 50 states",
      "Designed and implemented an intuitive analytics dashboard for users to view fertility rating of a given location",
      "Featured google sign in to store records in Firebase and utilized Twilio API to send results directly to the client",
      "Winner of Twilio challenge at HackTX 2022",
    ]
  }

  const proj2 = {
    company: "UTD Rooms",
    img: logo1,
    date: "September 2022",
    title: "UTD Rooms",
    desc: [
      "Worked on a web application to help students at my university find open rooms to study",
      "Used Beautifulsoup to scrape data and parse data from 30+ pages on the official course catalog",
      "Designed and implemented front-end with Svelte-kit and a REST API to calculate timings of classes and find open rooms at any given time of the day",
    ]
  }

  const proj3 = {
    company: "Melanoma Detector",
    img: logo1,
    date: "November 2021",
    title: "Melanoma Detector",
    desc: [
      "Trained a TensorFlow machine learning model with a dataset of melanoma and non-melanoma skin spots with 99% accuracy",
      "Used openCV to allow for users to take pictures and upload directly to the app for processing",
    ]  
  }

  const proj4 = {
    company: "Mars Life Mobile App",
    img: logo1,
    date: "September 2021 -- November 2021",
    title: "Mars Life Mobile App",
    desc: [
      "Created a React-Native based mobile application to provide the latest information on Mars",
      "Wrote api calls to NASA APIs to fetch and parse data about mars",
    ]  
  }

  const proj5 = {
    company: "Portfolio Website",
    img: logo1,
    date: "August 2022 -- Present",
    title: "Portfolio Website",
    desc: [
      "Built portfolio website using react.js functional components, HTML, CSS, and JavaScript",
      "Created optimized background animation using inverse square root algorithm",
    ]  
  }

  module.exports = {exp1, exp2, proj1, proj2, proj3, proj4, proj5}; 