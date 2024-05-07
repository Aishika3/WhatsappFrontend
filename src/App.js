import Home from "pages/Home/Home";
import SignIn from "pages/SignIn/Login";
import Form from "pages/Form/Form";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "pages/Error404";
import { useThemeContext } from "providers";
import { PreviewModal } from "components";
import { usePreviewContext } from "providers";

function App() {
  const { theme } = useThemeContext();
  const { closePreview, currentPreviewData, isPreviewOpen } =
    usePreviewContext();
  return (
    <>
      {isPreviewOpen && (
        <PreviewModal data={currentPreviewData} onClose={closePreview} />
      )}
      <div
        className="App min-h-screen pt-10"
        style={{ backgroundColor: theme.backgroundColor.dark}}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/fillform" element={<Form />} />
            <Route path="/services" />
            <Route path="/products" />
            <Route path="/sign-up" />
            <Route path="*" exact={true} element={<Error404 />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
