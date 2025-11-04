//7. Các cách xuất dữ liệu với biến trong js

//Load danh sách sinh viên khi mở
window.onload = function () {
  loadStudent();
};

//Lấy dữ liệu từ form
function getFormData() {
  return {
    id: document.getElementById("id").value,
    name: document.getElementById("name").value,
    dob: document.getElementById("dob").value,
    gpa: document.getElementById("gpa").value,
    email: document.getElementById("email").value,
  };
}

//Thêm sinh viên
function addStudent() {
  let student = getFormData();
  google.script.run
    .withSuccessHandler(function (response) {
      showMessage(response);
      loadStudent();
      clearForm();
    })
    .addStudent(student);
}
