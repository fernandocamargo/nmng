import { join } from 'path';
import { cwd } from 'process';

export default path => import(join(cwd(), path));
