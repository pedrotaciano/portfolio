import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements AfterViewInit {
  constructor() {}
  @Input() loaded: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  }
}
