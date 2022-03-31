function navbar(){
    return`<div id="nav" class="Header">
    <div id="uper">
        <div id="upperleft">
            <div>
                <select name="" id="">
                    <option value="">IND </option>
                    <option value="">USD </option>
                    <option value="">GPB </option>
                    <option value="">CAD </option>
                    <option value="">JPY </option>
                    <option value="">AUD </option>
                </select>
            </div>
            <div>
                Blogs
            </div>
            <div>Ingredients</div>
        </div>

        <div id="uppermid">
            <!-- <img src="https://cdn.shopify.com/s/files/1/0034/7901/1441/files/200x150-01_140x@2x.png?v=1640868807" alt=""> -->
            <h1>Deyga</h1>
        </div>

        <div id="upperright">
            <div>
                <input type="text" id="searchitem" placeholder=" SEARCH  PRODUCTS">
            </div>
            <div>
                <select name="" id="Account">
                    <option value="">Account</option>
                    <option value="account"> login</option>
                    <option value="wishlist"> Wishlist</option>
                    <option value="trackorder"> Track Order</option>
                    <option value="logout"> logOut</option>
                </select>
            </div>
            <div id="show"><h5></h5>
            </div>
            <div>
                <div id="cartcount">Cart()</div>
           
            </div>
        </div>
        
    </div>
    <div id="lower">
        <div><a href="skincare.html">Skin Care</a></div>
        <div><a href="haircare.html">Hair Care</a></div>
        <div><a href="bath&body.html">Bath & Body</a></div>
        <div><a href="oralcare.html">Oral Care</a></div>
        <div><a href="wellness.html">Wellness</a></div>
        <div><a href="babycare.html">Baby Care</a></div>
        <div><a href="men.html">Men</a></div>
        <div><a href="https://www.google.com">Combo</a></div>
        <div><a href="https://www.google.com">Gifting</a></div>
        <div><a href="https://www.google.com">Offers</a></div>
    </div>
</div>`
}
export default navbar;