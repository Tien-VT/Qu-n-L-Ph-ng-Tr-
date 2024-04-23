// load 
window.onload = function () {
    var a_homeProductItem = document.querySelectorAll(".home-product-item");
    a_homeProductItem = Array.from(a_homeProductItem);
    var sectionTitle = document.querySelector(".section-title");
    sectionTitle.innerText = `Tổng ${a_homeProductItem.length} kết quả`;


    var home_product1 = document.querySelector(".home-product1");

    var dataItem = JSON.parse(localStorage.getItem('arrayItem'));
    if (dataItem)
        dataItem.items.map(item => {
            let newHomeProductItem = document.createElement("div");
            newHomeProductItem.className = "home-product-item";
            newHomeProductItem.innerHTML = `
                    <div class="home-product-item__img">
                    <div class="home-product-item_picture">
                    <img src="${item.linkInput}" alt="" class="hinhanh13">
                    </div>
                    <div class="home-product-item_price">
                    <div class="home-product-item_gt">
                        <h4 class="home-product-item_name">${item.title}</h4>
                    </div>
                    <div class="home-product-item__loaihinh" >
                    <span class="home-product-item__name">Loại hình:</span>
                    <span class="home-product-item__type">${item.type}</span>
                  </div>
                    <div class="home-product-item_tt">
                    <span class="home-product-item__price-old"><img src="./img/money.svg" alt=""
                                class="classgigido">
                              <span class="home-product-item__price__text">${item.price}</span>
                            </span>
                        <span class="home-product-item__acreage">${item.area}m²</span>
                        <span class="home-product-item__Address__text"><img src="./img/vị trí.svg" alt=""
                            class="classgigido">${item.address}</span>
                    </div>
                    <div class="home-product-item__gioithieu">
                        <span class="home-product-item__mota">${item.content}</span> <br>
                        <span class="home-product-item__mota"></span>
                    </div>
                    <div class="home-product-item__action">
                        <div class="">
                        <img src="./img/dienthoai.svg" alt="" class="classgigido">
                        <span class="home-product-item__callphone">${item.phone}</span>
                        </div>
                        <div class="zalo-chat1">
                        <a href="${item.zaloLink || "#"}"
                            target="_self">
                            <img src="./img/nhắntin.svg" alt="" class="classgigido">
                            <span class="home-product-item__chatzalo">Nhắn tin Zalo</span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            `
            home_product1.appendChild(newHomeProductItem);
            var newImgitem = newHomeProductItem.querySelector(".home-product-item_picture")
            newImgitem.addEventListener("click", function () {
                var parentOfImg = newHomeProductItem;
                var imgLink = parentOfImg.querySelector(".hinhanh13").getAttribute("src");
                var title = parentOfImg.querySelector(".home-product-item_name").innerText;
                var price = parentOfImg.querySelector(".home-product-item__price__text").innerText;
                var area = parentOfImg.querySelector(".home-product-item__acreage").innerText;
                var adress = parentOfImg.querySelector(".home-product-item__Address__text").innerText;
                var describe = parentOfImg.querySelector(".home-product-item__mota").innerText;
                var phone = parentOfImg.querySelector(".home-product-item__callphone").innerText;

                var tempData = {
                    "imgLink": imgLink,
                    "title": title,
                    "price": price,
                    "area": area,
                    "adress": adress,
                    "describe": describe,
                    "phone": phone
                }
                localStorage.setItem('tempData', JSON.stringify(tempData));
                window.location.href = './information.html';
            })
        })

    var emailValue = getCookie("email");
    if (emailValue) {
        var userNameSpan = headerInfor.querySelector(".user-name");
        userNameSpan.innerText = emailValue
        headerInfor.style.display = "block";
        headerlog.style.display = "none";
    }
}

// Thiết lập cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Lấy giá trị cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
// xóa cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}
// Sử dụng các hàm trên để lưu thông tin đăng nhập
// setCookie('email', 'user@example.com', 7);
// setCookie('password', 'password', 7);


var buttonLogin = document.querySelector(".login-btn");
var form = document.querySelector(".form")
var overlay = document.querySelector(".overlay")
let changeForm = document.querySelectorAll(".auth-form__switch-btn");
let loginForm = document.querySelector(".form_login")
let createAccount = document.querySelector(".form_create")
let khungPost = document.querySelector(".khung-post");
buttonLogin.addEventListener("click", function () {
    form.style.display = "flex";
    loginForm = document.querySelector(".form_login")
    loginForm.style.display = "block";
    createAccount = document.querySelector(".form_create")
    createAccount.style.display = "none";

    khungPost = document.querySelector(".khung-post")
    khungPost.style.display = "none";

    changeForm = document.querySelectorAll(".auth-form__switch-btn")
    changeForm = Array.from(changeForm)
    var submitLogin = document.getElementById("submit-login-btn");
    submitLogin.addEventListener('click', () => {
        loginAccountFunction(loginForm);
    })
    var controlsBack = document.querySelector(".auth-form_controls-back-login");
    controlsBack.addEventListener("click", function () {
        form.style.display = "none";
    })
})
if (changeForm[0])
    changeForm[0].addEventListener("click", function () {
        changeFormFunction(loginForm, createAccount);
    })
if (changeForm[1])

    changeForm[1].addEventListener("click", function () {
        changeFormFunction(loginForm, createAccount);
    })
function changeFormFunction(loginForm, createAccount) {
    if (loginForm.style.display == "block") {
        loginForm.style.display = "none";
        createAccount.style.display = "block";
    }
    else if (createAccount.style.display == "block") {
        createAccount.style.display = "none";
        loginForm.style.display = "block";
    }

}

var createBtn = document.querySelector(".create-btn");
createBtn.addEventListener('click', function () {
    form.style.display = "flex";
    loginForm = document.querySelector(".form_login")
    loginForm.style.display = "none";
    createAccount = document.querySelector(".form_create")
    createAccount.style.display = "block";

    khungPost = document.querySelector(".khung-post")
    khungPost.style.display = "none";

    changeForm = document.querySelectorAll(".auth-form__switch-btn")
    changeForm = Array.from(changeForm)
    createAccountBTN = document.getElementById("create-account-btn");
    createAccountBTN.addEventListener('click', () => {
        createAccountFunction(createAccount);
    })
    var controlsBack = document.querySelector(".auth-form_controls-back-create");
    controlsBack.addEventListener("click", function () {
        form.style.display = "none";
    })
})

overlay.addEventListener("click", function () {
    form.style.display = "none";
})




// user login

// function checkAccount(email, passWord){
//     dataLocal = JSON.parse(localStorage.getItem('loginAccounts'));

// }

let createAccountBTN;

function createAccountFunction(formCreate) {
    var dataLocal = JSON.parse(localStorage.getItem('loginAccounts'));
    if (!dataLocal) {
        dataLocal = []
    }
    var inputCreateArray = formCreate.querySelectorAll(".auth-form__input");
    inputCreateArray = Array.from(inputCreateArray);
    var [emailValue, passValue, confirmValue] = inputCreateArray.map((value) => {
        return value.value.trim();
    })
    // emailValue&& passValue&& confirmValue && 
    if (checkValueCreate(formCreate, emailValue, passValue, confirmValue, 1)) {
        if (!dataLocal) {
            dataLocal = [];
        }
        var messageWarring = formCreate.querySelectorAll(".show-warring");
        messageWarring = Array.from(messageWarring);
        var test = true;
        dataLocal.map(value => {
            if (value.email == emailValue) {
                messageWarring.map(value => {
                    value.innerText = "";
                })
                messageWarring[0].innerText = "Tài khoản đã tồn tại";
                test = false;
            }
        })
        if (test) {
            data = {
                email: emailValue,
                password: passValue
            }
            dataLocal.push(data)
            localStorage.setItem('loginAccounts', JSON.stringify(dataLocal));
            setCookie("email", emailValue, 3)
            inputCreateArray.map((value) => {
                return value.value = "";
            })


            var userNameSpan = headerInfor.querySelector(".user-name");
            userNameSpan.innerText = emailValue
            headerInfor.style.display = "block";
            headerlog.style.display = "none";
            overlay.click();
        }
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}


function checkValueCreate(
    form, emailValue, passValue, confirmValue, flag
) {
    var messageWarring = form.querySelectorAll(".show-warring");
    messageWarring = Array.from(messageWarring)
    messageWarring.map(value => {
        value.innerText = "";
    })
    if (!emailValue) {
        messageWarring[0].innerText = "vui lòng nhập email";
        return false;
    }
    if (!validateEmail(emailValue)) {
        messageWarring[0].innerText = "vui lòng nhapaj đúng định dạng email";
        return false;
    }
    if (!passValue) {
        messageWarring[1].innerText = "vui lòng nhập mật khẩu";
        return false;
    }
    if (flag) {
        if (!confirmValue) {
            messageWarring[2].innerText = "vui lòng nhập đúng mk";
            return false;
        }
        if (passValue != confirmValue) {
            messageWarring[2].innerText = "mật khẩu không khớp";
            return true;
        }
    }
    return true;
}

// localStorage.setItem('loginAccounts', JSON.stringify(dataLocal));

// dataLocal.carts.push(data);

// userLogin----------
let headerInfor = document.querySelector(".header__navbar-list__infor");
let headerlog = document.querySelector(".header__navbar-list__log");

headerInfor.style.display = "none";
headerlog.style.display = "block";

function loginAccountFunction(loginForm) {
    dataLocal = JSON.parse(localStorage.getItem('loginAccounts'));
    var inputArray = loginForm.querySelectorAll(".auth-form__input");
    inputArray = Array.from(inputArray);
    var [emailValue, passValue] = inputArray.map((value) => {
        return value.value.trim();
    })
    if (checkValueCreate(loginForm, emailValue, passValue, "", 0)) {
        var dataLocal = JSON.parse(localStorage.getItem('loginAccounts'));
        if (!dataLocal) {
            dataLocal = [];
        }
        var test = false;
        var messageWarring = loginForm.querySelectorAll(".show-warring");
        messageWarring = Array.from(messageWarring);
        var haveAccount = false;
        var dangSai = false;
        dataLocal.map((value, index) => {
            if (value.email == emailValue && value.password == passValue) {
                haveAccount = true;
                var userNameSpan = headerInfor.querySelector(".user-name");
                userNameSpan.innerText = emailValue
                headerInfor.style.display = "block";
                headerlog.style.display = "none";
                inputArray.map((value) => {
                    return value.value = "";
                })
                test = true;
                //cookie
                setCookie("email", emailValue, 3);
                overlay.click();
            } else if (value.email == emailValue && value.password != passValue) {
                messageWarring.map(value => {
                    value.innerText = "";
                })
                messageWarring[1].innerText = "Sai mật khẩu"
                dangSai = true;
            }
        })
        if (haveAccount == false && dangSai == false) {
            messageWarring.map(value => {
                value.innerText = "";
            })
            messageWarring[0].innerText = "Tài khoản không tồn tại"
        }
        dangSai = false;

    }
}
const logoutBTN = document.getElementById("logout-btn");
logoutBTN.addEventListener("click", function () {
    var userNameSpan = headerInfor.querySelector(".user-name");
    userNameSpan.innerText = "";
    headerInfor.style.display = "none";
    headerlog.style.display = "block";
    eraseCookie("email")
})

// post bài 

var Path = '../data/dataLocal.json';
let dataJson = {};

fetch(Path)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        dataJson = data;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    }
    );

function checkValue(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "" || array[i] == undefined) {
            return false;
        }
    }
    return true;
}


const postBTN = document.querySelector(".header__navbar-item__notification");
postBTN.addEventListener("click", () => {
    form.style.display = "flex";
    loginForm = document.querySelector(".form_login")
    loginForm.style.display = "none";
    createAccount = document.querySelector(".form_create")
    createAccount.style.display = "none";

    khungPost = document.querySelector(".khung-post")
    khungPost.style.display = "block";


    var controlsBack = document.querySelector(".auth-form_controls-back-create");
    controlsBack.addEventListener("click", function () {
        form.style.display = "none";
    })

    let valueArrayInfor = {

    }

    var district = document.getElementById("District");
    var ward = document.getElementById("ward");
    var village = document.getElementById("village");
    let localward, localvillage;
    let local = dataJson.local[0];
    local = local["Thái Nguyên"][0];

    var districtArray = Object.keys(local);
    // let thaiNguyen = keys[0];
    for (var i = 0; i < districtArray.length; i++) {
        var optionElement = document.createElement("option");
        optionElement.value = districtArray[i]
        optionElement.innerText = districtArray[i]
        district.appendChild(optionElement);
    }
    let districtOption;
    district.addEventListener("click", () => {
        districtOption = district.options[district.selectedIndex].text;
        if (local[districtOption]) {
            localward = local[districtOption][0];
            wardArray = Object.keys(localward);
            ward.innerHTML = ''
            for (var i = 0; i < wardArray.length; i++) {
                var optionElement = document.createElement("option");
                optionElement.value = wardArray[i]
                optionElement.innerText = wardArray[i]
                ward.appendChild(optionElement);
            }
        }
    })
    let wardOption
    ward.addEventListener("click", () => {
        wardOption = ward.options[ward.selectedIndex].text;
        if (localward[wardOption]) {
            localvillage = localward[wardOption][0];
            wardArray = Object.keys(localvillage);
            village.innerHTML = ''
            for (var i = 0; i < wardArray.length; i++) {
                var optionElement = document.createElement("option");
                optionElement.value = wardArray[i]
                optionElement.innerText = wardArray[i]
                village.appendChild(optionElement);
            }
        }
    })
    let villageOption
    village.addEventListener("click", () => {
        villageOption = village.options[village.selectedIndex].text;
        // localvillage = localvillage[villageOption][0];
        // villageArray = Object.keys(localvillage);
        valueSearch = "Thái Nguyên" + " " + districtOption + " " + wardOption + " " + villageOption
        searchLocation(valueSearch)
    })

    var imgTemp = document.getElementById("img-temp");
    var inputImg = document.getElementById("input-file");
    let inputFile = "";
    inputImg.onchange = function () {
        if (inputImg.files && inputImg.files[0]) {
            inputFile = URL.createObjectURL(inputImg.files[0]);
            imgTemp.src = inputFile
        }

    }

    var submit_post = document.getElementById("submit_post");
    submit_post.addEventListener("click", () => {
        var city = "Thái Nguyên";
        // districtOption wardOption villageOption
        var street_number = document.getElementById("street_number").value;
        var post_cat = document.getElementById("post_cat")
        post_cat = post_cat.options[post_cat.selectedIndex].text;
        if (post_cat == "-- Chọn loại chuyên mục --") post_cat = ""
        var post_title = document.getElementById("post_title").value;
        var post_content = document.getElementById("post_content").value;
        var ten_lien_he = document.getElementById("ten_lien_he").value;
        var phone = document.getElementById("phone").value;
        var zalo_link = document.getElementById("zalo_link").value;
        var giachothue = document.getElementById("giachothue").value;
        var post_acreage = document.getElementById("post_acreage").value;


        valueArrayInfor = [
            city,
            districtOption,
            wardOption,
            villageOption, //
            street_number,
            post_cat,
            post_title, // 
            post_content, // 
            ten_lien_he,
            phone, //
            zalo_link, //
            giachothue, //
            post_acreage,//
            inputFile,
        ]
        valueObjInfor = {
            "city": city,
            "districtOption": districtOption,
            "wardOption": wardOption,
            "villageOption": villageOption, //
            "street_number": street_number,
            "post_cat": post_cat,
            "post_title": post_title, // 
            "post_content": post_content, // 
            "ten_lien_he": ten_lien_he,
            "phone": phone, //
            "zalo_link": zalo_link, //
            "giachothue": giachothue, //
            "post_acreage": post_acreage,//
            "inputFile": inputFile,
        }
        if (checkValue(valueArrayInfor)) {
            let newHomeProductItem = document.createElement("div");
            newHomeProductItem.className = "home-product-item";
            newHomeProductItem.innerHTML = `
                <div class="home-product-item__img">
                <div class="home-product-item_picture">
                <img src="${valueObjInfor.inputFile}" alt="" class="hinhanh13">
                </div>
                <div class="home-product-item_price">
                <div class="home-product-item_gt">
                    <h4 class="home-product-item_name">${post_title}</h4>
                </div>
                <div class="home-product-item__loaihinh" >
                <span class="home-product-item__name">Loại hình:</span>
                <span class="home-product-item__type">${post_cat}</span>
              </div>
                <div class="home-product-item_tt">
                <span class="home-product-item__price-old"><img src="./img/money.svg" alt=""
                            class="classgigido">
                          <span class="home-product-item__price__text">${giachothue}</span>
                        </span>
                    <span class="home-product-item__acreage">${post_acreage}m²</span>
                    <span class="home-product-item__Address__text"><img src="./img/vị trí.svg" alt=""
                        class="classgigido">${"Thái Nguyên" + " " + districtOption + " " + wardOption + " " + villageOption}</span>
                </div>
                <div class="home-product-item__gioithieu">
                    <span class="home-product-item__mota">${post_content}</span> <br>
                    <span class="home-product-item__mota"></span>
                </div>
                <div class="home-product-item__action">
                    <div class="">
                    <img src="./img/dienthoai.svg" alt="" class="classgigido">
                    <span class="home-product-item__callphone">${phone}</span>
                    </div>
                    <div class="zalo-chat1">
                    <a href="${zalo_link || "#"}"
                        target="_self">
                        <img src="./img/nhắntin.svg" alt="" class="classgigido">
                        <span class="home-product-item__chatzalo">Nhắn tin Zalo</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        `
            var data = {
                linkInput: valueObjInfor.inputFile,
                title: post_title,
                type: post_cat,
                price: giachothue,
                area: post_acreage,
                address: "Thái Nguyên" + " " + districtOption + " " + wardOption + " " + villageOption,
                content: post_content,
                phone: phone,
                zaloLink: zalo_link
            }
            var dataItem = JSON.parse(localStorage.getItem('arrayItem'));
            if (!dataItem) {
                dataItem = {
                    items: []
                }
            }
            dataItem.items.push(data);
            console.log(dataItem)
            localStorage.setItem('arrayItem', JSON.stringify(dataItem));

            var home_product1 = document.querySelector(".home-product1");
            home_product1.appendChild(newHomeProductItem);
            document.getElementById("street_number").value = ""
            document.getElementById("post_title").value = ""
            document.getElementById("post_content").value = ""
            document.getElementById("ten_lien_he").value = ""
            document.getElementById("phone").value = ""
            document.getElementById("zalo_link").value = ""
            document.getElementById("giachothue").value = ""
            document.getElementById("post_acreage").value = ""
            var newImgitem = newHomeProductItem.querySelector(".home-product-item_picture")
            newImgitem.addEventListener("click", function () {
                var parentOfImg = newHomeProductItem;
                var imgLink = parentOfImg.querySelector(".hinhanh13").getAttribute("src");
                var title = parentOfImg.querySelector(".home-product-item_name").innerText;
                var price = parentOfImg.querySelector(".home-product-item__price__text").innerText;
                var area = parentOfImg.querySelector(".home-product-item__acreage").innerText;
                var adress = parentOfImg.querySelector(".home-product-item__Address__text").innerText;
                var describe = parentOfImg.querySelector(".home-product-item__mota").innerText;
                var phone = parentOfImg.querySelector(".home-product-item__callphone").innerText;

                var tempData = {
                    "imgLink": imgLink,
                    "title": title,
                    "price": price,
                    "area": area,
                    "adress": adress,
                    "describe": describe,
                    "phone": phone
                }
                localStorage.setItem('tempData', JSON.stringify(tempData));
                window.location.href = './information.html';
            })
            overlay.click()
        } else {
            alert("vui lòng điền đầy đủ thông tin")
        }

    })

})



// search map
function searchLocation(input) {
    var iframe = document.getElementById('consoleMaps');
    var embed = "https://www.google.com/maps/embed/v1/search?key=AIzaSyDaOulQACiJzBfqumbsqg_-vKha8fCnL-s&q=" + encodeURIComponent(input);
    iframe.src = embed;
}

// window.location.href = './information.html';
// link file information.html

let imgItem = document.querySelectorAll(".home-product-item_picture");
let titleItem = document.querySelectorAll(".home-product-item_name");
imgItem = Array.from(imgItem)
titleItem = Array.from(titleItem)

imgItem.map(value => {
    value.addEventListener("click", function () {
        var parentOfImg = value.parentElement;
        var imgLink = parentOfImg.querySelector(".hinhanh13").getAttribute("src");
        var title = parentOfImg.querySelector(".home-product-item_name").innerText;
        var price = parentOfImg.querySelector(".home-product-item__price__text").innerText;
        var area = parentOfImg.querySelector(".home-product-item__acreage").innerText;
        var adress = parentOfImg.querySelector(".home-product-item__Address__text").innerText;
        var describe = parentOfImg.querySelector(".home-product-item__mota").innerText;
        var phone = parentOfImg.querySelector(".home-product-item__callphone").innerText;

        var tempData = {
            "imgLink": imgLink,
            "title": title,
            "price": price,
            "area": area,
            "adress": adress,
            "describe": describe,
            "phone": phone
        }
        localStorage.setItem('tempData', JSON.stringify(tempData));
        window.location.href = './information.html';
    })
})
// titleItem.map(value=>{

// })


// find home

let findBTN = document.querySelector(".findRoom");
findBTN.addEventListener("click", function () {
    var selectTypeElement = document.getElementById("estateType1");
    var selectLocalElement = document.getElementById("estateType2");
    var selectPriceElement = document.getElementById("estateType3");
    var selectAreaElement = document.getElementById("estateType4");

    var typeValue = selectTypeElement.options[selectTypeElement.selectedIndex].text;
    var localValue = selectLocalElement.options[selectLocalElement.selectedIndex].text;
    var priceValue = selectPriceElement.options[selectPriceElement.selectedIndex].text;
    var areaValue = selectAreaElement.options[selectAreaElement.selectedIndex].text;

    let tempData = {
        type: typeValue,
        local: localValue,
        price: priceValue,
        area: areaValue
    }

    var homeProduct = document.querySelector(".home-product1");
    let a_dataProduct = [];

    var a_homeProductItem = homeProduct.querySelectorAll(".home-product-item");
    console.log("a_homeProductItem", a_homeProductItem)
    a_homeProductItem = Array.from(a_homeProductItem)
    a_homeProductItem.map(productItem => {
        var data = {
            typeItem: productItem.querySelector(".home-product-item__type").innerText,
            localItem: productItem.querySelector(".home-product-item__Address__text").innerText,
            priceItem: productItem.querySelector(".home-product-item__price__text").innerText,
            areaItem: productItem.querySelector(".home-product-item__acreage").innerText
        }
        a_dataProduct.push(data)
    })
    a_dataProduct = formatDataProduct(a_dataProduct)
    console.log("a_dataProduct", a_dataProduct)
    let countItem = 0;
    a_homeProductItem.map((productItem, index) => {
        if (!checkEqualValue(a_dataProduct[index], tempData)) {
            console.log("a_dataProduct[index], tempData", a_dataProduct[index], tempData)
            productItem.style.display = "none";
        } else {
            countItem++;
        }
    })
    let sectionTitle = document.querySelector(".section-title");
    sectionTitle.innerText = `Tổng ${countItem} kết quả`;
    var sectionBack = document.querySelector(".section-back");
    sectionBack.style.display = "block";
    countItem = 0;
    sectionBack.addEventListener("click", function () {
        a_homeProductItem.map((productItem, index) => {
            productItem.style.display = "block";
        })
        sectionBack.style.display = "none"
        a_homeProductItem.map((productItem, index) => {
            countItem++;
        })
        sectionTitle.innerText = `Tổng ${countItem} kết quả`;
        countItem = 0;
    })
    a_dataProduct = []
})

function checkEqualValue(checkValue, findValue) {
    if (checkValue.typeItem != findValue.type) {
        return false;
    }

    if (!checkValue.localItem.toLowerCase().includes(findValue.local.toLowerCase())) {
        return false;
    }

    if (checkValue.priceItem != findValue.price) {
        var test = false;
        if (findValue.price == "Giá dưới 1 triệu") {
            if (checkValue.priceItem >= 0 && checkValue.priceItem < 1000000) {
                test = true
            }
        }
        else if (findValue.price == "Giá 1-2 triệu") {
            if (checkValue.priceItem >= 1000000 && checkValue.priceItem < 2000000) {
                test = true

            }
        }
        else if (findValue.price == "Giá 2-3 triệu") {
            if (checkValue.priceItem >= 2000000 && checkValue.priceItem < 3000000) {
                test = true

            }
        }
        else if (findValue.price == "Giá 3-4 triệu") {
            if (checkValue.priceItem >= 3000000 && checkValue.priceItem < 4000000) {
                test = true

            }
        }
        else if (findValue.price == "Giá 4-5 triệu") {
            if (checkValue.priceItem >= 4000000 && checkValue.priceItem < 5000000) {
                test = true

            }
        }
        else if (findValue.price == "Giá 5-6 triệu") {
            if (checkValue.priceItem >= 5000000 && checkValue.priceItem < 6000000) {
                test = true

            }
        }
        else if (findValue.price == "Giá 6-7 triệu") {
            if (checkValue.priceItem >= 6000000 && checkValue.priceItem < 7000000) {
                test = true

            }
        }
        if (!test)
            return false;
    }

    if (checkValue.areaItem != findValue.area) {
        var test = false;
        if (findValue.area == "Dưới 20m²") {
            if (checkValue.areaItem > 0 && checkValue.areaItem < 20) {
                test = true;
            }
        } else if (findValue.area == "20m²-30m²") {
            if (checkValue.areaItem >= 20 && checkValue.areaItem < 30) {
                test = true;
            }
        } else if (findValue.area == "30m²-40m²") {
            if (checkValue.areaItem >= 30 && checkValue.areaItem < 40) {
                test = true;
            }
        } else if (findValue.area == "40m²-50m²") {
            if (checkValue.areaItem >= 40 && checkValue.areaItem < 50) {
                test = true;
            }
        } else if (findValue.area == "Trên 50m²") {
            if (checkValue.areaItem >= 50) {
                test = true;
            }
        }

        if (!test)
            return false;
    }
    return true;
}

function formatDataProduct(a_data) {
    a_data.map(value => {
        value.priceItem = value.priceItem.replace("đ", "");
        value.priceItem = Number(value.priceItem.replace(/\./g, ""));
        value.areaItem = Number(value.areaItem.replace("m²", ""));
    })
    return a_data;
}
// Chuyển trang
let user =[];
let currenPage = 1;
let perPage =2 ;
let totalPage = 0;
let perUser = [];
async function getUser(){
    
}