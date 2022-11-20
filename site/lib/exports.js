import logo1 from '../public/sf-logo.png'
import logo2 from '../public/acm.png'
import logo3 from '../public/simplifarm.png'
import logo4 from '../public/utdrooms.png'
import logo5 from '../public/melanoma-detector.jpeg'
import logo6 from '../public/riskify.png'
import py from '../public/python-logo.png'
import c from '../public/c-logo.png'
import java from '../public/java-logo.png'
import js from '../public/js-logo.png'
import html from '../public/html-logo.png'
import css from '../public/css-logo.png'
import yaml from '../public/yaml-logo.png'
import svelte from '../public/svelte-logo.png'
import discord from '../public/discord-logo.png'
import flask from '../public/flask-logo.png'
import react from '../public/react-logo.png'
import node from '../public/node-icon.png'
import django from '../public/django-logo.png'
import opencv from '../public/OpenCV-logo.png'
import tf from '../public/tensorflow-logo.png'
import pipeline from '../public/pipeline-logo.png'
import aws from '../public/aws-logo.png'
import ps from '../public/postgresql-logo.png'
import mongo from '../public/mongo-logo.png'
import kb from '../public/kb-logo.png'

export const exp1 = {
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

export const exp2 = {
  company: "Association of Computing Machinery",
  img: logo2,
  date: "September 2021 -- Present",
  title: "Member",
  desc: [
    "Member and active participant of the UTD chapter of the ACM organization",
    "Former member of the Projects Division in charge of developing apps",
  ]
}

export const proj1 = {
  company: "SimpliFarm",
  img: logo3,
  date: "October 2022",
  title: "SimpliFarm",
  desc: [
    "Created an application to provide useful metrics to farmers to select optimal crop locations in all 50 states",
    "Designed and implemented an intuitive analytics dashboard for users to view fertility rating of a given location",
    "Featured google sign in to store records in Firebase and utilized Twilio API to send results directly to the client",
    "Winner of Twilio challenge at HackTX 2022",
  ],
  link: "https://github.com/rishixyz9/SimpliFarm"
}

export const proj2 = {
  company: "UTD Rooms",
  img: logo4,
  date: "September 2022",
  title: "UTD Rooms",
  desc: [
    "Worked on a web application to help students at my university find open rooms to study",
    "Used Beautifulsoup to scrape data and parse data from 30+ pages on the official course catalog",
    "Designed and implemented front-end with Svelte-kit and a REST API to calculate timings of classes and find open rooms at any given time of the day",
  ],
  link: "https://github.com/rishixyz9/UTD-Rooms"
}

export const proj3 = {
  company: "Melanoma Detector",
  img: logo5,
  date: "November 2021",
  title: "Melanoma Detector",
  desc: [
    "Trained a TensorFlow machine learning model with a dataset of melanoma and non-melanoma skin spots with 99% accuracy",
    "Used openCV to allow for users to take pictures and upload directly to the app for processing",
  ],
  link: "https://github.com/rishixyz9/Melanoma-Detector"  
}

export const proj4 = {
  company: "Riskify",
  img: logo6,
  date: "November 2022",
  title: "Riskify",
  desc: [
    "Created an application to determine risk of a portfolio based on macroeconomic factors and market trends and return a rating between 0-100%",
    "Used the Monte Carlo simulation to create an estimation of growth over an extended period of time",
    "Designed and created an intuitive and user friendly UI with react.js and next.js for routing and SSR"
  ], 
  link: "https://github.com/rishixyz9/Riskify" 
}

export const proj5 = {
  company: "Portfolio Website",
  img: logo1,
  date: "August 2022 -- Present",
  title: "Portfolio Website",
  desc: [
    "Built portfolio website using react.js functional components, HTML, CSS, and JavaScript",
    "Created optimized background animation using inverse square root algorithm",
  ]  
}

export const skills = [
  [
    {
      skill: "Python",
      img: py
    },
    {
      skill: "C/C++",
      img: c
    },
    {
      skill: "Java",
      img: java
    },
    {
      skill: "JavaScript",
      img: js
    },
  ],
  [
    {
      skill: "HTML",
      img: html
    },
    {
      skill: "CSS",
      img: css
    },
    {
      skill: "YAML",
      img: yaml
    },
    {
      skill: "Svelte-Kit",
      img: svelte
    },
  ],
  [
    {
      skill: "Discord.py",
      img: discord
    },
    {
      skill: "Flask",
      img: flask
    },
    {
      skill: "React.JS",
      img: react
    },
    {
      skill: "Node.JS",
      img: node
    },
  ],
  [
    {
      skill: "Django",
      img: django
    },
    {
      skill: "OpenCV",
      img: opencv
    },
    {
      skill: "TensorFlow",
      img: tf
    },
    {
      skill: "GitOps CI/CD",
      img: pipeline
    },
  ],
  [
    {
      skill: "AWS",
      img: aws
    },
    {
      skill: "PostgreSQL",
      img: ps
    },
    {
      skill: "MongoDB",
      img: mongo
    },
    {
      skill: "Kubernetes",
      img: kb
    },
  ]
]

module.exports = {exp1, exp2, proj1, proj2, proj3, proj4, proj5, skills}; 