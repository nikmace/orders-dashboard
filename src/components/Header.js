import React from 'react';

const Header = () => {
    return (
        <header className="header">
                <h2 className="header__logo">Remit</h2>
                <article className="header__profile">
                    <img className="header__profile-notifications" src="./images/notifications.svg" alt="Notifications" />
                    <img className="header__profile-image" src="./images/avatar.png" alt="Profile" />
                </article>
        </header>
    )
}

export default Header;
