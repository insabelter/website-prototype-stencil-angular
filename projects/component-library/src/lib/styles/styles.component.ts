import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['../../../../../node_modules/@insabelter/component-library-stencil/dist/component-bib-prototype-stencil/component-bib-prototype-stencil.css'],
  encapsulation: ViewEncapsulation.None
})
export class StylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
