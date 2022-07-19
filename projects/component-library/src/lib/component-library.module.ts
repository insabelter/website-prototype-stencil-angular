import { NgModule } from '@angular/core';
import { defineCustomElements } from '@insabelter/component-library-stencil/loader';
import { DIRECTIVES } from './stencil-generated/index';
import { StylesComponent } from './styles/styles.component';

defineCustomElements(window);

@NgModule({
  declarations: [
    DIRECTIVES,
    StylesComponent
  ],
  imports: [
  ],
  exports: [
    DIRECTIVES,
    StylesComponent
  ]
})
export class ComponentLibraryModule { }
