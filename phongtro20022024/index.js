const express = require('express');
const mysql = require('mysql');

const app = express();
const path = require('path');

const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');


// Sử dụng middleware để xử lý dữ liệu từ phần thân yêu cầu
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Tạo kết nối đến cơ sở dữ liệu MySQL
let db = mysql.createConnection({
    host: 'localhost',
    user: 'tienvt',
    password: '1234'
});



// Kết nối đến cơ sở dữ liệu
db.connect((error) => {
    if (error) {
        console.log('Kết nối đến MySQL thất bại: ', error);
    } else {
        console.log('Kết nối đến MySQL thành công!');
    }
});


// Kiểm tra xem cơ sở dữ liệu có tồn tại không
db.query("SHOW DATABASES LIKE 'timtro2024'", (error, results) => {
    if (error) throw error;
    if (results.length) {
        console.log('Cơ sở dữ liệu `timtro2024` đã được tạo trước đó!');
    } else {
        db.query("CREATE DATABASE timtro2024", (error, result) => {
            if (error) throw error;
            console.log('Cơ sở dữ liệu `timtro2024` đã được tạo thành công!');
            // Tạo kết nối đến cơ sở dữ liệu MySQL


        });
    }
    db = mysql.createConnection({
        host: 'localhost',
        user: 'tienvt',
        password: '1234',
        database: 'timtro2024'
    });
    let tables = {
        'inforRoom': `(id INT AUTO_INCREMENT PRIMARY KEY,
            room_type VARCHAR(100),
            title VARCHAR(100),
            description TEXT,
            contact_name VARCHAR(100),
            phone VARCHAR(15),
            zalo_link VARCHAR(255),
            price DECIMAL(10, 2),
            area DECIMAL(10, 2),
            imgLink TEXT)`
        // Thêm các bảng khác tại đây
    };

    // Tạo các bảng
    for (let tableName in tables) {
        db.query(`CREATE TABLE IF NOT EXISTS ${tableName} ${tables[tableName]}`, (error, result) => {
            if (error) throw error;
            console.log(`Bảng \`${tableName}\` đã được tạo thành công!`);
        });
    }
});

//dangki

//dangki

// Endpoint để nhận dữ liệu từ client
app.post('/post-data', (req, res) => {
    // Lấy dữ liệu từ client
    // const inputData = req.body;
    console.log("jello")
    console.log(req.body);
    const {
        cityValue,
        DistrictValue,
        wardValue,
        villageValue,
        postCatValue,
        postTitleValue,
        postContentValue,
        ten_lien_heValue,
        phoneValue,
        zalo_linkValue,
        giachothueValue,
        post_acreageValue,
        inputFileValue
    } = req.body;

    // Tạo câu lệnh SQL INSERT
    let sql = `INSERT INTO inforRoom(room_type, title, description, contact_name, phone, zalo_link, price, area) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    // Thực thi câu lệnh SQL với dữ liệu từ đối tượng roomInfo
    db.query(sql, [postCatValue, postTitleValue, postContentValue, ten_lien_heValue, phoneValue, zalo_linkValue, giachothueValue, post_acreageValue], (error, results) => {
        if (error) throw error;
        console.log('Dữ liệu đã được thêm thành công!');
    });
    res.json({success: true});
});


// Endpoint để nhận dữ liệu từ client
app.get('/post-data2', (req, res) => {
    // Lấy dữ liệu từ client
    console.log("jello")

});


app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
/////dangki
