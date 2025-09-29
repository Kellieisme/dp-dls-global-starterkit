# Starterkit Enhanced Agent Instructions - README

This directory contains comprehensive instructions for a **7-agent system with human designer integration** designed to efficiently manage the Starterkit Angular application's **backlog** including design templates, feature requests, and development coordination.

**Key Architecture Note**: This system coordinates human designers through the Design Coordinator Agent. All visual design work, Figma component creation, and design decision-making is performed by skilled human designers, while agents manage requirements analysis, design coordination, implementation, and quality assurance.

## Enhanced 7-Agent System Overview

### **Strategic Layer (Program Management)**

#### 🎯 **[Program Manager Agent](./program-manager-agent.md)**
**Role**: Feature planning and strategic coordination
- Manages template development and feature initiatives
- Coordinates design system integration and quality programs
- Strategic stakeholder management and milestone planning
- Cross-feature dependency management and release coordination

### **Analysis Layer (Requirements & Design)**

#### 🔍 **[Requirements Analyst Agent](./requirements-analyst-agent.md)**
**Role**: Analysis of unrefined issues and requirements gathering
- Transforms ambiguous issues into actionable specifications
- Stakeholder interviews and research coordination
- Technical feasibility analysis and root cause investigation
- Quality gateway ensuring clean handoffs to specialist agents

#### 🎨 **[Design Coordinator Agent](./design-coordinator-agent.md)**
**Role**: Human designer workflow coordination and design brief management
- Design brief preparation for human designers
- Human designer capacity planning and coordination
- Design handoff management from human designers to implementation
- **Important**: Coordinates human designers but cannot create Figma designs or make design decisions

#### ♿ **[Accessibility Specialist Agent](./accessibility-specialist-agent.md)**
**Role**: WCAG 2.1 AA compliance and inclusive design
- Comprehensive accessibility testing with assistive technologies
- Screen reader optimization and keyboard navigation validation
- Accessibility specifications for implementation agents
- WCAG 2.1 AA compliance and enterprise accessibility standards

### **Execution Layer (Implementation & Validation)**

#### 👨‍💻 **[Issue Worker Agent](./issue-worker-agent.md)**
**Role**: Pure implementation specialist (refocused)
- Code implementation based on complete specifications from other agents
- Angular framework integration and technical development
- Implementation coordination with specialist agents
- **Removed**: Requirements analysis, design decisions, accessibility planning

#### 🧪 **[QA/Testing Agent](./qa-testing-agent.md)**
**Role**: Functional and performance testing (refocused)
- Comprehensive functional, integration, and performance testing
- Cross-browser compatibility and regression validation
- **Removed**: Accessibility testing (handled by Accessibility Specialist)
- Coordination with Accessibility Agent for integrated validation

#### 🔬 **[Research Agent](./research-agent.md)**
**Role**: Knowledge specialist
- Systematic research and analysis for research issues
- Investigation tasks and knowledge synthesis
- Research methodology and findings compilation

### **Coordination Layer (Tactical Management)**

#### 📋 **[Sprint Manager Agent](./sprint-manager-agent.md)** (Renamed from Backlog Manager)
**Role**: Tactical sprint coordination (refocused)
- Day-to-day coordination between specialist agents
- Sprint-level task assignment and agent workload balancing
- PR queue management and tactical issue resolution
- **Removed**: Epic planning (handled by Program Manager)

## Enhanced Workflow for Starterkit Backlog

### **Issue Classification & Assignment (Updated)**

#### **Template Development Issues**
**Program Manager Agent handles**:
- Template development initiatives (Templates 2, 3, 4)
- Design system integration projects
- Infrastructure and pipeline improvements

#### **Unrefined Issues**
**Requirements Analyst Agent handles**:
- All issues labeled "Unrefined" requiring analysis
- Stakeholder research and root cause analysis
- Technical feasibility and requirements specification

#### **Design-Heavy Issues**
**Design Coordinator Agent handles** (coordinates human designers):
- Template design brief preparation for human designers
- Human designer workflow coordination for Figma specifications
- Design system coordination (human designers create designs, agent manages handoffs)

#### **Accessibility Issues**
**Accessibility Specialist Agent handles**:
- WCAG compliance remediation
- Screen reader and keyboard navigation issues
- Inclusive design integration

#### **Implementation-Ready Issues**
**Issue Worker Agent handles**:
- Issues with complete specifications from other agents
- Technical development and bug fixes
- Angular migrations with clear requirements

## Enhanced Coordination Workflows

### **Multi-Agent Collaboration Process (Updated for Human Designer Integration)**
1. **Program Manager**: Epic breakdown and strategic coordination, human designer capacity planning
2. **Requirements Analyst**: Issue analysis and stakeholder research, design brief preparation
3. **Design Coordinator**: Design brief creation and human designer coordination
4. **Human Designers**: Visual design and interaction specifications (coordinated via Design Coordinator)
5. **Accessibility Specialist**: WCAG compliance and inclusive design requirements
6. **Sprint Manager**: Tactical assignment to Issue Worker Agent
7. **Issue Worker**: Pure implementation based on all specifications (including human designer deliverables)
8. **Accessibility Specialist**: Implementation validation for compliance
9. **QA Agent**: Comprehensive functional and performance testing
10. **Sprint Manager**: Final coordination and issue closure

### **Enhanced Communication Protocols**
- **Strategic Level**: Program Manager ↔ Stakeholders, cross-template coordination
- **Analysis Level**: Requirements Analyst ↔ Stakeholders, Design Coordinator ↔ Human Designers
- **Implementation Level**: Sprint Manager ↔ execution agents, daily coordination
- **Validation Level**: QA and Accessibility agents ↔ quality validation

## Template-Aware PR Management Strategy

### **Template-Level PR Batching**
Instead of individual PRs for each small change, create strategic template batches:
- **Template Development**: Coordinated PRs for complete template implementations
- **Cross-Template Foundations**: Shared design tokens and patterns in single PRs
- **Feature Milestones**: Coordinated PR delivery for planned milestones

### **PR Queue Management (Enhanced)**
- **Maximum**: 1-2 PRs per week requiring human review
- **Template Context**: Each PR includes template and feature context
- **Sequential Dependencies**: PRs ordered by template and feature dependencies
- **Auto-Merge Enhanced**: Documentation and non-functional changes

## Quick Start Guide (Enhanced)

### 1. Initial Setup
Each agent should:
1. Read their specific enhanced instruction file
2. Review the [enhanced coordination workflow](./enhanced-coordination-workflow.md)
3. Understand [template-aware PR batching strategies](./epic-aware-pr-batching.md)
4. Read the [PR review guidelines for humans](./pr-review-guidelines-human.md)
5. Review the [release management process](./release-management.md)
6. Set up development environment according to main [README.md](../README.md)
7. Understand the current backlog using `gh issue list --state open --limit 50`

### 2. Enhanced Daily Operations (Updated for Human Designer Integration)
1. **Program Manager**: Template coordination, milestone planning, strategic stakeholder communication, human designer capacity planning
2. **Requirements Analyst**: Unrefined issue analysis, stakeholder research, specification handoffs, design brief preparation
3. **Design Coordinator**: Human designer brief preparation, design workflow coordination, design handoff management
4. **Human Designers**: Figma design work, template design evolution, visual specifications (coordinated via Design Coordinator)
5. **Accessibility Specialist**: WCAG compliance work, accessibility implementation validation
6. **Sprint Manager**: Agent coordination, sprint planning, PR queue management, human designer timeline coordination
7. **Issue Worker**: Pure implementation of fully-specified work (including human designer deliverables)
8. **QA Agent**: Functional testing after accessibility validation
9. **Research Agent**: Systematic research and knowledge synthesis

### 3. Human Reviewers (Enhanced)
- **Daily**: 0-1 template-contextual PRs for review (template batching reduces volume)
- **Review Time**: 10-20 minutes per PR with comprehensive template context
- **Strategic Decisions**: Program Manager escalations for template-level decisions
- **Release Coordination**: Enhanced release management with feature alignment

## Complete Enhanced File Index

### **📋 Strategic Agent Instructions**
- **[Program Manager Agent](./program-manager-agent.md)** - Epic planning and strategic coordination
- **[Sprint Manager Agent](./sprint-manager-agent.md)** - Tactical sprint coordination (renamed from Backlog Manager)

### **🔍 Analysis Agent Instructions**
- **[Requirements Analyst Agent](./requirements-analyst-agent.md)** - Analysis of unrefined issues and stakeholder research
- **[Design Coordinator Agent](./design-coordinator-agent.md)** - Human designer coordination and design workflow management
- **[Accessibility Specialist Agent](./accessibility-specialist-agent.md)** - WCAG compliance and inclusive design

### **⚙️ Execution Agent Instructions**
- **[Issue Worker Agent](./issue-worker-agent.md)** - Pure implementation specialist (enhanced)
- **[QA/Testing Agent](./qa-testing-agent.md)** - Functional and performance testing (enhanced)
- **[Research Agent](./research-agent.md)** - Knowledge specialist (unchanged)

### **🔄 Enhanced Process Documentation**
- **[Enhanced Coordination Workflow](./enhanced-coordination-workflow.md)** - 7-agent coordination protocols with human designer integration
- **[Template-Aware PR Batching](./epic-aware-pr-batching.md)** - Feature-level PR management strategies with human designer timeline constraints
- **[Human Designer Workflow](./human-designer-workflow.md)** - Human designer integration with agent system
- **[PR Review Guidelines (Human)](./pr-review-guidelines-human.md)** - Enhanced review process
- **[Release Management](./release-management.md)** - Program-aware release coordination

## Enhanced Backlog Context (Updated)

### **Issue Scale & Complexity**
- **Total Open Issues**: ~10 active issues
- **Template Issues**: Multiple template development initiatives
- **Unrefined Issues**: Several requiring analysis before implementation
- **Research Issues**: Investigation tasks for new features
- **Implementation-Ready**: Will be created through analysis pipeline

### **Feature Structure**
- **Template Development Initiative**: Template 2, 3, 4 implementation
- **Design Integration Program**: Figma mockups and design system integration
- **Analytics & Metrics Program**: Usage tracking and analytics features
- **Infrastructure Program**: Development tooling and pipeline improvements

### **Enhanced Timeline Expectations**

#### **Weeks 1-2: Analysis & Foundation Phase**
- **Requirements Analyst**: Processes unrefined issues into specifications
- **Program Manager**: Template breakdown and strategic coordination, human designer capacity planning
- **Design Coordinator**: Template foundation design brief preparation for human designers
- **Human Designers**: Template foundation design creation (coordinated via Design Coordinator)
- **PRs Generated**: 2-3 foundation PRs (design tokens, patterns) - gated by human designer deliverables
- **Your Review Time**: 1-2 hours total per week

#### **Weeks 3-6: Implementation Phase**
- **Issue Worker**: Implements fully-specified work from analysis phase including human designer deliverables
- **Template Batching**: 1-2 template-level PRs per week (coordinated with human designer delivery timeline)
- **Human Designer Coordination**: Ongoing human designer work for templates coordinated via Design Coordinator
- **Feature Coordination**: Cross-template integration work
- **PRs Generated**: 1-2 template batches per week (gated by human designer completion)
- **Your Review Time**: 10-20 min per template PR (enhanced context including human designer specifications)

#### **Weeks 7-8: Integration & Polish Phase**
- **QA Agent**: Comprehensive cross-template testing
- **Accessibility Specialist**: Final compliance validation
- **Program Manager**: Milestone completion coordination
- **PRs Generated**: 1 integration PR per week
- **Your Review Time**: 10-15 min per week average

### **Final Enhanced Results**
- **Total PRs**: 8-12 template-aware PRs over 2 months (instead of individual PRs per small change)
- **Your Review Efficiency**: Template context makes reviews faster and more effective
- **Feature Quality**: Systematic analysis and specialist expertise ensures high quality
- **Strategic Alignment**: Program Manager ensures work aligns with Starterkit strategic goals

## Success Metrics (Enhanced)

### **Program-Level KPIs**
- **Template Completion Rate**: >85% of planned templates completed per milestone
- **Cross-Template Coordination**: <5% of issues blocked by dependencies
- **Stakeholder Satisfaction**: >90% satisfaction with feature progress and coordination
- **Strategic Alignment**: 100% of delivered work aligns with Starterkit strategic objectives

### **Agent-Specific KPIs**
- **Requirements Analysis**: >95% of refined issues require no re-analysis
- **Design Implementation**: >95% design-to-code fidelity
- **Accessibility Compliance**: 100% WCAG 2.1 AA compliance across all delivered work
- **Implementation Quality**: >90% first-pass QA approval rate
- **Template Coordination**: >90% template milestones delivered on schedule

---

**Note**: This enhanced 7-agent system transforms your Starterkit backlog into a manageable, specialized workflow with clear template context and feature-level coordination. Each agent has focused expertise while comprehensive coordination ensures smooth collaboration toward delivering high-quality Angular templates and features that serve your application development needs.