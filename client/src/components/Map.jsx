import React from 'react'
import file1 from "../../images/file1.png";
import file2 from "../../images/file2.png";

const Map = () => {
  return (
    <div className='px-[10rem] ' id='map'>
                  <h3 className="text-white text-3xl text-center my-2">
                  Cryptocurrency World Map – Search Interest by Country
          </h3>
            <img className='py-[1rem]' src={file1} alt="" />
            <img className='py-[1rem]' src={file2} alt="" />
    </div>
  )
}

export default Map