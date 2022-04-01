var userAdmin = function(){
    var listproduct ="";
    for (var i in user){//dòng 2: khai báo list product, nên đặt tên là products, 
                            // hoặc productsList, nó là kiểu chuỗi, để sau khi tạo htmt, sẽ gán lại cho element ở dòng 21

        var data = JSON.parse(JSON.stringify(user[i]))//dòng 3->22, duyệt mảng users,
                                                    // với mỗi user sẽ parse ra, chuyển nó sang dạng object, lúc này nó sẽ kiểu user ={id:"id",name:"name"} 
    
                                                    //Xuất các thông tin ra thanh html
     var listproduct = '<tr>';// dòng 5->19: tạo 1 row với nhiều column, mỗi column ứng với value của object data
     
      listproduct+='<td>'+data.id+'</td>';//dấu +=, nghĩa là: giá trị này = giá trị của nó + giá trị mới
      listproduct+='<td>'+data.username+'</td>';
      listproduct+='<td>'+data.name+'</td>';
      listproduct+='<td>'+data.sdt+'</td>';
    //   listproduct+='<td><img src="../img/'+data.img+'" alt="" style="width: 50px;"></td>';
      listproduct+='<td>'+data.email+'</td>';
      listproduct+='<td>'+data.address+'</td>';
      listproduct+='<td>'+data.role+'</td>';
     //  listproduct1+='';
      listproduct+='<td><button onclick="updateUser('
      +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
      listproduct+='<button onclick="deleteUser('
      +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
      listproduct+='</tr>';  

     document.getElementById("user-admin").innerHTML += listproduct;
    }
    // Save();
    }
    loadUser();
// thêm các user kahcs vào
var addUser = function(){
    var User = {
        id :"USER"+ parseInt(user.length+1),
        username : document.getElementById("username").value,
        name : document.getElementById("name").value,
        password : document.getElementById("password").value,
        sdt : document.getElementById("sdt").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        role : document.getElementById("role").value,
    }
        user.push(User);
        localStorage.setItem('listUser',JSON.stringify(user));
        // Save();
     window.location.reload();
    }

    // Xóa Người dùng
    var deleteUser= function (i){
        if (user[i].role != "admin"){
            user.splice(i, 1);
            localStorage.setItem('listUser',JSON.stringify(user));
            window.location.reload();
        }
        if (user[i].role == "admin") {
            alert("không thể xóa tài khoản admin");
        }
    }

    // chỉnh sửa các thông mà user đã tạo
    var updateUser = function(i){
        var k = user[i];
        document.getElementById("id").value=k.id,
        document.getElementById("username1").value = k.username,
        document.getElementById("name1").value  = k.name,
        document.getElementById("password1").value = k.password,
        document.getElementById("sdt1").value = k.sdt,
         document.getElementById("email1").value = k .email,
        document.getElementById("address1").value = k.address,
        document.getElementById("role1").value = k.role,
        document.getElementById("id").setAttribute("disabled","disabled");
        document.getElementById("Update").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="update('+i+')"> Đồng ý</button>'
    }
    // update lại và đẩy các tài khoản của các user đó lên local
    var update = function(i){
        alert("Thành công");
        var k = user[i];
        k.id = k.id,
        k.username= document.getElementById("username1").value,
        k.name = document.getElementById("name1").value,
        k.password = document.getElementById("password1").value ,
        k.sdt = document.getElementById("sdt1").value ,
        k.email = document.getElementById("email1").value ,
        k.address = document.getElementById("address1").value ,
        k.role = document.getElementById("role1").value,
        localStorage.setItem('listUser',JSON.stringify(user));
        window.location.reload();// dung để chạy lại trang và đưa các user đó vào trang website của mình
    }

   
    // productAdmin();
    userAdmin();
