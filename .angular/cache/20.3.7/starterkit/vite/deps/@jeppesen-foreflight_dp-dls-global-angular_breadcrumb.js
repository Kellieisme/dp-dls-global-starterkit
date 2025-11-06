import {
  RouterLink
} from "./chunk-PCUTCDBW.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-QZ5L6N7S.js";
import "./chunk-5OXZCQUF.js";
import "./chunk-XPMIZQDA.js";
import "./chunk-5LHPWY7D.js";
import "./chunk-HPS34U37.js";
import "./chunk-TMGX3QZG.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-IRCNZDQI.js";
import "./chunk-LKTXROOD.js";
import "./chunk-4X4U2WXG.js";
import "./chunk-CJWTBAGM.js";
import "./chunk-AMCCHGQ2.js";
import "./chunk-URR2P62S.js";
import "./chunk-XFXLZEUW.js";
import "./chunk-VENV3F3G.js";
import "./chunk-GWFLKVBH.js";
import "./chunk-T4VMXWXP.js";
import "./chunk-UD5TA72J.js";
import "./chunk-2WCBZE77.js";
import "./chunk-NT3LYB22.js";
import "./chunk-NFONI4QB.js";
import "./chunk-NM442Z7D.js";
import "./chunk-5EG33CFQ.js";
import "./chunk-3EOU3V4T.js";
import "./chunk-XUZZGKDK.js";
import "./chunk-WLD2NLIJ.js";
import "./chunk-T46JNZBS.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-D5P5I7SG.js";
import "./chunk-EITAFI4I.js";
import "./chunk-7MVUXVX5.js";
import "./chunk-G5EVG5KB.js";
import "./chunk-MZVJP6II.js";
import "./chunk-SCHDBRSY.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L7TZZFVV.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-MARUHEWW.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@jeppesen-foreflight/dp-dls-global-angular/fesm2022/jeppesen-foreflight-dp-dls-global-angular-breadcrumb.mjs
function BreadcrumbComponent_ul_1_ng_container_1_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 7);
    ɵɵlistener("click", function BreadcrumbComponent_ul_1_ng_container_1_li_1_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r1);
      const i_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.selectBreadcrumb(i_r2));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", breadcrumb_r4.path);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", breadcrumb_r4.label, " ");
  }
}
function BreadcrumbComponent_ul_1_ng_container_1_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(breadcrumb_r4.label);
  }
}
function BreadcrumbComponent_ul_1_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, BreadcrumbComponent_ul_1_ng_container_1_li_1_a_1_Template, 2, 2, "a", 6)(2, BreadcrumbComponent_ul_1_ng_container_1_li_1_ng_template_2_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const last_r5 = ctx.last;
    const lastBreadcrumb_r6 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !last_r5)("ngIfElse", lastBreadcrumb_r6);
  }
}
function BreadcrumbComponent_ul_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BreadcrumbComponent_ul_1_ng_container_1_li_1_Template, 4, 2, "li", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.breadcrumbs);
  }
}
function BreadcrumbComponent_ul_1_ng_container_2_a_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r7 = ctx.$implicit;
    ɵɵproperty("routerLink", breadcrumb_r7.path);
    ɵɵadvance();
    ɵɵtextInterpolate(breadcrumb_r7.label);
  }
}
function BreadcrumbComponent_ul_1_ng_container_2_li_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r8 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", breadcrumb_r8.path);
    ɵɵadvance();
    ɵɵtextInterpolate(breadcrumb_r8.label);
  }
}
function BreadcrumbComponent_ul_1_ng_container_2_li_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(breadcrumb_r8.label);
  }
}
function BreadcrumbComponent_ul_1_ng_container_2_li_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, BreadcrumbComponent_ul_1_ng_container_2_li_10_a_1_Template, 2, 2, "a", 13)(2, BreadcrumbComponent_ul_1_ng_container_2_li_10_ng_template_2_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const last_r9 = ctx.last;
    const lastBreadcrumb_r10 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !last_r9)("ngIfElse", lastBreadcrumb_r10);
  }
}
function BreadcrumbComponent_ul_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li")(2, "a", 9);
    ɵɵtext(3);
    ɵɵelementEnd()();
    ɵɵelementStart(4, "li")(5, "button", 10);
    ɵɵtext(6, "...");
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-menu", null, 1);
    ɵɵtemplate(9, BreadcrumbComponent_ul_1_ng_container_2_a_9_Template, 2, 2, "a", 11);
    ɵɵelementEnd()();
    ɵɵtemplate(10, BreadcrumbComponent_ul_1_ng_container_2_li_10_Template, 4, 2, "li", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const menu_r11 = ɵɵreference(8);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ctx_r2.breadcrumbs[0].path);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.breadcrumbs[0].label);
    ɵɵadvance(2);
    ɵɵproperty("matMenuTriggerFor", menu_r11);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r2.breadcrumbs.slice(1, ctx_r2.breadcrumbs.length - 2));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.breadcrumbs.slice(-2, ctx_r2.breadcrumbs.length));
  }
}
function BreadcrumbComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 3);
    ɵɵtemplate(1, BreadcrumbComponent_ul_1_ng_container_1_Template, 2, 1, "ng-container", 4)(2, BreadcrumbComponent_ul_1_ng_container_2_Template, 11, 5, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.breadcrumbs.length < 5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.breadcrumbs.length > 4);
  }
}
var _BreadcrumbComponent = class _BreadcrumbComponent {
  constructor() {
    this.breadcrumbs = [];
    this.selectedLink = new EventEmitter();
  }
  /**
  * Handles breadcrumb selection, emitting event and updating the breadcrumbs.
  */
  selectBreadcrumb(index) {
    const selected = this.breadcrumbs[index];
    this.selectedLink.emit({
      label: selected.label,
      path: selected.path
    });
    this.breadcrumbs = this.breadcrumbs.slice(0, index + 1);
  }
};
_BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbComponent)();
};
_BreadcrumbComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbComponent,
  selectors: [["ba-breadcrumb"]],
  inputs: {
    breadcrumbs: "breadcrumbs"
  },
  outputs: {
    selectedLink: "selectedLink"
  },
  decls: 2,
  vars: 1,
  consts: [["lastBreadcrumb", ""], ["menu", "matMenu"], ["class", "ba-breadcrumb__list", 4, "ngIf"], [1, "ba-breadcrumb__list"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "routerLink", "click", 4, "ngIf", "ngIfElse"], ["mat-button", "", "color", "primary", 3, "click", "routerLink"], ["mat-button", "", "color", "primary", "disabled", ""], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "routerLink"], ["mat-button", "", "color", "primary", 3, "routerLink", 4, "ngIf", "ngIfElse"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "nav");
      ɵɵtemplate(1, BreadcrumbComponent_ul_1_Template, 3, 2, "ul", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.breadcrumbs.length);
    }
  },
  dependencies: [CommonModule, NgForOf, NgIf, MatButtonModule, MatButton, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, RouterLink],
  styles: ['.ba-breadcrumb__list{display:flex;list-style-type:none}.ba-breadcrumb__list li:not(:last-child):after{content:"/";padding:0 var(--size-spacing-2xs);font-size:16px;letter-spacing:0px;line-height:22px;font-family:Boeing Meso;font-weight:400;text-transform:none;text-decoration:none;color:var(--color-ui-divider-flat-high)}\n'],
  encapsulation: 2
});
var BreadcrumbComponent = _BreadcrumbComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{
      selector: "ba-breadcrumb",
      imports: [CommonModule, MatButtonModule, MatMenuModule, RouterLink],
      encapsulation: ViewEncapsulation.None,
      template: '<nav>\n    <ul class="ba-breadcrumb__list" *ngIf="breadcrumbs.length">\n\n      <!-- NON-TRUNCATED BREADCRUMB TRAIL (SHORT HISTORY)-->\n      <ng-container *ngIf="breadcrumbs.length <5">\n        <li *ngFor="let breadcrumb of breadcrumbs; let last = last;let i = index">\n          <a mat-button color="primary" *ngIf="!last; else lastBreadcrumb" [routerLink]="breadcrumb.path" (click)="selectBreadcrumb(i)">\n            {{ breadcrumb.label }}\n          </a>\n          <ng-template #lastBreadcrumb>\n            <a mat-button color="primary" disabled>{{ breadcrumb.label }}</a>\n          </ng-template>\n        </li>\n      </ng-container>\n\n      <!-- TRUNCATED BREADCRUMB TRAIL (LONG HISTORY)-->\n      <ng-container *ngIf="breadcrumbs.length > 4">\n        <li>\n          <a mat-button color="primary" [routerLink]="breadcrumbs[0].path">{{ breadcrumbs[0].label }}</a>\n        </li>\n        <li>\n          <button mat-button color="primary" [matMenuTriggerFor]="menu">...</button>\n          <mat-menu #menu="matMenu">\n            <a mat-menu-item *ngFor="let breadcrumb of breadcrumbs.slice(1, breadcrumbs.length - 2)" [routerLink]="breadcrumb.path">{{ breadcrumb.label }}</a>\n          </mat-menu>\n        </li>\n        <li *ngFor="let breadcrumb of breadcrumbs.slice(-2, breadcrumbs.length); let last = last">\n          <a mat-button color="primary" *ngIf="!last; else lastBreadcrumb" [routerLink]="breadcrumb.path">{{ breadcrumb.label }}</a>\n          <ng-template #lastBreadcrumb>\n            <a mat-button color="primary" disabled>{{ breadcrumb.label }}</a>\n          </ng-template>\n        </li>\n      </ng-container>\n\n    </ul>\n</nav>',
      styles: ['.ba-breadcrumb__list{display:flex;list-style-type:none}.ba-breadcrumb__list li:not(:last-child):after{content:"/";padding:0 var(--size-spacing-2xs);font-size:16px;letter-spacing:0px;line-height:22px;font-family:Boeing Meso;font-weight:400;text-transform:none;text-decoration:none;color:var(--color-ui-divider-flat-high)}\n']
    }]
  }], null, {
    breadcrumbs: [{
      type: Input
    }],
    selectedLink: [{
      type: Output
    }]
  });
})();
export {
  BreadcrumbComponent
};
//# sourceMappingURL=@jeppesen-foreflight_dp-dls-global-angular_breadcrumb.js.map
