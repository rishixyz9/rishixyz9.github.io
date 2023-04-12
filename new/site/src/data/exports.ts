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


import { StaticImageData } from 'next/image'

export default interface CardObject {
    name: string,
    desc: Array<string>,
    link?: string,
    img: string | StaticImageData,
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
    link: "https://github.com/rishixyz9/SimpliFarm"
}

export const p2: CardObject = {
    name: 'R I S K I F Y',
    img: riskify,
    desc: [
        "Created an application to analyze the risk of a portfolio to help people from all backgrounds take control of their finances",
        "Designed an intuitive UI using React.JS, Next.JS, and Tailwind"
    ],
    link: "https://github.com/rishixyz9/Riskify"
}

export const p3: CardObject = {
    name: 'UTD ROOMS',
    img: utdrooms,
    desc: [
        "Worked on a web application to help students at my university find open rooms to study",
        "Used Beautifulsoup to scrape data and parse data from 30+ pages on the official course catalog",
        "Designed and implemented front-end with Svelte-kit and a REST API to calculate timings of classes and find open rooms at any given time of the day"
    ],
    link: "https://github.com/rishixyz9/UTD-Rooms"
}

export const p4: CardObject = {
    name: 'Melanoma Detector',
    img: meldetector,
    desc: [
        "Trained a TensorFlow machine learning model with a dataset of melanoma and non-melanoma skin spots with 99% accuracy",
        "Used openCV to allow for users to take pictures and upload directly to the app for processin",
    ],
    link: "https://github.com/rishixyz9/Melanoma-Detector"
}

export const e1: CardObject = {
    name: 'StateFarm',
    position: 'Software Engineering Intern',
    img: sf,
    desc: [
        "Built end-to-end internal facing self-service tool to automate and simplify insurance program enrollment with policy holders",
        "Front-end built with React.JS, and back-end is built with Lambda and API gateway which is invoked by the front-end to complete the necessary services. Web application is hosted on AWS S3 and deployed on Cloudfront to be used publicly within the intranet and used by 6+ teams daily",
        "Worked on CI/CD pipeline to streamline and optimize time to deploy by at least 1 hour and automate manual components"
    ],
}

export const e2: CardObject = {
    name: 'EV3EVERYWHERE',
    position: 'Front End Architect',
    img: ev3,
    desc: [
        "Worked with a 501c(3) organization on the front end of their website to better distribute information about the organization in an easy to access method",
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

module.exports = {p1, p2, p3, p4, e1, e2, skills};