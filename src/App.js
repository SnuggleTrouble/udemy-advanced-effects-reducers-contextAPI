import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

// Rules of Hooks
// Only call react Hooks in React Functions
// That means inside of React Component Functions or inside Custom Hooks.
// Only call React Hooks at the TOP LEVEL.
// Don't call them in nested functions.
// Don't call them in any block statements.
// An extra unofficial Rule for useEffect(): ALWAYS add everything
// you refer to inside of useEffect() as a dependency!
// UNLESS you have a good reason not to do that.

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
