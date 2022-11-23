function Header(){
    return(
        <header class="header">
        <nav class="nav">
            <div class="logo">
                <img src="img/logo.png" alt=""/>
                <a href=""><h1>Netbook</h1></a>
            </div>
            <div class="navigation">
                <a href="" class="home">Home</a>
                <a href="">Community
                    <select name="" id="" class="option" >
                        <option value=""></option>
                    </select>
                </a>
                <a href="">Blog</a>
                <a href="">Events</a>
            </div>
            <div class="log-in">
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass"><input class="input" type="text" placeholder="Search Here..."/></i>
                </div>
                <button class="login-button" type="button">Log in</button>
            </div>
        </nav>
        <hr/>
        <section class="header-details">
            <div class="details-text">
                <div>
                    <a href="">Netbook community</a>
                    <h1>Your Solutions For <br/> Community!</h1>
                    <h4>More than 2 billion people in over countries use socibook <br/> to stay in touch with friends & family.</h4>
                </div>
                <div class="more-about">
                    <button type="button" class="about-more button" >About More</button>
                    <button type="button" class="invite-friend button">Invite Friend</button>
                </div>
            </div>
            <div class="details-img">
                <img src="img/details-img.png" alt=""/>
            </div>
        </section>
    </header>
    )
}
export default Header;