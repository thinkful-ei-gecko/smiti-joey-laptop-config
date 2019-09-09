import React from 'react';
import Summary from './summary';
import Total from './total'




export default function MainSummary(props){
return(
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary features = {props.selected} />
            <Total  selected= {props.selected} />
          </section>
 ) }