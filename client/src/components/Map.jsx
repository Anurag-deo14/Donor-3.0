import React from 'react'
import file1 from "../../images/file1.png";
import file2 from "../../images/file2.png";

const Map = () => {
  return (
    <div  id='map'>
                  <h3 className="text-white text-3xl text-center my-2">
                  Cryptocurrency World Map – Search Interest by Country
          </h3>
          <div className='lg:px-[10rem] px-[1rem] '>
          <img className='py-[1rem]' src={file1} alt="" />
            <img className='my-[1rem]' src={file2} alt="" />
          </div>
            
    </div>
  )
}

export default Map
