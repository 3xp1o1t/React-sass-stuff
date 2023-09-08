import './navbar.scss';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>5</span>
        </div>
        <div className="user">
          <img src="/mx.jpg" alt="" />
          <span>John Doe</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  );
};

export default NavBar;
