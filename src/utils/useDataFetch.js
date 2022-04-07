import { useEffect, useState} from 'react';
import { fetchStockDetail } from '../api/fetchStockServices';

const useDataFetch = (fn, symbol, delay) => {
  const [data, setData] = useState({noData : false, apiData : {}});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let intervalId;
    const fetchDetail = () => {
        setLoading(true);
        fetchStockDetail(fn, symbol).then(data => {
            const res = data.data;
            if (Object.keys(res).length !== 0) {
              setData({noData : false, apiData : res})
            } else {
              clearInterval(intervalId)
              setData({noData : true, apiData : res})
            }
            setLoading(false);
          }).catch(error => {
            setError(error.message);
            setLoading(false);
            clearInterval(intervalId)
          })
    }
    fetchDetail();
   
    if (delay) {
      intervalId = setInterval(() => {
        fetchDetail()
      }, delay);
    }

    return () => clearInterval(intervalId)
  }, [symbol, fn]);


  return {
    data,
    loading,
    error
  }
}
export default useDataFetch;