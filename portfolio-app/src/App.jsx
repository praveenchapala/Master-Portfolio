import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "./components/common/Loader";

import Home from "./pages/Home";
import WorkWithMe from "./pages/WorkWithMe";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/work-with-me"
          element={<WorkWithMe />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;