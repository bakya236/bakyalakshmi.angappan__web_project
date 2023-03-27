const root = window.location.origin;
console.log(root);

let before_login =
    `    <header id="desktop-header">
<nav class="navbar navbar-expand-lg">

    <div class="container-fluid d-flex justify-content-between">

        <a class="navbar-brand" href="./index.html">
            <img src="./assets/images/homepage-images/logo.png" alt="my fashion studio logo" />
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">


            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    value=1>
                    men
                    <ul class="dropdown-menu " id="cate_men">
                  
                    </ul>
                </li>

            </ul>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    value=2>

                    WOMEN

                    <ul class="dropdown-menu" id="cate_women">


                    </ul>
                </li>

            </ul>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    value=3>
                    KIDS
                     <ul class="dropdown-menu" id="cate_kids">

                    </ul>
                </li>

            </ul>



        </div>

        <form class="searchbar" role="search">
            <input class="form-control me-8 " type="search" placeholder="search for products,brands and more"
                aria-label="Search">
        </form>

        <div class="icons">
        <a href="${root}/pages/homepage/login.html">
            <div id="profile">
                <div><i class="fa-solid fa-user"></i></div>
                <div id="account">login</div>
            </div>
        </a>

            <a href="${root}/pages/orders/wishlist.html">
                <div><i class="fa-solid fa-heart"></i></div>
                <div>wishlist</div>
            </a>

            <a href="${root}/pages/orders/shopping_bag.html">
                <div><i class="fa-solid fa-bag-shopping"></i></div>
                <div>bag</div>
            </a>
        </div>

    </div>
</nav>
</header>
`

let after_login =

    `    <header id="desktop-header">
<nav class="navbar navbar-expand-lg">

    <div class="container-fluid d-flex justify-content-between">

        <a class="navbar-brand" href="./index.html">
            <img src="./assets/images/homepage-images/logo.png" alt="my fashion studio logo" />
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">


            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    value=1>
                    men
                    <ul class="dropdown-menu " id="cate_men">
                  
                    </ul>
                </li>

            </ul>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    value=2>

                    WOMEN

                    <ul class="dropdown-menu" id="cate_women">


                    </ul>
                </li>

            </ul>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    value=3>
                    KIDS
                     <ul class="dropdown-menu" id="cate_kids">

                    </ul>
                </li>

            </ul>



        </div>

        <form class="searchbar" role="search">
            <input class="form-control me-8 " type="search" placeholder="search for products,brands and more"
                aria-label="Search">
        </form>

        <div class="icons">
        <a href="${root}/pages/homepage/account.html">
            <div id="profile">
                <div><i class="fa-solid fa-user"></i></div>
                <div id="account">profile</div>
            </div>
        </a>   

            <a href="${root}/pages/orders/wishlist.html">
                <div><i class="fa-solid fa-heart"></i></div>
                <div>wishlist</div>
            </a>

            <a href="${root}/pages/orders/shopping_bag.html">
                <div><i class="fa-solid fa-bag-shopping"></i></div>
                <div>bag</div>
            </a>
        </div>

    </div>
</nav>
</header>
`

const unique_id = localStorage.getItem("unique_id")
console.log(unique_id);

if (unique_id == 0) {
    //console.log(user_account)
    document.body.insertAdjacentHTML("afterbegin", before_login);
    let user_profile = document.getElementById("profile");
    user_profile.addEventListener("click", function (e) {
        location.href = "./pages/homepage/login.html"
    })
}
else {
    document.body.insertAdjacentHTML("afterbegin", after_login);
    //     location.href = "./pages/homepage/account.html"
    let user_profile = document.getElementById("profile");
    user_profile.addEventListener("click", function (e) {
        location.href = "./pages/homepage/account.html"
    })
}

let dropdown_menu = document.querySelectorAll("ul li.dropdown");
console.log(dropdown_menu);

dropdown_menu.forEach(menu => {
    menu.addEventListener("click", show)

    function show() {

        const inputvalue = this.value;
        // console.log(inputvalue);

        let localcategory = JSON.parse(localStorage.getItem('category_list')) || [];

        let filteredcategory = localcategory.filter((e) =>
            e.gender == inputvalue && e.status == true
        );

        console.log(filteredcategory);

        if (inputvalue == 1) {
            let category_ul = document.querySelector("#cate_men");
            category_ul.innerHTML = " ";

            // for (i = 0; i < filteredcategory.length; i++) {
            //     let dropdown_item_li = document.createElement("li");
            //     dropdown_item_li.setAttribute("class", "dropdown-item")
            //     dropdown_item_li.setAttribute("data-filter", "dropdown-item")
            //     dropdown_item_li.innerHTML = filteredcategory[i]["category"]
            //     category_ul.append(dropdown_item_li);
            // }
            for (i = 0; i < filteredcategory.length; i++) {
                let dropdown_item_li = document.createElement("li");
                dropdown_item_li.setAttribute("class", "dropdown-item")
                dropdown_item_li.setAttribute("value", filteredcategory[i]["id"])
                dropdown_item_li.innerHTML = filteredcategory[i]["category"]
                // dropdown_item_li.setAttribute("href", "/pages/products/product-list.html?category=" + filteredcategory[i]["id"])
                category_ul.append(dropdown_item_li);
            }
        };

        if (inputvalue == 2) {
            let category_ul = document.querySelector("#cate_women");
            category_ul.innerHTML = " ";

            for (i = 0; i < filteredcategory.length; i++) {
                let dropdown_item_li = document.createElement("li");
                dropdown_item_li.setAttribute("class", "dropdown-item")
                dropdown_item_li.setAttribute("value", filteredcategory[i]["id"])
                dropdown_item_li.innerHTML = filteredcategory[i]["category"]
                category_ul.append(dropdown_item_li);
            }
        };

        if (inputvalue == 3) {
            let category_ul = document.querySelector("#cate_kids");
            category_ul.innerHTML = " ";

            for (i = 0; i < filteredcategory.length; i++) {
                let dropdown_item_li = document.createElement("li");
                dropdown_item_li.setAttribute("class", "dropdown-item")
                dropdown_item_li.setAttribute("value", filteredcategory[i]["id"])
                dropdown_item_li.innerHTML = filteredcategory[i]["category"]
                category_ul.append(dropdown_item_li);
            }
        };

    }
})

let ul_dropdown_menu = document.querySelectorAll(".dropdown-menu")
console.log(ul_dropdown_menu)
ul_dropdown_menu.forEach(event => {
    event.addEventListener("click", function (e) {

        let inputvalue = e.target.value;
        location.href = `/pages/products/product-list.html?category=${inputvalue}`

    })
})
