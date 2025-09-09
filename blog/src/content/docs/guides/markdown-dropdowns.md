---
title: Markdown Dropdown Examples
description: Learn how to add collapsible sections to your documentation
---

# Using Markdown Dropdowns in Documentation

This guide shows how to create collapsible sections in your markdown documentation using HTML `<details>` and `<summary>` tags.

## Basic Usage

<details>
<summary>Expand for basic example</summary>

Here's the HTML structure you need:

```html
<details>
<summary>Click to expand</summary>
Content goes here!
</details>
```

</details>

## Advanced Examples

<details>
<summary>🛠️ Development Setup</summary>

### Prerequisites
- Node.js 18+ 
- PostgreSQL
- Git

### Installation Steps
1. Clone the repository
2. Install dependencies with `npm install`
3. Set up environment variables
4. Run `wasp start db`
5. Run `wasp start`

</details>

<details>
<summary>📋 Environment Variables</summary>

Create a `.env.server` file with these variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/myapp"

# Authentication
JWT_SECRET="your-jwt-secret-here"

# Email
SENDGRID_API_KEY="your-sendgrid-key"

# Payments
STRIPE_KEY="your-stripe-key"
```

</details>

## Benefits for Documentation

- **Cleaner layout**: Hide optional or advanced information
- **Better UX**: Users can expand only what they need
- **Progressive disclosure**: Show basic info first, details on demand
- **Mobile friendly**: Saves vertical space on smaller screens

> 💡 **Pro tip**: Use emojis in your summary text to make sections more visually appealing and easier to scan!