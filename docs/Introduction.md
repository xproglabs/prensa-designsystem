# Introdução

## Prensa Design System é uma biblioteca de componentes React para o desenvolvimento escalável de interfaces.


## **O que é uma biblioteca React?**

Uma biblioteca React é um compilado de código instalável em projetos javascript que utilizam o framework ReactJS. O compilável é distribuído para a comunidade utilizando o Node Package Manager (NPM) e tem como objetivo distribuir código que possa ser reutilizado em projetos diferentes.

## **Desenvolvimento escalável**

O Prensa é arquitetado para entregar escalabilidade durante o desenvolvimento de interfaces. As peças são organizadas em **três (3) universos**:

### Primitivos

Um componente primitivo para montagem de blocos estilizados

```javascript
prensa
└── primitives
    └── Block
    └── Typography
```

### Módulos

Um componente que utiliza componentes primitivos e define algumas regras de negócio

```javascript
prensa
└── modules
    └── Article
    └── Topbar
    └── Footer
```

### Templates

Um componente que utiliza componentes primitivos, utiliza módulos e define regras de negócio

```javascript
prensa
└── templates
    └── Grids
```

## **Modelos de pensamento**