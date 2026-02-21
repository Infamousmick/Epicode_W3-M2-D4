const btnHideList = document.querySelectorAll(".button-hide");
btnHideList.forEach((element) => {
  element.addEventListener("click", () => {
    const target = document.querySelector(
      element.getAttribute("button-target"),
    );
    console.log(target);
    target.classList.toggle("collapse");

    const arrowElement = document.querySelector("#" + element.id + " i");
    arrowElement.classList.toggle("fa-chevron-down");
    arrowElement.classList.toggle("fa-chevron-up");
  });
});
