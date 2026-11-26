// Real-Life Patch Notes: The Comedy Changelog
// Writes one original one-line patch note for a real-life bug to /output/entry.txt.
// Deterministic: the same line on every run, no network, no input, no secrets.
// The line is 118 characters, inside the competition's 1-160 character gate,
// and is written with no trailing newline so the file holds exactly the line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v2.4.1: fixed a bug where lying down for sleep triggered a full replay of every embarrassing thing you have ever done.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
