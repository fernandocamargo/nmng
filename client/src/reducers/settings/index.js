export const getInitialState = () => ({ foo: 'bar' });

export default (state = getInitialState(), { type }) => {
  switch (type) {
    default:
      return state;
  }
};
