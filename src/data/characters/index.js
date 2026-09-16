// Individual character data imports
import ahri from './ahri.json';
import blitzcrank from './blitzcrank.json';
import braum from './braum.json';
import caitlyn from './caitlyn.json';
import darius from './darius.json';
import ekko from './ekko.json';
import illaoi from './illaoi.json';
import jinx from './jinx.json';
import teemo from './teemo.json';
import vi from './vi.json';
import warwick from './warwick.json';
import yasuo from './yasuo.json';
import akali from './akali.json';
import thresh from './thresh.json';
import senna from './senna.json';

// Re-export individual characters for direct imports
export { ahri, blitzcrank, braum, caitlyn, darius, ekko, illaoi, jinx, teemo, vi, warwick, yasuo, akali, thresh, senna };

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
  yasuo,
  akali,
  thresh,
  senna
];

export const charactersData = allCharacters.sort((a, b) => {
  // Complete characters first, then alphabetical within each group
  if (a.isComplete === b.isComplete) {
    return a.name.localeCompare(b.name);
  }
  return b.isComplete - a.isComplete;
});
