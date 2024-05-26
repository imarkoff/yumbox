

export default function Header(){
    const headerClass = 'header'

    const logoClass = 'logo'
    const logoNameClass = `${logoClass}__name`

    const navClass = 'nav'
    const listClass = `${navClass}__list`
    const navItemClass = `${navClass}__item`

    const purchaseDivClass = 'purchases-div'
    const purchaseClass = 'purchases'
    const quantityClass = `${purchaseClass}__quantity`
    const priceClass = `${purchaseClass}__price`

    return(
        <header className={headerClass}>
            <div className={`${headerClass}__logo ${logoClass}`}>
                <div className={`${logoClass}__box`}></div>
                <div className={logoNameClass}>
                    <div className={`${logoNameClass}-1`}>yum</div>
                    <div className={`${logoNameClass}-2`}>box</div>
                </div>
            </div>
            <nav className={navClass}>
                <ul className={listClass}>
                    <li className={navItemClass}>
                        <a href="#">Каталог</a>
                    </li>
                    <li className={navItemClass}>
                        <a href="">Кейтеринг</a>
                    </li>
                    <li className={navItemClass}>
                        <a href="#">Про нас</a>
                    </li>
                    <li className={navItemClass}>
                        <a href="#">Контакти</a>
                    </li>
                </ul>
            </nav>
            <div className={purchaseDivClass}>
                <button className={purchaseClass}>
                    <div className={quantityClass}>0</div>
                    <div className={priceClass}>0</div>
                </button>
            </div>
        </header>
    );

}