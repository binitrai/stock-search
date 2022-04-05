import { useEffect, useState} from 'react';
import { fetchStockDetail } from '../api/fetchStockServices';

const useDataFetch = (fn, symbol) => {
  const [data, setData] = useState({noData : false, apiData : {}});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchStockDetail(fn, symbol).then(data => {
      const res = data.data;
      if (Object.keys(res).length !== 0) {
        setData({noData : false, apiData : res})
      } else {
        setData({noData : true, apiData : res})
      }
      setLoading(false);
    }).catch(error => {
      setError(error.message);
      setLoading(false);
    })
    
  }, [symbol, fn]);
  return {
    data,
    loading,
    error
  }
}
export default useDataFetch;