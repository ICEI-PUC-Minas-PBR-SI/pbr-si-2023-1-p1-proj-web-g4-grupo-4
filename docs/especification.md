# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação permitirá a criação de usário. | ALTA |  |
|RF-002| Permitir o cadastro de instituições e ONG's| ALTA | |
|RF-003| Aba com apresentação do projeto | ALTA | |
|RF-004| Divisão de abas por tipo de associação | MÉDIA | |
|RF-005| O usuário poderá avaliar sua experiência dentro da aplicação| MÉDIA | |
|RF-006| Envio de confirmação de email | BAIXA | |
|RF-007| Aba para buscas de organizações | BAIXA | |


### Requisitos não Funcionais

|ID     | Requisito | Descrição do Requisito  |Prioridade |
|-------|----|-------------------------|----|
|RNF-001| Desempenho do sistema: | Será capaz de processar vários acessos simuntaneos tendo um tempo bom tempo de resposta. | ALTA |  
|RNF-002| Segurança: | Terá todo acesso dos usuários confidencial que poderá identificar e bloquear usuarios com falsas intenções. |  ALTA | 
|RNF-003| Confiabilidade: | Empresas que tenham como objetivo obter lucro ao inves de ajudar os necessitados não irão ser divulgadas. | ALTA |
|RNF-004| Manutenção: | Durante atualizações o sistema vai manter seu funcionamento, atualizações serão feitas sem desastabilizar o funcionamento. | ALTA |
|RNF-005| Requisitos éticos: | Apresenta instituições que que estão precisando de divulgação, sem expor condições reais de pessoas fisicas que estão em situação precaria. | ALTA |
|RNF-006| Portabilidade: | O sistema irá ser responsivo podendo ser utilizado em qualquer dispositivo. | ALTA |
|RNF-007| Confiabilidade de dados: | Para qualquer perda de informação o sistema o sistema terá a capacidade de recuperar seus dados. | ALTA |
|RNF-008| Usabilidade: | Vai contar com um sistema interativo para utilização, sem ser necessário treinamento ou tempo de experiência. | BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrições                                                               |
|--|--------------------------------------------------------------------------|
|01| Não pode ser menor de 18 anos.                                           |
|02| Somente instituições de Belo Horizonte e região.                         |
|03| O doador deve possuir uma renda mensal superior a dois salários mínimos. |
|04| Os utensílios doados devem estar em boas condições.                      |
|05| O doador deve ter disponibilidade de se locomover até a instituição.     |
|06| As instituições devem apresentar restrições para controle de qualidade.  |


> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
