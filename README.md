# 🖥️ Pix Dashboard - Transporte Escolar

Uma aplicação web em desenvolvimento para gerenciamento de pagamentos PIX no transporte escolar. O projeto começou com HTML, CSS e JavaScript puros e está sendo evoluído para uma versão moderna com React e Tailwind CSS.

---

## 🎯 Propósito

Gerenciar e monitorar os pagamentos PIX realizados por responsáveis de crianças que utilizam transporte escolar. A plataforma oferece cadastro de crianças, registro e filtragem de pagamentos, visualização por status e alternância entre modo claro e escuro, proporcionando organização e clareza para quem administra esse tipo de serviço.

---

## 📁 Estrutura Atual (HTML, CSS, JS)

### 🌐 `index.html`

Estrutura base da aplicação com:

- Título: "Pagamentos PIX"
- Tabela de pagamentos com dados simulados
- Filtros por nome da criança
- Botões para visualizar status (Todos, Pagos, Aguardando)
- Botão para alternar entre modo claro e escuro

### 🎨 `styles.css`

Estilos modernos com:

- Layout centralizado e responsivo
- Cores claras e suaves, com suporte a modo escuro
- Destaque para status de pagamento (Pago / Aguardando)
- Estilização para botões, inputs e tabela

### ⚙️ `script.js`

Funcionalidades implementadas:

- Filtro por nome da criança em tempo real
- Filtro por status com alternância entre abas
- Alternância de tema claro/escuro
- Interação totalmente baseada em DOM puro

---

## 🧪 Exemplo de Código HTML (trecho)

```html
<button id="toggle-dark-mode">Modo Escuro</button>

<input type="text" class="filter-input" placeholder="Filtrar por nome da criança" />

<table>
  <thead>
    <tr>
      <th>Data</th>
      <th>Valor (R$)</th>
      <th>Pagador</th>
      <th>Descrição PIX</th>
      <th>Criança</th>
      <th>Status</th>
    </tr>
  </thead>
</table>
```
🚀 Transição para React + Tailwind CSS
A versão atual é apenas uma amostra inicial. O projeto está sendo reescrito em React com Tailwind CSS, usando gerenciamento de estado com useState e componentes reutilizáveis para:

Cadastro de crianças

Registro e listagem de pagamentos

Geração de relatórios

Estilização condicional e responsiva

Alternância de tema com classes Tailwind

Essa evolução visa deixar a aplicação mais escalável, moderna e fácil de manter, com separação clara entre lógica e apresentação.

📈 Funcionalidades Planejadas com React
📊 Dashboard com abas (Pagamentos, Cadastro, Relatórios)

🧒 Cadastro de crianças com UUID

💸 Registro de pagamentos

🔍 Filtro por nome e status

🌗 Dark mode com Tailwind

📊 Relatórios com exportação para Excel

💾 Persistência de dados futura (via backend)

🛠️ Tecnologias Envolvidas

Camada	Tecnologias
Front-end	HTML, CSS, JS (inicial)
Próxima Etapa	React, Tailwind CSS, UUID
Ambiente	Node.js 18 (futuramente)
🧠 Autor
Leandro Ferraz
Desenvolvedor em constante evolução, apaixonado por projetos com propósito e design limpo.
Esse projeto representa um passo importante na minha transição de aplicações estáticas para soluções modernas e escaláveis com React.
