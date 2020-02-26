import {Action} from "@ngrx/store";

export enum MapZoomActionTypes {
  SetZoom = '[Map] Set Zoom',
  ResetZoom = '[Map] Reset Zoom'
}

export class SetMapZoom  implements Action {
  readonly type = MapZoomActionTypes.SetZoom;

  constructor(public zoom: number) {}
}

export class ResetMapZoom  implements Action {
  readonly type = MapZoomActionTypes.ResetZoom;

}

export type MapAction = SetMapZoom | ResetMapZoom;
