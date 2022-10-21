import dotenv from 'dotenv-safe'
import { Client } from "discord.js";
dotenv.config()

const token = process.env.DISCORD_TOKEN

console.log("Bot is starting...");

const client = new Client({
    intents: []
});
client.login(token);

console.log("Bot is running");
