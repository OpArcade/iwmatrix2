import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import About from './components/About';
import Events from './pages/Events';
import Sponsor from './pages/Sponsor';
import Burger from './components/Burger';
import Contact from './pages/Contact';
import { Toaster } from 'react-hot-toast';
import Form from './pages/Form';
import { useStateContext } from './globalcontext/ContextProvider';


function App() {

  const {currentUser} = useStateContext()

  return (
    <BrowserRouter>
    <Toaster/>
      <MainDiv>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Navbar' element = {<Navbar />} />
          <Route path='/Burger' element = { <Burger />} />
          <Route path='/Home' element={ <Home />} />`
          <Route path='/Events' element={ currentUser !== null ? <Events /> : <Home/> } />
          <Route path='/Sponsors' element={<Sponsor />} />
          <Route path='/Contact' element = { <Contact /> } />
          <Route path='/Form' element = { <Form /> } />
        </Routes>
      </MainDiv>
    </BrowserRouter>

  );
}

const MainDiv = styled.div`
background-color: black;
`;
export default App;