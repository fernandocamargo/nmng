import isFunction from 'lodash/isFunction';
import over from 'lodash/over';

export default listener => {
  if (isFunction(listener)) {
    const listen = vitals => {
      const broadcast = over(...Object.values(vitals));

      return broadcast(listener);
    };

    return import('web-vitals').then(listen);
  }
};
