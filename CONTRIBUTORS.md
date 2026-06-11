# Updating the template to latest Wasp version

## Template files

Start by removing the old template folders:

```shell
rm -rf app e2e-tests blog
```

Then recreate the template file structure from the latest template version:

```shell
wasp new saas-app -t saas && \
cp -r saas-app/{app,e2e-tests,blog} . && \
cp saas-app/.gitignore . && \
rm -rf saas-app
```

## Changes on top of template

### Email sender

Change the email sender to `Mailgun`.

### Re-add Mailgun example env vars

Make sure `.env.server.example` has the Mailgun env vars:

```env
# See our guide for setting up mailgun emailing: https://wasp.sh/docs/advanced/email#mailgun
MAILGUN_API_KEY=your-mailgun-key
MAILGUN_DOMAIN=your-mailgun-domain
```

## Re-add the initial migration

Start the database (in a separate terminal window):

```bash
cd app/
wasp db start
```

Run the migrations to generate the `package-lock.json` and `migrations` dir:

```bash
cd app/
cp .env.server.example .env.server
wasp db migrate-dev --name "init"
```

## Test that everything works

Start the app:

```bash
# Make sure the databae is still running from the previous step.
wasp start
```

## Dockerfiles

Bump the version of Wasp in the `./railway` Dockerfiles:

```diff
-RUN npm i -g @wasp.sh/wasp-cli@old
+RUN npm i -g @wasp.sh/wasp-cli@new
```

Test the custom Docker files in `./railway` and update them if needed:

```shell
# Client Dockerfile
docker build -t railway-template-client \
--platform=linux/amd64 . \
--file ./railway/Dockerfile.client \
--build-arg REACT_APP_API_URL=https://mock-api-url.com
docker run railway-template-client

# Server Dockerfile
docker build -t railway-template-server \
--platform=linux/amd64 . \
--file ./railway/Dockerfile.server
docker run railway-template-server
```

**Note:** check the `.wasp/out/Dockerfile` to check if something changed related to how we build the server or generate the Prisma client.

## Railway template

After merging the version update, test the published Railway template. Only edit the template if the test deployment fails or exposes stale config.

### Test the published template

1. Open the [Railway dashboard](https://railway.com/dashboard) and log in with `info@wasp-lang.dev`.
2. Select the `Wasp` workspace and go to `Templates`.
3. Click the `Open SaaS` template name.
4. Click `Deploy Now`.
5. Keep `Deploy to: New Project` and click `Deploy`.
6. Wait for `Postgres`, `Client`, and `Server` to finish deploying. The template is healthy when `Client` and `Server` are online and their public URLs work.
7. Open the `Client` service and use its public `client-production-*.up.railway.app` URL to verify the app loads.
8. Do not expect login or email flows to work during this smoke test because the template uses dummy email sender variables. It is enough for the client to load and the server to return `200`.
9. If a service fails, inspect its `Build Logs` and `Deploy Logs`. Common causes are missing variables, Dockerfile changes, or Wasp build output changes.

### Update the template if needed

1. Go back to `Templates` in the `Wasp` workspace.
2. Open the three-dot menu on `Open SaaS` and click `Edit`.
3. Select the affected service and open `Variables`. This is usually the `Server` service when a required env var is missing.
4. Add or update missing variables.
5. Update service settings or Dockerfile-related config if the logs show the deployment no longer matches the latest Wasp build output.
6. Click `Save`.
7. Re-test the template from scratch with the steps above.
