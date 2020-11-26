import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';

import { GlobalStyle } from '@src/utils/global-style';
import Toolbar from '@src/components/toolbar';

addStyles();

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Toolbar />
    </div>
  );
};

export default App;
