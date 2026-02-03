import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

/**
 * Design System: Editorial Bold (Lando Norris style)
 * 
 * Cores:
 * - Background: Verde oliva escuro (#2A2A1E)
 * - Background Alt: Creme claro (#F5F5E8)
 * - Primary: Amarelo-limão (#CCFF00)
 * - Text: Off-white (#F0F0E0)
 * 
 * Tipografia:
 * - Display: Playfair Display (serif bold italic)
 * - Body: Inter (sans-serif)
 * 
 * Características:
 * - Tipografia gigante ocupando toda a tela
 * - Palavras destacadas em cor primária
 * - Linhas orgânicas no fundo
 * - Layout assimétrico
 * - Muito whitespace
 * - Animações suaves com Framer Motion
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
