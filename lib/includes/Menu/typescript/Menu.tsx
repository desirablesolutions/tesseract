import * from "react"


export default function Menu() {
    return (
        <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-4/6 navbar-menu sm:max-w-xs">
            <div className="fixed inset-0 bg-gray-800 navbar-backdrop opacity-80" />
            <nav className="relative z-10 h-full py-8 bg-white px-9">
                <div className="flex flex-wrap justify-between h-full">
                    <div className="w-full">
                        <div className="flex items-center justify-between -m-2">
                            <div className="w-auto p-2">
                                <a className="inline-block" href="#">
                                    <img
                                        src="gradia-assets/logos/gradia-name-black.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="w-auto p-2">
                                <a className="navbar-burger" href="#">
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 18L18 6M6 6L18 18"
                                            stroke="#111827"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full py-8 font-sans text-black">
                        <ul>
                            <li className="mb-12">
                                <a
                                    className="text-lg font-medium text-gray-900 font-heading hover:text-gray-700"
                                    href="#"
                                >
                                    Features
                                </a>
                            </li>
                            <li className="mb-12">
                                <a
                                    className="text-lg font-medium text-gray-900 font-heading hover:text-gray-700"
                                    href="#"
                                >
                                    Solutions
                                </a>
                            </li>
                            <li className="mb-12">
                                <a
                                    className="text-lg font-medium text-gray-900 font-heading hover:text-gray-700"
                                    href="#"
                                >
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-lg font-medium text-gray-900 font-heading hover:text-gray-700"
                                    href="#"
                                >
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-end w-full">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                                    <div className="px-5 py-2 rounded-10">
                                        <p>Login</p>
                                    </div>
                                </button>
                            </div>
                            <div className="w-full">
                                <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                                    <div className="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full group-hover:-translate-y-0 bg-gradient-cyan" />
                                    <div className="px-5 py-2 bg-white rounded-lg">
                                        <p className="relative z-10">Start Free Trial</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}