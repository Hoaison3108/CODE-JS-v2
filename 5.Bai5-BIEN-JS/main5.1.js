alert("Xin chào");
/* hàm prompt: được sử dụng để hiện thị hộp thoại 
nhập liệu trên trình duyệt à chờ người dùng nhập một giá trị*/

//Hiển thị hộp thoại nhập liệu
//prompt("Mời nhập tên: ");

/*
- Khái niệm: biến là một ô nhớ trong bộ nhớ đực đặt tên và sử dụng để lưu trữ giá trị
- 3 từ khóa để khai báo biến: var, let, const
    var : từ khóa khai báo biến trước ES6
    let : từ khóa khai báo biến được giới thiệu ES6
    const : Khai báo hằng số - biến không thể thay đổi giá trị sau khi đã được gán 
*/

// Khai báo biến là dùng từ khóa + tên biến và không có giá trị
// Khởi tạo biến là dùng từ khóa + tên biến = "gán giá trị"

//Khai báo biến
var myName;
let yourName;
//const doSoi;

//Khởi tạo biến

var diemToan = 10;
const doSoi = 100;
let firstName = "Alice";

// Xuất giá trị
console.log(diemToan);
console.log("Điểm toán của bạn là: " + diemToan + " điểm");
console.log(doSoi);
console.log(firstName);

//Thay đổi giá trị của biến
diemToan = 5;
console.log("Điểm toán của bạn là: " + diemToan + " điểm");

firstName = "Jacky";
console.log(firstName);

//riêng đối với biến const hằng số giá trị sẽ không thay đổi trong suốt quá trình thực thi lệnh
