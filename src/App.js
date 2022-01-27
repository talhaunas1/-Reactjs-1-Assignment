import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './componenets/navBar/NavBar';
import Logo from './componenets/logo/Logo';
import Button from './componenets/button/Button';
import Home from './componenets/homepage/Home';
import Homeimage from './componenets/homeimage/Homeimage';
import Homemindiv from './componenets/Address/Homemindiv';
import Buttonblue from './componenets/Buttonblue/Buttonblue';
import Cityinfo from './componenets/city/Cityinfo';
import Adobe from './componenets/Imgrow/Adobe';
import Section_2 from './componenets/Section2/Section_2';
import Card_1 from './componenets/Card1/Card_1';
import Card_2 from './componenets/Card2/Card_2';
import Card_3 from './componenets/Card3/Card_3';



function App() {
  return (
    <div className='main'>

    <div className='container'>
      <div className='row'>

        <div className='col-2 '><Logo/> </div>
        <div className='col-6'><NavBar/> </div>
        <div className='col-3 btn1'><Button/></div>
        
      </div>
      </div>

    <div className='container'>
    <div className='row'>

      <div className='col-6 '><Home/></div>
      <div className='col-6 '>< Homeimage/></div>

    </div>
    </div>
          
    <div className='container cont3 '>
    <div className='row min_div1'>

      <div className=' min_div col-3 adres_info'> <Homemindiv/> </div>
      <div className=' min_div col-3 city_info'> <Cityinfo/>  </div>
      <div className=' min_div col-1 btn_min'> <Buttonblue/> </div>

    </div>
    </div>

    <div className='container imgs_cool'>
    <div className='row imgs_roow'>

    <div className='col-12'> <Adobe/> </div>

    </div>


    </div>


    <div className='container section2_cont'>
  <div className='row '>

    <div className='col-2'></div>
    <div className='col-8'> <Section_2/> </div>
    <div className='col-2'></div>
  </div>
    </div>



    <div className='container'>
      <div className='row'>

      <div className='col-4'> <Card_1/> </div>
      <div className='col-4'> <Card_2/> </div>
      <div className='col-4'> <Card_3/> </div>

      </div>
    </div>
   
    
    </div>
  );
}

export default App;
