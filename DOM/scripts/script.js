let submit = document.querySelector('button');
submit.onclick = addCar();

function addCar() {
  let mark = document.getElementById('mark');
  let model = document.getElementById('model');
  let type = document.getElementById('type');
  let color = document.getElementById('color');
  let date = document.getElementById('date');

  if(validation(mark, model, date)) {
    cars.push([mark.value, model.value, type.value, color.vlaue, date.value]);
    refreshTable();
  }
}

function refreshTable() {
  let table = document.getElementById('body');
  table.innerHTML = "";

  for (let i = 0; i < cars.length; i++) {
    table.innerHTML += `<tr>
      <td>${cars[i][0]}</td>
      <td>${cars[i][1]}</td>
      <td>${cars[i][2]}</td>
      <td>${cars[i][3]}</td>
      <td>${cars[i][4]}</td>
    </tr>
    `
  }
}

function validation(mark, model, date) {
  if (mark.textContent == "")  {
    confirm('Mark is empty');
    return false;
  }

  if (model.textContent == "") {
    confirm('Model is empty');
    return false;
  } 

  if (!date.value) {
   confirm('Date is empty');
   return false;
  }

  return true;
}

let cars = [];

let searchBox = document.querySelector('div.search > input');
searchBox.onchange = search();

function search() {
  searchBox.value;
}
