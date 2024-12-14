import { GitHub, Facebook, LinkedIn } from "@mui/icons-material";
import grainImage from "@/assets/images/grain.jpg";

const footerLinks = [
  {
    title: "Github",
    href: "https://www.facebook.com/son.hak.5492?mibextid=ZbWKwL",
    icon: <GitHub className="size-4.5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/son.hak.5492?mibextid=ZbWKwL",
    icon: <Facebook className="size-4.5" />,
  },
  {
    title: "LinkedIn",
    href: "linkedin.com/in/jan-michael-kevin-garcia-5b5a88270",
    icon: <LinkedIn className="size-4.5" />,
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip ">
      <div className="absolute -z-10 h-[300px] w-full bottom-0  bg-gradient-to-t from-emerald-300/30 to-transparent"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm md:flex-row md:justify-between flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 mt-10 md:mt-auto">
            {footerLinks.map((link) => (
              <a
                className="inline-flex items-center gap-1.5 hover:text-green-300 hover:text-bold"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
              >
                <span className="font-semibold"> {link.title} </span>
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
