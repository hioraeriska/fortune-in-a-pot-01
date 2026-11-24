// Fortune in a Pot — make.fun entry.
// Writes one kind, funny fortune for the houseplant on the windowsill
// to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader mounts it as /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "This week a sunbeam will choose your windowsill, and you will unfurl one brave new leaf to say thank you.";

// The gate only accepts 1–120 characters; refuse to write an invalid line.
if ([...FORTUNE].length < 1 || [...FORTUNE].length > 120) {
  throw new Error(`fortune is ${[...FORTUNE].length} characters, not 1–120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
