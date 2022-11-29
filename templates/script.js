function addList() {
  // createElement를 통해 plusUl 변수에 생성할 element 담는다.
  var plusUl = document.createElement("ul");
  // 추가할 plusUl element 내용 설정
  plusUl.innerHTML = "<li>state 내용</li>";
  document.getElementById("state").appendChild(plusUl);
}
