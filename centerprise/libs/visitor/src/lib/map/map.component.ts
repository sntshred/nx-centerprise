import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { PoiActions, PoiSelectors } from '@centerprise/poi';

@Component({
  selector: 'centerprise-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;

  poi$ = this.store.select(PoiSelectors.getSelected);

  constructor(private store: Store) {}

  showInfo(marker: MapMarker, poiId: string | number) {
    this.store.dispatch(PoiActions.visitPoi({ poiId }));
    this.info?.open(marker);
  }
}
