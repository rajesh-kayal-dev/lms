const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "components");

function generate(file) {
  if (fs.statSync(file).size > 0) return;

  const name = path.basename(file, ".jsx");
  fs.writeFileSync(
    file,
`import React from 'react'

const ${name} = () => {
  return (
    <div>${name}</div>
  )
}

export default ${name}
`
  );
}

function walk(dir) {
  fs.readdirSync(dir).forEach((f) => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith(".jsx")) generate(full);
  });
}

walk(baseDir);
console.log("✅ RAFCE generated safely");
