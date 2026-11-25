// The Robot Vacuum's Best Excuse — v2
// Writes one 115-character excuse to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: 1–140 characters, one line; no trailing newline, so size is exactly 115.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan vacuum log: 4% battery, a crumb that survived 212 cleans, orders reversed.
const LINE =
  "Battery hit 4% beside the crumb, so I chose the dock. The crumb has survived 212 cleans. I take orders from it now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
