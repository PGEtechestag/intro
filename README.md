# 🚀 Repositório de Introdução ao GitHub e Next.js

Este projeto foi inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) utilizando [Next.js](https://nextjs.org). 


---

## 📌 Links Rápidos

- [⚡ Comandos Básicos do Git](#-comandos-básicos-do-git)
- [🔄 Sincronização Local e Resolução de Divergências](#-sincronização-local-e-resolução-de-divergências)
- [🛠️ Como Iniciar o Projeto](#️-como-iniciar-o-projeto)
- [📚 Aprendendo Mais](#-aprendendo-mais)

---

<a id="-comandos-básicos-do-git"></a>
## ⚡ Comandos Básicos do Git

Comandos essenciais para o dia a dia no fluxo de trabalho com Git e GitHub:

| Ação | Comando |
| :--- | :--- |
| **Clonar repositório** | `git clone <URL_DO_REPOSITORIO>` |
| **Verificar status** | `git status` |
| **Criar / Trocar de branch** | `git checkout -b <nome-da-branch>` |
| **Adicionar alterações** | `git add .` *(ou `git add <nome-do-arquivo>`)* |
| **Criar commit** | `git commit -m "Sua mensagem aqui"` |
| **Baixar atualizações** | `git pull origin <nome-da-branch>` |
| **Enviar alterações** | `git push origin <nome-da-branch>` |
| **Ver histórico** | `git log --oneline` |

---

<a id="-sincronização-local-e-resolução-de-divergências"></a>
## 🔄 Sincronização Local e Resolução de Divergências

Quando você cria commits locais, mas a branch remota recebe atualizações de outros desenvolvedores, o `HEAD` do seu repositório local fica atrasado em relação ao servidor.

### Por que usar `git pull --rebase`?

O uso de `git stash` não é necessário para alterações que já foram consolidadas em um commit local. Para manter um histórico limpo e sem a criação de commits automáticos de merge (por exemplo, `Merge branch 'main' of...`), utilize o **rebase**:

1. **Atualizar o repositório aplicando suas alterações no topo do histórico:**
   ```bash
   git pull --rebase origin main
   ```
   > *Isso baixa os novos commits do servidor, aplica-os primeiro e insere o seu commit local no topo.*

2. **Em caso de conflitos durante o rebase:**
   - Abra os arquivos indicados e resolva os conflitos manualmente.
   - Adicione as alterações resolvidas à staging area:
     ```bash
     git add .
     ```
   - Continue o processo de rebase (sem criar um novo commit):
     ```bash
     git rebase --continue
     ```
   *(Caso queira cancelar a operação de rebase a qualquer momento, use `git rebase --abort`).*

3. **Enviar suas alterações organizadas para o servidor:**
   ```bash
   git push origin main
   ```

---

<a id="️-como-iniciar-o-projeto"></a>
## 🛠️ Como Iniciar o Projeto

Para executar o servidor de desenvolvimento localmente, rode um dos seguintes comandos:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

<a id="-aprendendo-mais"></a>
## 📚 Aprendendo Mais

Para saber mais sobre o Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - Aprenda sobre os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - Um tutorial interativo sobre Next.js.
- [Repositório do Next.js no GitHub](https://github.com/vercel/next.js) - Feedbacks e contribuições são muito bem-vindos!
README.md
Exibindo README.md.