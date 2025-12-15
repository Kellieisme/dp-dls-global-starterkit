# Epic-Aware PR Batching Strategies

## Overview
This document defines advanced PR batching and sequencing strategies for the 7-agent system managing Boeing DLS Global Angular Component Library's 129-issue backlog, with specific focus on epic-level coordination, program-aware batching, and human designer timeline integration.

## Epic-Level PR Management

### **Program Manager Agent PR Coordination**

#### **Epic-Level PR Planning**
```bash
# Program Manager coordinates PR strategy across entire epics
gh issue comment {epic_issue} --body "
## Epic PR Strategy: #{epic_number} - {Epic Name}

**Epic Scope**: [High-level description of epic work]
**Expected PR Count**: [Estimated total PRs for epic]
**PR Batching Strategy**: [How PRs will be organized]

### Epic PR Coordination Plan
**Phase 1**: Requirements & Design (0 PRs - specification work)
- Requirements Analyst Agent: Analysis and stakeholder research
- Design Coordinator Agent: Human designer brief preparation
- Human Designers: Figma designs and specifications (coordinated via Design Coordinator)
- Timeline: [Duration] - Note: Includes human designer availability and work timeline

**Phase 2**: Implementation (2-3 PRs over [Timeline])
- Issue Worker Agent: Core implementation work
- PR Batching: [Specific batching approach for this epic]
- Human Review Load: [Expected review burden]

**Phase 3**: Validation & Integration (1 PR for polish)
- QA Agent: Comprehensive testing and final integration
- Accessibility Specialist Agent: Final compliance validation
- Sprint Manager Agent: Final PR coordination

### Epic PR Dependencies
**Blocking Epics**: [Other epics that must complete first]
**Blocked Epics**: [Other epics waiting for this epic]
**Shared Components**: [Components affecting multiple epics]

**Human Designer Timeline Integration**:
- Phase 1 timeline must account for human designer capacity and availability
- PR scheduling coordinated with human designer deliverable timeline
- Human designer work completion gates PR creation for implementation phases

**Program Coordination**: Epic PR strategy coordinates with overall program timeline and human designer schedule
"
```

### **Human Designer Timeline Integration in PR Batching**

#### **Human Designer Capacity-Aware PR Planning**
```bash
# Program Manager coordinates PR strategy with human designer availability
gh issue comment {capacity_planning} --body "
## Human Designer Capacity Impact on Epic PR Strategy

### Human Designer Availability Analysis
**Current Human Designer Workload**: [Active design projects across all epics]
**Available Design Capacity**: [Hours/days available per sprint/month]
**Epic Design Work Queue**: [Epics waiting for human designer work]

### PR Timeline Coordination with Human Designer Schedule
**Design-Dependent PRs**: PRs that cannot be created until human designer work completes
**Design-Independent PRs**: PRs that can proceed without waiting for design completion
**Design Integration PRs**: PRs that implement human designer deliverables

#### **Epic PR Batching Strategy with Human Designer Constraints**
**Epic #{epic_number} - {Epic Name}**:
- **Design Phase Duration**: [X] weeks (human designer availability dependent)
- **Implementation PRs Blocked**: [Number] PRs waiting for human designer completion
- **Alternative Work Available**: [Number] PRs that can proceed without design completion
- **Human Designer PR Dependencies**: [Which PRs specifically require human designer deliverables]

### Human Designer Timeline Risk Mitigation
**Design Brief Preparation**: Design Coordinator Agent prepares comprehensive briefs to maximize human designer efficiency
**Parallel Work Streams**: Identify work that can proceed while waiting for human designer deliverables
**Epic Sequence Optimization**: Order epics to optimize human designer capacity utilization
**Capacity Buffer Planning**: Account for human designer availability constraints in program timeline

**Human Designer Coordination**: Critical path for epic PR delivery success
"
```

#### **Human Designer Work Completion Gates**
```bash
# Sprint Manager coordinates PR creation around human designer deliverables
gh issue comment {design_completion_gate} --body "
## Human Designer Work Completion - PR Creation Gate

### Human Designer Deliverables Received
**Epic**: #{epic_number} - {Epic Name}
**Human Designer**: [Designer name]
**Deliverables Completed**:
- [x] Figma component designs (all states and variants)
- [x] Design specifications and measurements
- [x] Responsive design guidelines
- [x] Design system token recommendations

### PR Creation Authorization
**Design Coordinator Agent Validation**: Human designer deliverables validated for implementation readiness
**Implementation PR Queue**: [Number] PRs now authorized for creation
**Epic PR Batching**: Implementation work can proceed in planned batches

#### **Implementation PR Strategy Post-Design Completion**
**Batch 1 - Core Implementation**:
- Components: [List of components ready for implementation]
- Timeline: [Expected PR creation and completion timeline]
- Human Review Estimate: [Expected human review burden]

**Batch 2 - Advanced Features**:
- Components: [Components for advanced feature implementation]
- Dependencies: Batch 1 completion
- Timeline: [Dependent on Batch 1 completion]

**Batch 3 - Integration & Polish**:
- Integration work: Cross-component integration based on human designer specifications
- Polish work: Design fidelity validation and refinement
- Timeline: [Final epic completion timeline]

### Human Designer Availability for Implementation Questions
**Design Coordination Available**: Design Coordinator Agent available for implementation questions
**Human Designer Consultation**: Available for clarification during implementation if needed
**Design Validation**: Human designer validation of implementation fidelity before PR approval

**Status**: Human designer work complete - epic implementation PRs authorized for creation
"
```

### **Epic-Level Batching Categories**

#### **1. Atmosphere 2.0 Component Epic Batching**
```bash
# Example: Epic #70 - Menu Component
# Instead of 10+ individual PRs, create strategic batches:

# Epic Batch 1: Core Menu Implementation
# - Menu component structure
# - Basic menu functionality
# - Design system integration
# - Single PR: "feat: implement Atmosphere 2.0 menu component core - epic #70"

# Epic Batch 2: Menu Advanced Features
# - Keyboard navigation
# - Accessibility implementation
# - Animation and interactions
# - Single PR: "feat: menu component advanced features and accessibility - epic #70"

# Epic Batch 3: Menu Integration & Polish
# - Storybook documentation
# - Demo integration
# - Edge case handling
# - Single PR: "feat: menu component integration and documentation - epic #70"

# Result: 3 PRs instead of 10+ for entire menu component epic
```

#### **2. Cross-Epic Dependency Batching**
```bash
# When multiple epics share dependencies (like design tokens)

# Shared Dependency PR: "feat: Atmosphere 2.0 design tokens foundation - epics #44-#71"
# Affects: All Atmosphere 2.0 component epics
# Coordination: Program Manager ensures all affected epics wait for this PR

# Follow-up Epic Batches: Component implementations use shared tokens
# - Each component epic gets 2-3 PRs instead of individual token work
# - Reduces total PR count across entire program
```

### **Sprint Manager Agent Epic-Aware Assignment**

#### **Epic-Aware Sprint Planning**
```bash
# Sprint Manager coordinates with Program Manager on epic PR strategy
gh issue comment {sprint_planning} --body "
@Program-Manager-Agent - Sprint planning for epic work

**Current Epic Status**: #{epic_number} - {Epic Name}
**Epic Phase**: [Requirements/Design/Implementation/Validation]
**Sprint Capacity**: [Available agent capacity this sprint]

### Epic PR Batching Coordination
**This Sprint PR Plan**:
- Expected PRs: [Number] PRs for human review
- Batching Strategy: [How issues will be combined]
- Agent Coordination: [Which agents will create PRs when]

**Sprint-Level Batching Decisions**:
- **Combine**: Issues #{X}, #{Y}, #{Z} into single implementation PR
- **Sequence**: PR A must complete before PR B (dependencies)
- **Timeline**: [Expected PR creation and review schedule]

**Capacity Management**:
- Current PR queue: [X] PRs pending human review
- Capacity for new PRs: [Y] additional PRs this sprint
- Adjustment needed: [Any timeline or scope adjustments]

Epic work coordinated with sprint capacity and PR management.
"
```

#### **Epic-Aware Issue Batching Logic**
```bash
# Advanced batching logic for epic-level work

# Component-Centric Batching (Single Epic)
# Epic #70 (Menu) broken into batches:
batch_1="menu-core-structure"       # Foundation implementation
batch_2="menu-interactions"         # User interactions and states
batch_3="menu-accessibility"        # Accessibility and keyboard navigation
batch_4="menu-integration"          # Documentation and demo integration

# Cross-Epic Batching (Shared Work)
batch_shared="atmosphere-tokens"    # Affects epics #44-#71
batch_shared="design-foundations"   # Affects multiple component epics
batch_shared="accessibility-base"   # Accessibility patterns for multiple epics

# Epic Milestone Batching (Program Level)
batch_milestone="atmosphere-q1"     # All Q1 milestone work across epics
batch_milestone="ai-integration"    # All AI-related epic work
batch_milestone="infrastructure"    # All pipeline and infrastructure epics
```

### **Issue Worker Agent Epic-Aware Implementation**

#### **Epic Implementation Coordination**
```bash
# Issue Worker receives epic-context from Sprint Manager
gh issue comment {implementation_assignment} --body "
Epic Implementation Assignment: #{epic_number} - {Epic Name}

**Epic Context Provided**:
- Epic phase: [Requirements Complete/Design Complete/Implementation Phase]
- Related issues in epic: [List of related issues for batching consideration]
- Epic dependencies: [Other epic work that affects this implementation]
- Program timeline: [How this fits into program milestones]

### Epic-Aware Implementation Plan
**Batch Implementation Strategy**:
- Issues to implement together: #{A}, #{B}, #{C}
- Shared components/patterns: [Common code across issues]
- Epic-specific considerations: [Epic-level technical decisions]

**Epic Integration Points**:
- Design system integration: [How this connects to Atmosphere 2.0]
- Cross-component integration: [How this affects other epic components]
- Future epic phases: [How current work enables future epic work]

**Single Epic Batch PR Plan**:
- PR Title: 'feat: [epic component] - [batch description] - epic #{epic_number}'
- PR Scope: [All issues being implemented in this batch]
- Epic Milestone: [Which epic milestone this PR achieves]

Implementation proceeding with epic-level context and batching strategy.
"
```

#### **Epic-Level PR Creation Templates**
```bash
# Epic-aware PR creation by Issue Worker Agent
gh pr create --title "feat: Atmosphere 2.0 Menu Component - Core Implementation - Epic #70" --body "$(cat <<'EOF'
## Epic PR: Atmosphere 2.0 Menu Component - Core Implementation

**Epic**: #70 - Atmosphere 2.0 Menu
**Program**: Atmosphere 2.0 Initiative
**Issues Resolved**: Closes #XXX, #YYY, #ZZZ

### Epic Implementation Summary
This PR implements the core functionality for the Atmosphere 2.0 Menu component as part of the broader design system overhaul program.

**Epic Scope Completed**:
- [x] Menu component structure and base functionality
- [x] Design system token integration
- [x] Basic interaction patterns
- [x] Foundation for advanced features (next PR)

### Epic Integration
**Human Designer Implementation**:
- Implements human designer Figma specifications accurately
- Follows human designer interaction patterns and visual specifications
- Maintains design fidelity to human designer deliverables

**Design System Integration**:
- Implements Atmosphere 2.0 design tokens as specified by human designer
- Follows new component patterns established for the design system
- Maintains consistency with other Atmosphere 2.0 components per human designer specifications

**Program Dependencies Addressed**:
- Depends on: Atmosphere 2.0 design tokens (#61)
- Enables: Menu advanced features (next epic batch)
- Integrates with: Navigation patterns across Atmosphere 2.0

### Epic Testing Scope
**Epic-Level Testing Completed**:
- [x] Component works in isolation
- [x] Integrates with Atmosphere 2.0 design system
- [x] Foundation ready for accessibility implementation
- [x] Compatible with other Atmosphere 2.0 components

### Epic Next Steps
**Remaining Epic Work** (future PRs):
- Menu advanced interactions and animations
- Accessibility implementation and WCAG compliance
- Integration with navigation patterns
- Documentation and Storybook integration

**Program Coordination**:
- This PR unblocks Menu advanced features work
- Coordinates with other Atmosphere 2.0 component implementations
- Contributes to Q1 Atmosphere 2.0 milestone

🚀 **Epic Progress**: Core implementation complete - ready for advanced features phase

🤖 Generated with [Claude Code](https://claude.ai/code)
EOF
)"

# Add epic-specific labels
gh pr edit --add-label "epic-#70" --add-label "atmosphere-2.0" --add-label "program-milestone-q1"
```

## Advanced Batching Strategies

### **1. Program-Level Milestone Batching**
```bash
# Coordinate PRs across multiple epics for program milestones
# Program Manager coordinates milestone-level batching

# Q1 Atmosphere 2.0 Milestone Batching:
milestone_batch_1="atmosphere-foundation"    # Design tokens, base patterns (affects all components)
milestone_batch_2="atmosphere-core-ui"       # Button, input, basic components (5-6 components)
milestone_batch_3="atmosphere-navigation"    # Menu, breadcrumbs, tabs (3-4 components)
milestone_batch_4="atmosphere-complex"       # Data tables, dialogs, advanced components
milestone_batch_5="atmosphere-integration"   # Cross-component integration and polish

# Result: 5 milestone PRs instead of 20+ individual component PRs
# Timeline: Spread across Q1 with dependencies managed
```

### **2. Human Designer Dependency-Driven Batching**
```bash
# Smart batching based on human designer deliverables and epic dependencies

# Human Designer Foundation Dependencies (Must Complete First)
human_designer_batch_1="design-system-foundation-human-led"
- Human designer design tokens for all Atmosphere 2.0 work
- Human designer base component patterns and specifications
- Human designer accessibility integration guidelines
- Affects: All subsequent epic work - BLOCKS all implementation until human designer completion

# Human Designer Capacity-Based Batching
human_designer_batch_2="high-priority-components-human-led"
- Components prioritized based on human designer capacity and program needs
- Epic sequencing optimized for human designer workflow efficiency
- Design brief preparation coordinated to maximize human designer productivity

# Component Family Batching (Can Work in Parallel)
family_batch_1="input-family"        # Text fields, currency inputs, text areas
family_batch_2="navigation-family"   # Menu, breadcrumbs, tabs, links
family_batch_3="feedback-family"     # Snackbars, dialogs, progress indicators
family_batch_4="data-family"         # Tables, cards, lists

# Integration Batching (After Component Families)
integration_batch="component-integration"
- Cross-component compatibility
- Shared interaction patterns
- Documentation and examples
```

### **3. Agent Specialization Batching**
```bash
# Batching based on agent expertise and capacity

# Human Designer Coordination Batching (via Design Coordinator Agent)
human_designer_batch_1="visual-foundation-human"      # All Atmosphere 2.0 visual standards (human designer work)
human_designer_batch_2="interaction-patterns-human"   # All component interaction designs (human designer work)
human_designer_batch_3="responsive-design-human"      # Mobile/tablet adaptations for all components (human designer work)

# Design Coordinator Agent Batching (Agent coordination work)
design_coord_batch_1="design-brief-preparation"       # Comprehensive design brief preparation for human designers
design_coord_batch_2="human-designer-handoffs"        # Managing human designer deliverable handoffs to implementation
design_coord_batch_3="design-implementation-validation" # Coordinating human designer validation of implementation fidelity

# Accessibility Specialist Agent Batching
accessibility_batch_1="wcag-foundation"     # Base accessibility patterns
accessibility_batch_2="component-a11y"      # Component-specific accessibility
accessibility_batch_3="at-compatibility"    # Assistive technology validation

# Issue Worker Agent Batching (Implementation)
implementation_batch_1="core-components"    # Foundation component implementation
implementation_batch_2="advanced-features"  # Advanced functionality across components
implementation_batch_3="integration-polish" # Cross-component integration
```

## Epic-Aware PR Queue Management

### **Sprint Manager Agent PR Queue Coordination**

#### **Epic-Priority PR Sequencing**
```bash
# Coordinate PR queue based on epic priorities and dependencies
gh issue comment {pr_queue_management} --body "
## Epic-Aware PR Queue Management - Week of $(date)

### Current PR Queue Analysis
**Program Manager Priorities**: [Epic priority order from program perspective]
**Sprint Capacity**: [Current human review capacity]
**Epic Dependencies**: [Which epics are blocked waiting for PR approvals]

### PR Queue Strategy
**This Week Focus**:
- Epic #{epic_number} PRs (2 PRs) - [Strategic importance]
- Foundation work PRs (1 PR) - [Blocks multiple epics]
- Bug fix batch (1 PR) - [User impact]

**Next Week Pipeline**:
- Epic #{next_epic} PRs (3 PRs) - [Depends on current week completions]
- Integration PRs (2 PRs) - [Cross-epic coordination]

### Epic Coordination Impact
**Blocking Relationships**:
- Epic #70 Menu PR must complete before Epic #56 Navigation PR
- Design token PR blocks all Atmosphere 2.0 component PRs
- Accessibility foundation PR enables all accessibility implementations

**Program Timeline Impact**: [How current PR queue affects program milestones]

Epic-aware PR queue management active.
"
```

#### **Intelligent PR Batching Triggers**
```bash
# Advanced triggers for when to create epic batches vs individual PRs

# Epic Batch Triggers:
# 1. Multiple related issues ready simultaneously
# 2. Shared technical dependencies across issues
# 3. Single component with multiple enhancement issues
# 4. Cross-cutting changes affecting multiple components

# Individual PR Triggers:
# 1. Critical bug fixes needing immediate attention
# 2. Large architectural changes requiring focused review
# 3. Security-related changes needing careful review
# 4. Changes with high risk of breaking other work

# Batching Decision Matrix:
if [[ component_complexity == "high" && shared_dependencies == "yes" ]]; then
  strategy="epic_batch"
elif [[ urgency == "critical" || risk == "high" ]]; then
  strategy="individual_pr"
elif [[ related_issues_count > 3 && epic_phase == "implementation" ]]; then
  strategy="epic_batch"
else
  strategy="standard_batching"
fi
```

## Human Review Load Management with Human Designer Timeline Integration

### **Human Designer Impact on Review Capacity Planning**
```bash
# Coordinate human reviewer capacity with human designer timeline constraints
gh issue comment {human_designer_review_planning} --body "
## Human Designer Timeline Impact on Review Capacity - $(date '+%B %Y')

### Human Designer Deliverable Timeline
**Human Designer Work Completion**: [Dates when human designer deliverables expected]
**Implementation PR Creation**: [Dates when implementation PRs can be created after design completion]
**Human Review Queue Impact**: [How human designer timeline affects PR review distribution]

#### **Human Designer Completion Gates Affecting PR Queue**
**Week 1**: Design foundation complete → 3-4 foundational PRs created
**Week 2**: Component designs complete → 2-3 component implementation PRs created
**Week 3**: Integration designs complete → 1-2 integration PRs created
**Week 4**: Polish and validation → 1 final polish PR created

### Human Designer Coordination Benefits for Review Process
**Design Context Clarity**: Human designer deliverables provide clear implementation context
**Review Efficiency**: Complete design specifications reduce ambiguity in code review
**Implementation Accuracy**: Human designer validation reduces implementation rework

### Human Designer Availability for PR Reviews
**Design Validation**: Human designer available for design fidelity validation during PR review
**Implementation Questions**: Design Coordinator Agent can coordinate human designer consultation
**Visual Approval**: Human designer final approval on visual implementation accuracy

**Human Designer Integration Status**: [On track/Delayed/Ahead of schedule] - impacts PR review timeline
"
```

### **Epic-Aware Review Capacity Planning**
```bash
# Program Manager coordinates with Sprint Manager on review capacity
gh issue comment {review_capacity_planning} --body "
## Epic Review Capacity Planning - $(date '+%B %Y')

### Program-Level Review Requirements
**Atmosphere 2.0 Initiative**:
- Expected monthly PRs: [X] epic-batched PRs
- Review complexity: [High/Medium/Low per epic batch]
- Strategic review importance: [Critical program milestone work]

**AI Integration Program**:
- Expected monthly PRs: [Y] feature PRs
- Review complexity: [High - new functionality]
- Strategic review importance: [High - new capability delivery]

### Review Load Distribution Strategy
**Week 1**: Atmosphere 2.0 foundation PRs (2-3 PRs, high complexity)
**Week 2**: Component implementation PRs (2-3 PRs, medium complexity)
**Week 3**: Integration and polish PRs (1-2 PRs, low complexity)
**Week 4**: AI integration PRs (2 PRs, high complexity)

### Review Efficiency Optimization
**Epic Context Provided**: Each PR includes epic context for faster review
**Progressive Review**: Foundation work reviewed first, component work builds on it
**Batch Benefits**: Related changes grouped for coherent review experience

**Monthly Review Capacity**: [Total expected PRs] PRs vs [Available capacity] review hours
**Capacity Status**: [On track/At risk/Needs adjustment]
"
```

### **Epic-Aware Auto-Merge Strategy**
```bash
# Enhanced auto-merge criteria considering epic context

# Epic-Aware Auto-Merge Eligibility:
# 1. Documentation updates within epic scope
# 2. Test additions for epic work (no functional changes)
# 3. Epic milestone tracking updates
# 4. Storybook documentation for completed epic work
# 5. Demo application updates for epic features

# Epic-Aware Human Review Required:
# 1. Core epic functionality implementation
# 2. Cross-epic integration changes
# 3. Epic architectural decisions
# 4. Epic milestone completion PRs
# 5. Epic-level breaking changes

# Auto-merge with epic context:
gh pr create --title "[DOCS] Epic #70 Menu - Storybook documentation" --body "
Auto-merge eligible: Documentation for completed epic work

Epic: #70 - Atmosphere 2.0 Menu
Changes: Storybook documentation for implemented menu component
Impact: No functional changes, documents completed epic work
Review: Auto-merge approved for epic documentation

Epic work documentation - no human review needed.
" --label "auto-merge" --label "epic-#70" --label "documentation"

gh pr merge --auto --squash
```

## Success Metrics for Epic-Aware PR Management

### **Program-Level PR Metrics**
- **Epic PR Efficiency**: 3-5 PRs per epic (vs 15+ individual PRs)
- **Review Load Reduction**: 60-70% reduction in total PRs requiring human review
- **Epic Milestone Velocity**: Program milestones achieved on schedule through coordinated PR delivery
- **Cross-Epic Coordination**: <5% of PRs blocked by cross-epic dependencies

### **Sprint-Level PR Metrics**
- **Weekly PR Consistency**: 3-4 PRs per week maximum (vs potential 10+ without batching)
- **Review Time Efficiency**: 15-20 minutes average review time (epic context provides clarity)
- **Agent Coordination**: <24 hours from implementation complete to PR creation
- **Queue Health**: Never more than 5 PRs pending human review

### **Epic-Specific Success Indicators**
- **Epic Completion Velocity**: Epics completed in planned timeframes
- **Epic Quality**: >90% of epic PRs approved on first review (good batching and context)
- **Epic Integration Success**: Smooth handoffs between epic phases (requirements → design → implementation → validation)
- **Stakeholder Satisfaction**: >90% satisfaction with epic delivery pace and quality

This epic-aware PR batching strategy transforms your 129-issue backlog from a potential flood of 100+ individual PRs into a manageable stream of 30-40 well-organized, context-rich PRs delivered over 6 months, with clear epic and program context enabling faster, more effective human reviews.