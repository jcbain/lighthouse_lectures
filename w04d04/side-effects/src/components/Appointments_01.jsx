// (2) bring in useEffect and axios
// (5) bring in useState
import { useEffect, useState } from 'react';
import axios from 'axios';


// (1) just start with some boilerplate component code
// (1) bring it in to App.js
const Appointments = () => {
  // (6) set up out state
  // (6) it is important to note, that for at least the first 
  // (6) render you will not have any data
  // (6) however, we don't want out app to fail
  // (6) so we want our state to be of the shape that it ultimately will be
  // (6) what if it isn't, demonstrate null and do object.keys in the return
  const [appointments, setAppointments] = useState({})

  // (2) now what i want to do is fetch all of the appointments
  // (2) similar to how i made a request in the browser to 
  // (2) http://localhost:8001/api/appointments
  // (2) now we know, that this is defo a side-effect 
  // (2) it is outside of the normal rendering of the component
  // (2) we are reaching out to an external api and bring in its info
  // (2) so we have to bring in useEffect
  useEffect(() => {
    // (3) axios is a very simple interface, you just specify the
    // (3) type of request, and where you want to get the info from
    // (3) this gives us a promise, so we want to see what this look like
    // (3) chain a .then and console.log the result
    // axios.get('http://localhost:8001/api/appointments')
    //   .then(res => console.log(res))

    // (4) so that is a big object
    // (4) but all we are interested in is in the data
    // axios.get('http://localhost:8001/api/appointments')
    //   .then(res => {
    //     console.log(res.data)
        // (4) check this out and now we are successfully making
        // (4) a request to get our data

        // (5) now, what we want to do is probably put that data
        // (5) into memory because right now we are just console.logging it
        // (5) then throwing it away so we should bring in some state to 
        // (5) save it to memory
      axios.get('http://localhost:8001/api/appointments')
        // (6)
        .then(res => {
          console.log(res.data)
          setAppointments(res.data)
        })
        // (7) react is terrible at catching async infinite loops
        // (7) it can only cat infinite sync loops which is why we don't see the warnings
        // (7) so how do we get out of it? just pass an empty array
        // (7) we don't depend on anything
  }, [])
  // (7) lets try it out
  // (7) now this is great, all we want to do is have axios retrieve our appointments
  // (7) and save them to memory and that's it
  return (
    <div>
      <h1>hello from appointments</h1>
      {/* (6) demonstrate that we count the appointments */}
      <h2>Total number of appointments: { Object.keys(appointments).length }</h2>
    </div>
  )
}

export default Appointments;