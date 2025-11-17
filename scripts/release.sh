#!/usr/bin/env bash

# Release script for starterkit
set -e

if [ $# -eq 0 ]; then
    echo "Usage: $0 <version>"
    echo "Example: $0 3.4.0"
    exit 1
fi

VERSION=$1

# Validate version format
if ! [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Error: Version must be in format X.Y.Z (e.g., 3.4.0)"
    exit 1
fi

echo "Creating release for version $VERSION..."

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Warning: You are not on the main branch. Current branch: $CURRENT_BRANCH"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Update package.json version
echo "Updating package.json version to $VERSION..."
npm version $VERSION --no-git-tag-version

# Check if CHANGELOG.md needs to be updated
if ! grep -q "## \[$VERSION\]" CHANGELOG.md; then
    echo "Warning: CHANGELOG.md doesn't contain an entry for version $VERSION"
    echo "Please update CHANGELOG.md before creating the release"
    exit 1
fi

# Commit changes
echo "Committing version bump..."
git add package.json package-lock.json
git commit -m "chore: bump version to $VERSION"

# Create and push tag
echo "Creating and pushing tag v$VERSION..."
git tag "v$VERSION"
git push origin HEAD
git push origin "v$VERSION"

echo "Release v$VERSION created successfully!"
echo "Check GitHub Actions for the automated release creation."