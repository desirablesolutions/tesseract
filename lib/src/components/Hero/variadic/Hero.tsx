import { defineVariadicComponent } from "blakprint";


export default function defineVariadicHeroComponent(props: any) {
    const { title } = props;
    const Title = () => {
      return (
        <h1 className="mb-20 font-medium text-white text-8xl xl:text-8xl 3xl:text-9xl">
          {title ?? defaultProps.title}
        </h1>
      );
    };
  
    return (
      <section className="relative pb-24 overflow-hidden font-serif md:pb-52">
        <div className="h-16">
          <div className="absolute top-0 left-1/2">
            <div className="w-px h-16 bg-gray-900" />
            <div className="w-px h-24 bg-white" />
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="">
          <h1 className="mb-20 font-medium text-white text-9xl ">
          {title ?? defaultProps.title}
        </h1>
            <div>
              {props?.cta?.secondary ? (
                <a className="inline-flex items-center mb-20 text-white" href="#">
                  <span className="mr-4">{props?.cta?.secondary?.name}</span>
                  <div />
                </a>
              ) : (
                <a className="inline-flex items-center mb-20 text-white" href="#">
                  <span className="mr-4">
                    {defaultProps?.cta?.secondary?.name}
                  </span>
                  <div />
                </a>
              )}
            </div>
            {props?.cta ? (
              <a
                className="inline-block w-full py-4 font-medium text-center text-white transition bg-indigo-500 rounded sm:w-auto px-7 hover:bg-indigo-600 duration-250"
                href={props?.cta.primary?.url}
              >
                {props?.cta?.primary.name}
              </a>
            ) : null}
          </div>
        </div>
      </section>
    );
  }