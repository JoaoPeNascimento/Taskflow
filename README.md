# Taskflow

O Taskflow é uma aplicação web de gestão de tarefas (To-Do List) desenvolvida com Angular. O projeto permite criar, visualizar, concluir e eliminar tarefas, persistindo os dados localmente no navegador do utilizador.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

- Angular 20: Framework principal para o desenvolvimento da interface.
- Angular Material: Componentes de UI modernos e responsivos.
- TypeScript: Linguagem base do projeto.
- RxJS: Biblioteca para programação reativa.
- LocalStorage: Utilizado para persistência de dados no navegador.


## ⚙️ Funcionalidades

- Gestão de Tarefas:
  - Adicionar: Criar novas tarefas com título e descrição.
  - Listar: Visualizar todas as tarefas criadas.
  - Concluir: Marcar/desmarcar tarefas como concluídas (toggle).
  - Eliminar: Remover tarefas da lista.
- Persistência de Dados: As tarefas são guardadas no localStorage do browser, garantindo que não se perdem ao atualizar a página.

## 🚀 Como Executar

Este projeto foi gerado com Angular CLI. Para o executar localmente, segue os passos abaixo:

**Pré-requisitos** 
- Node.js instalado.
- Angular CLI instalado globalmente (npm install -g @angular/cli).

**Instalação**
1. Clona o repositório.

2. Instala as dependências do projeto:
```bash
npm install
```
**Servidor de Desenvolvimento** \
Executa o comando para iniciar o servidor local:
```bash
ng serve
```
Acesse `http://localhost:4200/` no teu navegador. A aplicação recarrega automaticamente se alterares algum ficheiro de código.

## 📂 Estrutura do Projeto
A lógica principal da aplicação encontra-se dividida nos seguintes componentes e serviços:
| Componente/Serviço | Função |
| :--- | :--- |
| **TaskService** | Gere a lógica de negócio e a comunicação com o `localStorage` (CRUD de tarefas). |
| **TaskList** | Componente principal que apresenta a lista de tarefas e orquestra as ações. |
| **TaskItem** | Componente responsável por apresentar uma tarefa individual (importado na lista). |
| **TaskForm** | Componente de formulário para criação de novas tarefas. |

## 📦 Build e Testes

- **Build de Produção**: Para gerar os ficheiros otimizados para produção na pasta dist/:
```bash
ng build
```

- **Testes Unitários**: Para executar os testes via Karma:
```bash
ng test
```
