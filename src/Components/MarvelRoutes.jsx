import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import PrivateRoutes from './PrivateRoutes'
import MarveLayout from '../Pages/MarveLayout'
import YourProfile from '../Pages/YourProfile'
import CharactersPage from '../Pages/CharacterPages/CharactersPage'
import CharacterDetailsPage from '../Pages/CharacterPages/CharacterDetailsPage'
import SeriesPage from '../Pages/SeriesPages/SeriesPage'
import SeriesDetailsPage from '../Pages/SeriesPages/SeriesDetailsPage'
import EventsPage from '../Pages/EventsPages/EventsPage'
import EventsDetailsPage from '../Pages/EventsPages/EventsDetailsPage'
import SearchResults from '../Pages/SearchResults'
import NotFoundPage from '../Pages/NotFoundPage'


function MarvelRoutes() {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='marvel' element={ <MarveLayout/> }>
    <Route path='home' element={<PrivateRoutes><HomePage/></PrivateRoutes> }/>
    <Route path='characters/:charID' element={<PrivateRoutes><CharacterDetailsPage/></PrivateRoutes>  }/>
    <Route path='series/:seriesID' element={<PrivateRoutes><SeriesDetailsPage/></PrivateRoutes>  }/>
    <Route path='events/:eventID' element={<PrivateRoutes><EventsDetailsPage/></PrivateRoutes>  }/>
    <Route path='characters' element={<PrivateRoutes><CharactersPage/></PrivateRoutes> }/>
    <Route path='events' element={<PrivateRoutes><EventsPage/></PrivateRoutes> }/>
    <Route path='series' element={<PrivateRoutes><SeriesPage/></PrivateRoutes>  }/>
    <Route path='profile' element={<PrivateRoutes><YourProfile/></PrivateRoutes>  }/>
    <Route path='search' element={<PrivateRoutes><SearchResults/></PrivateRoutes> }/>
    <Route path='*' element={<PrivateRoutes><NotFoundPage/></PrivateRoutes> }/>
    </Route>
    <Route path='*' element={<PrivateRoutes><NotFoundPage/></PrivateRoutes> }/>
   </Routes>

  )
}

export default MarvelRoutes