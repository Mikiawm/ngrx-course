import { environment } from '@env/environment';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {
  getOpened,
  reducer as sidenavReducer,
  State as SidenavState
} from './sidenav/sidenav.reducer';

import {
  reducer as mapReducer,
  State as MapState,
  getZoom
} from './map/map.reducer';

export enum Features {
  sidenav = 'sidenav',
  map = 'map'
}

export interface State {
  [Features.sidenav]: SidenavState;
  [Features.map]: MapState
}

export const reducers: ActionReducerMap<State> = {
  [Features.sidenav]: sidenavReducer,
  [Features.map]: mapReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const sidenavState = createFeatureSelector<SidenavState>(
  Features.sidenav
);
export const mapState = createFeatureSelector<MapState>(Features.map);

export const isOpened = createSelector(sidenavState, getOpened);
export const mapZoom = createSelector(mapState, getZoom)
