import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Outlet, Link, HashRouter } from "react-router-dom";
import { Autocomplete } from "./components/autocomplete/Autocomplete";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { Modal } from "./components/modal/Modal";
import { Select } from "./components/select/Select";

function App() {
  return (
    <div>
      <h1>Moonlight Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL 14.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}

      <HashRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Input />} />
          <Route path="call" element={<ChildLayout />}>
            <Route path="select" element={<Select />} />
            <Route path="button" element={<Button />} />
          </Route>
          <Route path="autocomplete" element={<Autocomplete />} />
          <Route path="modal" element={<Modal />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        </Routes>
      </HashRouter>

      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Input />} />
          <Route path="ch" element={<ChildLayout />}>
            <Route path="select" element={<Select />} />
            <Route path="button" element={<Button />} />
          </Route>
          <Route path="autocomplete" element={<Autocomplete />} />
          <Route path="modal" element={<Modal />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> */}
    </div>
  );
}

function ChildLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/call/select">Select</Link>
          </li>
          <li>
            <Link to="/call/button">Button</Link>
          </li>
          <li>
            <Link to="/autocomplete">Autocomplete</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
