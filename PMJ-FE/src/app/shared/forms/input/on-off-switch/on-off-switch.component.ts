import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'on-off-switch',
  templateUrl: './on-off-switch.component.html',
})
export class OnOffSwitchComponent implements OnInit {

  @Input() title: string;

  @Input() model: boolean;
  @Output() modelChange = new EventEmitter();
  @Output() private onoffClick = new EventEmitter<any>();

  @Input() value: any;


  @Input() status: any;

  public widgetId;

  constructor() {
  }


  ngOnInit() {
    this.value = this.status;
    this.widgetId = 'on-off-switch' + OnOffSwitchComponent.widgetsCounter++;
  }

  onChange() {
    this.modelChange.emit(this.value)
    this.onoffClick.emit();
  }


  static widgetsCounter = 0
}
