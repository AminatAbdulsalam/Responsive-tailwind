const list = document.querySelector("ion-icon");

  const uls = document.querySelector('ul');

  list.addEventListener("click",() => {
    uls.classList.toggle("hidden");
    

  })
