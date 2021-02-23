import property from 'lodash/property';
import styled from 'styled-components';

export default component => styled(component)`
  background-color: ${property('theme.background')};
  color: ${property('theme.foreground')};
`;
