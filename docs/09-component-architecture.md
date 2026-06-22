# Component Architecture

## Purpose

The purpose of this document is to define the React component structure for the Master Portfolio project.

Component architecture helps break large user interfaces into smaller, reusable, maintainable, and scalable building blocks.

This document serves as the blueprint for frontend development.

---

# Architecture Philosophy

The portfolio should follow:

* Reusability
* Scalability
* Maintainability
* Separation of Concerns

Each component should have a single responsibility.

---

# Application Structure

```text
App
│
├── Layout
│
├── Navbar
├── Hero
├── About
├── Experience
├── Skills
├── FeaturedProjects
├── LearningJourney
├── GitHubActivity
├── Contact
└── Footer
```

---

# Page Architecture

## Home Page

```text
HomePage
│
├── HeroSection
├── AboutSection
├── ExperienceSection
├── SkillsSection
├── FeaturedProjectsSection
├── LearningJourneySection
├── GitHubActivitySection
├── ContactSection
└── Footer
```

Purpose:

Provide a complete overview of the portfolio.

---

## Projects Page

```text
ProjectsPage
│
├── PageHeader
├── SearchBar
├── FilterBar
├── ProjectsGrid
└── Pagination
```

Purpose:

Display all projects.

---

## Project Detail Page

```text
ProjectDetailPage
│
├── ProjectHero
├── ProjectOverview
├── ProblemStatement
├── SolutionApproach
├── ArchitectureSection
├── TechStackSection
├── ScreenshotsSection
├── LessonsLearned
└── ProjectLinks
```

Purpose:

Provide technical depth.

---

# Layout Components

## Layout

Purpose:

Wrap all pages.

Responsibilities:

* Theme Management
* Global Layout
* Shared Structure

---

## Navbar

Purpose:

Site navigation.

Features:

* Navigation Links
* Resume Button
* Theme Toggle
* Mobile Menu

Reusable:

Yes

---

## Footer

Purpose:

Site footer information.

Features:

* Social Links
* Copyright
* Contact Information

Reusable:

Yes

---

# Hero Components

## HeroSection

Purpose:

Create first impression.

Contains:

```text
HeroSection
│
├── HeroContent
├── HeroActions
└── HeroVisual
```

---

## HeroContent

Displays:

* Name
* Role
* Introduction

---

## HeroActions

Displays:

* View Projects Button
* Resume Download Button

---

## HeroVisual

Displays:

* Profile Image
  OR
* Developer Illustration
  OR
* Terminal UI

---

# About Components

## AboutSection

Purpose:

Professional introduction.

Contains:

```text
AboutSection
│
├── ProfileImage
└── AboutContent
```

---

# Experience Components

## ExperienceSection

Purpose:

Display experience timeline.

Contains:

```text
ExperienceSection
│
└── Timeline
       │
       └── TimelineItem
```

---

## TimelineItem

Reusable Component

Used For:

* Experience
* Education
* Certifications

---

# Skills Components

## SkillsSection

Purpose:

Display categorized skills.

Contains:

```text
SkillsSection
│
└── SkillCategory
       │
       └── SkillBadge
```

---

## SkillCategory

Examples:

* Frontend
* Backend
* Database
* Tools

---

## SkillBadge

Examples:

* React
* Java
* Git

Reusable:

Yes

---

# Projects Components

## FeaturedProjectsSection

Purpose:

Showcase top projects.

Contains:

```text
FeaturedProjectsSection
│
└── ProjectCard
```

---

## ProjectCard

Displays:

* Project Name
* Description
* Tech Stack
* GitHub Link
* Demo Link

Reusable:

Highly Reusable

Used Across:

* Homepage
* Projects Page

---

# Learning Journey Components

## LearningJourneySection

Purpose:

Show growth and consistency.

Contains:

```text
LearningJourneySection
│
└── JourneyCard
```

---

## JourneyCard

Displays:

* Learning Topic
* Progress
* Description

Examples:

* APIs
* ServiceNow
* n8n
* Java

Reusable:

Yes

---

# GitHub Activity Components

## GitHubActivitySection

Purpose:

Show coding activity.

Contains:

```text
GitHubActivitySection
│
├── GitHubStats
├── ContributionGraph
└── RepositoryList
```

---

# Contact Components

## ContactSection

Purpose:

Allow communication.

Contains:

```text
ContactSection
│
├── ContactForm
├── ContactInfo
└── SocialLinks
```

---

## SocialLinks

Reusable Component

Used In:

* Hero Section
* Footer
* Contact Section

---

# Common Reusable Components

These components should be reused throughout the application.

```text
Button
Card
SectionTitle
Container
Badge
Tag
ThemeToggle
SocialLinks
TimelineItem
ProjectCard
JourneyCard
```

---

# State Management Plan

## Global State

Potential Shared State:

```text
Theme Mode
Navigation State
```

Management Method:

React Context API

---

## Local State

Examples:

```text
Search Input
Filters
Mobile Menu
```

Management Method:

useState()

---

# Folder Structure Plan

```text
src/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── journey/
│   ├── contact/
│   └── github/
│
├── pages/
│
├── data/
│
├── hooks/
│
├── context/
│
├── assets/
│
└── utils/
```

---

# Component Design Principles

## Single Responsibility

One component should have one purpose.

---

## Reusability

Avoid duplicate code.

---

## Readability

Component names should clearly describe functionality.

---

## Scalability

Architecture should support future features.

---

# Development Benefits

This architecture will:

* Reduce duplicate code.
* Improve maintainability.
* Support future growth.
* Simplify testing.
* Improve project organization.

---

# Success Criteria

The component architecture is successful if:

* Components are reusable.
* Folder structure remains organized.
* Features can be added easily.
* Code remains maintainable.
* Development becomes faster and more structured.

---

# Conclusion

This component architecture provides the foundation for implementing the portfolio using React while following modern frontend development practices.
