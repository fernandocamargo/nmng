import { join } from 'path';

export const { PORT } = process.env;

export const ROUTES_DIRECTORY = 'src/routes';

export const ROUTES_FILES_PATTTERN = '**/index.js';

export const PATTERN = join(ROUTES_DIRECTORY, ROUTES_FILES_PATTTERN);
