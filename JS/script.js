var value;
function changeColor(id) {
  let changeColorBg = document.getElementById(id);
  if (value != undefined) {
    console.log(`Inner-if: ${value} and class: btn-${value}`);
    document.getElementById(`btn-${value}`).classList.remove("bg-orangeCustom");
  }
  changeColorBg.classList.toggle("bg-orangeCustom");
  value = changeColorBg.value;
  document.getElementById("dummy-class").addEventListener("click", () => {
    document.getElementById("rating-component").classList.add("hidden");
    document.getElementById("rating-component-1").classList.remove("hidden");
    document.getElementById(
      "innText"
    ).innerHTML = `You selected ${value} out of 5`;

    setTimeout(() => {
      console.log("test");
      document.getElementById("rating-component-1").classList.add("hidden");
      document.getElementById("rating-component").classList.remove("hidden");
      document
        .getElementById(`btn-${value}`)
        .classList.remove("bg-orangeCustom");
    }, "3000");
  });
}
