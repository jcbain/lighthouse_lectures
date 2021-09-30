// import { useEffect, useState } from 'react';
import useLocation from '../hooks/useLocation';

const Location = () => {
  // const coords = useLocation();
  const {lat, lng, error, loading} = useLocation()
  // const [coords, setCoords] = useState({
  //   lat: 0, 
  //   lng: 0, 
  //   error: null, 
  //   loading: true
  // });

  // useEffect(() => {
  //   const handleSuccess = (data) => {
  //     const latNoise = Math.random();
  //     const lngNoise = Math.random();
  //     const lat = data.coords.latitude + latNoise;
  //     const lng = data.coords.longitude + lngNoise;

  //     setCoords({
  //       lat: lat, 
  //       lng: lng, 
  //       loading: false, 
  //       error: null
  //     })
  //   }

  //   const handleError = (err) => {
  //     setCoords(prev => ({
  //       ...prev, 
  //       error: 
  //       err.message, 
  //       loading: false
  //     }));
  //   }
  //   navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  // }, [])

  return (
    <div>
      <h1>Location Component</h1>
      {/* {coords.loading && <p>loading</p>}
      {(!coords.error && !coords.loading) && <p>my location is {coords.lat}, {coords.lng}</p>}
      {coords.error && <p>{coords.error}</p>} */}
      {loading && <p>loading</p>}
      {(!error && !loading) && <p>my location is {lat}, {lng}</p>}
      {error && <p>{error}</p>}

    </div>
  )
}

export default Location;