import React from 'react';
import FunFact from './FunFact';
import './FunFactsContainer.css'; // CSS for styling the container

const FunFactsContainer = () => {
  return (

    
    <div className="fun-facts-container">
      <FunFact
        title="Mice were Used to Test Tampons"
        content="Scientists made small mice tampons, or padgets, in order to test tampons. However, mice do not menstruate and although they have vaginal orifices, they don't have a vaginal biome like humans, and we're not comprehensive test subjects."
        link="https://link.springer.com/chapter/10.1007/978-981-15-0614-7_50"
      />
      <FunFact
        title="Medical Devices Amendment"
        content="The Food and Drug administration added the Medical Devices Amendment in 1976. This was because contacts and intrauterine devices were harming people. However, pads and tampons were grandfathered in, because they were already on the market."
        link="https://www.ncbi.nlm.nih.gov/books/NBK209793/#:~:text=It%20recommended%20creation%20of%20three,and%20the%20third%20would%20be"
      />
      <FunFact
        title="Menstrual Product Labeling"
        content="The federal government doesn’t require tampons and pads to list their ingredients. As of 2021, New York state requires packaging to include a plain and visible list of ingredients. Companies elsewhere may voluntarily disclose some of their ingredients, but it doesn’t have to be a complete list or contain percentages. "
        link="https://www.nysenate.gov/legislation/bills/2019/S2387"
      />
      <FunFact
        title="Seatbelts and Shock Syndrome"
        content="The man who laid the groundwork for seatbelt laws, Ralph Nader, is also part of the reason that tampons have toxic shock and absorbance information. Nader co-founded the Health Research Group that sued the Food and Drug Administration to require tampon boxes to have absorbency information."
        link="https://nader.org/2004/01/02/chapter-7-the-politics-of-health/"
      />
    </div>
  );
};

export default FunFactsContainer;
