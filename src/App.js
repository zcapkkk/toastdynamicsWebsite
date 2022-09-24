import './App.css';
import { useState } from 'react';
import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Members from './components/Member'
import Section from './components/Section'
import Navigation from './components/Navigation'

const App = () => {

  const [page, setPage] = useState("home")

  
  const selectFunc = eventKey => {
    setPage(eventKey)
    console.log(page)
  }

  const members = [
    {
      name: "Yim Man-To",
      role: "CEO",
      description: "Currently an Assistant Engineer in the State Key Laboratory of Terahertz and Millimeter Waves (City University of Hong Kong), he is also the team leader of the CityU Robocon team and has won the prestigious Innovative Engineering Design Award in the Singapore Autonomous Underwater Vehicle Competition."
    },
    {
      name: "Wong Iat-Chon",
      role: "Team member",
      description: "Currently an enginner at NOW TV developing a web internal report system, he has prior experience in IBM as being responsible in developing a web system and worked on an iBanking project at DBS."
    },
    {
      name: "Ho Ka Kit Kelvin",
      role: "Team member",
      description: "Currently a student in MSc Theoretical Physics at University College London, he is an awardee of the Hong Kong Scholarship for Excellence Scheme and has worked as a technical assistant at State Key Laboratory of Terahertz and Millimeter Waves."
    }
  ]


const descriptions = [
  {
    title: "Our Vision", 
    key: "vision",
    description: "Our mission is to develop a system for underwater video streaming system. Low latency and bidirectional transmission are the main features of this system. In other words, this system can provide a video call for underwater workers, or anyone is need. On the other hand, youtuber can use this system to provide a live show on YouTube. Interact with audience is possible in the underwater environment."
  },
  {
    title: "Current Development",
    key: "currdev",
    description: "After face-to-face meeting with our mentor and potential customer, we decide to add one more feature to our system. We agreed that water quality monitor also a potential market. So, we modified our system to support this function. In this stage, we finished the design of the underwater robot and ready to fabricate the prototype once we receive next round funding. On the other hand, we finish the prototype of the sensor device for water quality monitoring. This device will pass to one of our potential customer."
  },
  {
    title: "Welcome to Toast Dynamics!🍞🍞🍞",
    key: "home",
    description:""
  }
]

  const appStyle = {
  }

  return (
   <div style={appStyle} className="App">
     <Navigation handleSelect={selectFunc}/>
     <Section description={descriptions} state={page}/>
     <Members members={members} state={page} />
   </div>
  );
}

export default App;
