import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Desktop from "./pages/Desktop";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Sonner />
    <Routes>
      <Route path="/" element={<Desktop />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
