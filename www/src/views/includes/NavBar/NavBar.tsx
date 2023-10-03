
export default function NavBar() {
  return (<section>
    <div className="container px-4 mx-auto bg-black ">
      <div className="flex items-center justify-between py-3 lg:py-8">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto">
              <a className="relative z-10 inline-block" href="#">
                <img
                  className='h-14'
                  src="https://publish-01.obsidian.md/access/72f64ee84c91516a6793312af11bb9c9/Meta/Media/tesseract/tesseract-logo.png?ts=1695783600000&sig=bb153b3cc0992c1427e3496692561dc15c33f3bb3e33cf48d0e622fe0a92485c" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-auto lg:block">
              <ul className="flex items-center mr-12">
                <li className="mr-12 font-medium tracking-tighter text-white hover:text-opacity-90">
                  <a href="#">Home</a>
                </li>
                <li className="mr-12 font-medium tracking-tighter text-white hover:text-opacity-90">
                  <a href="#">About us</a>
                </li>
                <li className="mr-12 font-medium tracking-tighter text-white hover:text-opacity-90">
                  <a href="#">Wallet</a>
                </li>
                <li className="font-medium tracking-tighter text-white hover:text-opacity-90">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="w-auto lg:hidden">
              <a className="relative z-10 inline-block" href="#">
                <svg
                  className="text-green-500 navbar-burger"
                  width={51}
                  height={51}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={56} height={56} rx={28} fill="currentColor" />
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden w-auto p-2 lg:block">
          <a href="#">
            <svg
              className="navbar-burger"
              width={18}
              height={17}
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={5} height={5} rx="2.5" fill="white" />
              <rect x={13} width={5} height={5} rx="2.5" fill="white" />
              <rect x={13} y={12} width={5} height={5} rx="2.5" fill="white" />
              <rect y={12} width={5} height={5} rx="2.5" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </div>

  </section>
  )
}
