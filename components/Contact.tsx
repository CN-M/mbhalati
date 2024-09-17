import location from "@/public/contact/Frame-1.svg";
import email from "@/public/contact/Frame.svg";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

export const ContactMe = () => {
  return (
    <section
      id="contact"
      className="flex lg:flex-row flex-col items-center justify-center h-full w-full bg-primary lg:px-8 lg:py-32 2xl:space-x-64 xl:space-x-16 lg:space-x-10 xl:px-16 md:px-32 px-6 py-8 md:space-y-8 space-y-4"
    >
      <div className="text-white 2xl:w-1/3 xl:w-1/2 lg:w-4/5 space-y-2">
        <h3 className="text-heading-4 lg:text-left text-center md:text-heading-3 leading-heading font-light">
          Contact Me
        </h3>
        {/* <div className="text-paragraph-sm md:text-paragraph lg:text-heading-6 leading-paragraph md:space-y-4 space-y-4"> */}
        <div className="text-paragraph-sm md:text-paragraph leading-paragraph md:space-y-4 space-y-4">
          <div>
            <p>
              I don’t know why you’d ever want to contact me, but if for some
              reason you do here’s my <strong>email</strong> and a{" "}
              <strong>contact form</strong>.
            </p>
            <br />
            <p>
              Just don’t try and sign me up for Pornhub or something. I already
              have an account. 💁🏾‍♂️
            </p>
            <br />
            <p>
              I’m kidding! I’m kidding! <strong>Please</strong> email me and
              offer me a job. I owe people money.
            </p>
          </div>
          <hr />
          <div className="space-y-1 lg:space-y-2 text-paragraph-sm md:text-paragraph leading-paragraph">
            <Link href="mailto:cn.mbhalati@gmail.com">
              <div className="flex items-center lg:space-x-2 space-x-1">
                <Image
                  src={email}
                  alt="Brand"
                  className="lg:h-6 lg:w-6 h-4 w-4"
                />

                <p>cn.mbhalati@gmail.com</p>
              </div>
            </Link>
            <div className="flex items-center lg:space-x-2 space-x-1">
              <Image
                src={location}
                alt="Brand"
                className="lg:h-6 lg:w-6 h-4 w-4"
              />
              <p>Limpopo, South Africa</p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};
