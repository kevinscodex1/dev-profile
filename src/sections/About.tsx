import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: <AutoStoriesIcon />,
    left: "5%",
    top: "5%",
  },
  {
    title: "Martial Arts",
    emoji: <SportsMmaIcon />,
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: <SportsEsportsIcon />,
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: <RamenDiningIcon />,
    left: "35%",
    top: "40%",
  },
  {
    title: "Exercise",
    emoji: <FitnessCenterIcon />,
    left: "70%",
    top: "45%",
  },
];

const goals = [
  {
    text: "Learn In depth Machine Learning.",
    progress: 10,
  },
  {
    text: "100 days of LeetCode.",
    progress: 30,
  },

  {
    text: "Create 20 Saas Personal Projects.",
    progress: 50,
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Discover more about who I am, what I do, and what drives me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Book Of The Month"
                description="A Monthly Personal Recommendation That Piqued My Interest and Made a Lasting Impact."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Tech Toolbox"
                description="A curated set of tools and technologies I use to build scalable,
                efficient, and innovative web applications."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName=" -translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 ">
              <CardHeader
                title="Beyond The Code"
                description="My interest and hobbies outside of the Coding realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span className="text-gray-950">{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-2 ">
              <CardHeader
                title="Current Goals"
                description="A curated set of tools and technologies I use to build scalable,
                efficient, and innovative web applications."
                className=""
              />
              <ul className="p-4 mx-auto flex flex-col gap-3">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-center gap-4">
                    {/* Circular Progress Bar */}
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      {/* Outer Circle */}
                      <div
                        className="absolute w-full h-full rounded-full"
                        style={{
                          background: `conic-gradient(from 0deg, #10b981 ${goal.progress}%, #38bdf8 ${goal.progress}%, transparent 0)`,
                        }}
                        aria-hidden="true"
                      ></div>

                      {/* Inner Circle */}
                      <div className="absolute w-9 h-9 bg-gray-800 rounded-full"></div>

                      {/* Progress Text */}
                      <span className="relative text-[10px] font-semibold text-white">
                        {goal.progress}%
                      </span>
                    </div>

                    {/* Goal Text */}
                    <p className="text-white text-sm md:text-base">
                      {goal.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
