import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle(el:ElementRef) {
    el.nativeElement.toggle();
  }

}