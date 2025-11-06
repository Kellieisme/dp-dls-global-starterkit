import {
  IconRegistryModule
} from "./chunk-MNWAHKD4.js";
import {
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-PCUTCDBW.js";
import {
  MatToolbarModule
} from "./chunk-YVAEX6RQ.js";
import {
  MatMenuModule
} from "./chunk-QZ5L6N7S.js";
import {
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./chunk-6RVFHH73.js";
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
  MatSidenavModule
} from "./chunk-WVBZXTSU.js";
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
import "./chunk-CSEFNGHN.js";
import "./chunk-J6XCCMDZ.js";
import "./chunk-HPS34U37.js";
import "./chunk-TMGX3QZG.js";
import "./chunk-EOMZNBVZ.js";
import {
  MatButtonModule
} from "./chunk-IRCNZDQI.js";
import "./chunk-LKTXROOD.js";
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
import "./chunk-X5C2LOWL.js";
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
  NgClass,
  NgTemplateOutlet
} from "./chunk-D5P5I7SG.js";
import "./chunk-EITAFI4I.js";
import "./chunk-7MVUXVX5.js";
import "./chunk-WWPX3U3G.js";
import "./chunk-G5EVG5KB.js";
import "./chunk-MZVJP6II.js";
import "./chunk-SCHDBRSY.js";
import {
  ChangeDetectorRef,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-L7TZZFVV.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-MARUHEWW.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@jeppesen-foreflight/dp-dls-global-angular/fesm2022/jeppesen-foreflight-dp-dls-global-angular-navigation-rail.mjs
var _c0 = (a0, a1) => ({
  "narrow": a0,
  "mat-list-item--toggle-on": a1
});
function NavigationRailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", "./assets/" + ctx_r0.appLogo + "-logomark_Navigation_dark.svg", ɵɵsanitizeUrl);
  }
}
function NavigationRailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", "./assets/" + ctx_r0.appLogo + "-logomark_Navigation_light.svg", ɵɵsanitizeUrl);
  }
}
function NavigationRailComponent_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mat-icon", 12);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("svgIcon", item_r3.toggled ? "icon-" + item_r3.icon + "-filled" : "icon-" + item_r3.icon);
  }
}
function NavigationRailComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r3.label, " ");
  }
}
function NavigationRailComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-list-item", 11);
    ɵɵlistener("click", function NavigationRailComponent_For_9_Template_mat_list_item_click_0_listener() {
      const item_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onMenuItemClick(item_r3));
    });
    ɵɵconditionalCreate(1, NavigationRailComponent_For_9_Conditional_1_Template, 1, 1, "mat-icon", 12);
    ɵɵconditionalCreate(2, NavigationRailComponent_For_9_Conditional_2_Template, 2, 1, "div", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c0, !ctx_r0.wide && ctx_r0.hideLabels, item_r3.toggled))("routerLink", item_r3.route);
    ɵɵadvance();
    ɵɵconditional(item_r3.icon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r0.hideLabels ? 2 : -1);
  }
}
function NavigationRailComponent_11_ng_template_0_Template(rf, ctx) {
}
function NavigationRailComponent_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavigationRailComponent_11_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function NavigationRailComponent_12_ng_template_0_Template(rf, ctx) {
}
function NavigationRailComponent_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavigationRailComponent_12_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function NavigationRailComponent_13_ng_template_0_Template(rf, ctx) {
}
function NavigationRailComponent_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavigationRailComponent_13_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function NavigationRailComponent_14_ng_template_0_Template(rf, ctx) {
}
function NavigationRailComponent_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavigationRailComponent_14_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function NavigationRailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-sidenav-content");
    ɵɵelement(1, "router-outlet");
    ɵɵelementEnd();
  }
}
var MockSideRailMenuData = [{
  label: "Level 1",
  icon: "apps",
  route: "/level1",
  toggled: false
}, {
  label: "Level 1",
  icon: "code",
  route: "/level1",
  toggled: false
}, {
  label: "Level 1",
  icon: "book",
  route: "/level1",
  toggled: false
}];
var _NavigationRailComponent = class _NavigationRailComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.appLogo = "";
    this.homeRoute = "/";
    this.hideLabels = false;
    this.menuItems = MockSideRailMenuData;
    this.wide = false;
    this.disableSidenavContent = false;
    this.itemClick = new EventEmitter();
  }
  ngOnInit() {
    this.setFirstItemActive();
  }
  /**
   * Sets the first menu item as active. This method is called to ensure
   * that the first item is selected when the component is initialized.
   *
   * Note: This method may cause an ExpressionchangedAfterItHasBeenChecked
   * if it modifies any properties that are bound to the template after Angular
   * has already checked the bindings. To avoid this, we will call
   * detectChanges() explicitly after modifying the state.
   */
  setFirstItemActive() {
    if (this.menuItems && this.menuItems.length > 0) {
      const firstItem = this.menuItems[0];
      this.onMenuItemClick(firstItem);
      this.cdr.detectChanges();
    }
  }
  onMenuItemClick(item) {
    this.menuItems.forEach((menuItem) => {
      menuItem.toggled = false;
    });
    item.toggled = true;
    this.itemClick.emit(item);
    this.cdr.detectChanges();
  }
};
_NavigationRailComponent.ɵfac = function NavigationRailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavigationRailComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NavigationRailComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavigationRailComponent,
  selectors: [["ba-navigation-rail"]],
  inputs: {
    appLogo: "appLogo",
    homeRoute: "homeRoute",
    hideLabels: [2, "hideLabels", "hideLabels", coerceBooleanProperty],
    menuItems: "menuItems",
    wide: [2, "wide", "wide", coerceBooleanProperty],
    disableSidenavContent: [2, "disableSidenavContent", "disableSidenavContent", coerceBooleanProperty],
    navRailBottomComponent1: "navRailBottomComponent1",
    navRailBottomComponent2: "navRailBottomComponent2",
    navRailBottomComponent3: "navRailBottomComponent3",
    navRailBottomComponent4: "navRailBottomComponent4"
  },
  outputs: {
    itemClick: "itemClick"
  },
  decls: 16,
  vars: 14,
  consts: [["sidenav", ""], ["autosize", "true", "color", "primary"], ["mode", "side", "disableClose", "", 3, "opened", "autoFocus"], [1, "sidenav-header"], [1, "app-home-link", 3, "routerLink"], ["alt", "dark App Logo", 1, "navigation__app-icon--dark", 3, "src"], ["alt", "light App Logo", 1, "navigation__app-icon--light", 3, "src"], [1, "menu-items"], ["disableRipple", "", 3, "ngClass", "routerLink"], [1, "bottom-icons"], [4, "ngTemplateOutlet"], ["disableRipple", "", 3, "click", "ngClass", "routerLink"], ["matListItemIcon", "", 3, "svgIcon"], ["matListItemTitle", "", 1, "label"]],
  template: function NavigationRailComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "mat-sidenav-container", 1)(1, "mat-sidenav", 2, 0)(3, "div", 3)(4, "a", 4);
      ɵɵconditionalCreate(5, NavigationRailComponent_Conditional_5_Template, 1, 1, "img", 5);
      ɵɵconditionalCreate(6, NavigationRailComponent_Conditional_6_Template, 1, 1, "img", 6);
      ɵɵelementEnd()();
      ɵɵelementStart(7, "mat-nav-list", 7);
      ɵɵrepeaterCreate(8, NavigationRailComponent_For_9_Template, 3, 7, "mat-list-item", 8, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
      ɵɵelementStart(10, "mat-nav-list", 9);
      ɵɵtemplate(11, NavigationRailComponent_11_Template, 1, 0, null, 10)(12, NavigationRailComponent_12_Template, 1, 0, null, 10)(13, NavigationRailComponent_13_Template, 1, 0, null, 10)(14, NavigationRailComponent_14_Template, 1, 0, null, 10);
      ɵɵelementEnd()();
      ɵɵconditionalCreate(15, NavigationRailComponent_Conditional_15_Template, 2, 0, "mat-sidenav-content");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("labels-visible", !ctx.hideLabels)("wide", ctx.wide);
      ɵɵadvance();
      ɵɵproperty("opened", true)("autoFocus", true);
      ɵɵadvance(3);
      ɵɵproperty("routerLink", ctx.homeRoute);
      ɵɵadvance();
      ɵɵconditional(ctx.appLogo ? 5 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.appLogo ? 6 : -1);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.menuItems);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.navRailBottomComponent1);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.navRailBottomComponent2);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.navRailBottomComponent3);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.navRailBottomComponent4);
      ɵɵadvance();
      ɵɵconditional(!ctx.disableSidenavContent ? 15 : -1);
    }
  },
  dependencies: [CommonModule, NgClass, NgTemplateOutlet, MatToolbarModule, MatSidenavModule, MatSidenav, MatSidenavContainer, MatSidenavContent, MatButtonModule, MatIconModule, MatIcon, RouterOutlet, RouterModule, RouterLink, MatListModule, MatNavList, MatListItem, MatListItemIcon, MatListItemTitle, MatDividerModule, IconRegistryModule, MatMenuModule],
  styles: ["mat-sidenav-container[_ngcontent-%COMP%]{height:100vh}mat-sidenav-container[_ngcontent-%COMP%]   .app-home-link[_ngcontent-%COMP%]{display:block}mat-sidenav-container[_ngcontent-%COMP%]   .app-home-link[_ngcontent-%COMP%]:focus{outline:none}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:80px}mat-sidenav-container.wide[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:100px}mat-sidenav-container.labels-visible[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{overflow:visible;margin-bottom:32px;padding-top:var(--size-spacing-2xs);padding-right:0;height:32px}mat-sidenav-container.labels-visible[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line[_ngcontent-%COMP%]{height:var(--size-spacing-2xl)}mat-sidenav-container.labels-visible[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]     .mdc-list-item__content{position:relative;bottom:-4px;cursor:pointer}mat-sidenav-container[_ngcontent-%COMP%]:not(.labels-visible)   mat-sidenav[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{--mdc-list-list-item-leading-icon-size: 24px}mat-sidenav[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(100px);backdrop-filter:blur(100px);border-right:1px solid var(--color-ui-divider-flat-high);padding:20px 8px}mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line[_ngcontent-%COMP%]{height:56px}mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item[_ngcontent-%COMP%]{background-color:transparent}mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item[_ngcontent-%COMP%]:focus{background-color:var(--color-interactive-primary-background-enabled-tonal)}mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item[_ngcontent-%COMP%]:active{background-color:var(--color-interactive-primary-background-selected)}mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item[_ngcontent-%COMP%]:hover:not(:disabled), mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item.mat-list-item--toggle-on[_ngcontent-%COMP%]{background-color:var(--color-interactive-primary-background-hovered)}mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item[_ngcontent-%COMP%]:hover:not(:disabled)   .mat-icon[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item.mat-list-item--toggle-on[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{overflow:visible}mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item[_ngcontent-%COMP%]:hover:not(:disabled)   .mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item.mat-list-item--toggle-on[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{filter:drop-shadow(var(--box-shadow-interactive-primary-glow-backlit))}mat-sidenav[_ngcontent-%COMP%]   mat-list-item.mat-mdc-list-item[_ngcontent-%COMP%]   .mdc-list-item__primary-text[_ngcontent-%COMP%]{--mdc-list-list-item-label-text-line-height: 16px;--mdc-list-list-item-label-text-size: 12px;--mdc-list-list-item-label-text-weight: 500}  .mat-drawer-inner-container{display:flex;flex-direction:column}.sidenav-header[_ngcontent-%COMP%]{justify-content:center;display:flex}.navigation__app-icon--light[_ngcontent-%COMP%]{display:none}.navigation__app-icon--dark[_ngcontent-%COMP%]{display:block}  .theme-light .navigation__app-icon--light{display:block}  .theme-light .navigation__app-icon--dark{display:none}mat-list-item.narrow[_ngcontent-%COMP%]{display:flex}mat-list-item.narrow[_ngcontent-%COMP%]   .mat-mdc-list-item-icon[_ngcontent-%COMP%]{margin-left:16px;margin-right:16px}mat-list-item[_ngcontent-%COMP%]{display:block;text-align:center;padding-right:0;margin-top:12px}mat-list-item[_ngcontent-%COMP%]   .mat-mdc-list-item-icon[_ngcontent-%COMP%]{margin:0}.menu-items[_ngcontent-%COMP%]{flex-grow:1}.bottom-icons[_ngcontent-%COMP%]{display:flex;bottom:0;flex-direction:column;text-align:center;align-items:center;justify-content:center}"]
});
var NavigationRailComponent = _NavigationRailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationRailComponent, [{
    type: Component,
    args: [{
      selector: "ba-navigation-rail",
      imports: [CommonModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, RouterOutlet, RouterModule, MatListModule, MatNavList, MatDividerModule, IconRegistryModule, MatMenuModule],
      template: `<mat-sidenav-container
  autosize="true"
  color="primary"
  [class.labels-visible]="!hideLabels"
  [class.wide]="wide"
  >
  <mat-sidenav
    #sidenav
    [opened]="true"
    mode="side"
    disableClose
    [autoFocus]="true"
    >
    <div class="sidenav-header">
      <a class="app-home-link" [routerLink]="homeRoute">
        @if (appLogo) {
          <img
            [src]="'./assets/' + appLogo + '-logomark_Navigation_dark.svg'"
            class="navigation__app-icon--dark"
            alt="dark App Logo"
            />
        }
        @if (appLogo) {
          <img
            [src]="'./assets/' + appLogo + '-logomark_Navigation_light.svg'"
            class="navigation__app-icon--light"
            alt="light App Logo"
            />
        }
      </a>
    </div>

    <!-- navigation list -->
    <mat-nav-list class="menu-items">
      @for (item of menuItems; track item) {
        <mat-list-item
          disableRipple
          (click)="onMenuItemClick(item)"
          [ngClass]="{ 'narrow': !wide && hideLabels, 'mat-list-item--toggle-on': item.toggled }"
          [routerLink]="item.route"
          >
          @if (item.icon) {
            <mat-icon matListItemIcon [svgIcon]="item.toggled ? 'icon-'+item.icon+'-filled' : 'icon-'+item.icon"></mat-icon>
          }
          @if (!hideLabels) {
            <div matListItemTitle class="label">
              {{ item.label }}
            </div>
          }
        </mat-list-item>
      }
    </mat-nav-list>

    <!-- BOTTOM BUTTONS (max: 4) -->
    <!-- list for notification and profile (and up to two more)-->
    <mat-nav-list class="bottom-icons">
      <ng-template *ngTemplateOutlet="navRailBottomComponent1" />
      <ng-template *ngTemplateOutlet="navRailBottomComponent2" />
      <ng-template *ngTemplateOutlet="navRailBottomComponent3" />
      <ng-template *ngTemplateOutlet="navRailBottomComponent4" />
    </mat-nav-list>

  </mat-sidenav>

  @if (!disableSidenavContent) {
    <mat-sidenav-content>
      <router-outlet></router-outlet>
    </mat-sidenav-content>
  }

</mat-sidenav-container>
`,
      styles: ["mat-sidenav-container{height:100vh}mat-sidenav-container .app-home-link{display:block}mat-sidenav-container .app-home-link:focus{outline:none}mat-sidenav-container mat-sidenav{width:80px}mat-sidenav-container.wide mat-sidenav{width:100px}mat-sidenav-container.labels-visible mat-sidenav mat-list-item{overflow:visible;margin-bottom:32px;padding-top:var(--size-spacing-2xs);padding-right:0;height:32px}mat-sidenav-container.labels-visible mat-sidenav mat-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:var(--size-spacing-2xl)}mat-sidenav-container.labels-visible mat-sidenav mat-list-item ::ng-deep .mdc-list-item__content{position:relative;bottom:-4px;cursor:pointer}mat-sidenav-container:not(.labels-visible) mat-sidenav mat-list-item{--mdc-list-list-item-leading-icon-size: 24px}mat-sidenav{-webkit-backdrop-filter:blur(100px);backdrop-filter:blur(100px);border-right:1px solid var(--color-ui-divider-flat-high);padding:20px 8px}mat-sidenav mat-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:56px}mat-sidenav mat-list-item.mat-mdc-list-item{background-color:transparent}mat-sidenav mat-list-item.mat-mdc-list-item:focus{background-color:var(--color-interactive-primary-background-enabled-tonal)}mat-sidenav mat-list-item.mat-mdc-list-item:active{background-color:var(--color-interactive-primary-background-selected)}mat-sidenav mat-list-item.mat-mdc-list-item:hover:not(:disabled),mat-sidenav mat-list-item.mat-mdc-list-item.mat-list-item--toggle-on{background-color:var(--color-interactive-primary-background-hovered)}mat-sidenav mat-list-item.mat-mdc-list-item:hover:not(:disabled) .mat-icon,mat-sidenav mat-list-item.mat-mdc-list-item.mat-list-item--toggle-on .mat-icon{overflow:visible}mat-sidenav mat-list-item.mat-mdc-list-item:hover:not(:disabled) .mat-icon svg,mat-sidenav mat-list-item.mat-mdc-list-item.mat-list-item--toggle-on .mat-icon svg{filter:drop-shadow(var(--box-shadow-interactive-primary-glow-backlit))}mat-sidenav mat-list-item.mat-mdc-list-item .mdc-list-item__primary-text{--mdc-list-list-item-label-text-line-height: 16px;--mdc-list-list-item-label-text-size: 12px;--mdc-list-list-item-label-text-weight: 500}::ng-deep .mat-drawer-inner-container{display:flex;flex-direction:column}.sidenav-header{justify-content:center;display:flex}.navigation__app-icon--light{display:none}.navigation__app-icon--dark{display:block}::ng-deep .theme-light .navigation__app-icon--light{display:block}::ng-deep .theme-light .navigation__app-icon--dark{display:none}mat-list-item.narrow{display:flex}mat-list-item.narrow .mat-mdc-list-item-icon{margin-left:16px;margin-right:16px}mat-list-item{display:block;text-align:center;padding-right:0;margin-top:12px}mat-list-item .mat-mdc-list-item-icon{margin:0}.menu-items{flex-grow:1}.bottom-icons{display:flex;bottom:0;flex-direction:column;text-align:center;align-items:center;justify-content:center}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    appLogo: [{
      type: Input
    }],
    homeRoute: [{
      type: Input
    }],
    hideLabels: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }],
    menuItems: [{
      type: Input
    }],
    wide: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }],
    disableSidenavContent: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }],
    navRailBottomComponent1: [{
      type: Input
    }],
    navRailBottomComponent2: [{
      type: Input
    }],
    navRailBottomComponent3: [{
      type: Input
    }],
    navRailBottomComponent4: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }]
  });
})();
export {
  MockSideRailMenuData,
  NavigationRailComponent
};
//# sourceMappingURL=@jeppesen-foreflight_dp-dls-global-angular_navigation-rail.js.map
