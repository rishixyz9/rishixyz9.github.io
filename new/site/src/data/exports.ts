import simplifarm from '../../public/simplifarm.png'
import riskify from '../../public/riskify.png'
import utdrooms from '../../public/utdrooms.png'
import { StaticImageData } from 'next/image'

export default interface CardObject {
    name: string,
    desc: Array<string>,
    link: string,
    img: string | StaticImageData

}

export const p1: CardObject = {
    name: 'S I M P L I F A R M',
    img: simplifarm,
    desc: [
        "Created an application to provide useful metrics to farmers to select optimal crop locations in all 50 states",
        "Designed and implemented an intuitive analytics dashboard for users to view fertility rating of a given location using Next.JS, Tailwind, and React.JS",
        "Featured google sign in to store records in Firebase and utilized Twilio API to send results directly to the client",
        "Winner of Twilio challenge at HackTX 2022"
    ],
    link: "https://github.com/rishixyz9/SimpliFarm"
}

export const p2: CardObject = {
    name: 'R I S K I F Y',
    img: riskify,
    desc: [
        "Created an application to analyze the risk of a portfolio given macroeconomic trends and certain parameters including portfolio diversity and trading strategy",
        "Used a Monte Carlo simulation model to determine the risk rating to return a percentage between 0 - 100, ranging low to high risk",
        "Created an intuitive UI using React.JS, Next.JS, and Tailwind"
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

module.exports = {p1, p2, p3};