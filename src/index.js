import React from 'react';
import ReactDOM from 'react-dom';

import ToggleButton from './components/ToggleButton';
import Address from './components/Address';

ReactDOM.render(
  <Address
    street="Ocean Ave"
    city="Wildwood"
  />,
  document.getElementById('root')
)
