import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div id="about">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded mx-auto"
                            alt="img"
                            src={require("../../../public/assests/ba.png")}
                            width={400}
                            height={500}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            About Me

                        </h1>
                        <p className=" mb-8 ">
                            Hi, I’m Muneeba Arshad, a passionate learner and aspiring full-stack web developer. I’m currently honing my skills in AI, Web 3.0, and Cloud technologies at GIAIC, where I explore various aspects of web development and cutting-edge technologies. My journey began with web development and has evolved into a fascination with building scalable and innovative solutions.
                        </p>
                        <p>
                            Through this portfolio, I aim to showcase my work, share my learning journey, and demonstrate my passion for technology. Feel free to connect with me to collaborate on exciting projects or share knowledge!
                        </p>
                        <div className="flex justify-center  ">
                            <Link
                                target="_blank"
                                href={"/assests/cv1.png"}>
                                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-4 mt-5 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                    View CV
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}