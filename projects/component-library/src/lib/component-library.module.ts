import { NgModule } from '@angular/core';
import { defineCustomElements } from '@insabelter/component-library-stencil/loader';
import { DIRECTIVES } from './stencil-generated/index';

defineCustomElements(window);

@NgModule({
  declarations: [
    DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    DIRECTIVES
  ]
})
export class ComponentLibraryModule { }
