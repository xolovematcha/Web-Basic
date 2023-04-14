function zoomIn(img) {
    img.classList.add("zoom");
  }
  
  function zoomOut(img) {
    img.classList.remove("zoom");
  }
// menambahkan dan menghapus kelas zoom dari elemen gambar


function updateClock() {
    const now = new Date();
  
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    const clock = document.querySelector("#clock");
    clock.querySelector("#hours").textContent = hours;
    clock.querySelector("#minutes").textContent = minutes;
    clock.querySelector("#seconds").textContent = seconds;
  }
  
  setInterval(updateClock, 1000);
  // fungsi untuk menambahkan tampilan jam, menit, serta detiknya sesuai jam default sekarang
