// import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Autocomplete } from "./components/autocomplete/Autocomplete";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { Modal } from "./components/modal/Modal";
import { Select } from "./components/select/Select";
import { Route } from "./components/route/Route";
import React, { Dispatch, SetStateAction } from "react";
import { Header } from "./components/header/Header";

interface IMenuContext {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
}

export const Context = React.createContext<IMenuContext>({ url: '', setUrl: () => {} });

function App() {

  const [url, setUrl] = React.useState('/');

  return (
    <div>
      <h1>Moonlight Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Input />} />
          <Route path="select" element={<Select />} />
          <Route path="button" element={<Button />} />
          <Route path="autocomplete" element={<Autocomplete />} />
          <Route path="modal" element={<Modal />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> */}
      <Context.Provider
        value={{
          url,
          setUrl,
        }}
      >
        <div>
        <Header/>
        <Route path="/select"><Select /></Route>
        <Route path="/button"><Button /></Route>
        <Route path="/autocomplete"><Autocomplete /></Route>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
