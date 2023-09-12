import { Outlet, NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <div className="header__container">
        
      <header>
        <nav>
          <h1>CareerConnect</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="blogs">Jobs</NavLink>   
        </nav>
      </header>

      </div>
   
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout