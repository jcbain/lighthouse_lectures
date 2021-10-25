import { useState, useEffect } from 'react';

const useLocation = () => {
  const [coords, setCoords] = useState({
    lat: 0, 
    lng: 0, 
    error: null, 
    loading: true
  });

  useEffect(() => {
    const handleSuccess = (data) => {
      const latNoise = Math.random();
      const lngNoise = Math.random();
      const lat = data.coords.latitude + latNoise;
      const lng = data.coords.longitude + lngNoise;

      setCoords({
        lat: lat, 
        lng: lng, 
        loading: false, 
        error: null
      })
    }

    const handleError = (err) => {
      setCoords(prev => ({
        ...prev, 
        error: 
        err.message, 
        loading: false
      }));
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])

  return coords
};

export default useLocation;