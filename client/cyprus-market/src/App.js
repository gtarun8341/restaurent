import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './home/Home';
import ImgSlider from './home/ImgSlider';
import styled from 'styled-components';
import AllHome from './home/AllHome';
import CartViewer from './home/CartViewer';
import Auth from './auth/Auth';
import AuthClientSignIn from './auth/AuthClientSignIn';
import AuthPublisherSignIn from './publisher/publisherAuth/AuthPublisherSignIn.js';
import AuthClientSignUp from './auth/AuthClientSignUp';
 import AuthPublisherSignUp from './publisher/publisherAuth/AuthPublisherSignUp.js';
import ResturantsProducts from './home/ResturantsProducts';


function App() {
  return (
    <div className="App">
        <Routes>
      
          <Route path='/' element={<AllHome/>}/>
          <Route path='/auth-publisher-sign-up' element={<AuthPublisherSignUp/>} />
          <Route path='/auth' element={<Auth/>}/>

          <Route path='/productName' element={<CartViewer/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/auth-client-sign-in' element={<AuthClientSignIn/>} />
          <Route path='/auth-client-sign-up' element={<AuthClientSignUp/>} />
          <Route path='/auth-publisher-sign-in' element={<AuthPublisherSignIn/>} /> 

          <Route path='/resturant-products' element={<ResturantsProducts/>}/>
          
    
        </Routes>
    </div>
  );
}

export default App;


