import * as types from '../components/pages/home/tags/tagTypes'

// images
import site from "../Thumbnails/site.png"
import video from "../Thumbnails/video.png"
import article from "../Thumbnails/article.png"
import leetcode from "../Thumbnails/leetcode.png"
import tool from "../Thumbnails/tool.png"

// {
//     title:,
//     description:,
//     image:,
//     tags:,
//     link:,
// }


const data = [
    {
        title: "playcode.io",
        description: "A javascript playground. Very handy when you want to quickly test some simple code but do not want to create and run a new javascript file.",
        image: tool,
        tags: [types.JAVASCRIPT, types.TOOL],
        link: "https://playcode.io/"
    },
    {
        title: "Techie Delight",
        description: "A neat site containing plethora of algorithm problems along with their solution(s).",
        image: site,
        tags: [types.ALGORITHM, types.SITE],
        link: "https://www.techiedelight.com/",
    },
    {
        title: "The Complete Node.js Developer Course (3rd Edition)",
        description: "Node.js course introducing many essential knowledge about Node.js. Very good place to start if you're just getting into learning Node.js",
        image: video,
        tags: [types.VIDEO, types.NODEJS, types.JAVASCRIPT],
        link: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
    },
    {
        title: "MATERIAL-UI",
        description: "A library providing various neatly designed and configurable components you can use in your own React app.",
        image: site,
        tags: [types.TOOL, types.REACTJS, types.SITE],
        link: "https://material-ui.com/",
    },
    {
        title: "Heroku",
        description: "Great platform to publish hobby web apps. Quick and easy to use.",
        image: tool,
        tags: [types.TOOL, types.SITE],
        link: "https://www.heroku.com/home",
    },
    {
        title: "How To Make create-react-app work with a Node Back-end API",
        description: "An article which, as suggested by the title, demonstrates how you can create and connect React frontends with an Express backend.",
        image: article,
        tags: [types.ARTICLE, types.NODEJS, types.REACTJS, types.JAVASCRIPT],
        link: "https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/",
    },
    {
        title: "Dynamic Programming Patterns",
        description: "A very detailed article about patterns of dynamic programming problems. Also includes link to specific problems which you can do to practice dynamic programming.",
        image: leetcode,
        tags: [types.ALGORITHM, types.LEETCODE],
        link: "https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns"
    },
    {
        title: "RegEx Testing",
        description: "Could quickly test regular expression logic and see if the logic matches what you are expecting. Also has a variety of regex templates which you can use.",
        image: tool,
        tags: [types.TOOL, types.ALGORITHM],
        link: "https://www.regextester.com/97589"
    }, {
        title: "Kotlin Playground",
        description: "An online Kotlin compiler which you can use to quickly run and test Kotlin code.",
        image: tool,
        tags: [types.TOOL, types.KOTLIN],
        link: "https://play.kotlinlang.org/"
    },
    {
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        description: "A React which convers various aspects of React. Very good place to start learning React, though knowledge in HTML, CSS, and Javascript is assumed in the videos.",
        image: video,
        tags: [types.VIDEO, types.REACTJS, types.JAVASCRIPT],
        link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
    },
    {
        title: "React Redux",
        description: "The official React Redux site containing the setup instructions and documentations.",
        image: site,
        tags: [types.REACTJS, types.SITE],
        link: "https://react-redux.js.org/"
    }
]

data.sort(() => Math.random() - 0.5)

export default data