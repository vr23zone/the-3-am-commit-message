import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "hotfix: stopped the 3 AM retry loop that emailed the CEO 1,842 incident reports. Prod is back. The reports are now our most accurate postmortem; I'll cite them at standup instead of apologizing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
