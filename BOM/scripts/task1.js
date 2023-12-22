let btn = document.querySelector("button");
btn.onclick = () => {
  let myw = window.open(
    "",
    "blank",
    "height=410,width=410"
  );

  setTimeout(() => {
    myw.resizeTo(500, 500);
  }, 2000);

  setTimeout(() => {
    myw.moveTo(200, 200);
  }, 4000);

  setTimeout(() => {
    myw.close();
  }, 6000);
};
