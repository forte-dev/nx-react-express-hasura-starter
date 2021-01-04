# Forte.dev
Full-stack baseline for rapid development

## Synopsis
Full-stack react-express-hasura app utilizing [NX](https://nx.dev/) development environment

## Motivation
To provide a secure by design, well architected and structured baseline for startups & dev studios 

## Project Layout
```
.
├── /.vscode/
├── /apps/
│   ├── /api/                 # Express Backend
│   ├── /client/              # React Frontend
│   └── /client-e2e           # Cypress e2e
│
├── /libs/
│   └── /api-interfaces/      # Project's API TS Interfaces
│
├── /node_modules             # Dependancies source
│
├── /tools/                   # NX utilities
│   ├── /generators/
│   └── /tsconfig.tools.json
│
├── .editorconfig
├── .eslintrc.json
├── .gitignore                # Version control omission file
├── .nvmrc                    # Node Version Manager file
├── .prettierignore
├── .prettierrc
├── babel.config.json
├── jest.config.js
├── jest.preset.js
├── LICENSE
├── nx.json                   # NX configuration
├── nxREADME.md               # NX generated README.md
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.base.json        # Main TS configuration
└── workspace.json            # NX project workspace configuration
```

## Clone
```
git clone https://github.com/forte-dev/nx-react-express-hasura-starter.git
```

## Install
```
cd nx-react-express-hasura-starter
npm install
```

## Initialize
```
npm run init
```

## Build Hasura
```
npm run db:build
```

## Run client & server
```
npm run dev
```

## Access Hasura
```
npm run db:console
```

## Contact
#### Bartek Kus
* Homepage: http://bartekus.com
* E-mail: bartekus@gmail.com
* Twitter: [@Bartekus](https://twitter.com/Bartekus "Bartekus on twitter")

## License
Copyright (c) 2021 [Forte Dev Ltd.](https://forte.dev)

Licensed under the MIT license
