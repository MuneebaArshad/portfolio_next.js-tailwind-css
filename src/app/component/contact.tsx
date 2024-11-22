export default function Contact() {
    return (
        <div id="Contact">
            <section className="text-gray-700 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Get In Touch
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
                            We would love to hear from you! Please fill out the form below and we'll get in touch as soon as possible.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            {/* Name Field */}
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            {/* Email Field */}
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            {/* Message Field */}
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write your message here..."
                                        className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg transition-all duration-200">
                                    Send Message
                                </button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <p className="text-gray-500">
                                    For urgent inquiries, please contact us directly at{' '}
                                    <a href="mailto:support@example.com" className="text-blue-500 underline  hover:text-blue-600">
                                    muneebaarshad292@gmail.com
                                    </a>
                                  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
