import React from 'react';

import slugify from 'slugify'



function Options(props){

  return Object.keys(props.features).map((feature, idx) => {
    //feature is title and idx is index
    const featureHash = feature + '-' + idx;
    console.log(featureHash);
    const options = props.features[feature].map(item => 
      {
      const itemHash = slugify(JSON.stringify(item));
      console.log(itemHash);
      console.log(new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
        }).format(item.cost));

      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            
            checked={item.name === props.selected[feature].name}
            onChange={e => props.updateFeature(feature, item)}
          />
          
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
            }).format(item.cost)})

          </label>
        </div>
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>     
        </legend>
        {options}
      </fieldset>
    );
  });
}

export default Options;
