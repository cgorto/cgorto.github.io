import React from 'react';
import cupImage from './assets/cup.jpg'; // Adjust path as necessary
import underwearImage from './assets/underwear.jpg'; // Adjust path as necessary
import padsImage from './assets/pads.jpg'; // Adjust path as necessary 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../App.css" // Import default stylesheet for reactjs-popup

function NavigationCircles() {
  return (
    <div className="circle-nav">
      <Popup 
        trigger={
          <button className="nav-circle">
            <img src={cupImage} alt="Menstrual Cups" />
            <span className="circle-caption">Menstrual Cups</span>
          </button>
        } 
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Menstrual Cups </div>
            <div className="content">
              {' '}
              <p>A medical grade silicone cup. These act similarly to tampons but have less of a risk of toxic shock</p> 
              <p>Brands I’ve Tried:</p>
              <p> The Honey Pot and Saalt. I had more luck with the Honey Pot, but I don't think there was much of a difference between the two cups. Both of them contained dyes, however I will be purchasing one without dyes and switching to that.</p>
            </div>
          </div>
        )}
      </Popup>

      <Popup 
        trigger={
          <button className="nav-circle">
            <img src={underwearImage} alt="Period Underwear" />
            <span className="circle-caption">Period Underwear</span>
          </button>
        } 
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Period Underwear </div>
            <div className="content">
              {' '}
              <p>Underwear with various layers meant to absorb menstrual fluids while preventing leakage. </p>

              <p>Brands I’ve Tried: </p>
              <p>Unders: Comfy! Not too bulky. Very absorbent</p>
              <p>Thinx: Bulky, feels a little tight sometimes. Very absorbent </p>
              <p>Aerie: Bulky, not very absorbent. Fine for light days or in conjunction with another product. </p>
              <p>I also recently purchased Hanes, but haven’t actually tried them yet. Definitely the most cost effective of the group.</p>
            </div>
          </div>
        )}
      </Popup>

      <Popup 
        trigger={
          <button className="nav-circle">
            <img src={padsImage} alt="Reusable Pads" />
            <span className="circle-caption">Reusable Pads</span>
          </button>
        } 
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Reusable Pads </div>
            <div className="content">
              {' '}
              <p>An additive, like a normal pad, to underwear you already own. </p>
              <p>Brands I’ve Tried: I haven’t tried these myself, but from different reviews it seems like they may not stay in place all the time.</p>


            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default NavigationCircles;
