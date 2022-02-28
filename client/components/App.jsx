import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import ProfilePage from './Profile/CreateProfilePage'
import CreatePetProfile from './Profile/CreatePetProfile'
import PetProfile from './Profile/PetProfile'
import FrontPage from './FrontPage'
import Fruits from './Fruits'
import Chat from './Chat'
import Nav from './Nav'

function App () {
  cacheUser()
  return (
    <>
      <Router>
        <Route path='/home' component={FrontPage} />
        <Route path='/' component={Nav} />
        <Route path='/chat' component={Chat} />
        <Route exact path='/fruits' component={Fruits} />
        <Route exact path='/profile/create' component={ProfilePage} />
        <Route exact path='/petprofile/create' component={CreatePetProfile} />
        <Route exact path='/petprofile' component={PetProfile} />
        {/* <Route exact path='/profile' component={ProfilePage} /> */}
      </Router>
    </>
  )
}

export default App
