export default function Skills() {
    return (
        <div id="skills">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            My Skills
                        </h1>
                    </div>

                    {/* Skill - HTML */}
                    <div className="flex items-center m-4">
                        <div className="w-32">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-0">
                                HTML
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <div className="relative w-full bg-gray-300 rounded-xl h-2">
                                <div className="absolute top-0 left-0 h-2 bg-green-500 rounded-xl" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <p className="ml-2 text-sm">85%</p>
                    </div>

                    {/* Skill - CSS */}
                    <div className="flex items-center m-4">
                        <div className="w-32">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-0">
                                CSS
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <div className="relative w-full bg-gray-300 rounded-xl h-2">
                                <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-xl" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <p className="ml-2 text-sm">80%</p>
                    </div>

                    {/* Skill - JavaScript */}
                    <div className="flex items-center m-4">
                        <div className="w-32">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-0">
                                JavaScript
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <div className="relative w-full bg-gray-300 rounded-xl h-2">
                                <div className="absolute top-0 left-0 h-2 bg-yellow-500 rounded-xl" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <p className="ml-2 text-sm">75%</p>
                    </div>

                    {/* Skill - TypeScript */}
                    <div className="flex items-center m-4">
                        <div className="w-32">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-0">
                                TypeScript
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <div className="relative w-full bg-gray-300 rounded-xl h-2">
                                <div className="absolute top-0 left-0 h-2 bg-purple-500 rounded-xl" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <p className="ml-2 text-sm">75%</p>
                    </div>

                    {/* Skill - Tailwind CSS */}
                    <div className="flex items-center m-4">
                        <div className="w-32">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-0">
                                Tailwind CSS
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <div className="relative w-full bg-gray-300 rounded-xl h-2">
                                <div className="absolute top-0 left-0 h-2 bg-indigo-500 rounded-xl" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <p className="ml-2 text-sm">70%</p>
                    </div>

                    {/* Skill - Next.js */}
                    <div className="flex items-center m-4">
                        <div className="w-32">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-0">
                                Next.js
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <div className="relative w-full bg-gray-300 rounded-xl h-2">
                                <div className="absolute top-0 left-0 h-2 bg-teal-500 rounded-xl" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <p className="ml-2 text-sm">75%</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
