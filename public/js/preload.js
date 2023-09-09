var preload = document.getElementById('preload');
const aBg = document.querySelector('.cent');
console.log(preload);
window.addEventListener('load' , () => {
    const promise1 = new Promise((resolve, reject) => {
        aBg.style.display = 'none'
        preload.style.animation = "try 1s";
        resolve('Success!');
      });
      promise1.then((value) => {
        const myTimeout = setTimeout(() => {
            preload.style.display = "none";
        }, 1000);

        // preload.style.display = "none";
        console.log(value);
        // Expected output: "Success!"
      });
    // preload.style.animation = "try 1s";
    // preload.style.animation = "try 1s";
});