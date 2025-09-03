import { Hono } from "hono";
import { PrismaClient } from '@prisma/client'
import * as bcrypt from "bcrypt";

// import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

const app = new Hono();
app.get('/', (c) => c.text('Hono!'));
app.get('/about', (c) => { return c.json({ message: "Tanapat Nunkhong " }) });
app.get("/profile", async (c) => {
    // logic
    const profile = await prisma.profile.findMany();
    return c.json(profile);
});
app.post("/profile", async (c) => {
    //logic to create a new profile
    const boby = await c.req.json();
    console.log('input of profile', boby);
    console.log('body.password(original)', boby.password);

    //encode password
    const passwordHash = await bcrypt.hash(boby.password,18);
    console.log('hash.password(after)',passwordHash);

    //save to db

    // output
    return c.json({
        message: "create profile completed"
    })
});

export default app;