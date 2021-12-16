function navBar() {
    return `<nav class="nav-bar">
    <div class="left">
        <div id="logo-container">
            <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/new_geekbuy.png" alt="logo" id="logo">
        </div>
        <div id="search-box-container">
            <input type="search" name="search" id="search" placeholder="Search">
        </div>
    </div>
    <div>
        <ul>
            <li>
                <div id="profile">SignIn</div>
            </li>
            <li>
                <div id="wishlist">WishList</div>
            </li>
            <li>
                <div id="cart">Cart</div>
            </li>
        </ul>
    </div>
</nav>`;
}

export default navBar;