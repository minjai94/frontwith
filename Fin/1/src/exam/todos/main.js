// 코드 구현
const todoForm = document.querySelector(".js-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todos");

const TODOS_LS = "todosLs";
let todosLs = [
  //   {
  //     id: 1,
  //     text: "HTML",
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     text: "CSS",
  //     completed: true,
  //   },
  //   {
  //     id: 3,
  //     text: "Javascript",
  //     completed: false,
  //   },
];

function handleDelete(event) {
  const li = event.target.parentNode; // li에 btn의 부모 태그(li)를 대입
  todoList.removeChild(li); // todos태그의 자식에 있는 li(btn.parentNode)를 제거 // filter를 사용해서 return 결과가 true인 것들만 추출됨
  const deleteTodos = todosLs.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  todosLs = deleteTodos; // 추출된 내용을 todosLS에 넣음
  saveTodos(); // localStorage에 저장
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todosLs)); // localStorage에 리스트 저장
}

function addTodos(text) {
  const li = document.createElement("li"); // li 태그 생성
  const label = document.createElement("label");
  const input = document.createElement("input");

  const delBtn = document.createElement("span"); // button 태그 생성
  const newId = todosLs.length + 1;
  li.id = newId;
  input.setAttribute("type", "checkbox");

  delBtn.innerText = "X";

  delBtn.addEventListener("click", handleDelete); // delBtn에 클릭이벤트에 deleteTodo함수 연결

  li.appendChild(label); // li의 자식에 label 연결
  li.appendChild(delBtn); // li의 자식에 delBtn 연결
  label.append(input, text); // label의 자식에 input 연결(체크박스 앞으로감)
  todoList.appendChild(li); // toDoList의 자식에 li 연결

  todoInput.value = "";

  const todoObj = {
    id: newId,
    text: text,
    completed: false,
  };

  todosLs.push(todoObj); // todosLs에 todoObj 삽입
  saveTodos(); // localStorage에 저장하는 함수
}

function handleSubmit(event) {
  event.preventDefault(); // 이벤트가 작동하지 못하게 함
  const currentValue = todoInput.value; // currentValue에 input창에 입력한 값 대입
  addTodos(currentValue); // 리스트 추가하는 함수
}

function loadList() {
  const loadTodos = localStorage.getItem(TODOS_LS);
  todoForm.addEventListener("submit", handleSubmit);
  // localStorage에 todos_ls가 있는지 확인
  if (loadTodos !== null) {
    const parseTodo = JSON.parse(loadTodos); // loadToDos를 json객체로 변경
    parseTodo.forEach(function (todo) {
      addTodos(todo.text); // 리스트 추가하는 함수
    }); // 객체 내용 한개씩 파라미터로 넣어서 함수 실행
  }
}

function show() {
  loadList(); // toDoForm에서 submit에 handleSubmit 이벤트를 연결
}

show();
