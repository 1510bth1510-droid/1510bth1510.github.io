const organelles = [
  {
    id: "nucleus",
    name: "핵",
    x: 36,
    y: 21,
    desc: "세포의 유전 정보(DNA)를 담고 있는 세포의 사령탑이다.<br>세포의 성장, 분열, 활동을 조절하는 명령을 내린다."
  },
  {
    id: "nucleolus",
    name: "핵소체",
    x: 38,
    y: 28,
    desc: "핵 안에 있는 진한 색의 작은 구조다.<br>리보솜을 만드는 재료(rRNA)를 합성하는 곳이다."
  },
  {
    id: "envelope",
    name: "핵막",
    x: 32,
    y: 35.7,
    desc: "핵을 둘러싸고 있는 이중막이다.<br>작은 구멍(핵공)을 통해 핵과 세포질 사이의 물질 이동을 조절한다."
  },
  {
    id: "rer",
    name: "거친면 소포체",
    x: 61,
    y: 28,
    desc: "표면에 리보솜이 붙어 있어 울퉁불퉁해 보이는 소포체다.<br>리보솜에서 만든 단백질을 다듬고 이동시키는 통로 역할을 한다."
  },
  {
    id: "ser",
    name: "매끈면 소포체",
    x: 70,
    y: 36,
    desc: "리보솜이 없어 매끈한 모양의 소포체다.<br>지질(지방) 합성과 해독 작용을 담당한다."
  },
  {
    id: "ribosome",
    name: "리보솜",
    x: 75,
    y: 49,
    desc: "세포질과 소포체 표면에 흩어져 있는 작은 알갱이다.<br>DNA의 정보를 읽어 단백질을 만든다."
  },
  {
    id: "mito1",
    name: "미토콘드리아",
    x: 25,
    y: 51,
    desc: "영양소를 분해해 세포가 사용할 수 있는 에너지(ATP)를 만들어낸다."
  },
  {
    id: "golgi",
    name: "골지체",
    x: 53,
    y: 71,
    desc: "납작한 주머니가 층층이 쌓인 모양이다.<br>소포체에서 온 단백질을 포장하고 목적지에 맞게 분류해 내보낸다."
  },
  {
    id: "lysosome",
    name: "리소좀",
    x: 27,
    y: 73,
    desc: "소화 효소를 담고 있는 작은 주머니다.<br>세포 안의 불필요한 물질이나 노폐물을 분해한다."
  },
  {
    id: "membrane",
    name: "세포막",
    x: 73,
    y: 73.5,
    desc: "세포를 둘러싸는 얇은 막이다.<br>필요한 물질만 선택적으로 드나들게 한다."
  },
  {
    id: "cytoplasm",
    name: "세포질",
    x: 61,
    y: 81,
    desc: "세포막 안, 핵을 제외한 나머지 공간을 채우는 액체다.<br>여러 세포 소기관이 떠 있으며 다양한 화학 반응이 일어난다."
  }
];

const stage = document.getElementById("stage");
const panel = document.getElementById("panel");
const legend = document.getElementById("legend");

function select(id) {
  const item = organelles.find((organelle) => organelle.id === id);
  if (!item) return;

  panel.innerHTML = `<h2>${item.name}</h2><p>${item.desc}</p>`;

  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.toggle("active", dot.dataset.id === id);
  });

  document.querySelectorAll(".legend button").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === id);
  });
}

organelles.forEach((organelle) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.style.left = `${organelle.x}%`;
  dot.style.top = `${organelle.y}%`;
  dot.dataset.id = organelle.id;
  dot.setAttribute("aria-label", organelle.name);
  dot.title = organelle.name;
  dot.addEventListener("click", () => select(organelle.id));
  stage.appendChild(dot);

  const button = document.createElement("button");
  button.textContent = organelle.name;
  button.dataset.id = organelle.id;
  button.addEventListener("click", () => select(organelle.id));
  legend.appendChild(button);
});
