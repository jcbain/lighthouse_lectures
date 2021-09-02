import { useEffect, useState } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState({})

  // (1) what if we built out a way to provide an id and
  // (1) from that id, we show the appointment details
  // (1) it would make sense to setup a couple more state variables
  // (1) one for the selected appoinment (object)
  // (1) another for the inputed appointment id
  const [selectedAppointment, setSelectedAppointment ] = useState(null);
  const [ apptId, setApptId ] = useState("")

  useEffect(() => {
    axios.get('http://localhost:8001/api/appointments')
      .then(res => {
        console.log(res.data)
        setAppointments(res.data)
      })

  }, [])

  // (3) now we need to set up a side effect that will listen for
  // (3) apptId to change and to filter the appointments from this
  // (3) given appointment id to a target appointment
  // (3) then we sent the selectedAppointment
  useEffect(() => {
    // (3) let's first see if we are listening for this change
    console.log('apparently the id has changed')

    // (4) now, let's filter our object
    // (4) and log our appointment
    const targetAppointment = appointments[apptId];
    console.log(targetAppointment);

    // (4) now we want to save the appointment
    setSelectedAppointment(targetAppointment);
  }, [apptId])

  return (
    <div>
      <h1>hello from appointments</h1>
      <h2>Total number of appointments: { Object.keys(appointments).length }</h2>

      {/* (2) now we can start to set up taking in user input */}
      {/* (2) the user input is going to map to the appointment id that */}
      {/* (2) the user wants to see */}
      <div>
        <label>Enter an Appt Id</label>
        <br/>
        <input
          value={apptId}
          onChange={(event) => setApptId(event.target.value)} 
        />
        {/* (2) now we should see that we are changing this state value if we look in components tab */}
        {/* (2) all we care about here is that the input is change the apptId state variable */}
      </div>
      {selectedAppointment && <div>
        {/* (5) now lets put in our ui some appointment details for the selected appointment */}
        {/* (5) show short circuiting (conditional rendering if there is an appointment) */}
        <h2>Selected Appointment Info</h2>
        <p>Interview num {selectedAppointment.id} at {selectedAppointment.time}</p>
        { selectedAppointment.interview && <p>student is {selectedAppointment.interview.student} with interviewer num {selectedAppointment.interviewer}</p>}
      </div>}
    </div>
  )
}

export default Appointments;