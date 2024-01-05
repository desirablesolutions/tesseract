export default function NavBarContainer({ children }: any) {
    return (
        <section className="z-50">
            <div className="container px-4 mx-auto fixed top-0  backdrop-blur-sm left-0 w-full z-50 text-black bg-opacity-30">
                <div className="flex items-center justify-between py-2 lg:py-8">

                    {children}

                </div>
            </div>

        </section>
    )
}