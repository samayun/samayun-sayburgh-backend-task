const author = {
    image: "https://miro.medium.com/fit/c/56/56/1*SSYUQ8TIIDqoE4sKrcTCXw.jpeg",
    name: "Samayun Miah Chowdhury",
}
const blogData = [
    {
        id: 1,
        title: "How to make relationship with JavaScript",
        body: "Today we are going to discuss10 most important things about javascript string.",
        image: "https://miro.medium.com/max/1920/1*1IvfMBgfGs1gCPz8Q3UAQw.png",
        tags: ["Javascript"],
        slug: "https://samayunmc.medium.com/how-to-make-relationship-with-javascript-e3e7c134dfe0",
        author,
        createdAt: "05 May 2021",
    },
    {
        id: 2,
        title: "React js:All you need to Know 💪",
        body: `In this blog I gave guideline all topics to know about react.js .`,
        image: "https://miro.medium.com/max/700/1*YePVzjkjsadOqzQ03wl5kA.png",
        tags: ["React.js", "React-guideline"],
        slug: "https://samayunmc.medium.com/%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%9F-%E0%A6%9C%E0%A7%87%E0%A6%8F%E0%A6%B8-%E0%A6%95%E0%A7%8B%E0%A6%A1-%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%82-%E0%A6%93-%E0%A6%B2%E0%A7%87%E0%A6%9C%E0%A6%BF-%E0%A6%B2%E0%A7%8B%E0%A6%A1%E0%A6%BF%E0%A6%82-%E0%A6%95%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A7%8B%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%9F-60bb9ec13c21",
        author,
        createdAt: "May 7 2021",
    },
    {
        id: 3,
        title: "JavaScript The Tricky Parts🙄: Part-2",
        body: `Hey , I am Samayun Chowdhury speaking here to make your coding life easier, smarter & comfortable. I will talk about most critical parts of javascript in this series . So don’t waste time . Take a glass of coffee & read my blog . Here I am covering 10 tricky topics of javascript `,
        image: "https://miro.medium.com/max/678/1*1MRoBnT388OcTWy--FDEKQ.jpeg",
        tags: ["JavaScript", "JS Tricky Parts"],
        slug: "https://samayunmc.medium.com/javascript-the-tricky-parts-part-2-1cf32a8dd825",
        author,
        createdAt: "May 8 2021",
    },
    {
        id: 4,
        image: "https://miro.medium.com/max/700/1*g61eB6xahuaTbfjWCFbX9g.png",
        title: "রিয়েক্ট জেএস কোড স্পলিটিং ও লেজি লোডিং কম্পোন্যান্ট",
        body: `কোরিয়ার থ্রিলার মুভি দেখেন,মানি হেইস্ট,গট দেখছেন?
                    যদি দেখে থাকেন,
                    সাসপেন্সের টেলায় ঘুম আসে না তাই-না?
                    আজকে আমি রিয়েক্টের সাসপেন্স নিয়ে কথা বলবো ৷
                    কিন্তু আমরা তোহ প্রোগ্রামার। অলস মস্তিষ্ক তাই কোড বার বার লিখতে ভাল্লাগে না 🙄
                    রিফেক্টর,ফাংশন, রিইউজেবল কম্পোনেন্ট বানাতে অভ্যস্ত হয়ে পড়েছি আর দিন দিন অলস(লেজি) হচ্ছি ।
                    আমি কথা বলছি লেজি লোডিং নিয়ে৷ `,
        slug:
            "https://samayunmc.medium.com/%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%9F-%E0%A6%9C%E0%A7%87%E0%A6%8F%E0%A6%B8-%E0%A6%95%E0%A7%8B%E0%A6%A1-%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%82-%E0%A6%93-%E0%A6%B2%E0%A7%87%E0%A6%9C%E0%A6%BF-%E0%A6%B2%E0%A7%8B%E0%A6%A1%E0%A6%BF%E0%A6%82-%E0%A6%95%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A7%8B%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%9F-60bb9ec13c21",
        author,
        createdAt: "08 May 2021"
    },
    {
        id: 5,
        title: 'পৃথিবীর সবচেয়ে ছোট টেক উপন্যাসঃ এক বেকবেঞ্চারের জাভাস্ক্রিপ্ট যাত্রা 💪',
        body: `আমি শিখতে এসেছিলাম জাভাস্ক্রিপ্ট ...
    এসে শুনি আরেকটা শিখতে হবে ইকমাস্ক্রিপ্ট
    কিছুদিন পরে শুনি আরেকটা আছে নাম তার টাইপস্ক্রিপ্ট....`,
        image: "https://miro.medium.com/max/1278/1*iX1Vj5jkJ-UHOA8vRWpQCA.jpeg",
        tags: ["JavaScript Journey", "JavaScript Poet"],
        slug: "https://samayunmc.medium.com/%E0%A6%AA%E0%A7%83%E0%A6%A5%E0%A6%BF%E0%A6%AC%E0%A7%80%E0%A6%B0-%E0%A6%B8%E0%A6%AC%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A7%87-%E0%A6%9B%E0%A7%8B%E0%A6%9F-%E0%A6%9F%E0%A7%87%E0%A6%95-%E0%A6%89%E0%A6%AA%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%E0%A6%83-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A7%87%E0%A6%95%E0%A6%AC%E0%A7%87%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8D%E0%A6%9F-%E0%A6%AF%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%BE-a44e0a8119e5",
        author,
        createdAt: "May 6 2021",
    },
    {
        id: 6,
        title: 'JavaScript The Tricky Parts: Part-1 💪',
        body: `Here I am covering 10 tricky topics of basic javascript ....`,
        image: "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_3.0,g_center,w_300/v1/academind.com/content/courses/javascript-tricky-parts/javascript-course-the-tricky-parts",
        tags: ["JavaScript", "JS Tricky Parts"],
        slug: "https://samayunmc.medium.com/javascript-the-tricky-parts-part-1-1a7c0521fb79",
        author,
        createdAt: "May 6 2021",
    }
];

export default blogData;