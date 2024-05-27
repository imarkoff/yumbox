import PropTypes from "prop-types";

import linkedinLogo from "../assets/social/linkedin.svg";
import instagramLogo from "../assets/social/instagram.svg";
import facebookLogo from "../assets/social/facebook.svg";
import PurchasesButton from "./purchases-button.jsx";

export default function Menu({ links, opened }){
    // Меню
    const menuClass = 'menu'

    // Навігація
    const menuNav = `${menuClass}__nav`
    const menuNavItem = `${menuNav}-item`

    // Контакти
    const menuContacts = `${menuClass}__contacts`
    const menuContactsItem = `${menuContacts}-item`

    // Соц. мережі
    const menuSocial = `${menuClass}__social`
    const menuSocialItem = `${menuSocial}-item`

    return (
        <>
        {/* Меню */}
            <div
                className={`${menuClass}  ${opened ? 'opened' : ''}`}
            >
                {/* Статус корзини */}
                <PurchasesButton></PurchasesButton>

                {/* Навігація */}
                <ul className={menuNav}>
                    {links.map(({name, href}, i) => {
                        return (
                            <li key={i} className={menuNavItem}>
                                <a href={href}>{name}</a>
                            </li>
                        )
                    })}
                </ul>

                {/* Контакти */}
                <address className={menuContacts}>
                    <ul className={`${menuContacts}-list`}>
                        <li className={menuContactsItem}>
                            <a href="mailto:yumbox.lutsk@gmail.com" className={`${menuContactsItem}_email`}>yumbox.lutsk@gmail.com</a>
                        </li>
                        <li className={menuContactsItem}>
                            <a href="tel:380938239293" className={`${menuContactsItem}_tel`}>+380 93 823 92 93</a>
                        </li>
                    </ul>
                </address>

                {/* Соц. мережі */}
                <ul className={menuSocial}>
                    <li className={menuSocialItem}>
                        <a href="https://linkedin.com" target="_blank"><img src="" alt=""/>
                            <img src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                    </li>
                    <li className={menuSocialItem}>
                        <a href="https://instagram.com" target="_blank"><img src="" alt=""/>
                            <img src={instagramLogo } alt="Instagram"/>
                        </a>
                    </li>
                    <li className={menuSocialItem}>
                        <a href="https://facebook.com" target="_blank"><img src="" alt=""/>
                            <img src={facebookLogo} alt="Facebook"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

Menu.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
    })).isRequired,
    opened: PropTypes.bool.isRequired
}