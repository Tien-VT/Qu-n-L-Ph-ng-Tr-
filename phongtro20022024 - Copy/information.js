var tempData = JSON.parse(localStorage.getItem('tempData'));

var divTemp = document.createElement("div");
divTemp.className = "home-product-item";
divTemp.innerHTML = `
    <div class="home-product-item__img">
        <div class="home-product-item_picture">
            <img src="${tempData.imgLink}" alt="" class="hinhanh13">
        </div>
    </div>
    <div class="home-product-item_price">
        <div class="home-product-item_gt">
            <h4 class="home-product-item_name">${tempData.title}</h4>
        </div>
    </div>
    <div class="home-product-item_tt">

        <span class="home-product-item__price-old"> <span
                style="font-size: 20px;font-weight: bold;">Giá Tiền</span><img
                src="./img/money.svg" alt="" class="classgigido">${tempData.price}</span>
    </div>
    <div class="home-product-item_money" style="margin-top: 15px;">
        <span class="home-product-item__name" style="font-size: 20px; font-weight: bold;"> Diện
            tích :</span>
        <span class="home-product-item__acreage" style="font-size: 20px;">${tempData.area}</span>
    </div>
    <div class="home-product-item__Address" style="font-size: 16px; margin-top: 20px;">
        <span class="home-product-item__Address"><span
                style="font-size: 20px;font-weight: bold;">Địa chỉ:</span><img
                src="./img/vị trí.svg" alt="" class="classgigido">${tempData.adress}</span>
    </div>
    <div class="home-product-item__ttmota"
        style="font-size: 30px;margin-top: 30px; font-weight: bold;">
        <span>Thông tin mô tả</span>
    </div>
    <div class="home-product-item__gioithieu">
        <span class="home-product-item__mota">${tempData.describe}</span>
    </div>
    <div class="home-product-item__action" style="margin-top: 40px;">
        <section class="section post-contact">
            <div class="section-header">
                <h3 class="section-title">Thông tin liên hệ</h3>
            </div>
            <div class="section-content" style="font-size: 20px; margin-top: 30px;">
                <table class="table">
                    <tbody>
                        <tr>
                            <td class="name" style="font-weight: bold;">Liên hệ:</td>
                            <td style="font-weight: bold;"> Võ Trường Tiến</td>
                        </tr>
                        <tr>
                            <td class="name" style="font-weight: bold;">Điện thoại:</td>
                            <td style="font-weight: bold;">${tempData.phone}</td>
                        </tr>
                        <tr>
                            <td class="name" style="font-weight: bold;">Zalo</td>
                            <td style="font-weight: bold;">${tempData.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
    <div class="gg-address" style="margin-top: 20px;">
        <div class="gg-address__name" style="font-size: 20px;font-weight: bold;">Bản đồ</div>
        <div class="gg-address__address" style="font-size: 20px;">Địa chỉ cụ thể:</div>
        <div class="tien-group__ggmapcuthe">
            <iframe id="consoleMaps"
                src="${"https://www.google.com/maps/embed/v1/search?key=AIzaSyDaOulQACiJzBfqumbsqg_-vKha8fCnL-s&q=" + encodeURIComponent(tempData.adress)}"
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
`
var left_coL = document.querySelector(".left_coL");
left_coL.appendChild(divTemp)