import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { Root } from 'components';
import { measure } from 'performance';

export const initialize = () =>
  render(
    <StrictMode>
      <Root />
    </StrictMode>,
    document.getElementById('root'),
    measure
  );

export default document.fonts.ready.then(initialize);
