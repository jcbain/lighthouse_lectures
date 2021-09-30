// 01 so this one is a good one
// 01 it is common for us to request 
// 01 resource from some other api
// 01 in fact, we will be doing that in scheduler
// 01 so this will fetch our data from some api
// 01 and save it to state or give us an error
import {useEffect, useState} from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [result, setResult] = useState({
    data: {},
    loading: true,
    error: null
  })

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setResult(prev => ({
          ...prev,
          data: res.data,
          loading: false,
          error: null
        }))
      })
      .catch(err => {
        setResult(prev => ({
          ...prev,
          loading: false,
          error: err.message
        }))
      })
  }, [url])

  return result;
}

export default useApi;