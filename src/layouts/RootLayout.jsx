import { Outlet, NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <div className="header__container">
        
      <header>
        <nav>
          <h3 className="website__logo">CareerConnect</h3>
          <NavLink to="/" className='nav__button'>Home</NavLink>
          <NavLink to="about" className='nav__button'>About</NavLink>
          <NavLink to="help" className='nav__button'>Help</NavLink>
          <NavLink to="blogs" className='nav__button'>Jobs</NavLink>   
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