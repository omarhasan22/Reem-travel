import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Get base path from Vite's import.meta.env
const basePath = import.meta.env.BASE_URL || '/';

function Router() {
  const [location] = useLocation();
  
  // Normalize location by removing base path for routing
  // If basePath is '/Reem-travel/', remove it from the location
  const normalizedLocation = basePath !== '/' && location.startsWith(basePath)
    ? location.slice(basePath.length - 1) || '/'
    : location;
  
  return (
    <Switch location={normalizedLocation}>
      <Route path="/" component={Home}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const { dir } = useLanguage();
  
  return (
    <div dir={dir} className={dir === 'rtl' ? 'text-right' : 'text-left'}>
      <Toaster />
      <Router />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
