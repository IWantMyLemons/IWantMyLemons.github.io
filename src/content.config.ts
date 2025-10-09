import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const personalProjects = defineCollection({
    loader: glob({ pattern: "**/*.toml", base: "./personal-projects" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        repo_url: z.ostring(),
        google_drive_url: z.ostring(),
        itch_url: z.ostring(),
    })
})

const collaborativeProjects = defineCollection({
    loader: glob({ pattern: "**/*.toml", base: "./collaborative-projects" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        repo_url: z.ostring(),
        google_drive_url: z.ostring(),
        itch_url: z.ostring(),
    })
})

export const collections = { personalProjects, collaborativeProjects };