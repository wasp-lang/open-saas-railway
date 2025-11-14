# Updating the template to latest Wasp version

## Template files

Start by removing the old template folders:

```shell
rm -rf app e2e-tests blog
```

Then recreate the template folders from the latest template version:

```shell
  wasp new saas-app -t saas && cp -r saas-app/{app,e2e-tests,blog} . && rm -rf saas-app
```

## Changes on top of template

### Healthcheck

Make sure the `/healthcheck` endpoint is included:

```ts
api healthCheck {
  fn: import { healthCheck } from "@src/server/healthCheck",
  httpRoute: (GET, "/health-check"),
  auth: false
}
```

### Email sender

Make sure that the email sender is set to `Mailgun` and not `Dummy`.

## Test the app is okay

Try running the app locally with:

```bash
cd app/
cp .env.server.example .env.server
wasp start db
# Delete the migrations dir after this
wasp db migrate-dev
wasp start
```

## Dockerfiles

Bump the version of Wasp in the `./railway` Dockerfiles:

```diff
-RUN curl -sSL https://get.wasp.sh/installer.sh | sh -s -- -v old
+RUN curl -sSL https://get.wasp.sh/installer.sh | sh -s -- -v new
```

Test the custom Docker files in `./railway` and update them if needed:

```shell
# Client Dockerfile
docker build -t railway-template-client --platform=linux/amd64 . --file ./railway/Dockerfile.client
docker run railway-template-client

# Server Dockerfile
docker build -t railway-template-server --platform=linux/amd64 . --file ./railway/Dockerfile.server
docker run railway-template-server
```

**Hint:** use the `.wasp/out/Dockerfile` to check if something changed related to how we build the server or generate the Prisma client.
