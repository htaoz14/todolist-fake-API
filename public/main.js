const { default: axios } = require("axios");

let todos;



// Truy cập
const todoListEl = document.querySelector(".todo-list");
const todoOptionEls = document.querySelectorAll(".todo-option-item input");
const todoInputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");
// API lấy danh sách công việc
let  getTodos = async () => {
    try {
        let res = await axios.get("/todos")
        todos = res.data

    } catch (error) {
        console.log(error)
    }
}

const renderTodo = arr => {
    todoListEl.innerHTML = "";

    // Kiểm tra danh sách công việc có trống hay không
    if(arr.length == 0) {
        todoListEl.innerHTML = `<p class="todos-empty">Không có công việc nào trong danh sách</p>`;
        return;
    }

    // Hiển thị danh sách
    let html = "";
    arr.forEach(t => {
        html += `
            <div class="todo-item ${t.status ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input 
                        type="checkbox" ${t.status ? "checked" : ""} 
                        onclick="toggleStatus(${t.id})"
                    />
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `
    });

    todoListEl.innerHTML = html;
}

// Xóa công việc
const deleteTodo = id => {
    // Lọc ra các cv khác id của công việc muốn xóa
    try {
        // gọi api -> xóa trên sever
    todos = todos.filter(todo => todo.id != id);

    
   // // Hiển thị lại trên giao diện
    renderTodo(todos);
    } catch (error){
console.log(error)
    }
}
//}

// Thay đổi trạng thái công việc
//const toggleStatus = id => {
    // Lấy ra cv cần thay đổi
  //  let todo = todos.find(todo => todo.id == id);

    // Thay đổi trạng thái của cv đó : true -> false , false -> true
  //  todo.status = !todo.status;

    // Hiển thị lên trên giao diện
  //  setDataToLocalStorage(todos);
//}

// Lọc công việc theo trạng thái
//Array.from(todoOptionEls).forEach(input => {
    //input.addEventListener("change", () => {
      //  let option = input.value;
        
      //  let todosFilter = [];

       // switch(option) {
          //  case "all" : {
              //  todosFilter = [...todos]; // spread operator
             //   break;
          //  }
          //  case "active" :
            //    todosFilter = todos.filter(todo => todo.status == true);
          //      break;
          //  case "unactive" : {
          //      todosFilter = todos.filter(todo => todo.status == false);
          //      break;
         //   }
         //   default : {
         //       todosFilter = [...todos]; // spread operator
         //       break;
         //   }
       // }
      //  renderTodo(todosFilter);
   // })
//})

// Thêm công việc
//const addTodo = () => {
    // Lấy ra dữ liệu trong ô input
    //let title = todoInputEl.value;

    // Kiểm tra xem tiêu đề có trống hay không
   // if(title == "") {
       // alert("Tiêu đề công việc không được để trống");
       // return;
    //}

    // Tạo công việc mới
   // let newTodo = {
     //   id : randomId(),
     //   title : title,
     //   status : false
    //}

    // Thêm cv mới vào mảng để quản lý
   // todos.push(newTodo);

   // setDataToLocalStorage(todos);

   // todoInputEl.value = "";
//}

// Thêm công việc bằng nút "THÊM"
//btnAdd.addEventListener("click", () => {
  //  addTodo();
//})

// Thêm công việc bằng phím Enter
//todoInputEl.addEventListener("keydown", (event) => {
    //if(event.keyCode == 13) {
     //   addTodo();
   // }
//})

// Lấy dữ liệu từ localStorage
//const getDataFromLocalStorage = () => {
   // let data = localStorage.getItem("todos");
   // if(data) {
      //  todos = JSON.parse(data);
    //} else {
      //  todos = [];
    //}
  //  renderTodo(todos);
//}

// Lưu dữ liệu vào localStorage
//const setDataToLocalStorage = arr => {
  //  localStorage.setItem("todos", JSON.stringify(arr));
 //   renderTodo(arr);
//}


//getDataFromLocalStorage();
getTodos(todos)



