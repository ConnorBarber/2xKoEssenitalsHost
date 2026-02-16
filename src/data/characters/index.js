// Individual character data imports
import { ahri } from './ahri.js';
import { blitzcrank } from './blitzcrank.js';
import { braum } from './braum.js';
import { caitlyn } from './caitlyn.js';
import { darius } from './darius.js';
import { ekko } from './ekko.js';
import { illaoi } from './illaoi.js';
import { jinx } from './jinx.js';
import { teemo } from './teemo.js';
import { vi } from './vi.js';
import { warwick } from './warwick.js';
import { yasuo } from './yasuo.js';

// Re-export individual characters for direct imports
export { ahri, blitzcrank, braum, caitlyn, darius, ekko, illaoi, jinx, teemo, vi, warwick, yasuo };

// Export the combined array, sorted with complete characters first
const allCharacters = [
  ahri,
  blitzcrank,
  braum,
  caitlyn,
  darius,
  ekko,
  illaoi,
  jinx,
  teemo,
  vi,
  warwick,
  yasuo
];

export const charactersData = allCharacters.sort((a, b) => {
  // Complete characters first, then alphabetical within each group
  if (a.isComplete === b.isComplete) {
    return a.name.localeCompare(b.name);
  }
  return b.isComplete - a.isComplete;
});
