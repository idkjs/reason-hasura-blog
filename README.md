# ReasonML/ApolloHooks/Hasura

<https://dev.to/hasurahq/building-blog-cms-in-reasonml-with-graphql-and-serverless-using-hasura-part-1-4c6h>

## Hasura

Run `hasura init` in root directory.
Start Docker.
Get the hasure `docker-compose.yaml` file, run `wget https://raw.githubusercontent.com/hasura/graphql-engine/master/install-manifests/docker-compose/docker-compose.yaml` then run `docker-compose up -d`.

Once thats done run `cd hasura && hasura console`.

```sh
~/Github/reason-hasura-tailwindscss-demo update*
❯ cd hasura && hasura console
INFO console running at: http://localhost:9695/   
```

Now check if containers are running by running `docker ps`:

```sh
~/Github/reason-hasura-tailwindscss-demo/hasura update*
❯ docker ps
CONTAINER ID        IMAGE                                 COMMAND                  CREATED              STATUS              PORTS                    NAMES
639b99bd0563        hasura/graphql-engine:v1.3.0-beta.1   "graphql-engine serve"   About a minute ago   Up About a minute   0.0.0.0:8080->8080/tcp   reason-hasura-tailwindscss-demo_graphql-engine_1
55756c6b25ad        postgres:12                           "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp                 reason-hasura-tailwindscss-demo_postgres_1

```
