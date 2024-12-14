import darkSaasLandingPage from "@/assets/images/arcana-1.png";
import lightSaasLandingPage from "@/assets/images/arcana-2.png";
import aiStartupLandingPage from "@/assets/images/arcana-3.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

//placeholders
const portfolioProjects = [
  {
    company: "Tech Stack: ",
    year: "HTML, JS, CSS",
    title: "Light Saas Landing Page",
    results: [
      {
        title:
          "Use semantic HTML to create a clear, accessible, and SEO-friendly structure.",
      },
      {
        title:
          "Implement responsive design with CSS (Flexbox, Grid, and media queries) for a consistent layout across devices.",
      },
      {
        title:
          "Optimize assets and code to improve performance and ensure faster load times.",
      },
    ],
    link: "https://github.com/kevinscodex1/Landing-Page",
    image: darkSaasLandingPage,
  },
  {
    company: "Tech Stack: ",
    year: "React, JS, Laravel, PHP",
    title: "Online Library",
    results: [
      {
        title:
          "Design a scalable database schema to efficiently store and retrieve book records, user data, and transactions.",
      },
      {
        title:
          "Build a RESTful API to handle CRUD operations, user authentication, and book management on the backend.",
      },
      {
        title:
          "Implement responsive UI and optimize performance for seamless access across devices and reliable data delivery.",
      },
    ],
    link: "https://github.com/kevinscodex1/Aracana-Archive-Phase3",
    image: lightSaasLandingPage,
  },
  {
    company: "Tech Stack: ",
    year: "React, 3js, JSX, JS",
    title: "3D Web Profile",
    results: [
      {
        title:
          "Utilize Three.js to create interactive 3D elements and animations for an engaging user experience.",
      },
      {
        title:
          "Apply advanced CSS animations and JavaScript techniques to enhance visual storytelling and user interaction.",
      },
      {
        title:
          "Incorporate design principles and color theory to ensure aesthetic harmony, accessibility, and brand consistency.",
      },
    ],
    link: "https://github.com/kevinscodex1/3d_portfolio",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="Showcasing projects and applications that highlight my journey of
          continuous skill growth and development."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 sm:gap-1 font-bold uppercase tracking-wides text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 md:w-auto px-6 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Github Repo Link</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className=" border border-white/20 rounded-3xl mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
