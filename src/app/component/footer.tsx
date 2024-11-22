import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { GrLinkedin } from "react-icons/gr";
 
import { SiGmail } from "react-icons/si";

export default function Footer() {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image
                            src="/logo/logo1.jpg"
                            alt="logo MA"
                            width={70}
                            height={70} />
                        <span className="ml-3 text-xl">Muneeba Arshad</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 Muneeba Arshad
                    </p>
                    <span className="inline-flex gap-2 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                        <Link
                            target="_blank"
                            href={"https://github.com/MuneebaArshad"} className="text-black ">
                            <FaGithub className="text-2xl  hover:text-[#0077B5]" />
                        </Link>
                        <Link
                            target="_blank"
                            href={"https://www.linkedin.com/in/muneeba-arshad29/"} className="text-black ">
                            <GrLinkedin className="text-2xl  hover:text-[#0077B5]" />
                        </Link>

                        

                    </span>
                </div>
            </footer>
        </div>
    )
}    
