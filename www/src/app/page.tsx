



import SearchResults from "@/views/includes/SearchResults/SearchResults"
export default function Page() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-24">
        <div className="w-full h-24"/>
        
        <div className="w-full h-24"/>
      <input
        type="text"
        placeholder="ex. Lavious, lustrious, laminar NavBar preset for React."
        className="w-1/3 px-4 py-2 mt-10 mb-24 text-white ease-in-out delay-100 bg-black border shadow-2xl rounded-2xl shadow-black focus:outline-blue-400"
      />
      


      <div className="w-full h-24"/>
      <SearchResults/>
    </div>
  )
}