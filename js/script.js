// خلفية Particles
const canvas = document.getElementById("bgParticles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for(let i=0; i<120; i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(0,255,255,0.7)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if(p.x<0 || p.x>canvas.width) p.dx *= -1;
        if(p.y<0 || p.y>canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
}
animate();

<script>
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

let currentIndex = 0;

// افتح الصورة
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

// إظهار الصورة حسب الرقم
function showImage(){
  lightboxImg.src = galleryImages[currentIndex].src;
}

// إغلاق
closeBtn.addEventListener('click', () => {
  lightbox.style.display = "none";
});

// تنقل يمين/يسار
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage();
});

// إغلاق عند الضغط خارج الصورة
lightbox.addEventListener('click', (e)=>{
  if(e.target === lightbox){
    lightbox.style.display = "none";
  }
});
</script>
