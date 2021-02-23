import invoke from 'lodash/invoke';
import express from 'express';
import { dirname, join, relative, sep } from 'path';

import { load } from 'helpers/filesystem';
import { match } from 'helpers/glob';

import { PATTERN, PORT, ROUTES_DIRECTORY } from './constants';

export const connect = routes => {
  const spread = (stack, { module, path }) => {
    const register = (app, [method, callback]) =>
      invoke(app, method, path, callback);

    return Object.entries(module).reduce(register, stack);
  };

  return routes.reduce(spread, express()).listen(PORT);
};

export const extract = path => {
  const format = module => ({
    path: join(sep, relative(ROUTES_DIRECTORY, dirname(path))),
    module,
  });

  return load(path).then(format);
};

export const fetch = paths => Promise.all(paths.map(extract)).then(connect);

export const up = () => match(PATTERN).then(fetch);
