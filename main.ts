import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies POSTS.json from this repository into the output directory.
// The output directory comes from MAKEFUN_OUTPUT_DIR, defaulting to /output.
async function main(): Promise<void> {
  const repoDir = dirname(fileURLToPath(import.meta.url));
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await mkdir(outputDir, { recursive: true });
  const source = join(repoDir, "POSTS.json");
  const target = join(outputDir, "POSTS.json");
  await copyFile(source, target);
  console.log(`Copied ${source} to ${target}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
