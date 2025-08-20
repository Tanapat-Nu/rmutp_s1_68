#Prisma

Tanapat Nunkhong
## Required
- Git
- docker & DockerCompose
- PostgreSQL
- Node.js
- Prisma
## Running
### Database
```
docker compose up -d
```
### Schema
```
npx prisma generate

npx prisma studio
```

## Develop
```bash
npx prisma init --datasource-provider postgresql
```