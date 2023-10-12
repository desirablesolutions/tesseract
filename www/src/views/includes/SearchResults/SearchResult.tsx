export default function SearchResult(props: any) {
    return (
        <div className="w-full p-3">
        <div className="px-6 py-8 border black shadow-md shadow-black cursor-pointer hover:shadow-2xl ease-in-out delay-75 rounded-xl">
          <div className="flex flex-wrap items-center mb-3 -m-3">
            <div className="w-auto p-3">
              <img
                src="nightsable-assets/images/cards/avatar10.png"
                alt=""
              />
            </div>
            <div className="w-auto p-3">
              <h2 className="text-2xl text-black">NavBar</h2>
              <p className="text-md text-blue-700">v10.11.23</p>
            </div>
          </div>
          <p className="mb-4 text-white">
            Im convinced that investing in education and acquiring new
            skills is a key factor in building a stable financial future.
          </p>
          <p className="mb-4 text-white">
            Managing finances can be stressful.
          </p>
          <div className="flex flex-wrap items-center -m-2.5 mb-1.5">
            <div className="w-auto p-2.5">
              <p className="text-sm text-gray-300">5:48 PM</p>
            </div>
            <div className="w-auto p-2.5">
              <p className="text-sm text-gray-300">Sep 15, 2023</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center -m-2.5">
            <div className="flex flex-wrap items-center w-auto p-2.5">
              <svg
                className="mr-2.5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z"
                  stroke="#9F9FA0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm text-gray-300">232 like</p>
            </div>
            <div className="flex flex-wrap items-center w-auto p-2.5">
              <svg
                className="mr-2.5"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z"
                  stroke="#9F9FA0"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm text-gray-300">81 com.</p>
            </div>
          </div>
        </div>
      </div>
    )
}