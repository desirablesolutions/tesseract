export default function SearchInput() {
  return (
<div className=" flex w-full justify-center px-6">
 
  <div className="relative flex items-center justify-center w-full max-w-lg gap-2 px-2 divide-x shadow-md divide-white min-h-12 bg-black bg-opacity-80 hover:bg-opacity-100 rounded-3xl shadow-black z-10">
  
    <div className="flex items-center self-end flex-1 min-w-0">
      <form className="w-full h-full [&_textarea]:pr-11">
        <div
          className="relative w-full flex items-center transition-all duration-300 min-h-full h-fit"
          style={{ height: 44 }}
        >
          <label htmlFor="textarea-input" className="sr-only">
            Prompt
          </label>
          <div className="relative flex flex-1 min-w-0 self-start">
            <div className="flex-[1_0_50%] min-w-[50%] overflow-x-visible -ml-[100%] opacity-0 invisible pointer-events-none">
              <div className="pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm opacity-0 invisible pointer-events-none">
                A chat application with a sidebar in dark mode
              </div>
            </div>
            <textarea
              id="home-prompt"
              maxLength={1000}
              className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm"
              spellCheck="true"
              rows={1}
              placeholder="a minimalistic hero section..."
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            id="send-button"
            className="flex items-center outline-none transition-colors focus-visible:ring-gs=gray-400 focus-visible:ring-1 bg-gs-gray-700 text-gs-background-1000 justify-center w-8 h-8 rounded-full shrink-0 hover:bg-gs-gray-600 disabled:opacity-50 disabled:hover:bg-gs-gray-700"
          >
            <span className="sr-only">Send</span>
            <svg
  fill="#FFFFFF"
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 511.986 511.986"
  xmlSpace="preserve"
  width="150px"
  height="150px"
>
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <g>
      {" "}
      <g>
        {" "}
        <path d="M209.297,5.229C93.887,5.229,0,99.121,0,214.526C0,329.93,93.887,423.822,209.297,423.822 c115.409,0,209.297-93.892,209.297-209.297C418.593,99.121,324.706,5.229,209.297,5.229z M209.297,402.893 c-103.862,0-188.367-84.5-188.367-188.367c0-103.866,84.505-188.367,188.367-188.367c103.861,0,188.367,84.501,188.367,188.367 C397.664,318.392,313.158,402.893,209.297,402.893z" />{" "}
      </g>{" "}
    </g>{" "}
    <g>
      {" "}
      <g>
        {" "}
        <rect
          x="431.726"
          y="348.717"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -179.4635 440.6595)"
          width="20.927"
          height="176.488"
        />{" "}
      </g>{" "}
    </g>{" "}
  </g>
</svg>


          </button>
        </div>
      </form>
    </div>
  </div>
 
</div>

    
  )
}