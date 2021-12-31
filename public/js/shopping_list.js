let myItems = [];
let checks = []
const checklist = document.getElementById("checklist");
const inputEl = document.querySelector("#input-el");
const inputBtn = document.getElementById("input-btn");
const deleteAllBtn = document.getElementById("deleteAll-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.querySelector("#ul-el");

let itmsFromLocalStorage = JSON.parse( localStorage.getItem("myItems") )
let checksFromLocalStorage = JSON.parse( localStorage.getItem("checks") )

render(myItems);

function render(itms) {
  let listItems ="";
  for (let i = 0; i < itms.length; i++) {
    listItems += `
    <li>
      <div class="checklist-item">
        <input name="myCheckbox" type="checkbox" id="${itms[i]}">
        <label class="strikethrough" for="${itms[i]}">${itms[i]}</label>
      </div>
    </li>
    `;

  }
  ulEl.innerHTML = listItems;
  let allchecks = document.querySelectorAll(`input[name="myCheckbox" ]`);
  allchecks.forEach((myCheckbox, index) => {
    allchecks[index].checked = checks[index];
  });

}

if (itmsFromLocalStorage) {
  myItems = itmsFromLocalStorage;
  checks = checksFromLocalStorage;
  render(myItems);

}

ulEl.addEventListener("click", () => {
  let allchecks = document.querySelectorAll(`input[name="myCheckbox" ]`);
  allchecks.forEach((myCheckbox, index) => {
    checks[index] = allchecks[index].checked;
  });
  localStorage.setItem("checks", JSON.stringify(checks));

});

function addItem() {
  if (inputEl.value.trim() !=="") {
    myItems.push(inputEl.value);
    checks.push(false)
    inputEl.value="";
    localStorage.setItem("myItems", JSON.stringify(myItems));
    localStorage.setItem("checks", JSON.stringify(checks));
    render(myItems);
  }

}

inputBtn.addEventListener("click", () => {
  addItem();
});

inputEl.addEventListener('keyup', (e) => {
  const enterKey= 13
  if(e.keyCode === enterKey) {
    addItem();
  }
})


deleteBtn.addEventListener('click', () => {
  let checkboxes = document.querySelectorAll(`input[name="myCheckbox" ]:checked`);
  for(let i = 0; i < myItems.length; i++){
    for(let j = 0; j < checkboxes.length; j++){
      if (myItems[i] === checkboxes[j].id) {

        myItems.splice(i, 1);
        checks.splice(i, 1)
      }

    }
  }
  render(myItems);
  localStorage.clear();
  localStorage.setItem("myItems", JSON.stringify(myItems));
  localStorage.setItem("checks", JSON.stringify(checks));
});

deleteAllBtn.addEventListener("click", () => {
  localStorage.clear();
  myItems = []
  checks = []
  render(myItems);
});