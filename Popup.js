export default class Popup {
  #popupElem;

  constructor(object) {
    this.#popupElem = document.createElement("div");
    this.#popupElem.classList.add("pop-up");
    Object.entries(object).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  set position(value) {
    console.log(value);
    const select = `.pop-up-container[data-position="${value}"]`;
    const container = document.querySelector(select) || createContainer(value);
    container.append(this.#popupElem);
    console.log(container);
  }

  set titleSize(value) {
    console.log(value);
    const select = `.title[data-size="${value}"]`;
    const container = document.querySelector(select) || createTitle(value);
    //const select2=`.`
    //const popup= document.querySelector()
    console.log(container);
    this.#popupElem.append(container);
  }

  set title(value) {
    console.log(value);
    const select = `.title`;
    const container = document.querySelector(select);
    console.log(container);
    container.textContent = value;
  }

  set author(value) {
    console.log(value);
    const select = `.author`;
    const container = document.querySelector(select) || createAuthor(value);
    console.log(container);
    this.#popupElem.append(container);
  }
  set summary(value) {
    console.log(value);
    const select = `.summary`;
    const container = document.querySelector(select) || createSummary(value);
    console.log(container);
    this.#popupElem.append(container);
  }
  set date(value) {
    console.log(value);
    const select = `.date`;
    const container = document.querySelector(select) || createDate(value);
    console.log(container);
    this.#popupElem.append(container);
  }

  set languages(value) {
    console.log(value);
    const select = `.language`;
    const container = document.querySelector(select) || createLanguage(value);
    console.log(container);
    this.#popupElem.append(container);
  }

  set rating(value) {
    if (value == "true") {
      const select = `.rate`;
      const container = document.querySelector(select) || createRating(value);
      this.#popupElem.append(container);
    }
  }

  set size(value) {
    console.log(value);
    const select = `.wrap[data-size="${value}"]`;
    const container = document.querySelector(select);
    container.dataset.size = value;
  }

  //display() {
  //const popupElem = document.createElement("div");
  //popupElem.classList.add("pop-up");
  //}

  close() {}
}

function createContainer(position) {
  const container = document.createElement("div");
  container.classList.add("pop-up-container");
  container.dataset.position = position;
  document.body.append(container);
  return container;
}

function createAuthor(value) {
  const container = document.createElement("div");
  container.classList.add("wrap");
  container.dataset.size = "medium";
  const label = document.createElement("div");
  label.classList.add("author-label");
  label.textContent = "Author:";
  const wrap = document.createElement("div");
  wrap.classList.add("author");
  wrap.textContent = value;
  container.append(label);
  container.append(wrap);
  return container;
}
function createSummary(value) {
  const container = document.createElement("div");
  container.classList.add("wrap");
  container.dataset.size = "medium";
  const label = document.createElement("div");
  label.classList.add("summary-label");
  label.textContent = "Summary:";
  const wrap = document.createElement("div");
  wrap.classList.add("summary");
  wrap.textContent = value;
  container.append(label);
  container.append(wrap);
  return container;
}

function createDate(value) {
  const container = document.createElement("div");
  container.classList.add("wrap");
  container.dataset.size = "medium";
  const label = document.createElement("div");
  label.classList.add("date-label");
  label.textContent = "Date Published:";
  const wrap = document.createElement("div");
  wrap.classList.add("date");
  wrap.textContent = value;
  container.append(label);
  container.append(wrap);
  return container;
}

function createLanguage(value) {
  const container = document.createElement("div");
  container.classList.add("wrap");
  container.dataset.size = "medium";
  const label = document.createElement("div");
  label.classList.add("language-label");
  label.textContent = "Language(s):";
  const wrap = document.createElement("div");
  wrap.classList.add("language");
  wrap.textContent = value;
  container.append(label);
  container.append(wrap);
  return container;
}
function createRating(value) {
  const container = document.createElement("div");
  container.classList.add("wrap");
  container.dataset.size = "medium";
  const label = document.createElement("div");
  label.classList.add("rate-label");
  label.textContent = "Rating:";
  const wrap = document.createElement("div");
  wrap.classList.add("rate");
  const star = document.createElement("a");
  star.innerHTML = "⭐";
  const star2 = document.createElement("a");
  star2.innerHTML = "⭐";
  const star3 = document.createElement("a");
  star3.innerHTML = "⭐";
  const star4 = document.createElement("a");
  star4.innerHTML = "⭐";
  const star5 = document.createElement("a");
  star5.innerHTML = "⭐";
  wrap.append(star, star2, star3, star4, star5);
  container.append(label);
  container.append(wrap);
  return container;
}

function createTitle(size) {
  const wrap = document.createElement("div");
  wrap.classList.add("title");
  wrap.dataset.size = size;
  document.body.append(wrap);
  return wrap;
}
