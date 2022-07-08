# Prensa - Gerador de build 🧱
O processo de build do pacote tem como objetivo produzir um compilável de código distribuível para projetos Javascript.

Esse compilável pode ser distribuído no NPM (Node Package Manager) ou pode ser compartilhado manualmente utilizando um arquivo .tgz.

<br/>

## Quando eu devo operar a build?
A build é operada pelas pipelines do projeto, que rodam de forma automatizada. <br/>
Você deve operar a build nas seguintes situações:
1. Testar o pacote em um contexto externo de forma manual.
2. Preparar um release de produção, de forma manual, em caráter emergencial.
3. Simulação/desenvolvimento na máquina local.

<br/>

## Operadores (bibliotecas)
- **`Rollup`** <br/>
  Responsável por compilar as entidades do pacote (arquivos .js|.jsx|.ts|.tsx) as transformando em arquivos CommonJS (.js) e ECMAScript (.esm).
- **`Typescript`** <br/>
  Responsável por compilar as interfaces e types dos arquivos configurados, exportando arquivos de declaração Typescript (.d.ts) e permitindo que o pacote tenha autosugestão de escrita ao ser utilizado.

<br/>

## Entidades

- **`/dist`** <br/>
  É um diretório oculto, automatizado, onde ficam armazenados os arquivos finais da build. O output é resultado do processo feito pelos operadores. O resultado não deve ser alterado manualmente.
- **`/dist/nomeDoPacote.tgz`** <br/>
  Arquivo .tgz contendo o compilado de código exportado. Pode ser instalado em outros projetos usando os comandos `npm install ./nomeDoPacote.tgz | yarn add ./nomeDoPacote.tgz`
- **`bundle/bundleGenerator.js`** <br/>
  Função responsável por configurar os parâmetros da biblioteca rollup para montagem das bundles Javascript.
- **`bundle/bundleVisualizer.js`** <br/>
  Função responsável por exportar uma visualização do resultado final de build.

<br/>

## Comandos
**```npm run build``` [ Compila entidades ]** <br/>
  > **1.1. ```npm run clear:dist```** <br/>
    Limpa o diretório /dist para evitar conflitos com o novo output <br/>
    **1.2. ```rollup -c```** <br/>
    Executa o rollup, compilando as entidades presentes no arquivo ```rollup.config.js``` <br/>
    **1.3. ```tsc --emitDeclarationOnly```** <br/>
    Executa o Typescript, compilando as delcarações das entidades presentes em ```tsconfig.json```

<br/>
<br/>

**```npm run release:local``` [ Prepara .tgz para distribuição local  ]** <br/>
  > **1.1. ```npm run prerelease:copyfiles```** <br/>
    Copia arquivos importantes para o diretório de output <br/>
    **1.2. ```cd dist```** <br/>
    Acessa diretório de distribuição <br/>
    **1.3. ```npm pack```** <br/>
    Empacota o output em um arquivo .tgz pronto para distribuição


<br/>

## Representação visual

Antes da build:
```
@xprog/prensa
└── Block
    └── index.ts   
    └── component.tsx
    └── props.ts
```
Depois da build (output):
```
@xprog/prensa
└── Block
    └── index.js (+)
    └── index.esm (+)
    └── index.d.ts (+)
    └── component.d.ts (+)
    └── props.d.ts (+)
```