# PR Review Guidelines for Human Reviewers

## Overview
This document provides guidelines for human reviewers (jurgen-boeing, kelliev, gnuccio-jepp) to efficiently review PRs created by the Issue Worker Agent while maintaining high quality standards for the Boeing DLS Global Angular Component Library.

## PR Classification System

### 🔴 **Human Review Required** (Your Attention Needed)
**Labels**: `human-review-required`
**Expected Volume**: 2-3 PRs per week maximum
**Review Time**: 15-30 minutes per PR

#### Criteria for Human Review:
- Component behavior changes
- Breaking API changes
- Security-related modifications
- Performance impact changes
- Angular major migrations (#143-#147)
- User-facing bug fixes (#149-#151)

### 🟢 **Auto-Merge Eligible** (FYI Only)
**Labels**: `auto-merge`, `documentation`
**Expected Volume**: 1-2 PRs per week
**Review Time**: Optional - already merged by agent

#### Auto-Merge Criteria:
- Documentation updates (#155, #156)
- Test additions (no functional changes)
- Lint fixes and formatting
- Comment additions
- README updates
- Configuration tweaks (non-breaking)

## Quick Review Process (15-Minute Reviews)

### 1. **Initial Triage (2 minutes)**
```bash
# Check PR basics
- Title clearly describes changes
- Issues linked properly (closes #XXX)
- Labels applied correctly
- Agent testing completed (all checkboxes checked)
```

### 2. **Code Quality Scan (5 minutes)**
```bash
# Focus on high-impact areas
- Breaking changes documented
- TypeScript types properly defined
- Component API consistency
- Performance implications noted
- Security considerations addressed
```

### 3. **Functional Review (5 minutes)**
```bash
# Quick functional validation
npm run start
# Navigate to demo page specified in PR
# Test primary use case only (not exhaustive)
# Verify fix addresses the reported issue
```

### 4. **Decision & Action (3 minutes)**
```bash
# Approve and merge
gh pr review {pr_number} --approve
gh pr merge {pr_number} --squash

# OR request changes
gh pr review {pr_number} --request-changes --body "Specific feedback here"
```

## PR Review Templates

### **Approval Template**
```bash
gh pr review {pr_number} --approve --body "
✅ **APPROVED**

**Review Summary:**
- [x] Code quality meets Boeing DLS standards
- [x] Functionality verified in demo app
- [x] No breaking changes introduced
- [x] Documentation updated appropriately

**Tested Scenarios:**
- [Briefly list what you tested]

**Ready for QA Agent handoff.**

Approved by: [Your Name]
"

gh pr merge {pr_number} --squash
```

### **Request Changes Template**
```bash
gh pr review {pr_number} --request-changes --body "
🔄 **CHANGES REQUESTED**

**Issues Found:**
1. **[Category]**: [Specific issue description]
   - **Location**: [File/line reference]
   - **Fix Required**: [What needs to be changed]

2. **[Category]**: [Another issue if applicable]
   - **Location**: [File/line reference]
   - **Fix Required**: [What needs to be changed]

**Review Priorities:**
- [ ] High: [Critical issues that must be fixed]
- [ ] Medium: [Important improvements]
- [ ] Low: [Nice-to-have enhancements]

Please address high and medium priority items, then request re-review.

Reviewed by: [Your Name]
"
```

## Specific Review Focus Areas

### **Angular Migration PRs (#143-#147)**
```bash
# Key areas to verify:
1. **Backwards Compatibility**
   - Existing component APIs still work
   - Consumer applications won't break
   - Migration path documented

2. **Performance Impact**
   - Bundle size not significantly increased
   - Runtime performance maintained or improved
   - Change detection optimized

3. **Testing Coverage**
   - Migration changes covered by tests
   - Existing tests still pass
   - No regression in functionality
```

### **Component Bug Fix PRs (#148-#151)**
```bash
# Key areas to verify:
1. **Root Cause Addressed**
   - Fix targets the actual problem, not symptoms
   - Similar issues prevented in the future
   - No new bugs introduced

2. **User Experience**
   - Fix improves user interaction
   - Accessibility not negatively impacted
   - Visual consistency maintained

3. **Browser Compatibility**
   - Fix works across supported browsers
   - No browser-specific hacks introduced
   - Graceful fallbacks where needed
```

### **Documentation PRs (#155, #156)**
```bash
# These are typically auto-merged, but if you see them:
1. **Content Accuracy**
   - Technical information is correct
   - Examples work as described
   - Links are functional

2. **Boeing Standards**
   - Corporate terminology used correctly
   - Brand guidelines followed
   - Accessibility guidelines referenced
```

## Daily Review Workflow

### **Morning Check (5 minutes)**
```bash
# Check for new PRs requiring human review
gh pr list --state open --label "human-review-required"

# Quick priority assessment
# - Critical fixes: Review immediately
# - Regular changes: Schedule for today
# - Large features: Block time for thorough review
```

### **Review Session (15-30 minutes per PR)**
```bash
# Follow the 15-minute process outlined above
# For complex PRs, use 30-minute deep review:
# - Detailed code walkthrough
# - Comprehensive testing
# - Architecture impact assessment
```

### **End of Day Status (2 minutes)**
```bash
# Clear any remaining PR notifications
# Ensure no blocking reviews pending
# Check for agent follow-up questions
```

## Escalation Procedures

### **When to Escalate to Team Discussion**
- Breaking changes affecting multiple Boeing applications
- Security vulnerabilities discovered
- Performance regressions detected
- Architecture decisions with long-term impact

### **Escalation Process**
```bash
# Add escalation label and comment
gh pr edit {pr_number} --add-label "escalation-required"
gh pr comment {pr_number} --body "
🚨 **ESCALATION REQUIRED**

**Issue Type**: [Technical/Business/Security]
**Impact**: [Description of broader implications]
**Stakeholders**: @jurgen-boeing @kelliev @gnuccio-jepp
**Recommendation**: [Your suggested approach]

Team discussion requested before proceeding.
"
```

## Quality Standards Enforcement

### **Non-Negotiable Requirements**
- All automated tests must pass
- Lint checks must be clean
- No TypeScript compilation errors
- Breaking changes must be documented
- Security issues must be addressed

### **Boeing DLS Specific Standards**
- Component APIs follow established patterns
- Accessibility requirements met (WCAG 2.1 AA)
- Visual design consistent with Boeing brand
- Performance benchmarks maintained
- Documentation updated for public APIs

## Communication with Agents

### **Providing Feedback to Issue Worker Agent**
```bash
# When requesting changes, be specific
gh pr comment {pr_number} --body "
@Issue-Worker-Agent - Changes requested in main review above.

**Priority Order:**
1. [Most critical issue to fix first]
2. [Second priority issue]
3. [Additional improvements]

**Estimated Re-review Time**: [When you'll be available to review again]

Please address items 1-2 and request re-review.
"
```

### **Approving for QA Agent Handoff**
```bash
# After approval, guide next steps
gh pr comment {pr_number} --body "
✅ **Human review approved - Ready for QA handoff**

@QA-Agent - This PR is approved for comprehensive testing:

**QA Focus Areas** (based on human review):
- [Specific areas that need attention]
- [Browser compatibility requirements]
- [Performance testing recommendations]

**Human Review Notes**:
- [Any concerns to validate during QA]
- [Areas where additional testing would be valuable]
"
```

## Success Metrics

### **Review Efficiency Targets**
- **Average Review Time**: <20 minutes per PR
- **Turnaround Time**: <24 hours for standard PRs
- **First-Pass Approval Rate**: >70% (indicates good agent quality)
- **Escalation Rate**: <10% (most issues resolved at reviewer level)

### **Quality Outcomes**
- **Post-Release Defects**: <5% of approved changes
- **Performance Regressions**: 0 performance issues reach production
- **Security Issues**: 0 security problems in released code
- **User Satisfaction**: Positive feedback from Boeing teams using DLS

## Emergency Procedures

### **Critical Production Issues**
```bash
# For production-breaking bugs
1. **Immediate Assessment**: Is this a rollback situation?
2. **Fast-Track Review**: Review within 2 hours
3. **Minimal Testing**: Focus on core functionality only
4. **Emergency Merge**: Skip normal QA process if needed
5. **Post-Incident**: Full retrospective after resolution
```

### **Security Vulnerabilities**
```bash
# For security-related changes
1. **Security Review**: Deep dive on security implications
2. **Stakeholder Notification**: Alert security team if needed
3. **Documentation**: Ensure security considerations documented
4. **Expedited Process**: Fast-track through review pipeline
```

## Continuous Improvement

### **Weekly Review Retrospective**
- **Efficiency**: Are reviews taking too long?
- **Quality**: Are approved changes introducing issues?
- **Communication**: Is feedback to agents clear and actionable?
- **Process**: What can be automated or streamlined?

### **Monthly Process Updates**
- Review auto-merge criteria effectiveness
- Adjust review templates based on common issues
- Update focus areas based on project evolution
- Refine escalation procedures

---

**Remember**: You're the final human checkpoint ensuring Boeing DLS quality standards. Be thorough but efficient, and don't hesitate to escalate when needed. The agent system is designed to make your reviews faster and more effective, not replace your expertise and judgment.