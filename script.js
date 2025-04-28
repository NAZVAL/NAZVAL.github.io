const cardData = [
  { title: "Как всё устроено", item1: "1", item2: "4" },
  { title: "Вводный курс", item1: "5", item2: "15" },
  { title: "0 спринт. Подготовка к работе", item1: "6", item2: "9" },
  { title: "1 спринт. Семантика и лэйаут", item1: "14", item2: "54" },
  // добавляй сколько нужно
];

const container = document.getElementById("course-cards");

cardData.forEach(({ title, item1, item2 }) => {
  const card = document.createElement("div");
  card.className = "content_lessons_curseProgram_cardContainer_card";
  card.innerHTML = `
      <div class="content_lessons_curseProgram_cardContainer_card_privew"></div>
      <div class="content_lessons_curseProgram_cardContainer_card_description">
        <h4 class="content_lessons_curseProgram_cardContainer_card_description_title">
          ${title}
        </h4>
        <div class="content_lessons_curseProgram_cardContainer_card_description_lessonProgres">
            <span class="content_lessons_curseProgram_cardContainer_card_description_lessonProgres_infoTitle">Пройден</span>
            <span class="content_lessons_curseProgram_cardContainer_card_description_lessonProgres_infoItem">${item1} тема</span>
            <span class="content_lessons_curseProgram_cardContainer_card_description_lessonProgres_infoItem">${item2} ч.</span>
        </div>
        <!-- Дивайдер внутри карточки -->
        <div class="content_lessons_curseProgram_cardContainer_card_description_lessonProgres_progres"></div>
      </div>
  `;
  container.appendChild(card);
});
