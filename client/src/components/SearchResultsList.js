

function SearchResultsList({ results }) {
    return (
        <div className="mt-1" id="results_list">
            {
                results.map((result, id) => {
                    return <div key={id} id="search_result" onClick={(e) => window.location.href=`/trail/${result.id}`}>{result.name}</div>;
            })}
        </div>
    )
}

export default SearchResultsList;