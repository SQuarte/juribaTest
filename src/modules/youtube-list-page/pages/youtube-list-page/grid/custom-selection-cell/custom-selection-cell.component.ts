import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-selection-cell',
  templateUrl: './custom-selection-cell.component.html',
  styleUrls: ['./custom-selection-cell.component.scss']
})
export class CustomSelectionCellComponent implements AgRendererComponent {
  value = false;
  params: any;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.value = params.value;
  }

  changeValue(value: boolean) {
    this.params.api.dispatchEvent({
      type: 'customSelectionChanged',
      value: value,
      rowIndex: this.params.rowIndex
    });
  }

  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    return true;
  }

}
