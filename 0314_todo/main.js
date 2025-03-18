const addBtn = document.querySelector(".fa-plus"); //추가버튼
const input = document.querySelector(".footer_input"); //input 요소
const items = document.querySelector(".items"); //ul
const today_h2 = document.getElementById("today"); //날짜 출력
const eraseBtn = document.querySelector(".fa-eraser"); //지우개 버튼

// 현재 날짜 출력
function clock() {
  let today = new Date();

  const WEEKDAY = ["알", "월", "화", "수", "목", "금", "토"];
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let week = WEEKDAY[today.getDay()];

  today_h2.innerText = `${year}년 ${month}월 ${day}일 ${week}`;
  return `${year}년 ${month}월 ${day}일 ${week}`;
}

console.log(clock());

function createItem(text) {
  console.log(text);
  const itemRow = document.createElement("li");
  itemRow.className = "item";
  itemRow.innerHTML = `<span>${text}</span>
          <i class="fa-solid fa-check"></i>
          <i class="fa-solid fa-trash"></i>`;
  //체크버튼 클릭시 클래스 추가 이벤트
  itemRow.querySelector(".fa-check").addEventListener("click", () => {
    itemRow.classList.toggle("item_done"); //토글..??
  });
  //삭제 버튼 클릭시 itemrRow 제거 이벤트
  itemRow.querySelector(".fa-trash").addEventListener("click", () => {
    itemRow.remove(); //
  });

  //focus 이동하는 방법
  setTimeout(() => itemRow.scrollIntoView({ block: "center" }), 0); //몇초 있다가 작성 할 것인가?

  return itemRow;
}

//지우개 버튼 클릭시 itemRow 전체 제거 이벤트
eraseBtn.addEventListener("click", () => {
  if (items.children.length === 0) {
    alert("삭제할 목록이 없습니다.");
    return;
  }
  while (items.firstChild) {
    items.removeChild(items.firstChild);
  }
});

function onAdd() {
  console.log("함수 실행");
  const text = input.value.trim();
  //   console.log(text);
  if (!text) {
    //공백 입력시 다시 커셔 앞으로
    input.value = "";
    input.focus();
    return;
  }

  //li 생성하는 함수 - createItem(text)
  //ul에 생성값을 추가함
  items.appendChild(createItem(text));
  input.value = "";
  input.focus();
}

//이벤트 등록
addBtn.addEventListener("click", onAdd);

//엔터키 방법 1
// input.addEventListener("keypress", (e) => {
//   console.log(e);
//   if (e.key === "Enter") {
//     onAdd();
//   }
// });

//엔터키 방법 2
input.addEventListener("keyup", (e) => e.key === "Enter" && onAdd());
