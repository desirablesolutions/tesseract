/* eslint-disable @next/next/no-img-element */
export default function SideMenu() { 
    return (
        <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-4/6 navbar-menu sm:max-w-xs">
        <div className="fixed inset-0 bg-black navbar-backdrop opacity-80" />
        <nav className="relative z-10 h-full pt-8 overflow-y-auto bg-black px-9">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <a className="inline-block" href="#">
                    <img src="nightsable-assets/logos/logo.svg" alt="" />
                  </a>
                </div>
                <div className="w-auto p-2">
                  <a className="inline-block text-white navbar-burger" href="#">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full py-16">
              <ul>
                <li className="mb-8 font-medium tracking-tighter text-white hover:text-opacity-90">
                  <a href="#">Home</a>
                </li>
                <li className="mb-8 font-medium tracking-tighter text-white hover:text-opacity-90">
                  <a href="#">About us</a>
                </li>
                <li className="mb-8 font-medium tracking-tighter text-white hover:text-opacity-90">
                  <a href="#">Wallet</a>
                </li>
                <li className="font-medium tracking-tighter text-white hover:text-opacity-90">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8">
              <a
                className="inline-block px-8 py-4 tracking-tighter text-center text-white transition duration-300 border-2 border-white rounded-full hover:text-black hover:bg-green-400 focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40"
                href="#"
              >
                Get in touch
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
}