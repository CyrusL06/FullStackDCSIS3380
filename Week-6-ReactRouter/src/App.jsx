import './App.css'
import NavBar from '../components/navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import {Home, About, Events, Products, Contact, Services, Locations, History, ProductDetails, EventDetails} from "../components/pages"
import Whoops404 from '../components/whoops404'

function App() {

  return (
    <>
     <NavBar />
       <Routes>
                  {/* Nested Routes for About */}
          <Route path="/about"    element={<About/>} >
             <Route path="services"   element={<Services />}/> 
             <Route path="locations"   element={<Locations />}/> 
             <Route path="history"   element={<History />}/> 
             
          </Route> 
         
          <Route path="/events"   element={<Events/>}/> 
          <Route path="/products" element={<Products/>}/> 
          {/* Route parameters or Path Parameters */}
          <Route path="/products/:id" element={<ProductDetails/>}/>

          {/* Uses hook = useParam to grab URL and decodes the object to be used */}
          {/* <Route path="/events/:month/:year" element={<EventDetails />}/> */}
          {/* OPTIONAL router Parameters */} {/*You can input one or all without throwing error*/}
          {/* NOT A GOOD PRACTICE!!!! */}
          <Route path="/events/:month/:year?" element={<EventDetails />}/>


          <Route path="/contact"  element={<Contact/>}/> 
          <Route path="/"         element={<Home/>}/> 

          {/* Wildcard if not the url the rest */}
          <Route path="*"         element={<Whoops404 />}/> 
          {/* Reditection */}
          <Route path='/history' element={<Navigate to = "/about/history" />} />    
       </Routes>
    </>
  )
}

export default App
