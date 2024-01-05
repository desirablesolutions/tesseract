export default function SearchResultsContainer({ children }: any) {
    return (
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-3">
                {children}
            </div>
        </div>
    )
}