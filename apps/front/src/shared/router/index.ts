import { createRouter } from './createRouter';
import { routes } from './routes';

export const { path } = createRouter(routes);

export type { PathOptions, RouteConfig, RoutesMap } from './types';
