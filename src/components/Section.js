import React from 'react'

const Section = ({ description, state}) => {

//  const sectionStyle = {
//    paddingTop: 20,
//    paddingLeft: 20,
//    paddingRight: 20
//  }
//
//  const sectionHeaderStyle = {
//    textAlign: 'center'
//  }
//
//  const sectionPStyle = {
//    textAlign: 'left'
//  }

  console.log(state)
  const sectionShow = description.find(element => element.key === state)
  console.log(sectionShow)
  if (sectionShow) {
  return (
      <div className='section'>
        <h2>{ sectionShow.title }</h2>
        <p>{ sectionShow.description } </p>
      </div>
  )
}
}

export default Section

