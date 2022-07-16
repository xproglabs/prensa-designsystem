# Construindo o Prensa

## **Uma biblioteca utilizando outras bibliotecas**

O Prensa se alimenta de diversas bibliotecas que auxiliam a execução de alguns fluxos essenciais durante a construção do nosso código.

* **ReactJS** 

  É o framework base para a montagem dos componentes. Todos importam o React e seguem a sintaxe padrão dos componentes React.

  \
* **Styled-components**

  É responsável pela estilização dos componentes. Automatiza os classNames e executa a conexão com APIs de estilo, processando o CSS final.

  \
* **Rollup**

  Utilizado para compilar os componentes, representados por diretórios e arquivos `.js|.jsx` ou `.ts|.tsx`, em bundles javascript. Um bundle javascript corresponde a um arquivo `.js` contendo o compilado de código do componente em questão, pronto para ser distribuído.

  \
* **Typescript**

  Utilizado para a montagem das declarações dos componentes. Também utilizado para validação de código em runtime, prevendo exceptions e realizando a validação das declarações.


## **Construindo um componente**

Cada componente é compostos por três (3) camadas:

* Camada HTML
* Camada React
* Camada de estilos