//변수 설정
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = document.querySelectorAll("audio");

let i = 0;
const degA = 45;

let num = 0; // d이전, 다음 버튼에서 사용하게 될 index qustn
let active = 0; // 활성화 함수에서 사용하게 될 index 변수
let len = lists.length - 1;

for (let el of lists) {
  el.style.transform = `rotate(${degA * i}deg) translateY(-100vh)`;

  //각각 article의 .pic 에 백그라운드 이미지를 넣어줌
  let pic = el.querySelector(".pic");
  pic.style.backgroundImage = `url(../img/member${i + 1}.jpg)`;

  i++;

  //오디오는 각 아티클 안에 존재하므로 각 아티클을 반복하는 이 반복문 안에서 플레이버튼, 일시정지, 로드라는 이벤트가 발생

  //플레이 일시정지, 로드는 각각의 아티클 안에서 반복을 돌면서 컨택되어야 한다
  const play = el.querySelector(".play");
  const pause = el.querySelector(".pause");
  const load = el.querySelector(".load");

  //play 버튼을 클릭했을 때 음악이 재생 되어야 함
  play.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    // 사용자가 클릭한 플레이 버튼을 지목해서(currentTarget) 가장 가까이 있는 아티클을 찾고 (부모 article) 클래스 on이 있는지 없는지 여부를 찾아주는 contains라는 메서드를 붙여 isActive에 변수로 저장한다 contain은 boolean 값으로 확인할 수 있음!!
    //활성화가 되어있다면 플레이를 하고 on을 붙여 회전

    console.log(isActive);

    if (isActive) {
      //true 이면 {}안의 코드가 실행되고 false면 무시한다
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });

  pause.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    // 사용자가 클릭한 플레이 버튼을 지목해서(currentTarget) 가장 가까이 있는 아티클을 찾고 (부모 article) 클래스 on이 있는지 없는지 여부를 찾아주는 contains라는 메서드를 붙여 isActive에 변수로 저장한다 contain은 boolean 값으로 확인할 수 있음!!
    //활성화가 되어있다면 플레이를 하고 on을 붙여 회전

    console.log(isActive);

    if (isActive) {
      //true 이면 {}안의 코드가 실행되고 false면 무시한다
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.remove("on");
      e.currentTarget.closest("article").querySelector("audio").pause();
    }
  });

  load.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    // 사용자가 클릭한 플레이 버튼을 지목해서(currentTarget) 가장 가까이 있는 아티클을 찾고 (부모 article) 클래스 on이 있는지 없는지 여부를 찾아주는 contains라는 메서드를 붙여 isActive에 변수로 저장한다 contain은 boolean 값으로 확인할 수 있음!!
    //활성화가 되어있다면 플레이를 하고 on을 붙여 회전

    console.log(isActive);

    if (isActive) {
      //true 이면 {}안의 코드가 실행되고 false면 무시한다
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").load();
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
}

next.addEventListener("click", () => {
  initMusic();
  num--;
  // 다음 버튼 클릭 시 45deg로 전체 section이 회전한다
  frame.style.transform = `rotate(${num * degA}deg)`;
  //중요한 점은 무한 루트로 회전 되어야 한다

  if (active == len) {
    active = 0;
  } else {
    active++; // 보통 상태에서는 index 값은 증가
  }
  activation(lists, active);
});

prev.addEventListener("click", () => {
  initMusic();
  num++;

  frame.style.transform = `rotate(${num * degA}deg)`;

  if (active == 0) {
    active = len;
  } else {
    active--;
  }

  //삼항연산자
  //active === 0 ? (active=len) : active--;
  activation(lists, active);
});

function activation(lists, index) {
  for (let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}

function initMusic() {
  for (let el of audio) {
    el.pause();
    el.load();
    el.closest("article").querySelector(".pic").classList.remove("on");
  }
}
