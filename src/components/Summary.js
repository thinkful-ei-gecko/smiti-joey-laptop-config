import React from 'react';



function Summary(props){
  return Object.keys(props.features).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const selectedOption = props.features[feature];

  return (
    <div className="summary__option" key={featureHash}>
      <div className="summary__option__label">{feature} </div>
      <div className="summary__option__value">{selectedOption.name}</div>
      <div className="summary__option__cost">
        {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(selectedOption.cost)}
      </div>
    </div>
  );
});}
export default Summary;
