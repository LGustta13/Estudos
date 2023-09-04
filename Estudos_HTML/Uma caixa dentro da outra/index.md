# Box model

É uma caixa retangular: width, heigth, content, border, padding, margin

# box-sizing: content-box e border-box

Comportamento interno das caixas

O tamanho da caixa é calculado por meio do padrão content-box ou border-box
content-box: Acumula valores do conteúdo (width, heigth) e padding
border-box: O tamanho da caixa está relacionado com o conteúdo (width, heigth)

# display: block e inline

Comportamento externo das caixas

block:

- Ocupa toda a linha, colocando o próximo elemento abaixo desse
- width e height são respeitados
- padding, margin, border irão funcionar normalmente
- Exemplos: p, div, section, h1, h2, h3, ...

inline:

- Elemento ao lado do outro
- width e height não funcionam (somente o tamanho do conteúdo é respeitado)
- Somente valores horizontais de margin, padding e border
- Exemplos: a, strong, span, em

# margin

margin collapsing: acontece com elementos block, onde:

```css
div {
  margin-bottom: 8px;
}

section {
  margin-top: 8px;
}
```

no total a margem entre eles será de exatamente 8px

margin: auto, divide igualmente as margens laterais, centralizando o elemento

# padding

Não tem o valor auto, cuidado com o box-sizing (modifica o width do elemento)

# border e outline

- value:
  <border-style> solid, dotted, dashed, double, groove, ridge, inset, outset, none
  <border-width> 2px
  <border-color> blue

border-top: aplica no topo do elemento (10px solid green)
border: aplica em todo o elemento (10px solid red)

outline: aplica-se em volta da margem, não modifica o tamanho da caixa do elemento e não faz parte do Box Model
(visível quando damos inspecionar no elemento - só aparece margem e padding)
