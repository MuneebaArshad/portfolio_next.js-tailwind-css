import Link from "next/link";
import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/logo/logo1.jpg"
              alt="logo MA"
              width={70}
              height={70} />
            <span className="ml-3 text-xl">Muneeba Arshad</span>
          </a>
          <nav className="font-bold md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-500">Home</Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-500">About</Link>
            <Link href={"#skills"} className="mr-5 hover:text-blue-500">Skills</Link>
            <Link href={"#project"} className="mr-5 hover:text-blue-500">Projects</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-500">Contact</Link>
          </nav>


        </div>
      </header></div>
  )
}


