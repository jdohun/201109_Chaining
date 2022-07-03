function Switch(){
  $(".cell").toggleClass("odd");
  $(".cell").toggleClass("even");
}

class Grid{
  constructor(length, parent = ".Board") {
    let i, j;
    $("Body").append("<div class='Board'></div>");

    for(i = 0; i < length; ++i){
      $(parent).append("<div class='Row'></div>");
    }
    for(j = 0; j < length; ++j){
      $(".Row").append("<div class='cell'></div>");
    }

    let nowcell = document.querySelector(".Row:first-child").firstElementChild;

    for(i = 0; i < length; ++i) {
      for (j = 0; j < length; ++j) {
        if (i % 2 == 0) {
          if (j % 2 == 0) {
            nowcell.classList.toggle("odd");
          }
          else {
            nowcell.classList.toggle("even");
          }
        }
        else {
          if (j % 2 == 0) {
            nowcell.classList.toggle("even");
          }
          else {
            nowcell.classList.toggle("odd");
          }
        }

        if (nowcell.nextSibling != null) {
          nowcell = nowcell.nextSibling;
        }

        if (j == length-1 && nowcell.parentElement.nextElementSibling != null) {
          nowcell = nowcell.parentElement.nextElementSibling.firstElementChild;
        }
      }
    }
  }
}
new Grid(7);

setInterval(Switch, 500);

/*
class ListItem{
  constructor(data, parent = "ul"){
    $(parent).append(`<li>${data}</li>`);
  }
}

class UnsignedList{
  constructor(length, parent = "body"){
    let i = 0;
    $(parent).append("<ul style='list-style: none;'></ul>")
    for(i = 0; i < length; ++i){
      new ListItem(i,"ul");
    }
  }
}

new UnsignedList(4);
*/
/*
$("body").append(`<form method="get" target="_blank" action="201109 chaining.html"></form>`)
  .append(`<div id="result"></div>`);
$("form").append(`<input type="text" name="ID"/>`)
  .append(`<input type="text" name="PW"/>`)
  .append(`<input type="submit"/>`);

console.log(document.location.href);
let loc = document.location.href.split(`?`)[1];
let Array = null;
Array = loc.split("&");
$("body").append(`<h1 id="BackUpID"></h1>`).append(`<h1 id="BackUpPW"></h1>`);
//document.getElementById("BackUpID").innerHTML = `${Array[0]}`;
//document.getElementById("BackUpPW").innerHTML = `${Array[1]}`;

document.getElementById("result").innerHTML=`시작페이지 입니다.`
let id = `ID=qwer`;
let pw = `PW=asdf`;

if(`${Array[0]}` == `${id}` && `${Array[1]}` == `${pw}`){
  document.getElementById("result").innerHTML=`로그인 성공, 회원정보 페이지`;
}
else if(`${Array[0]}` == `${id}` && `${Array[1]}` != `${pw}`){
  document.getElementById("result").innerHTML=`비밀번호가 틀렸습니다.`;
}
else{
  document.getElementById("result").innerHTML=`회원정보가 없습니다.`;
}
*/
/*
class MyElement{
  constructor(tag, className, selector = null) {
    this.className = className;

    if(selector)
      this.element = $(selector).append(`<${tag} class="${className}"></${tag}>`);
    else
      this.element = $("body").append(`<${tag} class="${className}"></${tag}>`);
  }
  ADD(tag, className){
    let result = new MyElement(tag, className, `.${this.className}`);
    result.parent = this;
    return result;
  }
}

let a = new MyElement("div", "Board");
a.ADD("div","row")
  .parent
  .ADD("div","row")
  .parent
  .ADD("div","row")
  .ADD("div","cell")
  .parent
  .ADD("div","cell")
  .parent
  .ADD("div","cell");

let nowcell = document.querySelector(".row:first-child").firstElementChild;

for(let i = 0; i<3; ++i) {
  for (let j = 0; j < 3; ++j) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        nowcell.classList.toggle("odd");
      } else {
        nowcell.classList.toggle("even");
      }
    } else {
      if (j % 2 == 0) {
        nowcell.classList.toggle("even");
      } else {
        nowcell.classList.toggle("odd");
      }
    }

    if (nowcell.nextSibling != null) {
      nowcell = nowcell.nextSibling;
    }
    if (j == 2 && nowcell.parentElement.nextElementSibling != null) {
      nowcell = nowcell.parentElement.nextElementSibling.firstElementChild;
    }
  }
}
*/
/*class Tag{
  constructor(parent){
    this.parent = parent;
  }
  Add = (tag, name)=>{
    $(this.parent).append(`<${tag} class = ${name}></${tag}>`);

    return Tag(name);
  }
}

let body = new Tag("body");
body.Add("div","Board").Add("div","row").Add("div","cell");

$(".cell").classList.toggle("even");
*/
/*class Tag{
  constructor(parent){
    this.parent = parent;
  }
  Add = (tag, name)=>{
    $(this.parent).append(`<${tag} class = ${name}></${tag}>`);
    return this;
  }
}

let body = new Tag("body");
body.Add("div", "Board");

let row = new Tag(".Board");
row.Add("div","row").Add("div","row").Add("div","row");

let cell = new Tag(".row");
cell.Add("div", "cell").Add("div", "cell").Add("div", "cell");

let nowcell = document.querySelector(".row:first-child").firstElementChild;

for(let i = 0; i<3; ++i){
  for(let j = 0; j<3; ++j){
    if(i%2 == 0){
      if(j%2 == 0){
        nowcell.classList.toggle("odd");
      }
      else{
        nowcell.classList.toggle("even");
      }
    }
    else{
      if(j%2 == 0){
        nowcell.classList.toggle("even");
      }
      else{
        nowcell.classList.toggle("odd");
      }
    }

    if(nowcell.nextSibling != null){
      nowcell = nowcell.nextSibling;
    }
    if(j==2 && nowcell.parentElement.nextElementSibling != null){
      nowcell = nowcell.parentElement.nextElementSibling.firstElementChild;
    }
  }
}
 */
/*
let a = new Action(document.querySelector("body"));

a.Some((state)=>{
  let Board = $("body").append("<div class='Board'></div>");
  return state;
})

for(let i = 0; i<3; ++i){
  a.Some((state)=>{
      $(".Board").append("<div class='row'></div>");
      return state;
    })

  if(i%2 == 0){
    a.Some((state)=>{
      $(".row:last-child").append("<div class='cell odd'></div>");
      $(".row:last-child").append("<div class='cell even'></div>");
      $(".row:last-child").append("<div class='cell odd'></div>");
      return state;
    })
  }
  else{
    a.Some((state)=>{
      $(".row:last-child").append("<div class='cell even'></div>");
      $(".row:last-child").append("<div class='cell odd'></div>");
      $(".row:last-child").append("<div class='cell even'></div>");
      return state;
    })
  }
}
*/
