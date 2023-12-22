const btn = document.getElementById("ab");
const container = document.getElementById("container");

btn.addEventListener('click', function() {
  switch(Math.floor(Math.random() * 10)) {
    case 0: container.innerHTML += "<div class='b1'></div>"; break;
    case 1: container.innerHTML += "<div class='b2'></div>"; break;
    case 2: container.innerHTML += "<div class='b3'></div>"; break;
    case 3: container.innerHTML += "<div class='b4'></div>"; break;
    case 4: container.innerHTML += "<div class='b5'></div>"; break;
    case 5: container.innerHTML += "<div class='b6'></div>"; break;
    case 6: container.innerHTML += "<div class='b7'></div>"; break;
    case 7: container.innerHTML += "<div class='b8'></div>"; break;
  }
});