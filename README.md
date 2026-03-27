# Starterkit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.3.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Releases

This project follows [Semantic Versioning](https://semver.org/). See [CHANGELOG.md](CHANGELOG.md) for release history and [docs/RELEASE_PROCESS.md](docs/RELEASE_PROCESS.md) for detailed release instructions.

### Creating a Release

1. Update the `CHANGELOG.md` with new features, fixes, and breaking changes for the new version
2. Run the release script: `npm run release <version>` (e.g., `npm run release 3.4.0`)
3. The script will:
   - Update the version in `package.json`
   - Commit the changes
   - Create and push a git tag
   - Trigger the GitHub Actions workflow to create the release automatically

Alternatively, you can create a release manually:

1. Update the version in `package.json`
2. Update the `CHANGELOG.md` with new features, fixes, and breaking changes
3. Commit the changes
4. Create and push a git tag: `git tag v<version> && git push origin v<version>`
5. The GitHub Actions workflow will automatically create a release with build artifacts

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
