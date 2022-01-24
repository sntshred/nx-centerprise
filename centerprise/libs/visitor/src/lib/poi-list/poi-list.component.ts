import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PoiActions, PoiSelectors } from '@centerprise/poi';

@Component({
  selector: 'centerprise-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css'],
})
export class PoiListComponent implements OnInit {
  constructor(private store: Store) {}
  pois$ = this.store.select(PoiSelectors.getAllPoi);
  
  ngOnInit(): void {
    this.store.dispatch(PoiActions.init());
  }
}
