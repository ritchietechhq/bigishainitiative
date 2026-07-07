import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import ImpactPage from "./pages/ImpactPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import LegalPages from "./pages/LegalPages";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={HomePage} />
      <Route path={"/about"} component={AboutPage} />
      <Route path={"/programs"} component={ProgramsPage} />
      <Route path={"/get-involved"} component={GetInvolvedPage} />
      <Route path={"/impact"} component={ImpactPage} />
      <Route path={"/blog"} component={BlogPage} />
      <Route path={"/blog/:slug"} component={BlogPage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/donate"} component={DonatePage} />
      <Route path={"/privacy"} component={() => <LegalPages type="privacy" />} />
      <Route path={"/terms"} component={() => <LegalPages type="terms" />} />
      <Route path={"/donation-policy"} component={() => <LegalPages type="donation-policy" />} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
