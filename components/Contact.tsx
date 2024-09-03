import email from "@/public/icons/envelope-regular.svg";
import location from "@/public/icons/location-dot-solid.svg";
import Image from "next/image";
import Link from "next/link";
import { SendMessage } from "./Buttons";

export const ContactMe = () => {
  return (
    <section className="flex justify-center h-screen w-full bg-primary p-64 space-x-32">
      <div className="text-white w-1/3 space-y-6">
        <h3 className="text-heading-3 font-light">Contact Me</h3>
        <div className="text-paragraph">
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
            I’m kidding! I’m kidding! Please email me and offer me a job. I owe
            people money.
          </p>
          <br />
          <hr />
          <br />
          <div className="space-y-2">
            <Link href="mailto:c.n.mbhalati@gmail.com">
              <div className="flex items-center space-x-2">
                <Image src={email} alt="Brand" height={24} width={24} />

                <p>c.n.mbhalati@gmail.com</p>
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <Image src={location} alt="Brand" height={24} width={24} />
              <p>Limpopo, South Africa</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-1/3 ">
        <form className="flex flex-col h-full text-white text-paragraph leading-paragraph space-y-4">
          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="">Name</label>
            <input
              className="p-4 rounded-lg"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="">Email Address</label>
            <input
              className="p-4 rounded-lg"
              type="email"
              placeholder="Email Adress"
              required
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="">Message</label>
            <textarea
              className="h-auto w-full p-4 rounded-lg"
              placeholder="We've been trying to reach you about your car's extended warranty."
            />
          </div>
          <SendMessage />
        </form>
      </div>
    </section>
  );
};
