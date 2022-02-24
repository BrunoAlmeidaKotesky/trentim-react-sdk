const fs = require('fs');

const isSingleModule = fs.existsSync('./src/index.ts') || fs.existsSync('./src/index.tsx');
const isMultiModule = !isSingleModule;

const tsConfigJson = require('./tsconfig.json');

if (isSingleModule) {
  tsConfigJson.files = [
    fs.existsSync("./src/index.ts") && "./src/index.ts",
    fs.existsSync("./src/index.tsx") && "./src/index.tsx",
  ]
    .filter(Boolean);
}

if (isMultiModule) {
  const getModuleNames =
    root =>
      fs.readdirSync(root, {withFileTypes: true})
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

  const moduleNames = getModuleNames('./src');

  tsConfigJson.files =
    Object.values(moduleNames
    //Create the module types array acessing and files from src that contais index.ts or index.tsx and build it's types
      .reduce((acc, entry) => {
        if (entry === 'components') {
          // //Acess each folder from components and add it's index.ts to acc
          // const subModuleNames = getModuleNames(`./src/${entry}`);
          // subModuleNames.forEach(subModuleName => {
          //   const modulePath = `./src/${entry}/${subModuleName}/index.ts`;
          //   if (fs.existsSync(modulePath)) acc[subModuleName] = modulePath.replace(`/${entry}`, '');
          //   if (fs.existsSync(modulePath + 'x')) acc[subModuleName] = modulePath.replace(`/${entry}`, '') + 'x';
          // });
          const modulePath = `./src/${entry}/index.d.ts`;
          acc[entry] = modulePath
        }
        else {
          const modulePath = `./src/${entry}/index.ts`;
          if (fs.existsSync(modulePath)) acc[entry] = modulePath;
          if (fs.existsSync(modulePath + 'x')) acc[entry] = modulePath + 'x';
        }
        return acc;
      }, {}))
}

fs.writeFileSync('./tsconfig.json', JSON.stringify(tsConfigJson, null, 2));