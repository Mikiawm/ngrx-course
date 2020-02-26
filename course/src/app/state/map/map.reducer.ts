import {MapAction, MapZoomActionTypes} from "@app/state/map/map.actions";

export interface State {
  zoom: number;
}

export const initialState: State = {
  zoom: 10
};

export function reducer(state = initialState, action: MapAction): State {
  switch (action.type) {
    case MapZoomActionTypes.SetZoom:
      return {
        ...state,
        zoom: action.zoom
      };
    case MapZoomActionTypes.ResetZoom:
      return {
        ...state,
        zoom: 1
      };
    default:
      return state;
  }
}

export const getZoom = (state: State) => state.zoom;
