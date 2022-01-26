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
import Aabuilder from './componenets/Imgrow/Aabuilder';
import Capital from './componenets/Imgrow/Capital';
import Rosewood from './componenets/Imgrow/Rosewood';
import Ironwood from './componenets/Imgrow/Ironwood';

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

    <div className='container imgs_colmn'>
    <div className='row imgs_row'>

    {/* <div className='col-2' >  </div> */}
    <div className=' imzx col-2 imgx' > <Adobe/> </div>
    <div className='col-2 imgx'> <Aabuilder/> </div>
    <div className='col-2 imgx'> <Capital/> </div>
    <div className='col-2 imgx'> <Rosewood/> </div>
    <div className='col-2 imgx'> <Ironwood/></div>


    </div>



    </div>
    
    </div>
  );
}

export default App;
