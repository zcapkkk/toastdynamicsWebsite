import React from 'react'

const Member = ({ member,state }) => {

  return (
    <div className='section'>
      <h3> { member.name } </h3>
      <h4> { member.role } </h4>
      <p> { member.description} </p>
    </div> 
  )
}

const Members = ({ members, state }) => {
  if (state === "members") {
    return(members.map((member, index) => <Member key={index} member={member}/>))
  }
}


export default Members
