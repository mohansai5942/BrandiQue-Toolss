import{copyFile,mkdir,access}from'node:fs/promises';
const overrides=[
  ['public/image-resizer.html','dist/tools/image-resizer/index.html'],
  ['public/pdf-merger.html','dist/tools/pdf-merger/index.html']
];
for(const[source,target]of overrides){await access(source);await mkdir(target.slice(0,target.lastIndexOf('/')),{recursive:true});await copyFile(source,target);console.log(`Applied route override: ${target}`)}
