import React from 'react';

import './MainHeader.css';

const MainHeader = props => {
  return <header className="main-header">{props.children}
  </header>;// children will always refer to the things that one passes b/w your closing and opening tags.
};

export default MainHeader;
