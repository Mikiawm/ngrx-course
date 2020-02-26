import { Component, OnInit } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { Observable } from 'rxjs';
import { mapZoom, State } from '@app/state';
import { select, Store } from '@ngrx/store';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mapZoom: Observable<number>;

  resorts: Observable<Array<Resort>>;
  selectedResort: Observable<Resort>;

  // inject the Store instance object
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.mapZoom = this.store.pipe(select(mapZoom));
  }
}
