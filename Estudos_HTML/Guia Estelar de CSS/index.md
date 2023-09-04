# Comentários

```css
/*Código comentado*/
```

# Anatomia

```css
h1 {
  color: blue;
  font-size: 60px;
  background: gray;
}
```

- Seletor h1
- Declaração {}
- Propriedade color
- Valor blue

# Seletores

- Global selector `*` pega todos os seletores
- Element/Type selector `h1, h2, p, div`
- ID Selector `#box, #container` modifica somente este seletor
- Class Selector `.red` modifica uma ou mais seletores
- Agrupamento `h1, h2 {}`
- Profundidade `h1 .class {}`

# Adicionando CSS

- inline (adiciona o css direto no seletor do HTML)
- style (adiciona o css direto no HTML porém em uma tag `<style>`)
- link (aponta para um arquivo CSS em outro diretório)
- import (utilizando a regra @import)

# Cascata

- Cascata (estilos lidos de cima para baixo)
- Origem (inline > tag style > tag link)
- Especifidade (alguns seletores em específico tem prioridade calculada, podem não respeitar a cascata)

* 0.  `*, combinators e negation pseudo-class (:not())`
* 1.  `Element type selector e pseudo-elements (::beore, ::after)`
* 10. `Classes e atribute selectors ([type="radio"])`
* 100. `ID selectors`
* 1000.`inline`

`h1 .title #id` = 1 + 10 + 100 = 111 de prioridade

# !important

Regra quebra a cascata

```css
h1 {
  color: blue !important;
} /* regra que prevalece */

h1 {
  color: red;
}
```

# At-rules (@)

Adiciona alguns comportamentos ao CSS

- @import incluir um CSS externo
- @media regras condicionais para dispositivos
- @font-face fontes externas
- @keyframes animações

# Shorthand

Junção de propriedades

```css
font: font-style font-weight font-size line-height font-family;
```

# Funções

Nome seguido de abre e fecha parêntesis

```css
 {
  color: rgb(255, 0, 100);
  width: calc(100% - 10px);
}
```

# Vendor Prefixes

Permite que browsers adicione 'features' novas quando lançadas
Quando algum não suporta a feature ou recurso do CSS, deve-se adicionar o prefixo
Quando a feature é lançada, geralmente é necessário o prefixo para rodá-la

```css
p {
  -webkit-background-clip: text; /* Chrome */
  -moz-background-clp: text; /* Mozilla */
}
```
