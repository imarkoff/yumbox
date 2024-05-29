import { useState } from 'react';

import logo from '../assets/logo.svg'
import Menu from "./menu.jsx";
import PurchasesButton from "./purchases-button.jsx";

const links = [
    {
        name: 'Каталог',
        href: '#'
    },
    {
        name: 'Кейтеринг',
        href: '#'
    },
    {
        name: 'Про нас',
        href: '#'
    },
    {
        name: 'Контакти',
        href: '#'
    }
]

export default function Header(){
    const headerClass = 'header'

    // Лого
    const logoClass = 'logo'
    const logoDivClass = `${logoClass}__div`

    // Навігація
    const navClass = 'nav'
    const listClass = `${navClass}__list`
    const navItemClass = `${navClass}__item`

    // Статус корзини
    const purchaseDivClass = 'purchases-div'

    // Гамбургер
    const menuDivClass = 'menu-div'
    const menuButtonClass = 'menu-button'

    var [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
            <header className={headerClass}>
                {/* Лого */}
                <div className={logoDivClass}>
                    <img src={logo} alt="yumbox" className={logoClass}/>
                </div>

                {/* Навігація */}
                <nav className={navClass}>
                    <ul className={listClass}>
                        {links.map(({name, href}, i) => {
                            return (
                                <li key={i} className={navItemClass}>
                                    <a href={href}>{name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Статус корзини */}
                <div className={purchaseDivClass}>
                    <PurchasesButton></PurchasesButton>
                </div>

                {/* Гамбургер */}
                <div className={menuDivClass}>
                    <button
                        className={`${menuButtonClass}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        Меню
                        <div
                            className={`${menuButtonClass}__hamburger ${isMenuOpen ? 'opened' : ''}`}
                        ></div>
                    </button>
                </div>
            </header>

            {/* Меню */}
            <Menu
                links={links}
                opened={isMenuOpen}
            ></Menu>
        </>
    );

}