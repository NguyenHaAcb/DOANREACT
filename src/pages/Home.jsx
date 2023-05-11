import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
// import SignIn from '../components/SignIn'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
        {/* <SignIn /> */}
      </div>
    </div>
  )
}

export default Home