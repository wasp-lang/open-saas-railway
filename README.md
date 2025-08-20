## Open SaaS x Railway Template 🐝 🛤

https://github.com/user-attachments/assets/3856276b-23e9-455e-a564-b5f26f4f0e98

You've decided to build a SaaS app with the Open SaaS x Railway template. Great choice! 

This template is:

1. fully open-source & free to use
2. comes with a ton of features out of the box
3. is **pre-configured for instant Railway deployments**

> [!WARNING]  
> This is a special version of Open SaaS designed for instant Railway deployments. <br/>
> **Do not** use Wasp's built-in deploy commands as it will interfere with your Railway setup.

## Using this Open SaaS x Railway template

If you haven't already deployed Open SaaS via the [Railway](https://railway.com/deploy) template directory, you can do so now:

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/open-saas?referralCode=uA-ZC_)

### Initial Deployment

- Click `Deploy Now`.
- All services are pre-configured for you.
- You'll see the `Database`, `Server`, and `Client` services initialize.

### Getting your copy of the template ("ejecting")

<img width="50%" alt="Screenshot 2025-08-19 at 14 13 31" src="https://github.com/user-attachments/assets/6b32c6e7-e72f-46f2-865a-6e54b4c3181d" />

- Click on either the `Client` or `Server` service to access their configuration.
- Click on the `Settings` tab. 

<img width="50%" alt="Screenshot 2025-08-19 at 14 16 17" src="https://github.com/user-attachments/assets/4970c08a-2277-40fa-ac10-fd1c666399ed" />

- Under the `Upstream Repo` heading, click the `Eject` button. 

<img width="50%" alt="Screenshot 2025-08-19 at 14 26 50" src="https://github.com/user-attachments/assets/c6b2c467-ff10-466d-aba1-e0a5df004eb4" />

- Select your GitHub account and click `Eject Service` to create a new repo in your account.
- Go to your GitHub repositories, e.g.: `https://github.com/<your-user-name>/open-saas-railway` 
- Clone this repo to your local machine, e.g.: `git clone https://github.com/<your-user-name>/open-saas-railway.git`

Now you can start building your SaaS app locally. When you push a new commit to `main`, Railway will automatically deploy your changes! 🚀

### Local Development

1️⃣ Install the Wasp CLI:
```bash
curl -sSL https://get.wasp.sh/installer.sh | sh
```
Read the [Installation Instructions](https://docs.opensaas.sh/start/getting-started/#install-wasp) for more details (prerequisites, installing on Windows).

2️⃣ Start the app by reading the [Getting Started Docs](https://docs.opensaas.sh/start/getting-started/#start-your-db).

3️⃣ Although the app will run, you'll need to set up the integrations to get all its functionality. The [Open SaaS Docs](https://docs.opensaas.sh) contain detailed guides on setting up:
- Auth,
- Payments,
- Analytics,
- Email Sending,
- AI-assisted coding,
- and more. 

> [!WARNING]  
> Remember that this version of Open SaaS is pre-configured for instant Railway deployments. 
> Because of this, the deployment features via the Wasp CLI **should not** be used.
> Just simply push to `main` on your instance's GitHub repo and Railway will automatically deploy your changes! 

## What's inside?

### Project Structure

This template consists of three main dirs:
1. `app` - Your web app, built with [Wasp](https://wasp.sh).
2. `e2e-tests` - [Playwright](https://playwright.dev/) tests for your Wasp web app.
3. `blog` - Your blog / docs, built with [Astro](https://docs.astro.build) based on [Starlight](https://starlight.astro.build/) template.

For more details, check READMEs of each respective directory!

### The Tech Stack

The template itself is built on top of some very powerful tools and frameworks, including:

- 🐝 [Wasp](https://wasp.sh) - a full-stack React, NodeJS, Prisma framework with superpowers
- 🚀 [Astro](https://starlight.astro.build/) - Astro's lightweight "Starlight" template for documentation and blog
- 💸 [Stripe](https://stripe.com) or [Lemon Squeezy](https://lemonsqueezy.com/) (with Polar.sh and Paddle coming soon!) - for products and payments
- 💅 [ShadCN UI](https://tailwindcss.com) - for components & styling (plus admin dashboard!)
- 🤖 [AI-Ready](https://docs.opensaas.sh/) - full set of Cursor rules & llms-full.txt for ai-assisted coding
- 📈 [Plausible](https://plausible.io) or [Google](https://analytics.google.com/) Analytics
- 🤖 [OpenAI](https://openai.com) - OpenAI API w/ function calling example
- 📦 [AWS S3](https://aws.amazon.com/s3/) - for file uploads
- 📧 [SendGrid](https://sendgrid.com), [MailGun](https://mailgun.com), or SMTP - for email sending
- 🧪 [Playwright](https://playwright.dev) - end-to-end tests with Playwright

Because we're using Wasp as the full-stack framework, we can leverage a lot of its features to build our SaaS in record time, including:

- 🔐 [Full-stack Authentication](https://wasp.sh/docs/auth/overview) - Email verified + social Auth in a few lines of code.
- ⛑ [End-to-end Type Safety](https://wasp.sh/docs/data-model/operations/overview) - Type your backend functions and get inferred types on the front-end automatically, without the need to install or configure any third-party libraries. Oh, and type-safe Links, too!
- 🤖 [Jobs](https://wasp.sh/docs/advanced/jobs) - Run cron jobs in the background or set up queues simply by defining a function in the config file.
- 🚀 [One-command Deploy](https://wasp.sh/docs/advanced/deployment/overview) - Easily deploy your DB, Server, & Client with one commaned to [Railway](https://railway.app) or [Fly.io](https://fly.io) via the CLI. Or deploy manually to any other hosting serivce of your choice.

You also get access to Wasp's diverse, helpful community if you get stuck or need help.
- 🤝 [Wasp Discord](https://discord.gg/aCamt5wCpS)

## Getting Help & Providing Feedback

There are two ways to get help or provide feedback (and we try to always respond quickly!):
1. [Open an issue](https://github.com/wasp-lang/open-saas/issues)
2. [Wasp Discord](https://discord.gg/aCamt5wCpS) -- please direct questions to the #🙋questions forum channel
