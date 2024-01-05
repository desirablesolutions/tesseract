import SearchResultsContainer from "./Container"
import SearchResultsGrid from "./SearchResultsGrid"
import SearchResult from "./SearchResult"

export default function SearchResults() {

  function RenderResults() {
    const data = new Array(12).fill(3).map((_, i) => i);
  
    // Function to divide an array into chunks
    const chunk = (arr: any, size: any) =>
      Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );
  
    const chunkedData = chunk(data, 3);
  
    return (
      <>
        {chunkedData.map((chunk, i) => (
          <SearchResultsGrid key={i}>
            {chunk.map((item: any, j:any) => (
              <SearchResult key={j} data={item} />
            ))}
          </SearchResultsGrid>
        ))}
      </>
    );
  }
     return  <SearchResultsContainer>
   

     <RenderResults/>
     
     
           
           </SearchResultsContainer>
      
   

}