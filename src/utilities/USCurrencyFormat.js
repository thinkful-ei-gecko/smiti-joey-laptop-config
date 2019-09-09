import React from 'react';

// This object will allow us to
// easily convert numbers into US dollar values

function USCurrencyFormat(){ new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}
export default USCurrencyFormat;


