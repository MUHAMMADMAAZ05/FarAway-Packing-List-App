import React from 'react';
import './logo.css';

export const Logo = () => {
    let image1= <img className='logo-image'  
    src="https://clipart-library.com/images_k/tree-clipart-transparent-background/tree-clipart-transparent-background-24.jpg" alt="" />
    let image2= <img className='logo-image' 
    src='https://png.pngtree.com/png-vector/20210207/ourmid/pngtree-yellow-brown-briefcase-clip-art-png-image_2882845.jpg' alt=''/>
  
  return (
    <div className='logo-container' style={{
    }}>
        {image1} Far Away {image2}
    </div>
  )
}

export default Logo;

