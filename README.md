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
npx prisma init --datasource-provider postgresql
npx prisma studio
```

## Develop
```bash
npx prisma generate
```