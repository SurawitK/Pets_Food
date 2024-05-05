import fs from "fs"; //(this is for typescript change .ts , .tsx to .js .jsx for javascript)

const componentName = `${process.argv[2]}`;
const componentDirectory = `./src/components/${componentName}`;
const componentFiles = [
  {
    name: `${componentName}.jsx`,
    content: `import React from 'react';\nimport styles from './${process.argv[2]}.module.css';\n
function ${process.argv[2]}() {\n\treturn <div>${process.argv[2]}</div>;\n}\n\nexport default ${process.argv[2]};
`,
  },
  { name: `${componentName}.module.css`, content: "" },
  {
    name: `index.jsx`,
    content: `export { default } from './${componentName}';`,
  },
];

if (!fs.existsSync(componentDirectory)) {
  fs.mkdirSync(componentDirectory);
}

for (const file of componentFiles) {
  const filePath = `${componentDirectory}/${file.name}`;
  fs.writeFileSync(filePath, file.content);
}
