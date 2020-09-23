window.addEventListener("DOMContentLoaded", (event) => {
  let arnold = document.querySelector(`#arnold`);
  arnold.addEventListener("click", (event) => {
    if (event.detail === 3) {
      let heading = document.querySelector("h1");
      let changeme = document.querySelector(`#changeme`);
      changeme.innerText = `Who are you?`;
      heading.innerText = "Why are you still here?";
      const parent = arnold.parentElement;
      parent.removeChild(arnold);
      let newImage = document.createElement("img");
      newImage.src = "./img/click.webp";
      newImage.alt = "You should go now.";
      parent.appendChild(newImage);
    }
  });
});
