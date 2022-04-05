import React from "react";
import {NavLink} from "react-router-dom";

function Suggestions({suggestions}) {
    let symbolKey = "1. symbol";
    return suggestions.map(suggestion => {
        return (
            <div key={suggestion[symbolKey]} className="SuggestionItem">
                <div className="SuggestionItemInfo">
                    {suggestion[symbolKey]} : <span>{suggestion["2. name"]}  </span>
                </div>
                <div className="SuggestionItemAction">
                    <button><NavLink to={`/detail/${suggestion[symbolKey]}`}>View Detail</NavLink></button>
                </div>
            </div>
        )
    })
}
export default Suggestions