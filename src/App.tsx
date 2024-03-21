import {
  Routes,
  Route,
} from "react-router-dom";
import TemplateSignUp from "./pages/TemplateSignUp";

function App() {

  return (
    <Routes>
      <Route path="/" element={<TemplateSignUp />} />
    </Routes>
  );
}
export default App;
