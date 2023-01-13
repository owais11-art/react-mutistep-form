import bgDesktop from '../assets/images/bg-sidebar-desktop.svg'
import bgMobile from '../assets/images/bg-sidebar-mobile.svg'
import arcadeImg from '../assets/images/icon-arcade.svg'
import advancedImg from '../assets/images/icon-advanced.svg'
import proImg from '../assets/images/icon-pro.svg'

export const data = {
    navigation: [
        {
            name: "your info",
            path: "/",
            id: 1
        },
        {
            name: "select plan",
            path: "step-two",
            id: 2
        },
        {
            name: "add-ons",
            path: "step-three",
            id: 3
        },
        {
            name: "summary",
            path: "step-four",
            id: 4
        }
    ],
    backgrounds: {
        bgDesktop,
        bgMobile
    },
    stepTwo: [
        {
            id: 1,
            name: "Arcade",
            monthlyPrice: "9",
            yearlyPrice: "90",
            logo: arcadeImg,
            active: true
        },
        {
            id: 2,
            name: "Advanced",
            monthlyPrice: "12",
            yearlyPrice: "120",
            logo: advancedImg,
            active: false
        },
        {
            id: 3,
            name: "Pro",
            monthlyPrice: "15",
            yearlyPrice: "150",
            logo: proImg,
            active: false
        }
    ],
    stepThree: [
        {
            id: 1,
            name: "Online service",
            desc: "Access to multiplayer games",
            monthlyPrice: "1",
            yearlyPrice: "10",
            selected: false
        },
        {
            id: 2,
            name: "Large Storage",
            desc: "Extra 1TB of cloud save",
            monthlyPrice: "2",
            yearlyPrice: "20",
            selected: false
        },
        {
            id: 3,
            name: "Customizable profile",
            desc: "Custom theme on your profile",
            monthlyPrice: "2",
            yearlyPrice: "20",
            selected: false
        }
    ]
}