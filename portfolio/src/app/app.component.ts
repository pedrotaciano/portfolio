import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Pedro Taciano';
  loaded: any;
  body = document.body;
  scrollWrap = document.getElementsByClassName('smooth-scroll-wrapper')[0];
  height = this.scrollWrap.getBoundingClientRect().height - 1;
  speed = 0.04;
  offset = 0;

  constructor() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  }

  ngOnInit(): void {}
}
