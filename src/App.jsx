export default function App(){
  return (
    <>
    <div className="Home-Page">
    <header className="header">
      <div>
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Good Morning</h2>
        <p style={{ margin: 0, opacity: 0.8 }}>Samuel walker !</p>
      </div>
      <div className="header-icons">
        <img src="/images/notification-bell.png" alt="Notification" id="notification" />
        <img src="/images/user.png" alt="user" id="profile"/>
      </div>
    </header>
    <div className="search-bar">
      <input type="text" placeholder="Search"/>
      <button><i className="fa-solid fa-sliders"></i></button>

    </div>
    </div>
    </>
);
}
