import bgDesktop from '../assets/images/bg-sidebar-desktop.svg'
import bgMobile from '../assets/images/bg-sidebar-mobile.svg'

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
    }
}