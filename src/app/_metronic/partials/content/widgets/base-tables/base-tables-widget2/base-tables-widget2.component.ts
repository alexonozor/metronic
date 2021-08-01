import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-tables-widget2',
  templateUrl: './base-tables-widget2.component.html',
})
export class BaseTablesWidget2Component implements OnInit {
  
  currentTab;
  @Input() cssClass: string;
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

  
}
