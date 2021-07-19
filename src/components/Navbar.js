import React from 'react';

const Navbar = () => {
    return (
        <section className="navbar">
                <section className="navbar__heading">
                    <h3 className="navbar__heading-text">North City Council</h3>
                    <article className="navbar__heading-status">
                        <p>Subscription status:</p>
                        <span>• Valid (Aug 24 2021)</span>
                    </article>
                </section>
    
                <input className="navbar__input" type="text" placeholder="Start typing to search..." />
                <nav className="navbar__navigation">
                    <ul className="navbar__navigation-list">
                        <a href="/"><li><img src="./images/basket.png" alt="" />Orders</li></a>
                        <a href="/"><li><img src="./images/subscription.png" alt="" />Subscription</li></a>
                        <a href="/"><li><img src="./images/member.png" alt=""/>Members</li></a>
                        <a href="/"><li><img src="./images/bookmark.png" alt=""/>Properties</li></a>
                        <a href="/"><li><img src="./images/council.png" alt=""/>Council</li></a>
                        <a href="/"><li><img src="./images/reports.png" alt=""/>Reports</li></a>
                    </ul>
                </nav>
        </section>
    )
}

export default Navbar;
