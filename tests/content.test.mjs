import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const sources = readFileSync(new URL('../data/sources.ts', import.meta.url), 'utf8');
const ids = [...sources.matchAll(/id:\s*'([^']+)'/g)].map(match => match[1]);
assert.ok(ids.length >= 8, 'source ledger should have sufficient evidence');
assert.equal(new Set(ids).size, ids.length, 'source IDs must be unique');
for (const url of sources.matchAll(/url:\s*'([^']+)'/g)) assert.ok(url[1].startsWith('https://'), 'every source URL must be HTTPS');
console.log(`${ids.length}/${ids.length} content checks passed`);
