import {readFile} from 'node:fs/promises';
const files=['src/tools.mjs','scripts/build.mjs','public/assets/app.js'];for(const f of files){const s=await readFile(f,'utf8');if(/eval\s*\(|new Function\s*\(/.test(s))throw new Error(`Unsafe dynamic code in ${f}`)}
const {tools}=await import('../src/tools.mjs');if(new Set(tools.map(x=>x.slug)).size!==tools.length)throw new Error('Duplicate slugs');for(const t of tools)if(!t.description||t.description.length<45)throw new Error(`Thin description: ${t.slug}`);console.log(`Lint passed for ${tools.length} tools`);
