import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../../../../../_metronic/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'MTF Functional Testing Status',
    children: [
      {
        name: 'Te',
        children: [
          { name: 'op' },
          { name: 'wo' },
        ]
      }
    ]
  },
  // {
  //   name: 'Vegetables',
  //   children: [
  //     {
  //       name: 'Green',
  //       children: [
  //         { name: 'Broccoli' },
  //         { name: 'Brussels sprouts' },
  //       ]
  //     }, {
  //       name: 'Orange',
  //       children: [
  //         { name: 'Pumpkins' },
  //         { name: 'Carrots' },
  //       ]
  //     },
  //   ]
  // },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-aside-search',
  templateUrl: './aside-search.component.html',
  styleUrls: ['./aside-search.component.scss'],
})


export class AsideSearchComponent implements OnInit {
  @ViewChild('tree') tree;
  disableAsideSelfDisplay: boolean;
  brandSkin: string;
  ulCSSClasses: string;
  location: Location;
  asideMenuHTMLAttributes: any = {};
  asideMenuCSSClasses: string;
  asideMenuDropdown;
  brandClasses: string;
  asideMenuScroll = 1;
  asideSelfMinimizeToggle = false;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(private layout: LayoutService, private loc: Location) {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    // load view settings
    this.disableAsideSelfDisplay =
      this.layout.getProp('aside.self.display') === false;
    this.brandSkin = this.layout.getProp('brand.self.theme');
    this.ulCSSClasses = this.layout.getProp('aside_menu_nav');
    this.asideMenuCSSClasses = this.layout.getStringCSSClasses('aside_menu');
    this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes('aside_menu');
    this.asideMenuDropdown = this.layout.getProp('aside.menu.dropdown') ? '1' : '0';
    this.brandClasses = this.layout.getProp('brand');
    this.asideSelfMinimizeToggle = this.layout.getProp(
      'aside.self.minimize.toggle'
    );
    this.asideMenuScroll = this.layout.getProp('aside.menu.scroll') ? 1 : 0;
    this.asideMenuCSSClasses = `${this.asideMenuCSSClasses} ${this.asideMenuScroll === 1 ? 'scroll my-4 ps ps--active-y' : ''}`;
    // Routing
    this.location = this.loc;
  }



  ngAfterViewInit() {
    this.tree.treeControl.expandAll();
  }
}
