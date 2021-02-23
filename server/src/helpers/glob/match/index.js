import glob from 'glob';

export default (pattern, options) => {
  const promise = (resolve, reject) => {
    const callback = (error, paths) => (error ? reject(error) : resolve(paths));

    return glob(pattern, options, callback);
  };

  return new Promise(promise);
};
