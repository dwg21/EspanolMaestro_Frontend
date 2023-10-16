import { BrowserRouter, Route, Routes } from "react-router-dom";

//Component imports
import { Footer, Navbar } from "./components/index";

//page imports
import {
  Vocabulary,
  Conjugation,
  Translation,
  Subjunctive,
  Future,
  Past,
  Home,
  Login,
  Reading,
  User,
} from "./Pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/vocabulary" element={<Vocabulary />} />
          <Route exact path="/conjugation" element={<Conjugation />} />
          <Route exact path="/translator" element={<Translation />} />
          <Route exact path="/subjunctive" element={<Subjunctive />} />
          <Route exact path="/future" element={<Future />} />
          <Route exact path="/past" element={<Past />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reading" element={<Reading />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
