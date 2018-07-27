const icons = [
    "https://image.flaticon.com/icons/svg/189/189001.svg",
    "https://image.flaticon.com/icons/svg/188/188987.svg",
    "https://image.flaticon.com/icons/svg/188/188990.svg",
    "https://image.flaticon.com/icons/svg/188/188989.svg",
    "https://image.flaticon.com/icons/svg/188/188993.svg",
    "https://image.flaticon.com/icons/svg/189/189000.svg",
    "https://image.flaticon.com/icons/svg/188/188995.svg",
    "https://image.flaticon.com/icons/svg/188/188997.svg",
  ];
  
  for(i = 0; i < icons.length; i++){
    let img = document.createElement("img");
    img.src = icons[i];
    document.body.appendChild(img);
    
    img.style.top = Math.random() * (window.innerHeight - 50) + "px";
    img.style.left = Math.random() * (window.innerWidth - 50) + "px";
    img.speedX = (Math.random() - 0.5) * 3;
    img.speedY = (Math.random() - 0.5) * 3;
    
    
    img.addEventListener('click', function() {
      img.parentElement.removeChild(img)
    });
  };
  
  setInterval(function() {
    let imgs = document.querySelectorAll("img");
    
    imgs.forEach(function(img) {
      let top = parseFloat(img.style.top);
      img.style.top = (top + img.speedY) + "px";
      let left = parseFloat(img.style.left);
      img.style.left = (left + img.speedX) + "px";
      
      if (parseFloat(img.style.left) <=0) {
        img.speedX = Math.abs(img.speedX);
      }
      if (parseFloat(img.style.top) <=0) {
        img.speedY = Math.abs(img.speedY);
      }
      if (parseFloat(img.style.left) >= window.innerWidth - 50) {
        img.speedX = -Math.abs(img.speedX);
      }
      if (parseFloat(img.style.top) >= window.innerHeight - 50) {
        img.speedY = -Math.abs(img.speedY);
      }
    })
  }, 1000/200);