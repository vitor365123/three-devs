# Three Devs - Site Oficial

Site profissional para a agência Three Devs, especializada em desenvolvimento full stack de alta performance.

## 🎨 Design System

**Neomorfismo Tecnológico com Minimalismo Funcional**

### Cores
- **Primária**: `#CCFF00` (Amarelo-limão vibrante) - Ação e destaque
- **Accent**: `#00D9FF` (Ciano brilhante) - Complemento
- **Fundo**: `#0D0D0D` (Preto quase puro) - Sofisticação
- **Surface**: `#1F1F1F` (Cinza escuro) - Elementos
- **Border**: `#333333` (Cinza médio) - Divisões

### Tipografia
- **Display**: Outfit (bold, italic) - Títulos e headings
- **Body**: Inter (regular, 400-600) - Parágrafos
- **Mono**: Space Grotesk - Código e labels técnicos

### Componentes
- **Glass Morphism**: Efeito de vidro fosco com blur
- **Glow Effects**: Sombras brilhantes nas cores primária e accent
- **Grid Pattern**: Padrão de grid sutil no fundo
- **Marquee**: Carousel infinito com pausa ao hover

## 📁 Estrutura do Projeto

```
client/
  public/
    ├── logo.png          # Logo oficial
    ├── robots.txt        # SEO
    └── sitemap.xml       # SEO
  src/
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── SectionHeading.tsx
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── Projects.tsx
    │       ├── Skills.tsx
    │       ├── TechStack.tsx
    │       ├── Differentials.tsx
    │       └── Contact.tsx
    ├── pages/
    │   └── Home.tsx
    ├── lib/
    │   ├── constants.ts
    │   └── seo.ts
    ├── App.tsx
    ├── index.css
    └── main.tsx
  index.html
  package.json
```

## 🚀 Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Vite** - Build tool

## 🛠️ Desenvolvimento

### Instalar dependências
```bash
pnpm install
```

### Iniciar servidor de desenvolvimento
```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para produção
```bash
pnpm build
```

### Preview da build
```bash
pnpm preview
```

## 📋 Seções

### 1. **Hero**
- Terminal animado com efeito de digitação
- Grid pattern de fundo
- CTA com status "Disponíveis para novos projetos"
- Responsivo: terminal ao lado em desktop, abaixo em mobile

### 2. **Projects**
- 4 cards de projetos com glass effect
- Tecnologias utilizadas em cada projeto
- Links para ver mais detalhes
- Animações ao scroll

### 3. **Skills**
- 3 categorias: Frontend, Backend, DevOps & Cloud
- Ícones com pulsação
- Animações escalonadas

### 4. **TechStack**
- Carousel infinito com logos de tecnologias
- Pausa ao hover
- Glass effect nos cards

### 5. **Differentials**
- 3 pilares da empresa com ícones
- Descrições detalhadas
- Features tags com pulsação
- Hover effects com glow

### 6. **Contact**
- CTA do WhatsApp
- Processo de trabalho em 3 etapas
- Informações de localização

### 7. **Footer**
- Tagline da empresa
- Copyright e créditos

## 🎯 Otimizações

### Performance
- Code splitting automático com Vite
- Lazy loading de imagens
- Minificação de CSS e JS
- Gzip compression

### SEO
- Meta tags semânticas
- Open Graph para redes sociais
- Twitter Cards
- Structured data (Schema.org)
- robots.txt e sitemap.xml
- Títulos e descrições otimizadas

### Acessibilidade
- Focus rings visíveis
- Contraste adequado
- Navegação por teclado
- Atributos alt em imagens

## 📱 Responsividade

- **Mobile**: 320px+
- **Tablet**: 640px+ (sm)
- **Desktop**: 768px+ (md) e 1024px+ (lg)

## 🔗 Links Importantes

- **WhatsApp**: https://wa.me/5585991082608
- **Localização**: Fortaleza, CE - Brasil
- **Disponibilidade**: Global

## 📝 Notas de Desenvolvimento

- Todos os componentes usam Framer Motion para animações
- As cores são definidas em CSS variables em `index.css`
- Constantes compartilhadas em `lib/constants.ts`
- Componentes são modularizados para reutilização
- Design system documentado em `ideas.md`

## 🚀 Deploy

O projeto está pronto para ser deployado em qualquer plataforma que suporte Node.js (Vercel, Netlify, Railway, etc.).

### Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para o funcionamento básico do site.

## 📄 Licença

© 2026 Three Devs. Todos os direitos reservados.
