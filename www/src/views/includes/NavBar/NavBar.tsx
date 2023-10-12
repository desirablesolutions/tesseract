import NavBarBurger from "./Burger";
import NavBarContainer from "./Container";
import NavBarFavicon from "./Favicon";


export default function NavBar() {
  return (
    <NavBarContainer>
      <NavBarFavicon />
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
        
          <div className="w-auto lg:hidden">
            <a className="relative z-10 inline-block" href="#">
              <svg
                className="text-blue-500 navbar-burger"
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
     <NavBarBurger/>

    </NavBarContainer>
  )
}
