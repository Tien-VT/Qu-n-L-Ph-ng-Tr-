
// load 
window.onload = function () {
    var a_homeProductItem = document.querySelectorAll(".home-product-item");
    a_homeProductItem = Array.from(a_homeProductItem);
    var sectionTitle = document.querySelector(".section-title");
    sectionTitle.innerText = `Tổng ${a_homeProductItem.length} kết quả`;


    
    var dataItem = JSON.parse(localStorage.getItem('arrayItem'));
    
}
const home_product1 = document.querySelector(".home-product1");

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


overlay.addEventListener("click", function () {
    form.style.display = "none";
})




let createAccountBTN;

function createAccountFunction(formCreate) {
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}


function checkValueCreate(
    form, emailValue, passValue, confirmValue, flag
) {

}

// localStorage.setItem('loginAccounts', JSON.stringify(dataLocal));

// dataLocal.carts.push(data);

// userLogin----------
let headerInfor = document.querySelector(".header__navbar-list__infor");
let headerlog = document.querySelector(".header__navbar-list__log");

headerInfor.style.display = "none";
headerlog.style.display = "block";

function loginAccountFunction(loginForm) {

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

// fetch(Path)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         dataJson = data;
//     })
//     .catch(error => {
//         console.error('Fetch error:', error);
//     }
//     );

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


}
)



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
let user = [];
let currenPage = 1;
let perPage = 2;
let totalPage = 0;
let perUser = [];
async function getUser() {

}


////
function checkvalue(
    cityValue
    , DistrictValue
    , wardValue
    , villageValue
    , postCatValue
    , postTitleValue
    , postContentValue
    , ten_lien_heValue
    , phoneValue
    , zalo_linkValue
    , giachothueValue
    , post_acreageValue
    , inputFileValue
) {
    console.log(cityValue);
    if (!cityValue) {
        thongbaoloi.innerText = "Vui lòng chọn thành phố !"
        return false;
    } else if (!DistrictValue) {
        thongbaoloi.innerText = "Vui lòng chọn quận huyện !"
        return false;
    } else if (!wardValue) {
        thongbaoloi.innerText = "Vui lòng chọn xã phường!"
        return false;
    } else if (!villageValue) {
        thongbaoloi.innerText = "Vui lòng chọn thôn xóm !"
        return false;
    } else if (!postCatValue) {
        thongbaoloi.innerText = "Vui lòng chọn loại hình !"
        return false;
    } else if (!postTitleValue) {
        thongbaoloi.innerText = "Vui lòng nhập tiêu đề !"
        return false;
    } else if (!postContentValue) {
        thongbaoloi.innerText = "Vui lòng nhập nội dung mô tả !"
        return false;
    } else if (!ten_lien_heValue) {
        thongbaoloi.innerText = "Vui lòng chọn tên liên hệ !"
        return false;
    } else if (!phoneValue) {
        thongbaoloi.innerText = "Vui lòng nhập số điện thoại !"
        return false;
    } else if (!zalo_linkValue) {
        thongbaoloi.innerText = "Vui lòng nhập zalo!"
        return false;
    } else if (!giachothueValue) {
        thongbaoloi.innerText = "Vui lòng nhập giá cho thuê!"
        return false;
    } else if (!post_acreageValue) {
        thongbaoloi.innerText = "Vui lòng chọn diện tích!"
        return false;
    } else if (!inputFileValue) {
        thongbaoloi.innerText = "Vui lòng chọn hình ảnh!"
        return false;
    }
    return true;
}


function addPost(
    cityValue
    , DistrictValue
    , wardValue
    , villageValue
    , postCatValue
    , postTitleValue
    , postContentValue
    , ten_lien_heValue
    , phoneValue
    , zalo_linkValue
    , giachothueValue
    , post_acreageValue
    , inputFileValue
) {
    var newElement = document.createElement("div");
    newElement.className = 'home-product-item';
    newElement.innerHTML = `
    <div class="home-product-item__img">
    <div class="home-product-item_picture">
      <img src="${inputFileValue}" alt="" class="hinhanh13">
    </div>
    <div class="home-product-item_price">
      <div class="home-product-item_gt">
        <h4 class="home-product-item_name">${postTitleValue}</h4>
      </div>
      <div class="home-product-item__loaihinh">
        <span class="home-product-item__name">Loại hình:</span>
        <span class="home-product-item__type">${postCatValue}</span>
      </div>
      <div class="home-product-item_tt">
        <span class="home-product-item__price-old">
          <img src="./img/money.svg" alt="" class="classgigido">
          <span class="home-product-item__price__text">${giachothueValue}đ</span>
        </span>
        <span class="home-product-item__acreage">${post_acreageValue}m²</span>
        <span class="home-product-item__Address"><img src="./img/vị trí.svg" alt="" class="classgigido">

          <span class="home-product-item__Address__text">
            ${cityValue + " " + DistrictValue + " " + wardValue + " " + villageValue}
          </span>
        </span>
      </div>
      <div class="home-product-item__gioithieu">
        <span class="home-product-item__mota">${postContentValue}</span>
        <span class="home-product-item__mota">Phòng trọ tự quản,không chung chủ,giá wifi 65.000đ/tháng
          ,giá
          nước 10.000đ/m^3 và giá điện 3.500đ/tháng</span>
      </div>
      <div class="home-product-item__action">
        <div class="">
          <img src="./img/dienthoai.svg" alt="" class="classgigido">
          <span class="home-product-item__callphone">${phoneValue}</span>
        </div>
        <div class="zalo-chat1">
          <a href="${zalo_linkValue}"
            target="_self">
            <img src="./img/nhắntin.svg" alt="" class="classgigido">
            <span class="home-product-item__chatzalo">Nhắn tin Zalo</span>
          </a>
        </div>
      </div>
    </div>
    `
    home_product1.appendChild(newElement);
}

var submitBTN = document.getElementById("submit_post")
submitBTN.addEventListener("click", function () {
    var cityValue = city.value;
    var DistrictValue = District.value;
    var wardValue = ward.value;
    var villageValue = village.value;
    var postCatValue = postCat.value;
    var postTitleValue = postTitle.value;
    var postContentValue = postContent.value;
    var ten_lien_heValue = ten_lien_he.value;
    var phoneValue = phone.value;
    var zalo_linkValue = zalo_link.value;
    var giachothueValue = giachothue.value;
    var post_acreageValue = post_acreage.value;
    var inputFileValue = inputFile.value;

    if (
        checkvalue(cityValue
            , DistrictValue
            , wardValue
            , villageValue
            , postCatValue
            , postTitleValue
            , postContentValue
            , ten_lien_heValue
            , phoneValue
            , zalo_linkValue
            , giachothueValue
            , post_acreageValue
            , inputFileValue
        ) == true
    ) {
        console.log("Đúng rồi!")

        var data = {
            cityValue
            , DistrictValue
            , wardValue
            , villageValue
            , postCatValue
            , postTitleValue
            , postContentValue
            , ten_lien_heValue
            , phoneValue
            , zalo_linkValue
            , giachothueValue
            , post_acreageValue
            , inputFileValue
        }

        $.ajax({
            url: '/post-data', // Đường dẫn tới endpoint xử lý dữ liệu trên server
            method: 'POST', // Phương thức HTTP (ở đây là POST)
            data: data, // Dữ liệu gửi đi, ví dụ: { inputData: "Dữ liệu từ client" }
            success: function (response) {
                // Xử lý kết quả trả về từ server (nếu có)
                if (response.success == true) {
                    addPost(
                        cityValue
                        , DistrictValue
                        , wardValue
                        , villageValue
                        , postCatValue
                        , postTitleValue
                        , postContentValue
                        , ten_lien_heValue
                        , phoneValue
                        , zalo_linkValue
                        , giachothueValue
                        , post_acreageValue
                        , inputFileValue
                    )
                }
            },
            error: function (xhr, status, error) {
                // Xử lý lỗi nếu có
                console.error(error);
            }
        });

    }
})

var city = document.getElementById("city");
var District = document.getElementById("District");
var ward = document.getElementById("ward");
var village = document.getElementById("village");
var postCat = document.getElementById("post_cat");
var postTitle = document.getElementById("post_title");
var postContent = document.getElementById("post_content");
var ten_lien_he = document.getElementById("ten_lien_he");
var phone = document.getElementById("phone");
var zalo_link = document.getElementById("zalo_link");
var giachothue = document.getElementById("giachothue");
var post_acreage = document.getElementById("post_acreage");
var inputFile = document.getElementById("input-file");
var thongbaoloi = document.getElementById("thongbaoloi");
///
//Dangki


var dangki = document.querySelector(".create-btn");

const formTo = document.querySelector(".form");
const formCreate = document.querySelector(".form_create ");

function displayNoneAll(){
    formTo.style.display = 'none';
    formCreate.style.display = 'none';
}

function checkvalue(formemail,formpassword,formconfirmpassword) {
    var thongbaoloidangki = document.querySelector('.thongbao');
    console.log(formemail.value);
    if (!formemail.value) {
        thongbaoloidangki.innerText = "Vui lòng nhập Email!";
        return false;
    } else if (!formpassword.value) {
        thongbaoloidangki.innerText = "Vui lòng nhập mật khẩu!";
        return false;
    }else if(!formconfirmpassword.value){
        thongbaoloidangki.innerText ="Vui lòng nhập lại mật khẩu"
    }
    return true;
}

dangki.addEventListener("click", function(){
    displayNoneAll();
    formTo.style.display = 'flex';
    formCreate.style.display = 'block';
    var emaildangki = formDangKY.querySelector(".auth-formemail__input");
    var nhapmatkhau = formDangKY.querySelector(".auth-formpassword__input");
    var nhaplaimatkhau = formDangKY.querySelector(".auth-formconfirmpassword__input");
    if (checkvalue(emaildangki,nhapmatkhau,nhaplaimatkhau) == true) {
        console.log("Đúng rồi");
    }
});
const formDangKY = document.querySelector(".form_create");
var emaildangki = formDangKY.querySelector(".auth-formemail__input")
var nhapmatkhau = formDangKY.querySelector(".auth-formpassword__input")
var nhaplaimatkhau = formDangKY.querySelector(".auth-formconfirmpassword__input")
var thongbaoloidangki=document.getElementById("thongbaoloidangky");
console.log(emaildangki);
console.log(nhapmatkhau);
console.log(nhaplaimatkhau);




