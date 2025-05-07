import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const componentName = process.argv[2];

if (!componentName) {
	console.error(
		"❌ Please provide a component name: yarn generate ComponentName"
	);
	process.exit(1);
}
const baseDir = join('src', 'stories', componentName.toLowerCase());
// 🚨 Check if component folder already exists
if (existsSync(baseDir)) {
	console.error(
		`⚠️ Component folder "${componentName}" already exists at ${baseDir}`
	);
	process.exit(1);
}
mkdirSync(baseDir, { recursive: true });


// Lowercase CSS file
const cssFile = join(baseDir, `${componentName.toLowerCase()}.css`);

// Capitalized TSX component
const componentFile = join(baseDir, `${componentName}.tsx`);

// Capitalized Stories file
const storyFile = join(baseDir, `${componentName}.stories.tsx`);

writeFileSync(
	cssFile,
	`.${componentName.toLowerCase()} {\n  /* styles */\n}\n`
);
writeFileSync(
	componentFile,
	`import './${componentName}.css';\n\nexport const ${componentName} = () => {\n  return <div className="${componentName}">${componentName}</div>;\n};\n`
);
writeFileSync(
	storyFile,
	`import type { Meta, StoryObj } from '@storybook/react';\nimport { ${componentName} } from './${componentName}';\n\nconst meta: Meta<typeof ${componentName}> = {\n  component: ${componentName},\n  title: 'Components/${componentName}',\n};\n\nexport default meta;\ntype Story = StoryObj<typeof ${componentName}>;\n\nexport const Default: Story = {};\n`
);
