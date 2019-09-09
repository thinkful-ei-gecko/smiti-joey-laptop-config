import React from 'react';
import features from './features'

function Customize(){

    return(<form className="main__form">
    <h2>Customize your laptop</h2>
    {features}
  </form>)
}

export default Customize;