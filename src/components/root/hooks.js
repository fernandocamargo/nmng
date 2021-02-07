import { history } from 'router';
import store, { persistor } from 'store';
import theme from 'themes';

export const useRoot = () => ({ history, persistor, store, theme });
