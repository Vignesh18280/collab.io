import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import Login from './components/Login';
import Getstarted from './components/Getstarted';
import Userdash from './components/Userdash';
import Projects from './components/Projects';
import GetFreelance from './components/GetFreelance';
import Addproj from './components/Addproj';
import Inproj from './components/Inproj';
import Account from './components/Account';
import AddCards from './components/AddCards';
import Insights from './components/Insights';
import About from './components/About';
import Document from './components/Document';
import Rankings from './components/Rankings';
import EditProfile from './components/EditProfile';
import Register from './components/Register';
import Orgreg from './components/Orgreg';
import Qa from './components/Qa';
import EditOwnProf from './components/EditOwnProf';
import Info from './components/Info';
import Footer from './components/Footer';
import DetaulFree from './components/DetaulFree';
import Waiting from './components/Waiting'
import RgWait from './components/RgWait'
import Blog from './components/Blog';
import Readblog from './components/Readblog';

function App() {
  return (
    <>
    <div className="bg-gradient-to-b from-violet-600/[.2] via-transparent bg-slate-900">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/getstarted' element={<Getstarted/>}/>
        <Route path='/Rankings' element={<Rankings/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route path='/user/:userId' element={<Account/>}/>
        <Route exact path='/Addproj' element={<Addproj/>}/>
        <Route exact path='/GetFreelance' element={<GetFreelance/>}/>
        <Route exact path='/Document' element={<Document/>}/>
        <Route exact path='/Qa' element={<Qa/>}/>
        <Route exact path='/EditProfile' element={<EditProfile/>}/>
        <Route exact path='/GetFreelance/AddCards' element={<AddCards/>}/>
        <Route exact path='/project/:projectId' element={<Inproj/>}/>
        <Route exact path='/GetFreelance/DetaulFree' element={<DetaulFree/>}/>
        <Route path='/projects/addproj/:userId' element={<Addproj/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Waiting' element={<Waiting/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/RgWait' element={<RgWait/>}/>
        <Route path='/orgregister' element={<Orgreg/>}/>
        <Route path='/Rankings/Info' element={<Info/>}/>
        <Route path='/projects/:projectId/insights/:cId' element={<Insights/>}/>
        <Route path='/user/:userId/edit' element={<EditOwnProf/>}/>
        <Route path='/Blog/Readblog' element={<Readblog/>}/>
        <Route path='/org/:orgId/approve' element={<Waiting/>}/>
        <Route path='/org/:orgId/approvestud' element={<RgWait/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
