import { NavLink, Outlet } from "react-router-dom";

function Layout () {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="layout-nav">
                        <NavLink className="exile" to='/'>Home</NavLink>
                        <NavLink className="exile" to='/blog'>Blog</NavLink>
                        <NavLink className="exile" to='/about'>About me</NavLink>
                        <NavLink className="exile" to='/create'>Add a new recipe</NavLink>
                        <NavLink className="exile" to='/notes'>Kuzya`s notes</NavLink>
                        <NavLink className="exile" to='/onlineposts'>Online posts</NavLink>
                    </nav>
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                <div className="container">
                    <h2 className="footer-text">Get in touch with me on other platforms</h2>
                    <div className="footer-context">
                        <img className="message-me" src="/images/in.svg"/>
                        <img className="message-me" src="/images/cat.svg"/>
                        <img className="message-me" src="/images/stick.svg"/>
                        <img className="message-me" src="/images/m.svg"/>
                        <img className="message-me" src="/images/youtube.svg"/>
                        <img className="message-me" src="/images/twitter.svg"/>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;