import React from 'react'
import tgLogo from "../../img/TG-Logo.webp"
import vkLogo from "../../img/VK-Logo.webp"
import ghLogo from "../../img/GH-Logo.webp"
export const HomeContacts = () => (
<main className="home__contacts">
    <div className="container _home">
        <ul className="home__contacts-links">
            <li className="home__contacts-item">
                <a rel="noreferrer"
                target="_blank" 
                href="https://t.me/Arlivs">
                <img src={tgLogo} alt="Telegram Logo" className="home__contacts-img"/>
                    Telegram
                </a>
            </li>
            <li className="home__contacts-item">
                <a rel="noreferrer"
                target="_blank"
                href="https://vk.com/arlivs">
                <img src={vkLogo} alt="Vk Logo" className="home__contacts-img"/>
                    VK
                </a>
            </li>
            <li className="home__contacts-item">
                <a rel="noreferrer"
                target="_blank"
                href="https://github.com/Arlivs">
                <img src={ghLogo} alt="Github Logo" className="home__contacts-img"/>
                    GitHub
                </a>
            </li>
        </ul>
        <div className="home__contacts-text">
            By these links you can contact me and find out something
        </div>
    </div>
</main>
)