window.addEventListener("DOMContentLoaded", (event) => {
  let arnold = document.querySelector(`#obiwan`);
  arnold.addEventListener("click", (event) => {
    if (event.detail === 3) {
      let heading = document.querySelector("h1");
      let changeme = document.querySelector(`#changeme`);
      changeme.innerText = `Oh wait....What is he doing?`;
      heading.innerText = "Seems like you have found him.";
      const parent = arnold.parentElement;
      parent.removeChild(arnold);
      let newImage = document.createElement("img");
      newImage.src = "./img/anakin.webp";
      newImage.alt = "Anakin Kill";
      parent.appendChild(newImage);
    }
  });
});
