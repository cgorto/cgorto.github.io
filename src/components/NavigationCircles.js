import React, { useState } from 'react';
import '../App.css';  // Ensure your CSS file path is correct

function NavigationCircles() {
  const [hovered, setHovered] = useState(null);

  const products = [
    {
      id: 'cup',
      title: 'Menstrual Cups',
      image: '/assets/cup.jpg',
      info: "A medical grade silicone cup. These act similarly to tampons but have less of a risk of toxic shock. Brands I've tried: The Honey Pot and Saalt. I had more luck with the Honey Pot, but I don't think there was much of a difference between the two cups. Both of them contained dyes, however I will be purchasing one from JUNE Co, without dyes and switching to that."
    },
    {
      id: 'underwear',
      title: 'Period Underwear',
      image: '/assets/underwear.jpg',
      info: "Rewearable underwear with various layers meant to absorb menstrual fluids while preventing leakage. Brands I've Tried: Unders, Comfy, Not too bulky. Very absorbent. Thinx, Bulky, feels a little tight sometimes. Very absorbent. Aerie, Bulky, not very absorbent. Fine for light days or in conjunction with another product. I also recently purchased Hanes, but haven’t actually tried them yet. Definitely the most cost effective of the group."
    },
    {
      id: 'pads',
      title: 'Reusable Pads',
      image: '/assets/pads.jpg',
      info: "An additive, like a normal pad, to underwear you already own. This is also washable. Brands I’ve Tried: I haven't tried these myself, but from different reviews it seems like they may not stay in place all the time.."
    }
  ];

  return (
    <div className="circle-nav">
      {products.map((product) => (
        <div 
          key={product.id}
          className="nav-circle"
          onMouseEnter={() => setHovered(product.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={product.image} alt={product.title} />
          <span className="circle-caption">{product.title}</span>
          {hovered === product.id && (
            <div className="info-blurb">{product.info}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavigationCircles;
