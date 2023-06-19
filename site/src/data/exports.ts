import simplifarm from '../../public/simplifarm.png'
import riskify from '../../public/riskify.png'
import utdrooms from '../../public/utdrooms.png'
import meldetector from '../../public/melanoma-detector.jpeg'
import sf from '../../public/sf-logo.png'
import ev3 from '../../public/ev3.png'
import py from '../../public/logos/python-logo.png'
import c from '../../public/logos/c-logo.png'
import java from '../../public/logos/java-logo.png'
import js from '../../public/logos/js-logo.png'
import html from '../../public/logos/html-logo.png'
import css from '../../public/logos/css-logo.png'
import yaml from '../../public/logos/yaml-logo.png'
import svelte from '../../public/logos/svelte-logo.png'
import discord from '../../public/logos/discord-logo.png'
import flask from '../..//public/logos/flask-logo.png'
import react from '../../public/logos/react-logo.png'
import node from '../../public/logos/node-icon.png'
import django from '../../public/logos/django-logo.png'
import opencv from '../../public/logos/OpenCV-logo.png'
import tf from '../../public/logos/tensorflow-logo.png'
import pipeline from '../../public/logos/pipeline-logo.png'
import aws from '../../public/logos/aws-logo.png'
import ps from '../../public/logos/postgresql-logo.png'
import mongo from '../../public/logos/mongo-logo.png'
import kb from '../../public/logos/kb-logo.png'
import aa from '../../public/aassistant.jpg'


import { StaticImageData } from 'next/image'

export default interface CardObject {
    name: string,
    desc: Array<string>,
    link?: string,
    img: string | StaticImageData,
    stack?: Array<String>
    position?: string,

}

export const p1: CardObject = {
    name: 'S I M P L I F A R M',
    img: simplifarm,
    desc: [
        "Created an application to help farmers find optimal crop planting locations",
        "Built with Next.JS, Tailwind, and React.JS",
        "Winner of the Twilio challenge at HackTX 2022"
    ],
    stack: [
        "Next.js",
        "Tailwind",
        "Flask"
    ],
    link: "https://github.com/rishixyz9/SimpliFarm"
}

export const p2: CardObject = {
    name: 'R I S K I F Y',
    img: riskify,
    desc: [
        "Application to analyze the risk of a portfolio to help people take control of their finances",
        "Designed an intuitive UI using React.JS, Next.JS, and Tailwind"
    ],
    stack: [
        "Next.js",
        "Tailwind",
        "Flask",

    ],
    link: "https://github.com/rishixyz9/Riskify"
}

export const p3: CardObject = {
    name: 'UTD ROOMS',
    img: utdrooms,
    desc: [
        "App to help students at the university of texas at dallas to find open rooms to study",
        "Designed and implemented front-end with Svelte-kit and a REST API"
    ],
    stack: [
        "Svelte",
        "Svelte-Kit",
    ],
    link: "https://github.com/rishixyz9/UTD-Rooms"
}

export const p4: CardObject = {
    name: 'Melanoma Detector',
    img: meldetector,
    desc: [
        "Website to allow users to check if a skin spot is melanoma with 99% accuracy",
        "Built with Django, TensorFlow, and OpenCV",
    ],
    stack: [
        "Django",
        "OpenCV",
    ],
    link: "https://github.com/rishixyz9/Melanoma-Detector"
}

export const p5: CardObject = {
    name: 'AAssisstant',
    img: aa,
    desc: [
        "Mobile application created to help airline flyers plan their flights effectively by utilizing geographic data and travel patterns",
        "Winner of the Best UI challenge at HackTAMU 2023"
    ],
    stack: [
        "React Native",
        "Flask",
        "MongoDB"
    ],
    link: "https://github.com/raghavpillai/AAssistant"
}

export const e1: CardObject = {
    name: 'StateFarm',
    position: 'Software Engineering Intern',
    img: sf,
    desc: [
        "Built end-to-end internal facing self-service tool to automate and simplify insurance program enrollment with policy holders and assist developers in testing service coverage across 7 test environments",
        "Front-end built with React.JS, and back-end is built with AWS Lambda and API gateway to reduce response time latency to a maxiumum of 1s. Web application is hosted on AWS S3 and deployed on Cloudfront to be used publicly within the intranet and used by 6+ teams daily",
        "Created a CI/CD pipeline to streamline and optimize confluent kafka component deployments by 1 hour and increase deployments by 30%"
    ],
}

export const e2: CardObject = {
    name: 'EV3EVERYWHERE',
    position: 'Front End Architect',
    img: ev3,
    desc: [
        "Worked with a 501c(3) organization on the front end of their website to better distribute information about the organization in an easy to access method and increase user engagement by 3%",
        "Designed and implemented several sub-pages and helped with the overall styling of the landing page using React.JS, HTML, CSS, and JavaScript"
    ],
}

export const skills = {
    frameworks: [
        ['React.JS',react],
        ['Svelte/Svelte-kit',svelte],
        ['Flask',flask],
        ['Node.js',node],
        ['Django',django]
    ],
    libraries: [
        ['OpenCV',opencv],
        ['TensorFlow',tf],
        ['Recoil',tf],
        ['Redux',tf],
        ['Discord.py',discord]
    ],
    languages: [
        ['Python', py],
        ['C/C++', c],
        ['Java', java],
        ['JavaScript', js],
        ['TypeScript', js],
        ['HTML', html],
        ['CSS', css],
        ['YAML', yaml]
    ],
    misc: [
        ['GitOps CI/CD', pipeline],
        ['AWS', aws],
        ['Lambda', aws],
        ['CloudFront', aws],
        ['API Gateway', aws],
        ['PostgreSQL', aws],
        ['MongoDB', mongo], 
        ['Kubernetes', kb]
    ]
}

module.exports = {p1, p2, p3, p4, p5, e1, e2, skills};