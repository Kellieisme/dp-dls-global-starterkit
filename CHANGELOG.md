# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2026-03-27

### Changed
- Upgraded to Angular 20.3.15
- Switched library dependency from npm package `@dasdigitalplatform/dls-angular` to local `file:` link pointing to `dp-dls-global-angular` dist
- Added `@jeppesen-foreflight/dls-global-assets` as a local `file:` dependency
- Added `prebundle.exclude` in `angular.json` serve options to prevent Vite from pre-bundling the local library (fixes NG0203 duplicate Angular instance)
- Added `paths` in `tsconfig.app.json` to force `@angular/*` and `rxjs` resolution to app's own `node_modules`
- Updated `@angular/build` and `@angular/cli` to `20.3.15`

### Dependencies
- @angular/* packages (v20.3.15)
- @angular/material (v20.2.14)
- @jeppesen-foreflight/dp-dls-global-angular (file: local)
- @jeppesen-foreflight/dls-global-assets (file: local)
- Bootstrap (v5.3.8)
- RxJS (v7.8.2)

---

## [3.3.0] - 2024-12-29

### Added
- Initial release of the Angular Starterkit
- Angular 19.2.15 framework setup
- DAS Digital Platform Design Language System integration
- Bootstrap 5.3.8 styling framework
- Material Design components
- Development server configuration
- Build and test scripts
- TypeScript configuration

### Dependencies
- @angular/* packages (v19.2.15)
- @angular/material (v19.2.19)
- @dasdigitalplatform/dls-angular (v3.3.0)
- Bootstrap (v5.3.8)
- RxJS (v7.8.2)

[3.3.0]: https://github.com/dasdigitalplatform/starterkit/releases/tag/v3.3.0