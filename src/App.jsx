import CounterContainer from "./components/common/counter/ConterContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;