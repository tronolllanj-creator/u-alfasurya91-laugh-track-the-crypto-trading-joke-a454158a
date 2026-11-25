// u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a: one crypto-trading joke, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const joke = "Leaving the group chat now because my portfolio value matches the gas fee.";
writeFileSync(join(dir, 'entry.txt'), joke);