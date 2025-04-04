import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/articles" }),
});

export const collections = {
	articles,
};
