import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-b5eacdbd/health", (c) => {
  return c.json({ status: "ok" });
});

// Email subscription endpoint
app.post("/make-server-b5eacdbd/subscribe", async (c) => {
  try {
    const body = await c.req.json();
    const { email, name, message } = body;

    if (!email || !email.includes("@")) {
      return c.json({ error: "Valid email is required" }, 400);
    }

    // Create unique key with timestamp
    const timestamp = Date.now();
    const key = `contact_${timestamp}_${email.replace(/[^a-zA-Z0-9]/g, "_")}`;

    // Store contact data
    await kv.set(key, {
      email,
      name: name || "",
      message: message || "",
      timestamp,
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    console.log(`New contact submission: ${email} at ${new Date().toISOString()}`);

    return c.json({
      success: true,
      message: "Successfully subscribed to the contact list",
    });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return c.json({ error: "Failed to process subscription" }, 500);
  }
});

// Get all contacts (for admin use - should be protected in production)
app.get("/make-server-b5eacdbd/contacts", async (c) => {
  try {
    const contacts = await kv.getByPrefix("contact_");
    return c.json({
      success: true,
      count: contacts.length,
      contacts: contacts.map(contact => ({
        email: contact.email,
        name: contact.name,
        message: contact.message,
        submittedAt: contact.submittedAt,
        status: contact.status,
      })),
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return c.json({ error: "Failed to fetch contacts" }, 500);
  }
});

Deno.serve(app.fetch);