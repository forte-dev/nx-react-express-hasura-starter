# IDE

> Integrated Development Environment

## FAQ

> For Webstorm

Q: [WEB-44482](https://youtrack.jetbrains.com/issue/WEB-44482) - Typescript: Use relative paths in import when import from within path-mapping directory.
Typescript has a feature called Path Mapping. https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping

I can create a feature module inside project with path mapping to it like

         "@my-feature/*": [
           "src/features/my-feature/*"
         ],

Then in the project I'll import source files from my-feature module like `import something from '@my-feature/something';

However, when using an "Add import" intention in any file inside "src/features/my-feature" I want a relative import, so that inside the root directory of my feature module no path mapping to itself is used.

A: In Settings | Editor | Code Style | TypeScript, Imports, try changing Use path mappings from tsconfig.json to Only files outside specified paths.
