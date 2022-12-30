import React from 'react'
import file1 from "../../images/file1.png";
import file2 from "../../images/file2.png";
import "../components/Map.css";
import anime from "../assets/anime.png"



const Map = () => {
  return (
    <div  id='map' >
                  <h3 className="text-white text-3xl text-center my-10 pt-16 lg:pt-20">
                  Cryptocurrency World Map – Search Interest by Country
          </h3>
          <div className='lg:px-[10rem] px-[1rem] '>
          <img className='my-[1rem]' src={file1} alt="" />
            {/* <img className='my-[1rem]' src={file2} alt="" /> */}
            <table id="customers">
                <tr id='customers-head'>
                  <th>Worldwide Search Interest</th>
                  <th>Dominance</th>
                  <th>Percentage</th>
                </tr>
                <tr>
                  <td className="icon-flex">1. <img src={anime} alt="" /> Bitcoin</td>
                  <td><div id='one'></div></td>
                  <td>59.9%</td>
                </tr>
                <tr>
                  <td className="icon-flex">2. <img src={anime} alt="" /> Ethereum</td>
                  <td><div id='two'></div></td>
                  <td>13.1%</td>
                </tr>
                <tr>
                  <td className="icon-flex">3. <img src={anime} alt="" /> Dogecoin</td>
                  <td><div id='three'></div></td>
                  <td>7.8%</td>
                </tr>
                <tr>
                  <td className="icon-flex">4. <img src={anime} alt="" /> XRP</td>
                  <td><div id='four'></div></td>
                  <td>5.5%</td>
                </tr>
                <tr>
                  <td className="icon-flex">5. <img src={anime} alt="" /> Tron</td>
                  <td><div id='five'></div></td>
                  <td>4.8%</td>
                </tr>
                <tr>
                  <td className="icon-flex">6. <img src={anime} alt="" /> Cardano</td>
                  <td><div id='six'></div></td>
                  <td>3.9%</td>
                </tr>
                <tr>
                  <td className="icon-flex">7. <img src={anime} alt="" /> Solana</td>
                  <td><div id='seven'></div></td>
                  <td>1.5%</td>
                </tr>
                <tr>
                  <td className="icon-flex">8. <img src={anime} alt="" /> Litecoin</td>
                  <td><div id='eight'></div></td>
                  <td>1.4%</td>
                </tr>
                <tr>
                  <td className="icon-flex">9. <img src={anime} alt="" /> Binance Coin</td>
                  <td><div id='nine'></div></td>
                  <td>1%</td>
                </tr>
                <tr>
                  <td className="icon-flex">10. <img src={anime} alt="" /> Avalanche</td>
                  <td><div id='ten'></div></td>
                  <td>1%</td>
                </tr>
              </table>
          </div>
    </div>
  )
}

export default Map
