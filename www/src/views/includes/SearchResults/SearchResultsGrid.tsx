export default function SearchResultsGrid({ children}: any) {
    return<div className="w-full p-3 md:w-1/2 lg:w-1/4">
    <div className="flex flex-wrap -m-3">
     {children}
    </div>
  </div>
}