import {
  MatToolbarModule
} from "./chunk-YVAEX6RQ.js";
import {
  MatTabsModule
} from "./chunk-G3B7MLSR.js";
import {
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
  Input,
  setClassMetadata,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L7TZZFVV.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-MARUHEWW.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@jeppesen-foreflight/dp-dls-global-angular/fesm2022/jeppesen-foreflight-dp-dls-global-angular-user-profile.mjs
function UserProfileComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.userAvatarSource, ɵɵsanitizeUrl);
  }
}
function UserProfileComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.getMonogram());
  }
}
var _UserProfileComponent = class _UserProfileComponent {
  constructor() {
    this.clickable = false;
    this.small = false;
    this.userAvatarSource = "";
  }
  /**
   * Returns a boolean denoting whether or not the string supplied in the
   * `imageSource` input represents an image file or not.
   */
  hasValidImageSource() {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"];
    return typeof this.userAvatarSource === "string" && (this.userAvatarSource.startsWith("http") || imageExtensions.some((ext) => this.userAvatarSource.endsWith(ext)));
  }
  /**
   * Returns a single-initial monogram based on the logged-in user's first name.
   * THe first name is passed into the component as the `userFirstName` input.
   */
  getMonogram() {
    return this.userFirstName.charAt(0).toUpperCase();
  }
  getProfileClass() {
    if (this.clickable) {
      return "user-profile--clickable";
    } else if (this.small) {
      return "user-profile--display-only-small";
    } else {
      return "user-profile--display-only";
    }
  }
};
_UserProfileComponent.ɵfac = function UserProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserProfileComponent)();
};
_UserProfileComponent.ɵcmp = ɵɵdefineComponent({
  type: _UserProfileComponent,
  selectors: [["ba-user-profile"]],
  inputs: {
    clickable: [2, "clickable", "clickable", coerceBooleanProperty],
    small: [2, "small", "small", coerceBooleanProperty],
    userAvatarSource: "userAvatarSource",
    userFirstName: "userFirstName"
  },
  decls: 5,
  vars: 2,
  consts: [[1, "user-profile", 3, "ngClass"], [1, "user-profile__content"], ["alt", "User profile image", 1, "user-profile__image", 3, "src"], [1, "user-profile__letter"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0);
      ɵɵelementStart(1, "div", 0)(2, "div", 1);
      ɵɵconditionalCreate(3, UserProfileComponent_Case_3_Template, 1, 1, "img", 2)(4, UserProfileComponent_Case_4_Template, 2, 1, "div", 3);
      ɵɵelementEnd()();
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.getProfileClass());
      ɵɵadvance(2);
      ɵɵconditional((tmp_1_0 = ctx.hasValidImageSource()) === true ? 3 : tmp_1_0 === false ? 4 : -1);
    }
  },
  dependencies: [MatTabsModule, MatIconModule, MatToolbarModule, MatButtonModule, CommonModule, NgClass],
  styles: [".user-profile[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:50%;overflow:hidden}.user-profile--display-only[_ngcontent-%COMP%]{width:48px;height:48px;font-size:22px;cursor:default}.user-profile--display-only-small[_ngcontent-%COMP%]{width:24px;height:24px;font-size:14px;cursor:default}.user-profile--clickable[_ngcontent-%COMP%]{width:40px;height:40px;font-size:14px;cursor:pointer}.user-profile__content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:50%;overflow:hidden;width:100%;height:100%}.user-profile--clickable[_ngcontent-%COMP%]   .user-profile__content[_ngcontent-%COMP%]{width:32px;height:32px}.user-profile__image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.user-profile__letter[_ngcontent-%COMP%]{background-color:var(--color-static-gray);color:var(--color-static-white);font-family:Boeing Meso;font-weight:500;font-style:normal;display:flex;justify-content:center;align-items:center;width:100%;height:100%}"]
});
var UserProfileComponent = _UserProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{
      selector: "ba-user-profile",
      imports: [
        MatTabsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        CommonModule
        // IconRegistryModule
      ],
      template: '<ng-container>\n  <div class="user-profile" [ngClass]="getProfileClass()">\n    <div class="user-profile__content">\n      @switch (hasValidImageSource()) {\n        @case (true) {\n          <img [src]="userAvatarSource" alt="User profile image" class="user-profile__image" />\n        }\n        @case (false) {\n          <div class="user-profile__letter">{{ getMonogram() }}</div>\n        }\n      }\n    </div>\n  </div>\n</ng-container>',
      styles: [".user-profile{display:flex;justify-content:center;align-items:center;border-radius:50%;overflow:hidden}.user-profile--display-only{width:48px;height:48px;font-size:22px;cursor:default}.user-profile--display-only-small{width:24px;height:24px;font-size:14px;cursor:default}.user-profile--clickable{width:40px;height:40px;font-size:14px;cursor:pointer}.user-profile__content{display:flex;justify-content:center;align-items:center;border-radius:50%;overflow:hidden;width:100%;height:100%}.user-profile--clickable .user-profile__content{width:32px;height:32px}.user-profile__image{width:100%;height:100%;object-fit:cover}.user-profile__letter{background-color:var(--color-static-gray);color:var(--color-static-white);font-family:Boeing Meso;font-weight:500;font-style:normal;display:flex;justify-content:center;align-items:center;width:100%;height:100%}\n"]
    }]
  }], null, {
    clickable: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }],
    small: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }],
    userAvatarSource: [{
      type: Input
    }],
    userFirstName: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();
export {
  UserProfileComponent
};
//# sourceMappingURL=@jeppesen-foreflight_dp-dls-global-angular_user-profile.js.map
