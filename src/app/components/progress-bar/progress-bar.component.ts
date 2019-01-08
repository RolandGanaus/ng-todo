import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() public current: number;
  @Input() public max: number;

  constructor() { }

  ngOnInit() {
  }

  public getProgress(): string {
    return Math.floor((this.current / this.max) * 100) + '%';
  }

}
