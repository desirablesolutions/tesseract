export default function NavBarBurger({ burger }: { burger?: any }) {
    return (
        <div className="group hidden w-auto p-2 lg:block">

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
            <a className="hover:rotate-180 delay-150 ease-in-out will-change-auto" href={""}>
                <svg
                    className="navbar-burger"
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width={5} height={5} rx="2.5" fill="black" />
                    <rect x={13} width={5} height={5} rx="2.5" fill="black" />
                    <rect x={13} y={12} width={5} height={5} rx="2.5" fill="black" />
                    <rect y={12} width={5} height={5} rx="2.5" fill="black" />
                </svg>
            </a>
        </div>
    )
}