import { copyFile, mkdir } from "node:fs/promises";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies POSTS.json from this repository into the output directory.
// The output directory comes from MAKEFUN_OUTPUT_DIR, defaulting to /output.
async function main(): Promise<void> {
  const repoDir = dirname(fileURLToPath(import.meta.url));
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await mkdir(outputDir, { recursive: true });
  const source = join(repoDir, "POSTS.json");
  // POSTS.json is the whole entry: refuse to continue if it is missing or
  // not a valid list, so a broken build fails here instead of copying garbage.
  const raw = await readFile(source, "utf-8");
  const parsed: unknown = JSON.parse(raw);
  if (
    !parsed ||
    typeof parsed !== "object" ||
    !Array.isArray((parsed as { posts?: unknown }).posts) ||
    (parsed as { posts: unknown[] }).posts.length === 0
  ) {
    throw new Error("POSTS.json must list at least one post");
  }
  const target = join(outputDir, "POSTS.json");
  await copyFile(source, target);
  console.log(`Copied ${source} to ${target}`);
  console.log(`done: entry list ready in ${outputDir}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
