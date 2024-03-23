// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const {resolve} = require("path");
const {rimraf} = require('rimraf');

const iconSourceDir = './assets/icons';
const iconTargetDir = './src/components/images/icons';

const camelize = s => s.replace(/-./g, x => x[1].toUpperCase())
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const filesCleaned = fs.readdirSync(iconSourceDir);

const componentTemplate = fs.readFileSync(resolve(__dirname, 'icon-template.txt'), 'utf8');

console.log('Creating icon components');

rimraf(`src/components/images/icons/*.tsx`,{ 'glob': true }).then(() => {
  for (const file of filesCleaned) {
    const svg = fs.readFileSync(`${iconSourceDir}/${file}`)

    const svgTag = '<svg class={\'icon pointer-events-none relative select-none\'} style={{ ...dimensions }}'

    const componentName = `Icon${capitalize(camelize(file.replace('.svg', '')))}`;
    const componentFileName = file.replace('.svg', '.tsx');
    const component = componentTemplate.replace('{{component-name}}', componentName).replace('{{component-svg}}', svg.toString()).replace('<svg', svgTag)

    fs.writeFileSync(`${iconTargetDir}/${componentFileName}`, component, (err) => {
      if (err) throw err;
    });
    console.log(`${iconTargetDir}/${componentFileName}`);
  }
}).catch((err) => {
    console.log(err);
  }
);

