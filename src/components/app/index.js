import compose from 'lodash/flow';

import render from './render';
import * as statics from './statics';
import withStyle from './style';

export const enhance = compose(withStyle);

export default enhance(Object.assign(render, statics));
