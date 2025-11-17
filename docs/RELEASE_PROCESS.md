# Release Process Documentation

This document describes the release process for the starterkit project.

## Overview

The starterkit project uses automated releases via GitHub Actions. When a git tag is pushed, the workflow automatically builds the project, runs tests, and creates a GitHub release with artifacts.

## Release Workflow

### Automatic Release (Recommended)

1. **Update Changelog**: Add your changes to `CHANGELOG.md` following the existing format
2. **Run Release Script**: Execute `npm run release <version>` (e.g., `npm run release 3.4.0`)
3. **Verify Release**: Check GitHub releases page for the automated release

### Manual Release

1. **Update Version**: Modify `package.json` version field
2. **Update Changelog**: Add your changes to `CHANGELOG.md`
3. **Commit Changes**: `git add . && git commit -m "chore: bump version to <version>"`
4. **Create Tag**: `git tag v<version>`
5. **Push**: `git push origin HEAD && git push origin v<version>`

## GitHub Actions Workflow

The release workflow (`.github/workflows/release.yml`) performs:

1. **Setup**: Checkout code and setup Node.js 20
2. **Dependencies**: Install npm packages (requires NPM_TOKEN secret for private packages)
3. **Build**: Run `npm run build` to create distribution files
4. **Test**: Run `npm test` with headless Chrome
5. **Release Notes**: Extract changelog section for the version
6. **Create Release**: Create GitHub release with build artifacts

## Required Secrets

- `NPM_TOKEN`: Required for accessing private `@dasdigitalplatform` packages
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

## File Structure

```
├── .github/workflows/release.yml    # Release automation workflow
├── scripts/release.sh               # Release helper script
├── CHANGELOG.md                     # Release notes and history
├── .npmrc                          # NPM registry configuration
└── package.json                    # Project metadata and version
```

## Version History

- **v3.3.0**: Initial release with complete Angular starterkit setup

## Troubleshooting

- **Build Failures**: Check that all dependencies are available and NPM_TOKEN is configured
- **Test Failures**: Ensure Chrome is available in the CI environment
- **Release Creation**: Verify GITHUB_TOKEN permissions and branch protection rules