# Como iniciar um projeto com Next e styledcomponents

## Não se esqueça de criar o arquivo \_document.tsx necessário para usar styled-components com SSR com Next.js

## Necessario instalar o plugin 'babel-plugin-styled-components' pois o styled components cria 'on the fly' o nome da classe do css, e muda no server e no client. Para não dar conflito, é necessario essa biblioteca e o arquivo .babelrc com a configuração que está dentro dele.

---

## Também é necessário, para o styled components quando for usar THEMES, redeclarar o módulo styled-components sobrescrevendo a interface DefaultTheme para não termos erros de typescript dentro do styled-components.

---

## Adicionar as importações das fontes no arquivo styles/globals.css para não termos problemas na hora de colocar em produção, pois ainda não é suportado @import dentro do createGlobalStyles do styled-components

---

## Adicionar o ThemeProvider como wrapper no arquivo \_app.tsx e adicionar o globalStyles do styledComponents dentro do wrapper do ThemeProvider
