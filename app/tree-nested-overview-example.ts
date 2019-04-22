import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';

/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
  childGroups: FileNode[];
  name: string;
  expanded: boolean;
}

/**
 * The Json tree data in string. The data could be parsed into Json object
 */
const TREE_DATA = [
  {
  'name': 'Group 1',
  'expanded': false,
  'childGroups': [
    {
      'name': 'Childgroup 1',
      'expanded': false,
      'childGroups': []
    },
    {
      'name': 'Childgroup 2',
      'expanded': false,
      'childGroups': [
        {
          'name': 'Child of child',
          'expanded': false,
          'childGroups': []
        }
      ]
    }
    ]
  },
    {
  'name': 'Group 2',
  'expanded': false,
  'childGroups': [
    {
      'name': 'Childgroup 1',
      'expanded': false,
      'childGroups': []
    },
    {
      'name': 'Childgroup 2',
      'expanded': false,
      'childGroups': [
        {
          'name': 'Child of child',
          'expanded': false,
          'childGroups': []
        }
      ]
    }
    ]
  },
    {
  'name': 'Group 3',
  'expanded': false,
  'childGroups': [
    {
      'name': 'Childgroup 1',
      'expanded': false,
      'childGroups': []
    },
    {
      'name': 'Childgroup 2',
      'expanded': false,
      'childGroups': [
        {
          'name': 'Child of child',
          'expanded': false,
          'childGroups': []
        }
      ]
    }
    ]
  },
]

@Component({
  selector: 'tree-nested-overview-example',
  templateUrl: 'tree-nested-overview-example.html',
  styleUrls: ['tree-nested-overview-example.css']
})
export class TreeNestedOverviewExample {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.nestedDataSource.data = TREE_DATA;
  }

  hasNestedChild = (_: number, nodeData: FileNode) => nodeData.childGroups.length > 0;

  private _getChildren = (node: FileNode) => node.childGroups;

  changeState(node) {
    node.expanded = !node.expanded;
    console.log(node);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */