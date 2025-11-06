import {
  IconRegistryModule
} from "./chunk-MNWAHKD4.js";
import "./chunk-CM7ENBSQ.js";
import {
  MatTooltip
} from "./chunk-OWJALLJ2.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-KO2C4FPU.js";
import "./chunk-5OXZCQUF.js";
import "./chunk-XPMIZQDA.js";
import "./chunk-5LHPWY7D.js";
import "./chunk-HPS34U37.js";
import "./chunk-TMGX3QZG.js";
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
  isPlatformBrowser
} from "./chunk-D5P5I7SG.js";
import "./chunk-EITAFI4I.js";
import "./chunk-7MVUXVX5.js";
import "./chunk-G5EVG5KB.js";
import "./chunk-MZVJP6II.js";
import "./chunk-SCHDBRSY.js";
import {
  Component,
  DOCUMENT,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  PLATFORM_ID,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener
} from "./chunk-L7TZZFVV.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-HWYXSU2G.js";
import {
  BehaviorSubject
} from "./chunk-MARUHEWW.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@jeppesen-foreflight/dp-dls-global-angular/fesm2022/jeppesen-foreflight-dp-dls-global-angular-theme-toggle.mjs
var THEME_STORAGE_SERVICE = new InjectionToken("THEME_STORAGE");
var _ThemeLocalStorageService = class _ThemeLocalStorageService {
  constructor() {
    this.LOCAL_STORAGE_KEY = "theme";
  }
  save(theme) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, theme.toString());
  }
  get() {
    return localStorage.getItem(this.LOCAL_STORAGE_KEY) || void 0;
  }
};
_ThemeLocalStorageService.ɵfac = function ThemeLocalStorageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeLocalStorageService)();
};
_ThemeLocalStorageService.ɵprov = ɵɵdefineInjectable({
  token: _ThemeLocalStorageService,
  factory: _ThemeLocalStorageService.ɵfac
});
var ThemeLocalStorageService = _ThemeLocalStorageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeLocalStorageService, [{
    type: Injectable
  }], null, null);
})();
var Theme;
(function(Theme2) {
  Theme2["LIGHT"] = "theme-light";
  Theme2["DARK"] = "theme-dark";
})(Theme || (Theme = {}));
var _ThemeToggleService = class _ThemeToggleService {
  constructor(document, themeStorage, platformId) {
    this.document = document;
    this.themeStorage = themeStorage;
    this.platformId = platformId;
    this.currentTheme = Theme.DARK;
    this.themeChangedSubject = new BehaviorSubject(this.currentTheme);
    this.themeChanged$ = this.themeChangedSubject.asObservable();
    this.init(platformId);
  }
  /**
   * Function to mutate the currentTheme
   * @param theme Theme
   */
  updateCurrentTheme(theme, skipSave) {
    this.currentTheme = theme;
    this.themeChangedSubject.next(this.currentTheme);
    if (!skipSave) {
      this.themeStorage.save(this.currentTheme);
    }
  }
  /**
   * Init function that update the application based on the initial theme value
   * Flow as below
   * 1 - If there is a saved theme in the browser - use this as the initial value
   * 2 - If there is no saved theme, Check for the preferred device theme
   * 3 - If device theme is dark, set the init value to `dark`
   * 4 - Else set the default value to `light`
   */
  init(platformId) {
    let initTheme = Theme.DARK;
    if (isPlatformBrowser(platformId)) {
      initTheme = this.themeStorage.get();
      if (!initTheme) {
        const deviceMode = window.matchMedia("(prefers-color-scheme: light)");
        initTheme = deviceMode.matches ? Theme.LIGHT : Theme.DARK;
      }
      this.updateCurrentTheme(initTheme);
    } else {
      this.updateCurrentTheme(initTheme, true);
    }
    this.document.body.classList.toggle(Theme.LIGHT);
    this.document.body.classList.toggle(Theme.DARK);
    this.document.body.classList.add(this.currentTheme);
  }
  /**
   * Function to get the current theme
   * @returns Current theme
   * Exposed publicly
   */
  getCurrentTheme() {
    return this.currentTheme;
  }
  /**
   * Function that toggles the theme
   * Exposed publicly
   */
  toggleTheme() {
    this.document.body.classList.toggle(Theme.LIGHT);
    this.document.body.classList.toggle(Theme.DARK);
    if (this.currentTheme === Theme.LIGHT) {
      this.updateCurrentTheme(Theme.DARK);
    } else {
      this.updateCurrentTheme(Theme.LIGHT);
    }
  }
};
_ThemeToggleService.ɵfac = function ThemeToggleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeToggleService)(ɵɵinject(DOCUMENT), ɵɵinject(THEME_STORAGE_SERVICE), ɵɵinject(PLATFORM_ID));
};
_ThemeToggleService.ɵprov = ɵɵdefineInjectable({
  token: _ThemeToggleService,
  factory: _ThemeToggleService.ɵfac
});
var ThemeToggleService = _ThemeToggleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeToggleService, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [THEME_STORAGE_SERVICE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _ThemeToggleComponent = class _ThemeToggleComponent {
  constructor(themeToggleService) {
    this.themeToggleService = themeToggleService;
  }
  toggle() {
    this.themeToggleService.toggleTheme();
  }
};
_ThemeToggleComponent.ɵfac = function ThemeToggleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeToggleComponent)(ɵɵdirectiveInject(ThemeToggleService));
};
_ThemeToggleComponent.ɵcmp = ɵɵdefineComponent({
  type: _ThemeToggleComponent,
  selectors: [["ba-theme-toggle"]],
  decls: 2,
  vars: 0,
  consts: [["mat-icon-button", "", "matTooltip", "Primary", "color", "primary", "aria-label", "Toggle theme", 3, "click"], ["svgIcon", "icon-dark-mode"]],
  template: function ThemeToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function ThemeToggleComponent_Template_button_click_0_listener() {
        return ctx.toggle();
      });
      ɵɵelement(1, "mat-icon", 1);
      ɵɵelementEnd();
    }
  },
  dependencies: [MatIconButton, MatTooltip, MatIcon],
  encapsulation: 2
});
var ThemeToggleComponent = _ThemeToggleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeToggleComponent, [{
    type: Component,
    args: [{
      selector: "ba-theme-toggle",
      imports: [MatIconButton, MatTooltip, MatIcon],
      template: '<button mat-icon-button matTooltip="Primary" color="primary" aria-label="Toggle theme" (click)="toggle()">\n  <mat-icon svgIcon="icon-dark-mode"></mat-icon>\n</button>\n\n'
    }]
  }], () => [{
    type: ThemeToggleService
  }], null);
})();
var _ThemeToggleModule = class _ThemeToggleModule {
};
_ThemeToggleModule.ɵfac = function ThemeToggleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeToggleModule)();
};
_ThemeToggleModule.ɵmod = ɵɵdefineNgModule({
  type: _ThemeToggleModule,
  imports: [MatButtonModule, MatIconModule, IconRegistryModule, ThemeToggleComponent],
  exports: [ThemeToggleComponent]
});
_ThemeToggleModule.ɵinj = ɵɵdefineInjector({
  providers: [ThemeToggleService, {
    provide: THEME_STORAGE_SERVICE,
    useClass: ThemeLocalStorageService
  }],
  imports: [MatButtonModule, MatIconModule, IconRegistryModule, ThemeToggleComponent]
});
var ThemeToggleModule = _ThemeToggleModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, MatIconModule, IconRegistryModule, ThemeToggleComponent],
      providers: [ThemeToggleService, {
        provide: THEME_STORAGE_SERVICE,
        useClass: ThemeLocalStorageService
      }],
      declarations: [],
      exports: [ThemeToggleComponent]
    }]
  }], null, null);
})();
export {
  ThemeToggleComponent,
  ThemeToggleModule,
  ThemeToggleService
};
//# sourceMappingURL=@jeppesen-foreflight_dp-dls-global-angular_theme-toggle.js.map
