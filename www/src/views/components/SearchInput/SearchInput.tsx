export default function SearchInput() {
  return (
<div className=" flex w-full justify-center px-6">
 
  <div className="relative flex items-center justify-center w-full max-w-lg gap-2 px-2 divide-x shadow-lg divide-white min-h-12 bg-black rounded-xl shadow-black z-10">
    <div className="flex items-center justify-center rounded-l-full">
      <img
        alt="Avatar"
        width={32}
        height={32}
        className="relative flex rounded-full shrink-0"
        src="https://vercel.com/api/www/avatar/xLbb2gZ5WR6eFn77T3MKngv5?s=64"
      />
    </div>
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
              spellCheck="false"
              rows={1}
              placeholder="A chat application with a sidebar in dark mode"
              style={{ height: "44px !important" }}
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
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5 3V2.25H15V3V10C15 10.5523 14.5522 11 14 11H3.56062L5.53029 12.9697L6.06062 13.5L4.99996 14.5607L4.46963 14.0303L1.39641 10.9571C1.00588 10.5666 1.00588 9.93342 1.39641 9.54289L4.46963 6.46967L4.99996 5.93934L6.06062 7L5.53029 7.53033L3.56062 9.5H13.5V3Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
 
</div>

    
  )
}