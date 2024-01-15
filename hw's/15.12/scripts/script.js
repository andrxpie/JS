let submit = document.querySelector('button');
submit.onclick = addCar;

function addCar() {
  let mark = document.getElementById('mark');
  let model = document.getElementById('model');
  let type = document.getElementById('type');
  let color = document.getElementById('color');
  let date = document.getElementById('date');

  if(validation(mark, model, date)) {
    cars.push([mark.value, model.value, type.value, color.value, date.value]);

    mark.value = "";
    model.value = "";
    type.value = "Coupe";
    color.value = "Red";
    date.value = null;

    console.log(cars);
    refreshTable();
  }
}

let table = document.getElementById('body');

function refreshTable() {
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
  if (mark.value == "")  {
    confirm('Mark is empty');
    return false;
  }

  if (model.value == "") {
    confirm('Model is empty');
    return false;
  } 

  if (!date.value) {
   confirm('Date is empty');
   return false;
  }

  return true;
}

let cars = [['Audi', 'RS 7', 'Sport', 'White', '2024-01-15']];
refreshTable();

let searchBox = document.querySelector('div.search > input');
searchBox.oninput = search;

function search() {
  table.innerHTML = "";

  if(searchBox.value == "")
    refreshTable();

  for (let i = 0; i < cars.length; i++) {
    if(searchBox.value == cars[i][0] 
      || searchBox.value == cars[i][1]
      || searchBox.value == cars[i][2]
      || searchBox.value == cars[i][3]
      || searchBox.value == cars[i][4]) {
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
}

let clearBtn = document.getElementById('clear');
clearBtn.onclick = clear;

function clear() {
  table.innerHTML = "";
  cars = [];
}
