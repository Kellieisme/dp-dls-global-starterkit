import {
  MatIconRegistry
} from "./chunk-KO2C4FPU.js";
import {
  DomSanitizer
} from "./chunk-5OXZCQUF.js";
import {
  CommonModule
} from "./chunk-D5P5I7SG.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-L7TZZFVV.js";

// node_modules/@jeppesen-foreflight/dp-dls-global-angular/fesm2022/jeppesen-foreflight-dp-dls-global-angular-icon-registry.mjs
var _IconRegistryModule = class _IconRegistryModule {
  constructor(matIconRegistry, sanitizer) {
    matIconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl("./assets/svgSet.svg"));
  }
};
_IconRegistryModule.ɵfac = function IconRegistryModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconRegistryModule)(ɵɵinject(MatIconRegistry), ɵɵinject(DomSanitizer));
};
_IconRegistryModule.ɵmod = ɵɵdefineNgModule({
  type: _IconRegistryModule,
  imports: [CommonModule]
});
_IconRegistryModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var IconRegistryModule = _IconRegistryModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconRegistryModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule]
    }]
  }], () => [{
    type: MatIconRegistry
  }, {
    type: DomSanitizer
  }], null);
})();
var _IconRegistryStorybookModule = class _IconRegistryStorybookModule {
  constructor(matIconRegistry, sanitizer) {
    matIconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl("./storybookassets/svgSet.svg"));
  }
};
_IconRegistryStorybookModule.ɵfac = function IconRegistryStorybookModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconRegistryStorybookModule)(ɵɵinject(MatIconRegistry), ɵɵinject(DomSanitizer));
};
_IconRegistryStorybookModule.ɵmod = ɵɵdefineNgModule({
  type: _IconRegistryStorybookModule,
  imports: [CommonModule]
});
_IconRegistryStorybookModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var IconRegistryStorybookModule = _IconRegistryStorybookModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconRegistryStorybookModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule]
    }]
  }], () => [{
    type: MatIconRegistry
  }, {
    type: DomSanitizer
  }], null);
})();

export {
  IconRegistryModule,
  IconRegistryStorybookModule
};
//# sourceMappingURL=chunk-MNWAHKD4.js.map
