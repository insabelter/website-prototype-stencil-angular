/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@insabelter/component-library-stencil/dist/components';




export declare interface LibCard extends Components.LibCard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['card_title']
})
@Component({
  selector: 'lib-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['card_title']
})
export class LibCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LibTag extends Components.LibTag {
  /**
   *  
   */
  tagDeleted: EventEmitter<CustomEvent<string[]>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['tag', 'tags']
})
@Component({
  selector: 'lib-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['tag', 'tags']
})
export class LibTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tagDeleted']);
  }
}


export declare interface LibTagInput extends Components.LibTagInput {
  /**
   *  
   */
  tagsChanged: EventEmitter<CustomEvent<string[]>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['placeholder', 'tags']
})
@Component({
  selector: 'lib-tag-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['placeholder', 'tags']
})
export class LibTagInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tagsChanged']);
  }
}
