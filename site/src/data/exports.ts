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
import ts from '../../public/logos/ts.svg'
import html from '../../public/logos/html-logo.png'
import css from '../../public/logos/css-logo.png'
import yaml from '../../public/logos/yaml-logo.png'
import svelte from '../../public/logos/svelte-logo.png'
import discord from '../../public/logos/discord-logo.png'
import flask from '../..//public/logos/flask-logo.png'
import react from '../../public/logos/react-logo.png'
import node from '../../public/logos/node-icon.png'
import django from '../../public/logos/django-logo.png'
import nextlogo from '../../public/logos/next-logo.png'
import vue from '../../public/logos/vue.svg'
import opencv from '../../public/logos/OpenCV-logo.png'
import tf from '../../public/logos/tensorflow-logo.png'
import pipeline from '../../public/logos/pipeline-logo.png'
import aws from '../../public/logos/aws-logo.png'
import lambda from '../../public/logos/lambda.svg'
import cloudfront from '../../public/logos/cloudfront.svg'
import apigateway from '../../public/logos/apigw.svg'
import ps from '../../public/logos/postgresql-logo.png'
import mongo from '../../public/logos/mongo-logo.png'
import kb from '../../public/logos/kb-logo.png'
import aa from '../../public/aassistant.jpg'
import truthpilot from '../../public/truthpilot.jpg'


import { StaticImageData } from 'next/image'

export default interface CardObject {
    name: string,
    desc: Array<string>,
    link?: string,
    img: string | StaticImageData,
    imgPos: string,
    stack?: Array<String>
    position?: string,
}

export const p1: CardObject = {
    name: 'SimpliFarm',
    img: simplifarm,
    imgPos: "object-left",
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
    name: 'Riskify',
    img: riskify,
    imgPos: "object-left",
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
    name: 'UTD Rooms',
    img: utdrooms,
    imgPos: "object-center",
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
    imgPos: "object-left",
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
    imgPos: "object-center",
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

export const p6: CardObject = {
    name: 'TruthPilot',
    img: truthpilot,
    imgPos: "object-center",
    desc: [
        "Web application created to filter out fake news/hate speech from websites to create a more positive social media experience and get protection from misinformation",
        "Winner of the Best UI challenge at HackTAMU 2023"
    ],
    stack: [
        "Next.js",
        "Flask",
        "Hugging Face",
        "Beautiful Soup"
    ],
    link: "https://devpost.com/software/truthpilot"
}

export const e1: CardObject = {
    name: 'StateFarm',
    position: 'Software Engineering Intern',
    img: sf,
    imgPos: "object-center",
    stack: [
        "2022",
        "to",
        "Present"
    ],
    desc: [
        "Built end-to-end internal facing self-service tool to automate insurance program enrollment with policy holders and assist developers in testing service coverage across 7 test environments",
        "App was built with React.JS and AWS Lambda and API gateway to reduce response time latency",
        "Created a CI/CD pipeline to streamline deployments"
    ],
}

export const e2: CardObject = {
    name: 'EV3EVERYWHERE',
    position: 'Front End Architect',
    img: ev3,
    imgPos: "object-center",
    stack: [
        "2020",
        "to",
        "2022"
    ],
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
        ['Django',django],
        ['Next.js',nextlogo],
        ['Vue', vue],
        ['Next.js',react],
    ],
    libraries: [
        ['DevExtreme', tf],
        ['Express.js', tf],
        ['Recoil',tf],
        ['Redux',tf],
        ['Discord.py',discord],
        ['Beautiful Soup', tf],
        ['OpenCV',opencv],
        ['TensorFlow',tf],
    ],
    languages: [
        ['Python', py],
        ['C/C++', c],
        ['Java', java],
        ['JavaScript', js],
        ['TypeScript', ts],
        ['HTML', html],
        ['CSS', css],
        ['YAML', yaml]
    ],
    misc: [
        ['GitOps CI/CD', pipeline],
        ['AWS', aws],
        ['Lambda', lambda],
        ['CloudFront', cloudfront],
        ['API Gateway', apigateway],
        ['PostgreSQL', ps],
        ['MongoDB', mongo], 
        ['Kubernetes', kb]
    ]
}

module.exports = {p1, p2, p3, p4, p5, p6, e1, e2, skills};