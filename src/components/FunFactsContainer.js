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
    </div>
  );
};

export default FunFactsContainer;
