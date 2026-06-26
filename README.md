# 🚀 Premium Developer Portfolio — Lucas Orse

Um portfólio de alta performance desenvolvido com foco em design minimalista, interações fluidas e apresentação de impacto para projetos de engenharia de software, arquitetura de sistemas e automações industriais.

O projeto utiliza uma experiência visual inspirada nos designs da **Linear** e da **Apple**, destacando uma esteira de projetos com rolagem horizontal atrelada ao scroll vertical nativo da página.

---

## 🛠️ Tecnologias Utilizadas

* **Framework:** [Next.js](https://nextjs.org/) (App Router & React Server Components)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita para maior resiliência)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (Design system baseado em tokens de cores escuras)
* **Animações:** [Framer Motion](https://www.framer.com/motion/) (Fórmula matemática para scroll horizontal reativo via `useTransform`)
* **Ícones:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

---

## ✨ Recursos de Destaque

* **Esteira Dinâmica de Projetos:** Transição horizontal controlada dinamicamente com base no progresso do scroll do usuário (`scrollYProgress`), adaptando-se automaticamente a qualquer quantidade de projetos sem quebrar o layout.
* **Responsividade Fluida:** O cálculo de deslocamento em pixels (`scrollWidth`) é recalculado em tempo real caso o usuário redimensione a janela (`resize listener`).
* **Interface Ultramoderna:** UI focada em acessibilidade, alto contraste no tema escuro, tipografia refinada e estados de `hover` fluidos.
* **Arquitetura Baseada em Dados:** Adicionar ou remover projetos requer apenas a modificação de um arquivo de configuração estruturado (`projects.ts`).

---

## 📂 Estrutura do Projeto

```text
├── public/                 # Imagens, assets e mockups dos sistemas
├── src/
│   ├── app/                # Estrutura de rotas (Next.js App Router)
│   ├── components/         # Componentes isolados e reativos (Projects, Hero, etc)
│   └── data/
│       └── projects.ts     # O motor de dados dos projetos (TypeScript Interface)

```

---

## 🚀 Como Executar o Projeto Localmente

### 1. Clonar o repositório

```bash
git clone [https://github.com/LucasaaOrse/portfolio.git](https://github.com/LucasaaOrse/portfolio.git)
cd portfolio

```

### 2. Instalar as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install

```

### 3. Rodar o servidor de desenvolvimento

```bash
npm run dev

```

Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para ver o resultado.

---

## ⚙️ Como Atualizar Seus Projetos

Para alterar, adicionar ou remover novos sistemas da esteira de rolagem, basta abrir o arquivo `src/data/projects.ts` e modificar a constante `projects`. O layout se encarrega de recalcular o tamanho da pista horizontal automaticamente.

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

```

---

## 👨‍💻 Desenvolvido por

* **Lucas Orse** - [GitHub](https://github.com/LucasaaOrse) — Desenvolvedor Full-Stack focado em automações, microsserviços e interfaces de alta performance.

```