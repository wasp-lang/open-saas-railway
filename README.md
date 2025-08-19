## Welcome to your new SaaS App! 🎉

https://github.com/user-attachments/assets/3856276b-23e9-455e-a564-b5f26f4f0e98

You've decided to build a SaaS app with the Open SaaS x Railway template. Great choice! 

This template is:

1. fully open-source
2. completely free to use and distribute
3. comes with a ton of features out of the box!
4. focused on free, open-source services, where possible
5. is **pre-configured for instant Railway deployments**

> [!IMPORTANT]  
> This is a special version of Open SaaS, pre-configured for instant Railway deployments. 
> Because of this, the deployment features via the Wasp CLI **should not** be used.
> Be sure to follow the [Using this starter with Railway](#using-this-starter-with-railway) section below to learn more.

🧑‍💻 Check it out in action here: [OpenSaaS.sh](https://opensaas.sh)  
📚 Check out the Docs here: [Open SaaS Docs](https://docs.opensaas.sh)

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

## Using this starter with Railway

### Initial Deployment

This template was built for the [Railway](https://railway.com) template marketplace. Chances are, you've already deployed an instance to your Railway account.

If you haven't, you can do so by clicking the button below:

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/open-saas?referralCode=uA-ZC_)

`TODO: add configure pic`

- Fill in the server-side `JWT_SECRET` with a string of 32 characters. 

`TODO: add initial deploy pic`

- Click `Deploy`
- You'll see the Database, Server, and Client services initialize.
- Click on either the `Client` or `Server` service to access its configuration
- To get a copy of this deployed template in your GitHub repositories, click on `Settings`. 

`TODO: add eject pic`

- Under the `Upstream Repo` section, click the `Eject` button. 

`TODO: org github select pic`

- Select your github account and click `Eject Service` to create a new repo in your account.
- Clone this repo to your local machine. 

Now you can start building your SaaS app locally. When you push a new commit to `main`, Railway will automatically deploy your changes! 🚀

### Local Development

For local development, you'll need to install the Wasp CLI. Follow the [Open SaaS -- Getting Started Docs](https://docs.opensaas.sh/start/getting-started/) for detailed instructions.

The [Open SaaS Docs](https://docs.opensaas.sh) also have detailed guides on setting up integrations like Payments, Auth, Analytics, Email Sending, AI-assisted coding, and more.

> [!WARNING]  
> Remember that this version of Open SaaS is pre-configured for instant Railway deployments. 
> Because of this, the deployment features via the Wasp CLI **should not** be used.
> Just simply push to `main` on your instance's GitHub repo and Railway will automatically deploy your changes! 

## Getting Help & Providing Feedback

There are two ways to get help or provide feedback (and we try to always respond quickly!):
1. [Open an issue](https://github.com/wasp-lang/open-saas/issues)
2. [Wasp Discord](https://discord.gg/aCamt5wCpS) -- please direct questions to the #🙋questions forum channel
