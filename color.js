const colors = document.getElementsByClassName("canvas__color");
const ThickBtn = document.getElementById("jsChange__thick");
const LightBtn = document.getElementById("jsChange__light");
const ResetBtn = document.getElementById("JsChange__reset");

//색깔이 점점더 진해지기도 하고 , 점점더 옅어지기도 하는 기능을 vanilla js 를 통해 만들어 보고 싶다.
//vanilla js 를 통해서 만들수 있는 방법은 setTimes를 사용해서 시간의 흐름이 따라 변화하는 모습을 보여주고 싶고
//thick 버튼과 light 버튼을 만들어서 버튼을 누를때마다 색이 변화하는 모습을
//반응형으로 나타내고 싶다.

let opacity = 1;
let = true;
let color = "";
let defaultTarget = document.createElement("div");
defaultTarget.setAttribute("style", "background-color:rgba(255,0,0)");
defaultTarget.setAttribute("class", "canvas__color");

function handleColorClick(event) {
  defaultTarget = event.target;
  opacity = 1;
}

Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColorClick)
);

const startLight = () => {
  color = setInterval(lightButton, 50);
};

function stopLight() {
  clearInterval(color);
}

function lightButton() {
  const getColor = defaultTarget.style.backgroundColor;

  var rgb = getColor.match(/\d+/g); // match에 관한 함수 찾아보기 , 소수점 이하값도 가져오게 표현하는 방법에 대해서 알아보자
  console.log(rgb);

  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];

  const setColor = `background-color:rgb(${r},${g},${b},${opacity})`;
  defaultTarget.setAttribute("style", setColor);
  opacity = opacity - 0.02;
  console.log(opacity);
  if (opacity < 0) {
    opacity = 0;
  }
}

const startThick = () => {
  color = setInterval(thickButton, 50);
};

function stopThick() {
  clearInterval(color);
}

function thickButton() {
  const getColor = defaultTarget.style.backgroundColor;

  var rgb = getColor.match(/\d+/g); // match에 관한 함수 찾아보기

  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];

  const setColor = `background-color:rgb(${r},${g},${b},${opacity})`;
  defaultTarget.setAttribute("style", setColor);
  opacity = opacity + 0.02;
  console.log(opacity);
  if (opacity > 1) {
    opacity = 1;
  }
}
function resetBtn() {
  Array.from(colors).forEach(color => {
    const getColor = color.style.backgroundColor;
    var rgba = getColor.match(/\d+/g); // \d =
    console.log(rgba);
  });
}

LightBtn.addEventListener("mousedown", startLight);
LightBtn.addEventListener("mouseup", stopLight);
ThickBtn.addEventListener("mousedown", startThick);
ThickBtn.addEventListener("mouseup", stopThick);
ResetBtn.addEventListener("click", resetBtn);
