import React from 'react';
import Summary from './Summary';
import Total from './Total'




export default function MainSummary(props){
return(

        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary features = {props.selected} />
            <Total  selected= {props.selected} />
          </section>
 ) }


 