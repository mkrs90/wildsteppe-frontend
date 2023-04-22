import { useState } from 'react';

function SearchBar({ setResults }) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch('https://8000-mkrs90-wildsteppebacken-vpz7io4uhwz.ws-us95.gitpod.io/api/trails/').then((response) => response.json()).then(json => {
            const results = json.filter((trail) => {
                return value && trail && trail.name && trail.name.toLowerCase().includes(value)
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

  return (
    <>
    {/* This is the actual search input */}
        <div id="search_bar" className="">
            <i className="fa fa-search" id="searchBar_icon"></i>
        <input
            placeholder="Enter City or Trail Name..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        />
        </div>
    {/* This will be the dropdown box for the search results */}
        <div id="search_results"></div>
    </>
  );
}

export default SearchBar;
