import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { PoiSelectors } from '@centerprise/poi';

@Component({
  selector: 'centerprise-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent  {
  poi$ = this.store.select(PoiSelectors.getSelected);

  constructor(private store: Store) {}


}
