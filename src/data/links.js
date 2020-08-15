import * as types from '../components/pages/home/tags/tagTypes'

// images
import site from "../Thumbnails/site.png"
import video from "../Thumbnails/video.png"
import article from "../Thumbnails/article.png"
import leetcode from "../Thumbnails/leetcode.png"
import tool from "../Thumbnails/tool.png"


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
        description: "Node.js course introducing many essential knowledge about Node.js. Very good place to start if you're just starting to learn Node.js",
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
        link: "https://www.regextester.com/"
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
    },
    {
        title: "Android Development Documentary",
        description: "Documentations of various Android app concepts. Helpful to lookup and explore this documentation when stuck on creating your Android app, as it has nearly all the information you need.",
        image: site,
        tags: [types.KOTLIN, types.JAVA, types.SITE],
        link: "https://developer.android.com/docs"
    },
    {
        title: "Jupyter",
        description: "A open-source web application you can use to code in python. The Jupyter notebook has very neat structure and is perfect for testing and playing with Python code, as well as creating interactive Python notes.",
        image: tool,
        tags: [types.PYTHON, types.TOOL],
        link: "https://jupyter.org/"
    },
    {
        title: "What Does It Take To Be An Expert At Python",
        description: "A video about effective Python programming. Goes over essential concepts such as Dunder methods.",
        image: video,
        tags: [types.PYTHON, types.VIDEO],
        link: "https://www.youtube.com/watch?v=7lmCu8wz8ro&list=PLTp_ksmV342tzX6Bu1YjSixaRZ0U6yJsV"
    },
    {
        title: "Get a Taste of Lambdas and Get Addicted to Streams",
        description: "A video demonstrating the advantages of and what you can do with Java's Lambda and Stream feature.",
        image: video,
        tags: [types.JAVA, types.VIDEO],
        link: "https://www.youtube.com/watch?v=1OpAgZvYXLQ&list=PLTp_ksmV342vyZtazrghEPYnWL4rplp_9"
    },
    {
        title: "CPPReference",
        description: "A C++ documentation site which contains detailed explaination and various use cases for C++ features.",
        image: site,
        tags: [types.CPP, types.SITE],
        link: "https://en.cppreference.com/w/cpp/language/expressions"
    },
    {
        title: "mongoDB",
        description: "The official site of mongoDB. Contains pretty much everything you need to get started using mongoDB in your project.",
        image: site,
        tags: [types.DATABASE, types.SITE, types.JAVASCRIPT, types.NODEJS],
        link: "https://www.mongodb.com/"
    },
    {
        title: "Jump Game II",
        description: "A challenging yet worthwhile problem which could be used to practiced both dynamic programming and greedy algorithm.",
        image: leetcode,
        tags: [types.LEETCODE, types.ALGORITHM],
        link: "https://leetcode.com/problems/jump-game-ii/"
    },
    {
        title: "Firebase - Back to the Basics",
        description: "A video demonstrating the basics of how to set up firebase for your web application.",
        image: video,
        tags: [types.VIDEO, types.DATABASE],
        link: "https://www.youtube.com/watch?v=q5J5ho7YUhA"
    },
    {
        title: "Rediscovering JavaScript",
        description: "The video goes over various aspects of modern JavaScript such as the newer syntaxes and features.",
        image: video,
        tags: [types.VIDEO, types.JAVASCRIPT],
        link: "https://www.youtube.com/watch?v=dxzBZpzzzo8"
    },
    {
        title: "Set up a React app with a Node.js server proxy",
        description: "An intuitive article demonstrating how to include an Express server by utilizing the 'proxy' key in your React app's package.json.",
        image: article,
        tags: [types.ARTICLE, types.REACTJS, types.NODEJS],
        link: "https://www.twilio.com/blog/react-app-with-node-js-server-proxy"
    },
    {
        title: "Online C++ Compiler",
        description: "An online C++ compiler that is decently fast. Great tool to use if you want to run some simple C++ code but is too lazy to open an IDE or compile the code in terminal.",
        image: tool,
        tags: [types.TOOL, types.CPP],
        link: "https://www.onlinegdb.com/online_c++_compiler"
    },
    {
        title: "Cherno's C++ Playlist",
        description: "The playlist contains many C++ concepts/features, ranging from the basics to intermediate.",
        image: video,
        tags: [types.VIDEO,types.CPP],
        link: "https://www.youtube.com/watch?v=18c3MTX0PK0&list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"
    },
    {
    	title: "105 STL Algorithms in Less Than an Hour",
    	description: "The video briefly goes over various C++ standard library algorithms.",
    	image: video,
    	tags: [types.VIDEO, types.CPP, types.ALGORITHM],
    	link: "https://www.youtube.com/watch?v=bFSnXNIsK4A"
    },
    {
    	title: "Robo 3T",
    	description: "GUI for mongoDB. Allows you to easily view and interpret your mongoDB data.",
    	image: tool,
    	tags: [types.TOOL, types.DATABASE],
    	link: "https://robomongo.org/"
    },
    {
        title: "repl.it",
        description: "A browser IDE which supports a large variety of programming languages.",
        image: tool,
        tags: [types.TOOL, types.JAVA, types.PYTHON, types.CPP],
        link: "https://repl.it/"
    },
    {
        title: "Cycle detection",
        description: "A wikipedia article about the problem of cycle detection and certain algorithms used to solve the problem, such as Floyd's Tortoise and Hare algorithm.",
        image: article,
        tags: [types.ARTICLE, types.ALGORITHM],
        link: "https://en.wikipedia.org/wiki/Cycle_detection"
    },
    {
        title: "Google's Android Development Courses",
        description: "A compilation of the free courses offered by Google to help developers get into Android app development. Topics include both Java and Kotlin, as well as how to utilize the development structure provided in Android Studio.",
        image: video,
        tags: [types.VIDEO, types.KOTLIN, types.JAVA],
        link: "https://developer.android.com/courses"
    },
    {
        title: "Best Time to Buy and Sell Stock III",
        description: "A leetcode problem which requires and hence helps improve critical thinking and algorithmic visualization in order to come up with a solution is that efficient enough for accomplishing the testcases.",
        image: leetcode,
        tags: [types.LEETCODE, types.ALGORITHM],
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
    },
    {
        title: "Cheapest Flights Within K Stops",
        description: "A problem which could be solved using dynamic programming and Dijkstra's algorithm.",
        image: leetcode,
        tags: [types.LEETCODE, types.ALGORITHM],
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
    }
]

data.sort(() => Math.random() - 0.5)

export default data