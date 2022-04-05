import axios from "axios";

const APIBASEURL = "https://www.alphavantage.co/query";

const APIFUNCTIONS = {
    detail : "OVERVIEW",
    search : "SYMBOL_SEARCH",
    dailyTrend : "TIME_SERIES_DAILY",
    currentInfo : "GLOBAL_QUOTE"
}

const API_KEY = "W4V1EPZJFD7HVBFN"

const getParams = (apiFn, keyword) => {
    let params = {
        apikey : API_KEY,
        function : APIFUNCTIONS[apiFn]
    }
    if (apiFn === "search") {
        params.keywords = keyword
    } else {
        params.symbol = keyword
    }
    return params;
}

async function fetchSuggestions(keyword) {
    const params = getParams("search", keyword)
    return axios.get(APIBASEURL, {params}).catch(e => {
        throw new Error(e);
    })
}

async function fetchStockDetail(fn, symbol) {
    const params = getParams(fn, symbol)
    return axios.get(APIBASEURL, {params}).catch(e => {
        throw new Error(e);
    })
}

export {
    fetchStockDetail,
    fetchSuggestions
}