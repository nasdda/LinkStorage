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
    }
]

export default data