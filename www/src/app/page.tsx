



import SearchInput from "@/views/components/SearchInput/SearchInput"
import SearchResults from "@/views/includes/SearchResults/SearchResults"



export default function Page() {

  function Container({ children }: any) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen mb-24">
        {children}
      </div>
    )
  }

  return (
    <Container>
      <div className="w-full h-24" />
      <div className="w-full h-24" />
      <SearchInput />
      <div className="w-full h-24" />
      <SearchResults />
    </Container>
  )
}