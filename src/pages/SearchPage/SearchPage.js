import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {fetchSuggestions} from "../../api/fetchStockServices";
import Suggestions from "../../components/Suggestions";
import "./SearchPage.css";


function SearchPage() {
    let navigate = useNavigate();
    const [suggestions, setSuggestion] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
    const handleSearch = () => {
        navigate(`/detail/${value}`)
    }
    useEffect(() => {
        let debounceTimeout;
        if (value) {
             debounceTimeout = setTimeout(() => {
                setLoading(true)
                fetchSuggestions(value).then(data => {
                    setLoading(false);
                    const res = data.data;
                    if (res && res.bestMatches) {
                        setSuggestion(res.bestMatches);
                    }
                }).catch(err => {
                    setLoading(false);
                    setError(err.message)
                })
            }, 500)
        }
        return () => {
            clearTimeout(debounceTimeout)
        }
    }, [value])


    return (
        <>
            <h3>Search Stock</h3>
            <section className="AutoComplete">
                <section className="SearchContainer">
                    <input 
                        type="text"
                        className="SearchInputText"
                        placeholder="Search stocks"
                        value={value}
                        onChange={handleChange}
                    />
                    <button onClick={handleSearch}>Search</button>
                    
                </section>
                <section>
                    {loading && <h2>Loading...</h2>}
                    {error && <h2>error</h2>}
                    {
                        suggestions && <Suggestions suggestions={suggestions}/>
                    }
                </section>
            </section>
           
        </>
        
    )
}
export default SearchPage;