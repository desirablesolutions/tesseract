export default function Footer() {
    return (
        <section className="py-16 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between -m-8">
            <div className="w-auto p-8">
              <img src="nightsable-assets/logos/logo.svg" alt="" />
            </div>
            <div className="w-auto p-8">
              <ul className="flex flex-wrap -m-5">
                <li className="p-5">
                  <a
                    className="inline-block text-lg font-medium text-gray-300 transition duration-300 hover:text-white"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="inline-block text-lg font-medium text-gray-300 transition duration-300 hover:text-white"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="inline-block text-lg font-medium text-gray-300 transition duration-300 hover:text-white"
                    href="#"
                  >
                    Our Story
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="inline-block text-lg font-medium text-gray-300 transition duration-300 hover:text-white"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="inline-block text-lg font-medium text-gray-300 transition duration-300 hover:text-white"
                    href="#"
                  >
                    Privacy
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="inline-block text-lg font-medium text-gray-300 transition duration-300 hover:text-white"
                    href="#"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-auto p-8">
              <div className="relative overflow-hidden border border-gray-900 focus-within:border-white rounded-3xl">
                <select
                  className="w-full py-4 pl-6 pr-16 text-gray-300 bg-transparent outline-none appearance-none placeholder-gray-50"
                  placeholder="Company"
                >
                  <option hidden={false}>English</option>
                  <option>Poland</option>
                  <option>Norway</option>
                  <option>France</option>
                </select>
                <svg
                  className="absolute transform -translate-y-1/2 right-8 top-1/2"
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6004 1.4585L9.16706 6.89183C8.52539 7.5335 7.47539 7.5335 6.83372 6.89183L1.40039 1.4585"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}