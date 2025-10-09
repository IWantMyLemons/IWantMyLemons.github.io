import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const simple_projects = defineCollection({
    loader: glob({ pattern: "**/*.toml", base: "./simple_projects" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        repo_url: z.ostring(),
        google_drive_url: z.ostring(),
        itch_url: z.ostring(),
    })
})

export const collections = { simple_projects };