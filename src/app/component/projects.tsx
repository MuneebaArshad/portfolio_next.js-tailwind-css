import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";


export default function Projects() {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              My Projects
            </h1>

          </div>
          <div className="flex flex-wrap -m-8 -mt-12 ml-4 mr-4 flex-col sm:flex-row sm:ml-14 sm:mr-14">


            {/****Projects****/}

            {/* project1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/resume_build.png")}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-lg"></div>
                <div className="px-8 py-10 relative z-30 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Resume Builder | Web Application
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed -mb-4">
                    A simple web app to create professional resumes by filling out personal details and generating a formatted resume. Built using HTML, CSS, and JavaScript.
                  </p>
                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                    <Link
                      target="_blank"
                      href={"https://www.linkedin.com/in/muneeba-arshad29/"}
                      className="text-gray-500 mt-6 "
                    >
                      <GrLinkedin className="text-2xl hover:text-[#0077B5]" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>


            {/* project2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/todo_html.jpeg")}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-lg"></div>
                <div className="px-8 py-10 relative z-30 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    To-Do List | Web Application
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    To-Do List Project
                  </h1>
                  <p className="leading-relaxed mb-10">
                    This web application allows users to manage their daily tasks by adding, editing, and deleting tasks.
                  </p>

                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                    <Link
                      target="_blank"
                      href={"https://www.linkedin.com/posts/muneeba-arshad29_governorsindhkamrankhantessoriinitiativeforcloudappliedgenerativeai-activity-7225142904569163778-ZYON?utm_source=share&utm_medium=member_desktop"}
                      className="text-gray-500 mt-6"
                    >
                      <GrLinkedin className="text-2xl hover:text-[#0077B5]" />
                    </Link>
                    <Link
                      target="_blank"
                      href={"https://github.com/MuneebaArshad/todo-list-app.git"}
                      className="text-gray-500 mt-6"
                    >
                      <FaGithub className="text-2xl hover:text-[#070e11]" />

                    </Link>


                  </span>
                </div>
              </div>
            </div>



            {/* project3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/calculator_html.png")}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-lg"></div>
                <div className="px-8 py-10 relative z-30 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Calculator Project | Web Application
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Calculator Project
                  </h1>
                  <p className="leading-relaxed mb-5">
                    A web-based calculator that handles basic arithmetic operations. Created with HTML, CSS, and JavaScript.
                  </p>

                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                    <Link
                      target="_blank"
                      href={"https://www.linkedin.com/in/muneeba-arshad29/"}
                      className="text-gray-500 mt-6"
                    >
                      <GrLinkedin className="text-2xl hover:text-[#0077B5]" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>


            {/* project4 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/atm.jpg")}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-lg"></div>
                <div className="px-8 py-10 relative z-30 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    TypeScript | Console Application
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    ATM Machine
                  </h1>
                  <p className="leading-relaxed">
                    This project simulates an ATM machine's basic functionalities. Additionally, to view an ATM Machine, run the following command.
                  </p>
                  <br />
                  <ul>
                    <li><strong>Run Countdown Timer </strong><br /> <code>npx m2ar9_atm_project</code></li>
                  </ul>

                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                    <Link
                      target="_blank"
                      href={"https://www.linkedin.com/posts/muneeba-arshad29_governorsindhkamrankhantessoriinitiativeforcloudappliedgenerativeai-activity-7179890085532758016-zPqZ?utm_source=share&utm_medium=member_desktop"}
                      className="text-gray-500 mt-6"
                    >
                      <GrLinkedin className="text-2xl hover:text-[#0077B5]" />
                    </Link>
                    <Link
                      target="_blank"
                      href={"https://github.com/MuneebaArshad/ATM-Machine.git"}
                      className="text-gray-500 mt-6"
                    >
                      <FaGithub className="text-2xl hover:text-[#070e11]" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>


            {/* project5 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/todo_list.jpg")}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-lg"></div>
                <div className="px-8 py-10 relative z-30 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    TypeScript | Console Application
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    To-Do List
                  </h1>
                  <p className="leading-relaxed">
                    This project simulates a to-do list application for task management. To use the to-do list, run the following command:
                  </p>
                  <br />
                  <ul>
                    <li><strong>Run To-Do List </strong><br /> <code>npx m2ar9_todo-list</code></li>
                  </ul>

                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                    <Link
                      target="_blank"
                      href={"https://www.linkedin.com/posts/muneeba-arshad29_governorsindhkamrankhantessoriinitiativeforcloudappliedgenerativeai-activity-7180370663000399872-Vckd?utm_source=share&utm_medium=member_desktop"}
                      className="text-gray-500 mt-6"
                    >
                      <GrLinkedin className="text-2xl hover:text-[#0077B5]" />
                    </Link>
                    <Link
                      target="_blank"
                      href={"https://github.com/MuneebaArshad/todo-list.git"}
                      className="text-gray-500 mt-6"
                    >
                      <FaGithub className="text-2xl hover:text-[#070e11]" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>



            {/* project6 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/ts_cal.png")}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-lg"></div>
                <div className="px-8 py-10 relative z-30 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    TypeScript | Console Application
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Calculator
                  </h1>
                  <p className="leading-relaxed">
                    This project simulates a basic calculator with arithmetic operations. To run the calculator, use the following command:
                  </p>
                  <br />
                  <ul>
                    <li><strong>Run Calculator </strong><br /> <code>npx m2ar9_simple_calculator</code></li>
                  </ul>

                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                    <Link
                      target="_blank"
                      href={"https://www.linkedin.com/feed/update/urn:li:activity:7177010936434593792?utm_source=share&utm_medium=member_desktop"}
                      className="text-gray-500 mt-6"
                    >
                      <GrLinkedin className="text-2xl hover:text-[#0077B5]" />
                    </Link>
                    <Link
                      target="_blank"
                      href={"https://github.com/MuneebaArshad/simple_calculator.git"}
                      className="text-gray-500 mt-6"
                    >
                      <FaGithub className="text-2xl hover:text-[#070e11]" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>




            {/* project 7*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/NumberGuess.jpeg")}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-lg"></div>
                <div className="px-8 py-10 relative z-30 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    TypeScript | Console Application
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Number Guessing Game
                  </h1>
                  <p className="leading-relaxed">
                    This project allows users to play a number guessing game. To play the game, run the following command:
                  </p>
                  <br />
                  <ul>
                    <li><strong>Run Number Guessing Game </strong><br /> <code>npx muneeba29_num_guessing_game</code></li>
                  </ul>

                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                    <Link
                      target="_blank"
                      href={"https://www.linkedin.com/posts/muneeba-arshad29_governorsindhkamrankhantessoriinitiativeforcloudappliedgenerativeai-activity-7178921460642553856-JdHe?utm_source=share&utm_medium=member_desktop"}
                      className="text-gray-500 mt-6"
                    >
                      <GrLinkedin className="text-2xl hover:text-[#0077B5]" />
                    </Link>
                    <Link
                      target="_blank"
                      href={"https://github.com/MuneebaArshad/cli-Number-Guessing-Game.git"}
                      className="text-gray-500 mt-6"
                    >
                      <FaGithub className="text-2xl hover:text-[#070e11]" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>




            {/* project5 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/c_d_t.png")}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-lg"></div>
                <div className="px-8 py-10 relative z-30 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    TypeScript | Console Application
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Countdown Timer
                  </h1>
                  <p className="leading-relaxed">
                    This project simulates a countdown timer's basic functionalities. To run the countdown timer, use the following command:
                  </p>
                  <br />
                  <ul>
                    <li><strong>Run Countdown Timer </strong><br /> <code>npx npx m2ar9_countdown_timer</code></li>
                  </ul>

                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                    <Link
                      target="_blank"
                      href={"https://www.linkedin.com/posts/muneeba-arshad29_governorsindhkamrankhantessoriinitiativeforcloudappliedgenerativeai-activity-7204941014174691328-_zg4?utm_source=share&utm_medium=member_desktop"}
                      className="text-gray-500 mt-6"
                    >
                      <GrLinkedin className="text-2xl hover:text-[#0077B5]" />
                    </Link>
                    <Link
                      target="_blank"
                      href={"https://github.com/MuneebaArshad/Countdown-Timer.git"}
                      className="text-gray-500 mt-6"
                    >
                      <FaGithub className="text-2xl hover:text-[#070e11]" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>




            {/* project9 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/Currency-converter.png")}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-lg"></div>
                <div className="px-8 py-10 relative z-30 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    TypeScript | Console Application
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Currency Converter
                  </h1>
                  <p className="leading-relaxed">
                    This project simulates a currency converter with various currency options. To run the currency converter, use the following command:
                  </p>
                  <br />
                  <ul>
                    <li><strong>Run Currency Converter </strong><br /> <code>npx m2ar9_currency_converte</code></li>
                  </ul>

                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                    <Link
                      target="_blank"
                      href={"https://www.linkedin.com/posts/muneeba-arshad29_build-amazing-things-activity-7186120103036370947-CiQ1?utm_source=share&utm_medium=member_desktop"}
                      className="text-gray-500 mt-6"
                    >
                      <GrLinkedin className="text-2xl hover:text-[#0077B5]" />
                    </Link>
                    <Link
                      target="_blank"
                      href={"https://github.com/MuneebaArshad/Currency-Converter.git"}
                      className="text-gray-500 mt-6"
                    >
                      <FaGithub className="text-2xl hover:text-[#070e11]" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>




          </div>
        </div>
      </section>
    </div>
  )
}