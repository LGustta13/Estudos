# Cores

Tipos:

- background-color (caixas)
- color (textos)
- border-color (caixas)

# Valores

palavra-chave (blue), hexadecimal (#), funções (rgb, hsl, rgba)
color: rgb(255, 0, 0, 0.6 ou 60% - transparência)
color: hsl(180, 100%, 50%, 60% - transparência)

color: inherit (significa que o elemento atual herda o valor do elemento anterior)
color: initial (volta a sua cor original, prioridade em relação ao contexto que se encontra)
color: unset (pega a cor do contexto em que se encontra)

# Background

Atua na caixa toda e transparente por padrão
background-color: red
backgrond-image: url(hhtps://...)
background-repeat: no-repeat, repeat-y (repetir a imagem no preenchimento)
background-position: right top (horizontal vertical)
background-size: contain (prioriza o tamanho da imagem), cover (prioriza o tamanho do bg), 50% 50% (horizontal vertical)
background-origin: (onde começa) border-box (começa na borda), content-box, padding-box
background-clip: (tamanho do bg) border-box (começa na borda), content-box, padding-box
background-attachmment: scroll, fixed (fixa a imagem no fundo da tela com elemtos na frente)
background: linear-gradient(180deg, red,yellow, green) (aplica um gradiente)
