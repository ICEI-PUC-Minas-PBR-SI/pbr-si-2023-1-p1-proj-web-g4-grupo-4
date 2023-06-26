# Plano de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
# Registro de Testes de Software

|Teste    | Condição | Resultado Esperado | Resultado Obtido |
|------|-----------------------------------------|----| ----|
|Botão de categorias| Clicar no botão de Categorias. | Tela rolar até onde se encontram todas as categorias de ONGs. | Tela rolar até onde se encontram todas as categorias de ONGs. |
|Cadastro| Entrada do cadastro: Nome da Empresa: Lume; Email: lume@lume.com.br; senha: Lume123. | Mensagem : Bem vindo lume@lume.com.br! | Mensagem : Bem vindo lume@lume.com.br! |
|Cadastro com empresa já cadastrada| Entrada do cadastro: Nome da Empresa: Lume; Email: lume@lume.com.br; senha: Lume123. | Mensagem: Usuário já cadastrada, por favor tente outro email | Mensagem: Usuário já cadastrada, por favor tente outro email |
|Login| Entrada do Login: Email: lume@lume.com.br; senha: Lume123. | Mensagem : Bem vindo lume@lume.com.br! | Mensagem : Bem vindo lume@lume.com.br! |
|Login com dados invalidos| Entrada do Login: Email: lume@lume.com.br; senha: 123456. | Mensagem: Usuário ou senha inválidos. | Mensagem: Usuário ou senha inválidos. |
|Tela Contato| Entrada: Nome: Lume;  Email: lume@lume.com.br; Mensagem: Teste. | Mensagem: Formulário enviado com sucesso! | Mensagem: Formulário enviado com sucesso! |
|Filtro Tela de Categoria| Checkbox marcada: "Dinheiro". | Ongs que se adequam ao filtro são exibidas primeiro. | Ongs que se adequam ao filtro são exibidas primeiro. |

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
