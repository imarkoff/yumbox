

export default function Header(){
    
    return(
        <header>
            <div id="logo">
                <div id="logo_box"></div>
                <div id="logo_name">
                    <div id="logo_name_1">yum</div>
                    <div id="logo_name_2">box</div>
                </div>
            </div>
            <nav>
                <ul>
                    <li id="nav_li_1">
                        <a href="#">Каталог</a>
                    </li>
                    <li>
                        <a href="">Кейтеринг</a>
                    </li>
                    <li>
                        <a href="#">Про нас</a>
                    </li>
                    <li>
                        <a href="#">Контакти</a>
                    </li>
                </ul>
            </nav>
            <div id="user_purchases">
                <div id="quantity">0</div>
                <div id="total">0</div>
            </div>
        </header>
    );

}