/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../app/core/services/dialog.service';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../../app/shared/directives/new-line.directive';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_class';
import * as import17 from '@angular/core/src/change_detection/differs/keyvalue_differs';
var renderType_MessageBoxComponent_Host:import0.RenderComponentType = (null as any);
class _View_MessageBoxComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MessageBoxComponent_0_4:import3.MessageBoxComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageBoxComponent_Host0,renderType_MessageBoxComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('message-box',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MessageBoxComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MessageBoxComponent_0_4 = new import3.MessageBoxComponent(this.parentInjector.get(import3.DialogService));
    this._appEl_0.initComponent(this._MessageBoxComponent_0_4,[],compView_0);
    compView_0.create(this._MessageBoxComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MessageBoxComponent) && (0 === requestNodeIndex))) { return this._MessageBoxComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_MessageBoxComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MessageBoxComponent_Host === (null as any))) { (renderType_MessageBoxComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_MessageBoxComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const MessageBoxComponentNgFactory:import9.ComponentFactory<import3.MessageBoxComponent> = new import9.ComponentFactory<import3.MessageBoxComponent>('message-box',viewFactory_MessageBoxComponent_Host0,import3.MessageBoxComponent);
const styles_MessageBoxComponent:any[] = [];
var renderType_MessageBoxComponent:import0.RenderComponentType = (null as any);
class _View_MessageBoxComponent0 extends import1.AppView<import3.MessageBoxComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _NewLineDirective_18_3:import10.NewLineDirective;
  _text_19:any;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _TemplateRef_21_5:any;
  _NgIf_21_6:import11.NgIf;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageBoxComponent0,renderType_MessageBoxComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','modal');
    this.renderer.setElementAttribute(this._el_0,'id','message-box-modal');
    this.renderer.setElementAttribute(this._el_0,'role','dialog');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','modal-dialog');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','modal-content');
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','modal-header');
    this._text_7 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'button',(null as any));
    this.renderer.setElementAttribute(this._el_8,'aria-label','Close');
    this.renderer.setElementAttribute(this._el_8,'class','close');
    this.renderer.setElementAttribute(this._el_8,'data-dismiss','modal');
    this.renderer.setElementAttribute(this._el_8,'type','button');
    this._el_9 = this.renderer.createElement(this._el_8,'span',(null as any));
    this.renderer.setElementAttribute(this._el_9,'aria-hidden','true');
    this._text_10 = this.renderer.createText(this._el_9,'×',(null as any));
    this._text_11 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_6,'h4',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','modal-title');
    this._text_13 = this.renderer.createText(this._el_12,'',(null as any));
    this._text_14 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._text_15 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','modal-body');
    this._text_17 = this.renderer.createText(this._el_16,'\n                ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_16,'p',(null as any));
    this._NewLineDirective_18_3 = new import10.NewLineDirective(new import12.ElementRef(this._el_18));
    this._text_19 = this.renderer.createText(this._el_16,'\n            ',(null as any));
    this._text_20 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_21 = new import2.AppElement(21,4,this,this._anchor_21);
    this._TemplateRef_21_5 = new import13.TemplateRef_(this._appEl_21,viewFactory_MessageBoxComponent1);
    this._NgIf_21_6 = new import11.NgIf(this._appEl_21.vcRef,this._TemplateRef_21_5);
    this._text_22 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_23 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_24 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_25 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._anchor_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._text_25
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.NewLineDirective) && (18 === requestNodeIndex))) { return this._NewLineDirective_18_3; }
    if (((token === import13.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import11.NgIf) && (21 === requestNodeIndex))) { return this._NgIf_21_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this.context.service.message;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NewLineDirective_18_3.newLine = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['newLine'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._NewLineDirective_18_3.ngOnChanges(changes); }
    const currVal_2:any = this.context.service.buttonNames;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_21_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.context.service.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_13,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_MessageBoxComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MessageBoxComponent> {
  if ((renderType_MessageBoxComponent === (null as any))) { (renderType_MessageBoxComponent = viewUtils.createRenderComponentType('C:/Workspace/Frameworks/temphire.angular2/TempHire/app/core/services/message-box.html',0,import8.ViewEncapsulation.None,styles_MessageBoxComponent,{})); }
  return new _View_MessageBoxComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_MessageBoxComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import14.NgFor;
  _text_3:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageBoxComponent1,renderType_MessageBoxComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','modal-footer');
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2,viewFactory_MessageBoxComponent2);
    this._NgFor_2_6 = new import14.NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parent.parentInjector.get(import15.IterableDiffers),this.parent.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import14.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.parent.context.service.buttonNames;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_2_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_2_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_2_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MessageBoxComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MessageBoxComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_MessageBoxComponent2 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import16.NgClass;
  _text_1:any;
  /*private*/ _expr_1:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageBoxComponent2,renderType_MessageBoxComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','btn');
    this.renderer.setElementAttribute(this._el_0,'style','margin: 10px');
    this.renderer.setElementAttribute(this._el_0,'type','button');
    this._NgClass_0_3 = new import16.NgClass(this.parent.parent.parentInjector.get(import15.IterableDiffers),this.parent.parent.parentInjector.get(import17.KeyValueDiffers),new import12.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._map_0 = import4.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'btn-primary': p0,
        'btn-default': p1
      }
      ;
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = 'btn';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_0_3.klass = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._map_0(this.context.last,!this.context.last);
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgClass_0_3.ngClass = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = import4.interpolate(1,'\n                    ',this.context.$implicit,'\n                ');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_1,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.service.select(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_MessageBoxComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MessageBoxComponent2(viewUtils,parentInjector,declarationEl);
}