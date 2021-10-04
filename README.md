# BERG, BERGE, BERGER, BURGER!

### Por vezes hamburgueria e, outras vezes, montanha 🍔 || ⛰️ 
#### [Berg Burger APP](https://bergburger.herokuapp.com/) - Projeto desenvolvido durante o Bootcamp de Desenvolvimento Front-End da SAP006 <LABORATÓRIA>.

---

### ÍNDICE
1. [Definição do Produto](#scroll-definição-do-produto)
2. [Histórias de Usuários](#books-histórias-de-usuário)
3. [Protótipos](#art-protótipos)
4. [Funcionalidades](#crystal_ball-funcionalidades)
5. [Como Utilizar](#woman_technologist-como-utilizar)
6. [Testes de Usabilidade](#raising_hand_woman-testes-de-usabilidade)
7. [Tecnologias utilizadas](#robot-tecnologias-utilizadas)
8. [Estrutura dos Principais Arquivos](#open_file_folder-estrutura-dos-principais-arquivos)
10. [Sobre a desenvolvedora](#climbing_woman-sobre-a-desenvolvedora)

---

## :scroll: Definição do Produto
<p align='justify'>
O nome Berg une duas grandes paixões da vida: escalada 🧗‍♀️ e a língua neerlandesa 🇳🇱. A palavra Berg em holandês significa montanha e esta, quando soletrada, remete quase que instantaneamente à burger. 
</p>
<p align='justify'>
A Hamburgueria vegetariana Berg, criada em 2021, viu a sua demanda crescer de forma exponencial em poucos meses. As anotações em blocos de papel começaram a dificultar a organização dos funcionários, bem como a dinâmica do restaurante. Neste contexto, surge o desenvolvido com o objetivo de facilitar e padronizar o gerenciamento dos pedidos através da tela de um tablet.
</p>
<p align='justify'>
A primeira Berg Burger APP (BBAPP) está disponível para tablets -- dimensões de 768px ou 1024px -- orientados como retrato ou paisagem, permitindo que o usuário escolha o formato que melhor lhe agrada. No mais, as cores do BBAPP foram selecionadas e aplicadas de forma minuciosa de modo a torná-lo intuitivo e prático.
</p>

No total, 11 telas diferentes compõem o BBAPP e podem ser acessadas conforme o tipo de autenticação de usuárie:
| Tela                       |  Salão | Cozinha | Sem auteticação |
| ---------------------------|:------:|:-------:|:---------------:|
|  Login                     |        |         | X               |
|  Registro                  |        |         | X               |
|  Salão                     | X      |         |                 |
|  Menu                      | X      |         |                 |
|  Novo Pedido               | X      |         |                 |
|  Cozinha                   |        |X        |                 |
|  Pedidos Em Espera         | X      |X        |                 |
|  Pedidos Prontos           | X      |X        |                 |
|  Pedidos Entregues         | X      |X        |                 |
|  Erro 404 (não encontrada) | X      |X        |X                |
|  Erro 401 (não autorizado) | X      |X        |X                |

<p align='justify'>
  As funcionalidades principais do BBAPP envolvem a consulta ao menu personalizado (com preços, ingredientes e suas origens) criação e exclusão de pedidos, visualização do resumo do pedido individual e por mesa, identificçaão de mesas já ocupadas, limpeza de mesas, alteração do status do pedido, filtro de pedidos por status e aquisição de novos pedidos.
</p>

---
## :books: Histórias de Usuário
---
## :art: Protótipos
<p align='justify'>
  As telas do BBAPP seguem o protótipo de alta fidelidade desenvolvido através do Figma. Em se tratando das cores, tons de marrom foram selecionados como base (background e fontes) enquanto que cores simples desempenham função de destaque (status dos pedidos e botões). 
</p>

#### Paleta de cores:
![img]()

#### Protótipo de alta fidelidade:
![img]()
---

## :crystal_ball: Funcionalidades
#### / (login):
 * Entrar com uma conta já existente;
 * Esconder ou mostrar senha;
 * Navegar para a página de registro;
 * Visualizar alerta de erro de autenticação;
 * Ser redirecionado à página principal caso autenticação correta.

#### /register:
 * Criar uma conta;
 * Esconder ou mostrar senha;
 * Navegar para a página de login;
 * Visualizar campos com dados inválidos;
 * Visualizar alerta de erro de autenticação;
 * Ser redirecionado à página principal caso autenticação correta.

#### /room:
 * Visualizar status das mesas (ocupadas ou livres);
 * Visualizar o resumo dos pedidos de cada mesa;
 * Visualizar o valor total (R$) a ser cobrado em cada mesa;
 * Alterar status dos pedidos;
 * Deletar Pedidos;
 * Limpar a mesa (deletar todos os pedidos da mesa);
 * Acessar a página de novo pedido, pedidos em preparo, pedidos prontos e pedidos entregues;

#### /menu:
 * Visualizar itens do cardápio;
 * Filtrar itens de acordo com a categoria;
 * Visualizar informações acerca do produto (ingredientes e respectiva origem);
 * Acessar a página principal, pedidos em preparo, pedidos prontos e pedidos entregues;
---

#### /neworder:
 * Visualizar itens do cardápio;
 * Filtrar itens de acordo com a categoria;
 * Adicionar produto ao resumo do pedido;
 * Aumentar e/ou diminuitr a quantidade de produtos no resumo do pedido;
 * Deletar produtos no reusmo do pedido;
 * Visualizar valor (R$) total do pedido;
 * Enviar para a cozinha;
 * Receber mensagem caso informações inválidas;
 * Receber mensagem de aviso caso mesa ocupada;
 * Inserir novos pedidos em uma mesa já ocupada;
 * Receber mensagem de sucesso caso pedido enviado à cozinha;
 * Voltar para o salão.
 
#### /kitchen:

#### /orders/being-prepared:
* Visualizar pedidos que estão em situação de espera (ordem: pedidos --- mais antigos para mais recentes)
* Carregar novos pedidos em situação de espera;
* Deletar pedidos;
* Apenas funcionários da cozinha podem alterar o status do produto para 'Pronto';
* Acessar a página principal, pedidos prontos e pedidos entregues.

#### /orders/ready:
* Visualizar pedidos que estão em situação pronta (ordem: pedidos --- mais antigos para mais recentes)
* Carregar novos pedidos em situação pronta;
* Deletar pedidos;
* Apenas funcionários do salão podem alterar o status do produto para 'Entregue';
* Acessar a página principal, pedidos em preparo e pedidos entregues.
 
#### /orders/delivered:
* Visualizar pedidos que estão em situação entregue (ordem: pedidos --- mais recentes para mais antigos)
* Carregar novos pedidos em situação de entregue;
* Deletar pedidos;
* Acessar a página principal, pedidos em preparo e pedidos prontos.
 
---
## :woman_technologist: Como Utilizar
---
## :raising_hand_woman: Testes de Usabilidade
---
## :robot: Tecnologias Utilizadas
---
## :open_file_folder: Estrutura dos Principais Arquivos
---
## :climbing_woman: Sobre a Desenvolvedora


