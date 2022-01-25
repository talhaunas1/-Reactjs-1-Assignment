import React from 'react';
import home from '../../assets/images/home.png'
import'./Homeimage.css'

const Homeimage = () => {
    return (
        <div >
             <img className='image1' src={home} alt="Logo" />
        </div>
    );
};

export default Homeimage;