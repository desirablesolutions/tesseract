export type ContentProps = {
    name?: string;
    url?: string;
  };
  
  export type ContentRowProps = {
    title?: string,
    description?: string,
    content?: ContentProps[]
  };
  
  export const defaultProps = {
    title: "My Portfolio",
    content: [],
  };
  
  export default function ContentRow(props: ContentRowProps) {
    return (
      <section className="pt-20 overflow-hidden pb-36">
        <div className="container px-4 mx-auto">
          <div className="mx-auto mb-20 text-center md:max-w-lg">
            <h2 className="mb-4 text-6xl font-semibold text-white font-heading sm:text-7xl">
              {props?.title ?? defaultProps.title}
            </h2>
            <p className="text-lg text-black">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/2 xl:w-1/4">
              <a className="group" href="#">
                <div className="relative flex flex-col justify-end h-full overflow-hidden group rounded-10">
                  <img
                    className="w-full mx-auto transition duration-500 ease-out transform group-hover:scale-110"
                    src="gradia-assets/images/blog/blog1.png"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2.5">
                    <div className="w-full p-5 bg-black rounded-md bg-opacity-80">
                      <h2 className="mb-2 text-xs font-medium text-gray-400 uppercase font-heading tracking-px">
                        Technology . 4 min read
                      </h2>
                      <p className="text-lg font-semibold text-white font-heading group-hover:underline">
                        You will never believe these bizarre truth of travel.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-3 md:w-1/2 xl:w-1/4">
              <a className="group" href="#">
                <div className="relative flex flex-col justify-end h-full overflow-hidden group rounded-10">
                  <img
                    className="w-full mx-auto transition duration-500 ease-out transform group-hover:scale-110"
                    src="gradia-assets/images/blog/blog2.png"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2.5">
                    <div className="w-full p-5 bg-black rounded-md bg-opacity-80">
                      <h2 className="mb-2 text-xs font-medium text-gray-400 uppercase font-heading tracking-px">
                        Technology . 4 min read
                      </h2>
                      <p className="text-lg font-semibold text-white font-heading group-hover:underline">
                        You will never believe these bizarre truth of travel.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-3 md:w-1/2 xl:w-1/4">
              <a className="group" href="#">
                <div className="relative flex flex-col justify-end h-full overflow-hidden group rounded-10">
                  <img
                    className="w-full mx-auto transition duration-500 ease-out transform group-hover:scale-110"
                    src="gradia-assets/images/blog/blog3.png"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2.5">
                    <div className="w-full p-5 bg-black rounded-md bg-opacity-80">
                      <h2 className="mb-2 text-xs font-medium text-gray-400 uppercase font-heading tracking-px">
                        Technology . 4 min read
                      </h2>
                      <p className="text-lg font-semibold text-white font-heading group-hover:underline">
                        You will never believe these bizarre truth of travel.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-3 md:w-1/2 xl:w-1/4">
              <a className="group" href="#">
                <div className="relative flex flex-col justify-end h-full overflow-hidden group rounded-10">
                  <img
                    className="w-full mx-auto transition duration-500 ease-out transform group-hover:scale-110"
                    src="gradia-assets/images/blog/blog4.png"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2.5">
                    <div className="w-full p-5 bg-black rounded-md bg-opacity-80">
                      <h2 className="mb-2 text-xs font-medium text-gray-400 uppercase font-heading tracking-px">
                        Technology . 4 min read
                      </h2>
                      <p className="text-lg font-semibold text-white font-heading group-hover:underline">
                        You will never believe these bizarre truth of travel.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  