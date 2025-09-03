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
    const body = await c.req.json();
    console.log('input of profile', body);
    console.log('body.password(original)', body.password);

    c.status(503);
    return c.json({
     message: "service unavailable for demo",
     data: "server error"
    })
    

    //encode password
    const passwordHash = await bcrypt.hash(body.password,18);
    console.log('hash.password(after)',passwordHash);
    body.password = passwordHash;
    console.log('body.password(replace)',body);


    //save to db
    body.status= false;
    const result = await prisma.profile.create({
        data:body
    });
    // output
    return c.json({
        message: "create profile completed",
        data: result
    })
});

export default app;