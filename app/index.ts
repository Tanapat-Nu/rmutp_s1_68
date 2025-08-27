import { Hono } from "hono";
import { PrismaClient } from '@prisma/client'
// import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

const app = new Hono();
app.get('/', (c) => c.text('Hono!'));
app.get('/about', (c) => { return c.json({ message: "Tanapat Nunkhong " }) });
app.get("/profile", async(c) => {
    // logic
    const profile = await prisma.profile.findMany();
    return c.json(profile);
});

export default app;