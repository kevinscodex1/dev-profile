import { EmailSharp, Phone } from "@mui/icons-material";
import grainImage from "@/assets/images/grain.jpg";
import ContactButton from "@/components/ContactButton";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{ backgroundImage: `ur6al(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16  items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl font-extrabold">
                Create something amazing with me
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let&apos;s discuss how
                I can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <ContactButton
                className="items-center font-semibold inline-flex gap-2 border-gray-950 text-white bg-gray-950 rounded-xl h-12 px-6 w-max hover:text-amber-500 hover:font-extrabold hover:border-2 hover:border-amber-500 hover:scale-105 transform transition-all duration-300"
                label="Message Me"
                icon={<EmailSharp className="size-5" />}
              />
              {/* <button className="items-center font-semibold inline-flex gap-2 border-gray-950 text-white bg-gray-950 rounded-xl h-12 px-6 w-max">
                <span>Message Me</span>
                <EmailSharp className="size-5" />
              </button> */}
              <ul className="text-sm font-semibold">
                <li>Mobile#: </li>
                <li>+639173240031</li>
                <li>Email: wbg.kevingarcia031@gmail.com </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
