# Utilizando o prensa

## Compatibilidade

* Versão LTS do NodeJS (16.13.1)
* As seguintes dependências são necessárias:

```bash
# Utilizando NPM
npm install @xprog/prensa-css-engine
npm install lodash
npm install react react-dom
npm install styled-components
npm install -D typescript
```

```bash
# Utilizando YARN
yarn add @xprog/prensa-css-engine
yarn add lodash
yarn add react react-dom
yarn add styled-components
yarn add -D typescript
```

## Instalando o Prensa

* Adicionar o prensa como dependência em um projeto

```bash
# Utilizando NPM
npm install @xprog/prensa
```

```bash
# Utilizando YARN
yarn add @xprog/prensa
```

## Configurando e conectando o tema

* Criar novo arquivo para o theme e especificar as configurações de interface. Veja a API do Theme

```javascript
// styles/theme/index.ts
import CreateTheme from '@xprog/prensa/styles/theme'

export const theme = CreateTheme({...})
```


* Criar um StylesProvider e conectá-lo com o theme

```javascript
// providers/StylesProvider/index.ts
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
import { StylesProviderProps } from './props

export const StylesProvider = props => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
```


* Utilizar o StylesProvider em um arquivo high order component (HOC), como App.tsx

```javascript
// App.tsx
import { StylesProvider } from './providers/StylesProvider'

export const App = props => {
  return (
    <StylesProvider>
      {...}
    </StylesProvider>
  )
}
```


