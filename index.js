const crypt = document.querySelector('.tibia__container-crypt_alive');


const loop = setInterval(() => {
    

    const cryptPosition = crypt.offsetTop;

    if(cryptPosition >= 430) {
        
        crypt.style.animation = 'none';
        crypt.style.top = `${cryptPosition}px`;

        crypt.src = "./assets/Crypt_Defiler_Cadaver.gif";
        crypt.style.width = "120px";
        crypt.style.marginTop = "140px";
        crypt.style.marginLeft = "40px";
        crypt.style.position = "absolute";

        clearInterval(loop);
    }

}, 10);