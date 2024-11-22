"use client"
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (

    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ['Web Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[3px] bg-blue-600"></div>
          <p className="mb-8 leading-relaxed pt-5">
            I'm a passionate frontend developer with a love for creating innovative solutions. My programming journey started a year ago, and it's been a rewarding adventure. I’m committed to continuously learning and growing, excited for the opportunities to make a positive impact through technology.
          </p>

          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 mx-auto w-[15rem]  ">
          <Image
            className="object-cover object-center custom-rounded-full"
            alt="hero"
            width={400}
            height={400}
            src={require("../../../public/assests/mee.jpg")}
          />
        </div>
      </div>
    </section>

  )
}

