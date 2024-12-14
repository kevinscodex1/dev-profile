import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { BulletList } from "@/components/BulletList";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
  ChartPieIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import { Fragment } from "react";

const workExperiences = [
  {
    company: "COLLABERA TECHNOLOGIES",
    position: "presently as a FULLSTACK SOFTWARE ENGINEER",
    text: "Works with a cross-functional engineering team to design, build, and maintain a scalable and user-friendly application. Develops secure and robust features to ensure data integrity and system reliability. Continuously enhances the application's quality-of-life (QoL) features to optimize user efficiency. Identifies and implements solutions to improve performance, usability, and scalability.",
    avatar: <CommandLineIcon />,
  },
  {
    company: "CoDev-(Complete Development)",
    position: "as a MERN STACK ENGINEER",
    text: "Built and maintained a sustainable learning web application. Designed and implemented key features, including learning objects, dashboard optimization, and a UI/UX revamp. Developed and integrated RESTful APIs to optimize data collection with the backend. Updated and overhauled deprecated packages and plugins to ensure system stability and performance.",
    avatar: <ChartPieIcon />,
  },
  {
    company: "Synergyinfoconnect",
    position: "as a FULLSTACK DEVELOPER",
    text: "Overhauled the dashboard to enhance user experience and optimize functionality, while redesigning the app’s color scheme to ensure visual consistency and improved accessibility. Additionally, developed a comprehensive tutorial management feature to streamline content delivery, improve user onboarding, and provide a more intuitive learning experience.",
    avatar: <ComputerDesktopIcon />,
  },
  {
    company: "MassiveSuccess Merchandising",
    position: "as a WEB DEVELOPER / IT SPECIALIST",
    text: "Collaborated with cross-functional teams, including designers, product managers, and developers, to create high-quality products. Responsibilities included developing and maintaining web applications using React.js and related technologies, integrating APIs to ensure scalability and dynamic functionality, and streamlining the company's communication channels for improved efficiency.",
    avatar: <CodeBracketIcon />,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="My Professional Journey"
          eyebrow="Work Experience"
          description="An overview of roles, projects, and achievements that have forged my professional journey and refined my skills"
        />
        <div className="mt-12 lg:mt-24 flex overflow-x-clip mask-image py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] ">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {workExperiences.map((workExperience) => (
                  <Card
                    key={`${workExperience.company}-${index}`}
                    className="p-6 max-w-xs md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 inline-flex text-emerald-500">
                        {workExperience.avatar}
                      </div>
                      <div>
                        <div className="lg:text-lg font-bold sky-text-gradient">
                          {workExperience.company}
                        </div>
                        <div className="text-sm text-white/50">
                          {workExperience.position}
                        </div>
                      </div>
                    </div>
                    <BulletList
                      text={workExperience.text}
                      className=" mt-4 text-sm md:text-base"
                    />
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
