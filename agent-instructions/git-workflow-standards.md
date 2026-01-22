# Git Workflow Standards for Agent System

## Overview

This document defines the standardized Git workflow that all agents must follow when working on the Starterkit Angular application. Consistent Git practices ensure proper issue tracking, code review, and project management.

## Branch Management

### Branch Naming Conventions

#### **Feature Branches**
- **Format**: `feature/issue-{number}-{brief-description}`
- **Examples**:
  - `feature/issue-12-template-2-tabs`
  - `feature/issue-14-typography-showcase`
  - `feature/issue-15-template-3-data-tables`

#### **Bug Fix Branches**
- **Format**: `fix/issue-{number}-{brief-description}`
- **Examples**:
  - `fix/issue-20-accessibility-contrast`
  - `fix/issue-21-responsive-layout`

#### **Documentation Branches**
- **Format**: `docs/issue-{number}-{brief-description}`
- **Examples**:
  - `docs/issue-25-api-documentation`
  - `docs/issue-26-agent-instructions`

### Branch Lifecycle

1. **Creation**: Always branch from updated `main`
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/issue-{number}-{description}
   ```

2. **Development**: Work on feature branch exclusively
3. **Push**: Push feature branch to remote for PR creation
4. **Review**: PR review and approval process
5. **Merge**: Merge to main via PR (squash merge recommended)
6. **Cleanup**: Delete feature branch after successful merge

## Commit Standards

### Commit Message Format

**Required Format**:
```
type(scope): description - closes #{issue_number}
```

**Examples**:
```bash
feat(template-2): implement three-tab interface - closes #12
fix(typography): resolve contrast accessibility issues - closes #14
docs(readme): add agent workflow documentation - closes #25
```

### Commit Types

- **feat**: New feature implementation
- **fix**: Bug fixes
- **docs**: Documentation changes
- **style**: Formatting changes (no code logic changes)
- **refactor**: Code refactoring without functionality changes
- **test**: Adding or modifying tests
- **chore**: Build process or auxiliary tool changes

### Commit Scopes

Use component or feature names for scope:
- `template-2`, `template-3`, `typography`
- `accessibility`, `qa`, `build`
- `docs`, `tests`, `config`

## Quality Gates

### Pre-Commit Requirements

All commits must pass these checks:

1. **Linting**: `npm run lint`
2. **Testing**: `npm run test`
3. **Build**: `npm run build`

### Pre-Push Requirements

Before pushing to remote:

1. **Clean Working Directory**: No uncommitted changes
2. **Quality Checks Passed**: All pre-commit checks green
3. **Meaningful Commit Messages**: Follow format standards
4. **Issue Linking**: Commits reference GitHub issues

## Pull Request Standards

### PR Creation Requirements

1. **Title Format**:
   ```
   type: Brief description - closes #{issue_number}
   ```

2. **Description Template**:
   ```markdown
   ## Summary
   Brief description of what was implemented/fixed

   ## Changes Made
   - List specific changes made
   - Include file/component modifications
   - Note any architectural decisions

   ## Testing
   - [x] Manual testing completed
   - [x] All existing tests pass
   - [x] Lint checks pass
   - [x] Build succeeds
   - [x] Accessibility validation (if applicable)

   ## Issue Links
   Closes #{issue_number}

   ## Screenshots/Demo
   (Add if applicable)

   🤖 Generated with [Claude Code](https://claude.ai/code)
   ```

### PR Review Process

1. **Automated Checks**: All CI/CD checks must pass
2. **Code Review**: Human review for significant changes
3. **Testing Validation**: QA Agent validation if required
4. **Accessibility Check**: Accessibility Specialist validation if UI changes
5. **Approval**: Required approvals before merge

## Issue Integration

### Issue-to-PR Linking

**Required**: All PRs must link to GitHub issues using:
- PR title: `- closes #{issue_number}`
- PR description: `Closes #{issue_number}`
- Commit messages: `- closes #{issue_number}`

### Auto-Closure

When PR is merged, GitHub automatically closes linked issues. If auto-closure fails:
```bash
gh issue close {issue_number} --comment "Implementation completed via PR #{pr_number}"
```

## Agent-Specific Workflow

### Issue Worker Agent

1. **Pre-Implementation**:
   - Create feature branch
   - Verify clean working directory
   - Review issue requirements

2. **Implementation**:
   - Follow coding standards
   - Write meaningful commits
   - Run quality checks

3. **Completion**:
   - Push feature branch
   - Create PR with issue linking
   - Request appropriate reviews

### Sprint Manager Agent

1. **Coordination**:
   - Monitor branch conflicts
   - Manage PR queue
   - Coordinate merge timing

2. **Quality Oversight**:
   - Verify PR standards compliance
   - Ensure issue-PR linking
   - Manage branch cleanup

3. **Process Monitoring**:
   - Track workflow compliance
   - Identify process improvements
   - Coordinate cross-agent dependencies

### Accessibility Specialist Agent

1. **Review Process**:
   - Review accessibility-related PRs
   - Provide validation comments
   - Approve accessibility compliance

2. **Issue Creation**:
   - Create accessibility improvement issues
   - Link to original implementation issues
   - Follow branch naming for fixes

### QA Testing Agent

1. **Validation Process**:
   - Test PRs before merge approval
   - Create bug reports as needed
   - Validate fix implementations

2. **Quality Reporting**:
   - Document test results in PR comments
   - Link test reports to issues
   - Approve functional testing

## Workflow Violations

### Common Issues

1. **Working on Main**: Never commit directly to main branch
2. **Missing Issue Links**: All PRs must link to GitHub issues
3. **Poor Commit Messages**: Follow conventional commit format
4. **Skipped Quality Checks**: All checks must pass before push

### Resolution Process

1. **Immediate**: Stop work and create proper feature branch
2. **Fix Commits**: Amend commits with proper format if needed
3. **Quality Fixes**: Resolve lint/test/build issues before proceeding
4. **Process Review**: Sprint Manager reviews workflow compliance

## Best Practices

### For All Agents

1. **Small, Focused Commits**: One logical change per commit
2. **Regular Pushes**: Don't hoard work locally
3. **Clean History**: Use meaningful commit messages
4. **Issue Tracking**: Always link work to GitHub issues
5. **Quality First**: Never skip quality checks

### For Collaborative Work

1. **Communication**: Comment on issues when starting work
2. **Coordination**: Check for conflicting work before starting
3. **Dependencies**: Coordinate PR merge order for dependencies
4. **Reviews**: Provide constructive feedback on PRs

## Troubleshooting

### Common Git Issues

1. **Merge Conflicts**:
   ```bash
   git checkout main
   git pull origin main
   git checkout feature-branch
   git rebase main
   # Resolve conflicts, then:
   git rebase --continue
   ```

2. **Failed Quality Checks**:
   ```bash
   npm run lint -- --fix
   npm run test
   npm run build
   git add .
   git commit --amend --no-edit
   ```

3. **Wrong Branch**:
   ```bash
   git stash
   git checkout -b correct-feature-branch
   git stash pop
   ```

### Emergency Procedures

1. **Accidental Main Commit**:
   ```bash
   git reset --soft HEAD~1
   git checkout -b feature/emergency-fix
   git commit -m "fix: emergency fix - closes #{issue_number}"
   ```

2. **Lost Work Recovery**:
   ```bash
   git reflog
   git checkout {commit_hash}
   git checkout -b recovery-branch
   ```

## Compliance Monitoring

Sprint Manager Agent monitors compliance through:

```bash
# Check commit message compliance
git log --oneline | grep -E "(feat|fix|docs)\(.+\): .+ - closes #[0-9]+"

# Check branch naming compliance
git branch -a | grep -E "feature/issue-[0-9]+-"

# Check PR linking compliance
gh pr list --state all --json title,body | grep -i "closes #"
```

## Success Metrics

- **100% Issue Linkage**: All PRs link to GitHub issues
- **Quality Gate Compliance**: All commits pass quality checks
- **Branch Hygiene**: Proper branch naming and lifecycle management
- **Process Adherence**: All agents follow standardized workflow

---

**Note**: This workflow ensures proper project tracking, code quality, and team coordination. All agents must follow these standards to maintain project integrity and enable effective collaboration.