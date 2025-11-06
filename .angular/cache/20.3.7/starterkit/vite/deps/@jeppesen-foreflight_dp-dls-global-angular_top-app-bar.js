import {
  RouterLink,
  RouterModule
} from "./chunk-PCUTCDBW.js";
import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-YVAEX6RQ.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-G3B7MLSR.js";
import {
  MatDividerModule
} from "./chunk-LI65UMDG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-KO2C4FPU.js";
import "./chunk-5OXZCQUF.js";
import "./chunk-XPMIZQDA.js";
import "./chunk-5LHPWY7D.js";
import "./chunk-TMGX3QZG.js";
import "./chunk-DUPFVKCM.js";
import {
  MatButtonModule
} from "./chunk-IRCNZDQI.js";
import {
  MatIconButton
} from "./chunk-LKTXROOD.js";
import "./chunk-4X4U2WXG.js";
import "./chunk-CJWTBAGM.js";
import "./chunk-AMCCHGQ2.js";
import "./chunk-URR2P62S.js";
import "./chunk-XFXLZEUW.js";
import "./chunk-VENV3F3G.js";
import {
  coerceBooleanProperty
} from "./chunk-GWFLKVBH.js";
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
  NgClass
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
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L7TZZFVV.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-MARUHEWW.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@jeppesen-foreflight/dp-dls-global-angular/fesm2022/jeppesen-foreflight-dp-dls-global-angular-top-app-bar.mjs
var _c0 = ["*"];
function TopAppBarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function TopAppBarComponent_Conditional_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.hamburgerMenuClick.emit());
    });
    ɵɵelement(1, "mat-icon", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("top-app-bar__icon-menu-button--hidden", ctx_r1.hamburgerMenuOnly);
  }
}
function TopAppBarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("src", "./assets/" + ctx_r1.appLogo + "_TopAppBar_dark.svg", ɵɵsanitizeUrl)("ngClass", !ctx_r1.hamburgerMenuOnly && ctx_r1.isNavigationDrawer ? "top-app-bar__app-icon--dark app-icon-padding-left" : "top-app-bar__app-icon--dark");
  }
}
function TopAppBarComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("src", "./assets/" + ctx_r1.appLogo + "_TopAppBar_light.svg", ɵɵsanitizeUrl)("ngClass", !ctx_r1.hamburgerMenuOnly && ctx_r1.isNavigationDrawer ? "top-app-bar__app-icon--light app-icon-padding-left" : "top-app-bar__app-icon--light");
  }
}
function TopAppBarComponent_Conditional_10_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mat-tab", 15);
  }
  if (rf & 2) {
    const tab_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("label", tab_r3.label);
  }
}
function TopAppBarComponent_Conditional_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TopAppBarComponent_Conditional_10_For_3_Conditional_0_Template, 1, 1, "mat-tab", 15);
  }
  if (rf & 2) {
    const ɵ$index_30_r4 = ctx.$index;
    ɵɵconditional(ɵ$index_30_r4 < 6 ? 0 : -1);
  }
}
function TopAppBarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 9);
    ɵɵelementStart(1, "mat-tab-group", 14);
    ɵɵrepeaterCreate(2, TopAppBarComponent_Conditional_10_For_3_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.topAppBarMenu);
  }
}
var _TopAppBarComponent = class _TopAppBarComponent {
  constructor() {
    this.menuAlignCenter = true;
    this.hamburgerMenuOnly = false;
    this.appName = "App Name";
    this.appLogo = "";
    this.homeRoute = "/";
    this.isNavigationDrawer = false;
    this.topAppBarMenu = [];
    this.hamburgerMenuClick = new EventEmitter();
  }
};
_TopAppBarComponent.ɵfac = function TopAppBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TopAppBarComponent)();
};
_TopAppBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _TopAppBarComponent,
  selectors: [["ba-top-app-bar"]],
  inputs: {
    menuAlignCenter: [2, "menuAlignCenter", "menuAlignCenter", coerceBooleanProperty],
    hamburgerMenuOnly: [2, "hamburgerMenuOnly", "hamburgerMenuOnly", coerceBooleanProperty],
    appName: "appName",
    appLogo: "appLogo",
    homeRoute: "homeRoute",
    isNavigationDrawer: [2, "isNavigationDrawer", "isNavigationDrawer", coerceBooleanProperty],
    topAppBarMenu: "topAppBarMenu"
  },
  outputs: {
    hamburgerMenuClick: "hamburgerMenuClick"
  },
  ngContentSelectors: _c0,
  decls: 14,
  vars: 10,
  consts: [[1, "top-app-bar"], [1, "top-app-bar__info"], ["mat-icon-button", "", "matTooltip", "Primary", "color", "primary", "aria-label", "icon-button with a bookmark icon", 1, "top-app-bar__icon-menu-button", 3, "top-app-bar__icon-menu-button--hidden"], [1, "top-app-bar__logo-section"], [3, "routerLink"], ["alt", "dark App Logo", 3, "src", "ngClass"], ["alt", "light App Logo", 3, "src", "ngClass"], [1, "top-app-bar__title-low"], [1, "top-app-bar__tabs"], [1, "top-app-bar__tab-group"], [1, "top-app-bar__spacer"], [1, "top-app-bar__actions"], ["mat-icon-button", "", "matTooltip", "Primary", "color", "primary", "aria-label", "icon-button with a bookmark icon", 1, "top-app-bar__icon-menu-button", 3, "click"], ["svgIcon", "icon-menu"], ["mat-stretch-tabs", "", 1, "top-app-bar__tab-group"], [3, "label"]],
  template: function TopAppBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "mat-toolbar", 0)(1, "div", 1);
      ɵɵconditionalCreate(2, TopAppBarComponent_Conditional_2_Template, 2, 2, "button", 2);
      ɵɵelementStart(3, "div", 3)(4, "a", 4);
      ɵɵconditionalCreate(5, TopAppBarComponent_Conditional_5_Template, 1, 2, "img", 5);
      ɵɵconditionalCreate(6, TopAppBarComponent_Conditional_6_Template, 1, 2, "img", 6);
      ɵɵelementStart(7, "h6", 7);
      ɵɵtext(8);
      ɵɵelementEnd()()()();
      ɵɵelementStart(9, "div", 8);
      ɵɵconditionalCreate(10, TopAppBarComponent_Conditional_10_Template, 4, 0, "ng-container", 9);
      ɵɵelementEnd();
      ɵɵelement(11, "div", 10);
      ɵɵelementStart(12, "div", 11);
      ɵɵprojection(13);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵconditional(ctx.hamburgerMenuOnly ? 2 : -1);
      ɵɵadvance(2);
      ɵɵproperty("routerLink", ctx.homeRoute);
      ɵɵadvance();
      ɵɵconditional(ctx.appLogo ? 5 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.appLogo ? 6 : -1);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.appName);
      ɵɵadvance();
      ɵɵclassProp("top-app-bar__tabs--centered", ctx.menuAlignCenter);
      ɵɵadvance();
      ɵɵconditional(ctx.topAppBarMenu.length && !ctx.hamburgerMenuOnly ? 10 : -1);
      ɵɵadvance();
      ɵɵclassProp("top-app-bar__spacer--centered", ctx.menuAlignCenter);
    }
  },
  dependencies: [
    MatTabsModule,
    MatTab,
    MatTabGroup,
    MatIconModule,
    MatIcon,
    MatToolbarModule,
    MatToolbar,
    MatButtonModule,
    MatIconButton,
    CommonModule,
    NgClass,
    // IconRegistryModule,
    RouterModule,
    RouterLink,
    MatDividerModule
  ],
  styles: [".row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-left:0;margin-right:0;margin-left:-.125rem;margin-right:-.125rem}@media (min-width: 600px){.row[_ngcontent-%COMP%]{margin-left:-.25rem;margin-right:-.25rem}}@media (min-width: 840px){.row[_ngcontent-%COMP%]{margin-left:-.5rem;margin-right:-.5rem}}@media (min-width: 1200px){.row[_ngcontent-%COMP%]{margin-left:-.625rem;margin-right:-.625rem}}@media (min-width: 1600px){.row[_ngcontent-%COMP%]{margin-left:-.75rem;margin-right:-.75rem}}@media (min-width: 2560px){.row[_ngcontent-%COMP%]{margin-left:-.875rem;margin-right:-.875rem}}.col[_ngcontent-%COMP%]{position:relative;width:100%;padding-left:0;padding-right:0;flex-basis:0;flex-grow:1;max-width:100%;padding-left:.125rem;padding-right:.125rem}@media (min-width: 600px){.col[_ngcontent-%COMP%]{padding-left:.25rem;padding-right:.25rem}}@media (min-width: 840px){.col[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem}}@media (min-width: 1200px){.col[_ngcontent-%COMP%]{padding-left:.625rem;padding-right:.625rem}}@media (min-width: 1600px){.col[_ngcontent-%COMP%]{padding-left:.75rem;padding-right:.75rem}}@media (min-width: 2560px){.col[_ngcontent-%COMP%]{padding-left:.875rem;padding-right:.875rem}}.col-xs-1[_ngcontent-%COMP%]{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xs-2[_ngcontent-%COMP%]{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xs-3[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%}.col-xs-4[_ngcontent-%COMP%]{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xs-5[_ngcontent-%COMP%]{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xs-6[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}.col-xs-7[_ngcontent-%COMP%]{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xs-8[_ngcontent-%COMP%]{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xs-9[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}.col-xs-10[_ngcontent-%COMP%]{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xs-11[_ngcontent-%COMP%]{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xs-12[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}.col-xs-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto;max-width:none}@media (min-width: 600px){.col-sm-1[_ngcontent-%COMP%]{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 600px){.col-sm-2[_ngcontent-%COMP%]{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 600px){.col-sm-3[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%}}@media (min-width: 600px){.col-sm-4[_ngcontent-%COMP%]{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 600px){.col-sm-5[_ngcontent-%COMP%]{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 600px){.col-sm-6[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}}@media (min-width: 600px){.col-sm-7[_ngcontent-%COMP%]{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 600px){.col-sm-8[_ngcontent-%COMP%]{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 600px){.col-sm-9[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}}@media (min-width: 600px){.col-sm-10[_ngcontent-%COMP%]{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 600px){.col-sm-11[_ngcontent-%COMP%]{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 600px){.col-sm-12[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}}@media (min-width: 600px){.col-sm-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto;max-width:none}}@media (min-width: 840px){.col-md-1[_ngcontent-%COMP%]{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 840px){.col-md-2[_ngcontent-%COMP%]{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 840px){.col-md-3[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%}}@media (min-width: 840px){.col-md-4[_ngcontent-%COMP%]{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 840px){.col-md-5[_ngcontent-%COMP%]{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 840px){.col-md-6[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}}@media (min-width: 840px){.col-md-7[_ngcontent-%COMP%]{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 840px){.col-md-8[_ngcontent-%COMP%]{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 840px){.col-md-9[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}}@media (min-width: 840px){.col-md-10[_ngcontent-%COMP%]{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 840px){.col-md-11[_ngcontent-%COMP%]{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 840px){.col-md-12[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}}@media (min-width: 840px){.col-md-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto;max-width:none}}@media (min-width: 1200px){.col-lg-1[_ngcontent-%COMP%]{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 1200px){.col-lg-2[_ngcontent-%COMP%]{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 1200px){.col-lg-3[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%}}@media (min-width: 1200px){.col-lg-4[_ngcontent-%COMP%]{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 1200px){.col-lg-5[_ngcontent-%COMP%]{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 1200px){.col-lg-6[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}}@media (min-width: 1200px){.col-lg-7[_ngcontent-%COMP%]{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 1200px){.col-lg-8[_ngcontent-%COMP%]{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 1200px){.col-lg-9[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}}@media (min-width: 1200px){.col-lg-10[_ngcontent-%COMP%]{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 1200px){.col-lg-11[_ngcontent-%COMP%]{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 1200px){.col-lg-12[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}}@media (min-width: 1200px){.col-lg-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto;max-width:none}}@media (min-width: 1600px){.col-xl-1[_ngcontent-%COMP%]{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 1600px){.col-xl-2[_ngcontent-%COMP%]{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 1600px){.col-xl-3[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%}}@media (min-width: 1600px){.col-xl-4[_ngcontent-%COMP%]{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 1600px){.col-xl-5[_ngcontent-%COMP%]{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 1600px){.col-xl-6[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}}@media (min-width: 1600px){.col-xl-7[_ngcontent-%COMP%]{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 1600px){.col-xl-8[_ngcontent-%COMP%]{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 1600px){.col-xl-9[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}}@media (min-width: 1600px){.col-xl-10[_ngcontent-%COMP%]{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 1600px){.col-xl-11[_ngcontent-%COMP%]{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 1600px){.col-xl-12[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}}@media (min-width: 1600px){.col-xl-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto;max-width:none}}@media (min-width: 2560px){.col-xxl-1[_ngcontent-%COMP%]{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 2560px){.col-xxl-2[_ngcontent-%COMP%]{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 2560px){.col-xxl-3[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%}}@media (min-width: 2560px){.col-xxl-4[_ngcontent-%COMP%]{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 2560px){.col-xxl-5[_ngcontent-%COMP%]{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 2560px){.col-xxl-6[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}}@media (min-width: 2560px){.col-xxl-7[_ngcontent-%COMP%]{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 2560px){.col-xxl-8[_ngcontent-%COMP%]{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 2560px){.col-xxl-9[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}}@media (min-width: 2560px){.col-xxl-10[_ngcontent-%COMP%]{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 2560px){.col-xxl-11[_ngcontent-%COMP%]{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 2560px){.col-xxl-12[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}}@media (min-width: 2560px){.col-xxl-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto;max-width:none}}.col-1[_ngcontent-%COMP%]{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2[_ngcontent-%COMP%]{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%}.col-4[_ngcontent-%COMP%]{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5[_ngcontent-%COMP%]{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}.col-7[_ngcontent-%COMP%]{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8[_ngcontent-%COMP%]{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}.col-10[_ngcontent-%COMP%]{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11[_ngcontent-%COMP%]{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}.col-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto;max-width:none}.top-app-bar[_ngcontent-%COMP%]{align-items:center;border-bottom:1px solid var(--color-ui-divider-flat-high);background:var(--color-ui-glass-surface-thin)}mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:36px;letter-spacing:0px;line-height:42px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:46px;letter-spacing:0px;line-height:54px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px;letter-spacing:0px;line-height:60px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Boeing Meso;font-size:56px;font-weight:700;letter-spacing:0px;line-height:66px;text-transform:none;text-decoration:none}}mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:28px;letter-spacing:0px;line-height:34px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:36px;letter-spacing:0px;line-height:44px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px;letter-spacing:0px;line-height:48px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Boeing Meso;font-size:46px;font-weight:700;letter-spacing:0px;line-height:54px;text-transform:none;text-decoration:none}}mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:24px;letter-spacing:0px;line-height:28px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:28px;letter-spacing:0px;line-height:34px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:32px;letter-spacing:0px;line-height:38px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Boeing Meso;font-size:36px;font-weight:700;letter-spacing:0px;line-height:42px;text-transform:none;text-decoration:none}}mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:20px;letter-spacing:0px;line-height:26px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:22px;letter-spacing:0px;line-height:28px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px;letter-spacing:0px;line-height:28px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Boeing Meso;font-size:28px;font-weight:500;letter-spacing:0px;line-height:34px;text-transform:none;text-decoration:none}}mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0;font-size:16px;letter-spacing:0px;line-height:20px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:18px;letter-spacing:0px;line-height:22px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:20px;letter-spacing:0px;line-height:24px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Boeing Meso;font-size:22px;font-weight:500;letter-spacing:0px;line-height:28px;text-transform:none;text-decoration:none}}mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-size:14px;letter-spacing:.200000003px;line-height:18px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:14px;letter-spacing:.200000003px;line-height:18px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:16px;letter-spacing:.200000003px;line-height:20px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:Boeing Meso;font-size:18px;font-weight:500;letter-spacing:0px;line-height:22px;text-transform:none;text-decoration:none}}.top-app-bar__info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;position:relative;z-index:1}.top-app-bar__logo-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;text-decoration:none;color:var(--color-ui-textandicon-high)}.top-app-bar__logo-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{outline:none}.top-app-bar__app-icon[_ngcontent-%COMP%]{margin-left:20px;height:24px;width:32px;color:#fff}.top-app-bar__app-icon--light[_ngcontent-%COMP%]{display:none}.top-app-bar__app-icon--dark[_ngcontent-%COMP%]{display:block}.app-icon-padding-left[_ngcontent-%COMP%]{padding-left:12px}  .theme-light .top-app-bar__app-icon--light{display:block}  .theme-light .top-app-bar__app-icon--dark{display:none}.top-app-bar__icon-menu-button[_ngcontent-%COMP%]{display:none}.top-app-bar__icon-menu-button--hidden[_ngcontent-%COMP%]{display:inline-flex}@media (max-width: 1199.98px){.top-app-bar__icon-menu-button[_ngcontent-%COMP%]{display:inline-flex}.top-app-bar__tab-group[_ngcontent-%COMP%]{display:none}}.top-app-bar__spacer[_ngcontent-%COMP%]{display:none}.top-app-bar__spacer--centered[_ngcontent-%COMP%]{flex-grow:1;display:block}.top-app-bar__actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;height:100%;padding-left:16px}  .actions{display:flex;flex-direction:row;gap:var(--size-spacing-xs)}  .actions.small-screen{display:none}@media (max-width: 1199.98px){  .actions.large-screen{display:none}  .actions.small-screen{display:block}}  .divider-parent{position:relative;height:40%;padding-left:var(--size-spacing-s);padding-right:var(--size-spacing-s)}  .mat-toolbar .divider-parent .mat-divider{right:var(--size-spacing-s);top:var(--size-spacing-s);bottom:var(--size-spacing-s);border-left:1px solid var(--color-ui-divider-flat-high);height:100%}@media (max-width: 1199.98px){  .divider-parent{display:none}}  .avatar{display:flex;align-items:center;z-index:1;padding:0 8px}@media (max-width: 1199.98px){  .avatar{border-left:none}}"]
});
var TopAppBarComponent = _TopAppBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopAppBarComponent, [{
    type: Component,
    args: [{
      selector: "ba-top-app-bar",
      standalone: true,
      imports: [
        MatTabsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        CommonModule,
        // IconRegistryModule,
        RouterModule,
        MatDividerModule
      ],
      template: `<mat-toolbar class="top-app-bar">
  <div class="top-app-bar__info">
    @if (hamburgerMenuOnly) {
      <button  
      class="top-app-bar__icon-menu-button" 
      [class.top-app-bar__icon-menu-button--hidden]="hamburgerMenuOnly"
      mat-icon-button
      matTooltip="Primary"
      color="primary"
      aria-label="icon-button with a bookmark icon"
      (click)="hamburgerMenuClick.emit()"
      >
        <mat-icon svgIcon="icon-menu"></mat-icon>
      </button>
    }
    <div class="top-app-bar__logo-section">
      <a [routerLink]="homeRoute">
        @if (appLogo) {
          <img 
          [src]="'./assets/' + appLogo + '_TopAppBar_dark.svg'" 
          [ngClass]=" !hamburgerMenuOnly && isNavigationDrawer ? 'top-app-bar__app-icon--dark app-icon-padding-left': 'top-app-bar__app-icon--dark'"
          alt="dark App Logo"
          >
        }
        @if (appLogo) {
          <img
          [src]="'./assets/' + appLogo + '_TopAppBar_light.svg'"
          [ngClass]=" !hamburgerMenuOnly && isNavigationDrawer ? 'top-app-bar__app-icon--light app-icon-padding-left': 'top-app-bar__app-icon--light'"
          alt="light App Logo"
          >
        }
        <h6 class="top-app-bar__title-low">{{ appName }}</h6>
      </a>
    </div>
  </div>
  <div class="top-app-bar__tabs" [class.top-app-bar__tabs--centered]="menuAlignCenter">
    @if (topAppBarMenu.length && !hamburgerMenuOnly) {
      <ng-container class="top-app-bar__tab-group">
        <mat-tab-group class="top-app-bar__tab-group" mat-stretch-tabs>
          @for (tab of topAppBarMenu; track tab; let i = $index) {
            @if (i < 6) {
              <mat-tab [label]="tab.label"></mat-tab>
            }
          }
        </mat-tab-group>
      </ng-container>
    }
  </div>
  <div
    class="top-app-bar__spacer"
    [class.top-app-bar__spacer--centered]="menuAlignCenter"
  ></div>

  <div class="top-app-bar__actions">
    <ng-content></ng-content>
  </div>
</mat-toolbar>
`,
      styles: [".row{display:flex;flex-wrap:wrap;margin-left:0;margin-right:0;margin-left:-.125rem;margin-right:-.125rem}@media (min-width: 600px){.row{margin-left:-.25rem;margin-right:-.25rem}}@media (min-width: 840px){.row{margin-left:-.5rem;margin-right:-.5rem}}@media (min-width: 1200px){.row{margin-left:-.625rem;margin-right:-.625rem}}@media (min-width: 1600px){.row{margin-left:-.75rem;margin-right:-.75rem}}@media (min-width: 2560px){.row{margin-left:-.875rem;margin-right:-.875rem}}.col{position:relative;width:100%;padding-left:0;padding-right:0;flex-basis:0;flex-grow:1;max-width:100%;padding-left:.125rem;padding-right:.125rem}@media (min-width: 600px){.col{padding-left:.25rem;padding-right:.25rem}}@media (min-width: 840px){.col{padding-left:.5rem;padding-right:.5rem}}@media (min-width: 1200px){.col{padding-left:.625rem;padding-right:.625rem}}@media (min-width: 1600px){.col{padding-left:.75rem;padding-right:.75rem}}@media (min-width: 2560px){.col{padding-left:.875rem;padding-right:.875rem}}.col-xs-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xs-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xs-3{flex:0 0 25%;max-width:25%}.col-xs-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xs-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xs-6{flex:0 0 50%;max-width:50%}.col-xs-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xs-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xs-9{flex:0 0 75%;max-width:75%}.col-xs-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xs-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xs-12{flex:0 0 100%;max-width:100%}.col-xs-auto{flex:0 0 auto;width:auto;max-width:none}@media (min-width: 600px){.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 600px){.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 600px){.col-sm-3{flex:0 0 25%;max-width:25%}}@media (min-width: 600px){.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 600px){.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 600px){.col-sm-6{flex:0 0 50%;max-width:50%}}@media (min-width: 600px){.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 600px){.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 600px){.col-sm-9{flex:0 0 75%;max-width:75%}}@media (min-width: 600px){.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 600px){.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 600px){.col-sm-12{flex:0 0 100%;max-width:100%}}@media (min-width: 600px){.col-sm-auto{flex:0 0 auto;width:auto;max-width:none}}@media (min-width: 840px){.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 840px){.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 840px){.col-md-3{flex:0 0 25%;max-width:25%}}@media (min-width: 840px){.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 840px){.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 840px){.col-md-6{flex:0 0 50%;max-width:50%}}@media (min-width: 840px){.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 840px){.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 840px){.col-md-9{flex:0 0 75%;max-width:75%}}@media (min-width: 840px){.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 840px){.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 840px){.col-md-12{flex:0 0 100%;max-width:100%}}@media (min-width: 840px){.col-md-auto{flex:0 0 auto;width:auto;max-width:none}}@media (min-width: 1200px){.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 1200px){.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 1200px){.col-lg-3{flex:0 0 25%;max-width:25%}}@media (min-width: 1200px){.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 1200px){.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 1200px){.col-lg-6{flex:0 0 50%;max-width:50%}}@media (min-width: 1200px){.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 1200px){.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 1200px){.col-lg-9{flex:0 0 75%;max-width:75%}}@media (min-width: 1200px){.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 1200px){.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 1200px){.col-lg-12{flex:0 0 100%;max-width:100%}}@media (min-width: 1200px){.col-lg-auto{flex:0 0 auto;width:auto;max-width:none}}@media (min-width: 1600px){.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 1600px){.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 1600px){.col-xl-3{flex:0 0 25%;max-width:25%}}@media (min-width: 1600px){.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 1600px){.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 1600px){.col-xl-6{flex:0 0 50%;max-width:50%}}@media (min-width: 1600px){.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 1600px){.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 1600px){.col-xl-9{flex:0 0 75%;max-width:75%}}@media (min-width: 1600px){.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 1600px){.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 1600px){.col-xl-12{flex:0 0 100%;max-width:100%}}@media (min-width: 1600px){.col-xl-auto{flex:0 0 auto;width:auto;max-width:none}}@media (min-width: 2560px){.col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media (min-width: 2560px){.col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media (min-width: 2560px){.col-xxl-3{flex:0 0 25%;max-width:25%}}@media (min-width: 2560px){.col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media (min-width: 2560px){.col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media (min-width: 2560px){.col-xxl-6{flex:0 0 50%;max-width:50%}}@media (min-width: 2560px){.col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media (min-width: 2560px){.col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media (min-width: 2560px){.col-xxl-9{flex:0 0 75%;max-width:75%}}@media (min-width: 2560px){.col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width: 2560px){.col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media (min-width: 2560px){.col-xxl-12{flex:0 0 100%;max-width:100%}}@media (min-width: 2560px){.col-xxl-auto{flex:0 0 auto;width:auto;max-width:none}}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:none}.top-app-bar{align-items:center;border-bottom:1px solid var(--color-ui-divider-flat-high);background:var(--color-ui-glass-surface-thin)}mat-toolbar h1{margin:0;font-size:36px;letter-spacing:0px;line-height:42px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar h1{font-size:46px;letter-spacing:0px;line-height:54px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar h1{font-size:50px;letter-spacing:0px;line-height:60px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar h1{font-family:Boeing Meso;font-size:56px;font-weight:700;letter-spacing:0px;line-height:66px;text-transform:none;text-decoration:none}}mat-toolbar h2{margin:0;font-size:28px;letter-spacing:0px;line-height:34px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar h2{font-size:36px;letter-spacing:0px;line-height:44px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar h2{font-size:40px;letter-spacing:0px;line-height:48px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar h2{font-family:Boeing Meso;font-size:46px;font-weight:700;letter-spacing:0px;line-height:54px;text-transform:none;text-decoration:none}}mat-toolbar h3{margin:0;font-size:24px;letter-spacing:0px;line-height:28px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar h3{font-size:28px;letter-spacing:0px;line-height:34px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar h3{font-size:32px;letter-spacing:0px;line-height:38px;font-family:Boeing Meso;font-weight:700;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar h3{font-family:Boeing Meso;font-size:36px;font-weight:700;letter-spacing:0px;line-height:42px;text-transform:none;text-decoration:none}}mat-toolbar h4{margin:0;font-size:20px;letter-spacing:0px;line-height:26px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar h4{font-size:22px;letter-spacing:0px;line-height:28px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar h4{font-size:24px;letter-spacing:0px;line-height:28px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar h4{font-family:Boeing Meso;font-size:28px;font-weight:500;letter-spacing:0px;line-height:34px;text-transform:none;text-decoration:none}}mat-toolbar h5{margin:0;font-size:16px;letter-spacing:0px;line-height:20px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar h5{font-size:18px;letter-spacing:0px;line-height:22px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar h5{font-size:20px;letter-spacing:0px;line-height:24px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar h5{font-family:Boeing Meso;font-size:22px;font-weight:500;letter-spacing:0px;line-height:28px;text-transform:none;text-decoration:none}}mat-toolbar h6{margin:0;font-size:14px;letter-spacing:.200000003px;line-height:18px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}@media (min-width: 840px){mat-toolbar h6{font-size:14px;letter-spacing:.200000003px;line-height:18px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1200px){mat-toolbar h6{font-size:16px;letter-spacing:.200000003px;line-height:20px;font-family:Boeing Meso;font-weight:500;text-transform:none;text-decoration:none}}@media (min-width: 1600px){mat-toolbar h6{font-family:Boeing Meso;font-size:18px;font-weight:500;letter-spacing:0px;line-height:22px;text-transform:none;text-decoration:none}}.top-app-bar__info{display:flex;align-items:center;justify-content:space-between;gap:12px;position:relative;z-index:1}.top-app-bar__logo-section a{display:flex;align-items:center;justify-content:space-between;gap:8px;text-decoration:none;color:var(--color-ui-textandicon-high)}.top-app-bar__logo-section a:focus{outline:none}.top-app-bar__app-icon{margin-left:20px;height:24px;width:32px;color:#fff}.top-app-bar__app-icon--light{display:none}.top-app-bar__app-icon--dark{display:block}.app-icon-padding-left{padding-left:12px}::ng-deep .theme-light .top-app-bar__app-icon--light{display:block}::ng-deep .theme-light .top-app-bar__app-icon--dark{display:none}.top-app-bar__icon-menu-button{display:none}.top-app-bar__icon-menu-button--hidden{display:inline-flex}@media (max-width: 1199.98px){.top-app-bar__icon-menu-button{display:inline-flex}.top-app-bar__tab-group{display:none}}.top-app-bar__spacer{display:none}.top-app-bar__spacer--centered{flex-grow:1;display:block}.top-app-bar__actions{display:flex;align-items:center;justify-content:space-between;gap:12px;height:100%;padding-left:16px}::ng-deep .actions{display:flex;flex-direction:row;gap:var(--size-spacing-xs)}::ng-deep .actions.small-screen{display:none}@media (max-width: 1199.98px){::ng-deep .actions.large-screen{display:none}::ng-deep .actions.small-screen{display:block}}::ng-deep .divider-parent{position:relative;height:40%;padding-left:var(--size-spacing-s);padding-right:var(--size-spacing-s)}::ng-deep .mat-toolbar .divider-parent .mat-divider{right:var(--size-spacing-s);top:var(--size-spacing-s);bottom:var(--size-spacing-s);border-left:1px solid var(--color-ui-divider-flat-high);height:100%}@media (max-width: 1199.98px){::ng-deep .divider-parent{display:none}}::ng-deep .avatar{display:flex;align-items:center;z-index:1;padding:0 8px}@media (max-width: 1199.98px){::ng-deep .avatar{border-left:none}}\n"]
    }]
  }], null, {
    menuAlignCenter: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }],
    hamburgerMenuOnly: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }],
    appName: [{
      type: Input
    }],
    appLogo: [{
      type: Input
    }],
    homeRoute: [{
      type: Input
    }],
    isNavigationDrawer: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }],
    topAppBarMenu: [{
      type: Input
    }],
    hamburgerMenuClick: [{
      type: Output
    }]
  });
})();
export {
  TopAppBarComponent
};
//# sourceMappingURL=@jeppesen-foreflight_dp-dls-global-angular_top-app-bar.js.map
