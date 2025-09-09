# Markdown Dropdown Toggle Guide

This guide demonstrates how to add collapsible/dropdown sections to your GitHub markdown files using HTML `<details>` and `<summary>` tags.

## Basic Dropdown Example

<details>
<summary>Click to expand!</summary>

This content is hidden by default and will be revealed when you click the summary above.

You can include:
- Lists
- **Bold text**
- *Italic text*
- `Code snippets`
- Links: [GitHub](https://github.com)

</details>

## Custom Summary Text

<details>
<summary>🚀 Advanced Configuration Options</summary>

### Database Setup
```bash
wasp start db
wasp db migrate-dev
```

### Environment Variables
- `DATABASE_URL` - Your database connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `STRIPE_KEY` - Your Stripe API key

</details>

## Multiple Nested Dropdowns

<details>
<summary>📚 Documentation Sections</summary>

<details>
<summary>Getting Started</summary>

1. Clone the repository
2. Install dependencies
3. Configure environment variables
4. Run the application

</details>

<details>
<summary>API Reference</summary>

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `POST /api/auth/logout` - User logout

### User Management
- `GET /api/users` - List all users
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

</details>

</details>

## FAQ Section Example

<details>
<summary>❓ Frequently Asked Questions</summary>

<details>
<summary>How do I deploy this app?</summary>

This Open SaaS template is pre-configured for Railway deployment. Simply push your changes to the `main` branch and Railway will automatically deploy them.

**Important:** Don't use Wasp's built-in deploy commands as they will interfere with your Railway setup.

</details>

<details>
<summary>What payment providers are supported?</summary>

The template supports multiple payment providers:
- ✅ Stripe
- ✅ Lemon Squeezy
- 🔄 Polar.sh (coming soon)
- 🔄 Paddle (coming soon)

</details>

<details>
<summary>Can I use this template for free?</summary>

Yes! This template is completely open-source and free to use. You can:
- Use it for commercial projects
- Modify it as needed
- Contribute back to the community

</details>

</details>

## Code Examples in Dropdowns

<details>
<summary>💻 Code Examples</summary>

### React Component Example
```jsx
import React from 'react';

function WelcomeMessage({ user }) {
  return (
    <div className="welcome-message">
      <h1>Welcome, {user.name}!</h1>
      <p>Ready to build something amazing?</p>
    </div>
  );
}

export default WelcomeMessage;
```

### Wasp Configuration Example
```javascript
app MyApp {
  wasp: {
    version: "^0.14.0"
  },
  title: "My SaaS App",
  auth: {
    userEntity: User,
    methods: {
      email: {
        fromField: email,
        emailVerification: {
          clientRoute: EmailVerificationRoute,
          getEmailContentFn: import { getVerificationEmailContent } from "@src/auth/email",
        }
      }
    }
  }
}
```

</details>

## Troubleshooting Section

<details>
<summary>🔧 Troubleshooting Common Issues</summary>

### Development Issues

<details>
<summary>Database Connection Errors</summary>

If you're experiencing database connection issues:

1. **Check your `.env.server` file:**
   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/myapp"
   ```

2. **Ensure PostgreSQL is running:**
   ```bash
   # On macOS with Homebrew
   brew services start postgresql
   
   # On Linux
   sudo systemctl start postgresql
   ```

3. **Run migrations:**
   ```bash
   wasp db migrate-dev
   ```

</details>

<details>
<summary>Build Errors</summary>

Common build errors and solutions:

**Error:** `Module not found`
- Solution: Check your import paths and ensure all dependencies are installed

**Error:** `TypeScript compilation failed`
- Solution: Run `wasp clean` followed by `wasp start` to clear the cache

**Error:** `Database schema out of sync`
- Solution: Run `wasp db migrate-dev` to update your database schema

</details>

</details>

## Best Practices for Dropdown Usage

<details>
<summary>📋 Best Practices</summary>

### When to Use Dropdowns

✅ **Good use cases:**
- FAQ sections
- Detailed configuration options
- Code examples
- Troubleshooting guides
- Optional advanced information

❌ **Avoid for:**
- Critical information that users must see
- Short content that doesn't need to be hidden
- Navigation menus (use proper markdown links instead)

### Styling Tips

1. **Use emojis in summary text** to make sections more visually appealing
2. **Keep summary text descriptive** - users should know what they'll find inside
3. **Organize nested dropdowns logically** - group related information together
4. **Don't nest too deeply** - more than 2-3 levels can be confusing

</details>

## Implementation in Your Project

To add dropdowns to your markdown files, simply copy this HTML structure:

```html
<details>
<summary>Your summary text here</summary>

Your content here - can include any valid markdown!

</details>
```

### Advanced Usage

You can also add the `open` attribute to have a dropdown expanded by default:

<details open>
<summary>This dropdown is open by default</summary>

This section is expanded when the page loads because of the `open` attribute in the details tag.

</details>

## Testing Your Dropdowns

1. **Local testing:** Most markdown viewers support details/summary tags
2. **GitHub preview:** Use the preview tab when editing files on GitHub
3. **Documentation sites:** Test on your deployed documentation to ensure compatibility

---

*This guide is part of the Open SaaS Railway template. Feel free to customize and expand it for your specific needs!*