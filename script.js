function showPage(n){
    document.querySelectorAll('.page').forEach(p=>{
        p.classList.remove('active');
    });

    document.getElementById('page'+n).classList.add('active');
}

/* หัวใจลอย */
for(let i=0;i<20;i++){

    let h=document.createElement('div');

    h.className='heart';
    h.innerHTML='❤️';

    h.style.left=Math.random()*100+'%';
    h.style.animationDelay=Math.random()*5+'s';

    document.getElementById('hearts').appendChild(h);
}

/* YES */
function yesAnswer(){

    createFireworks();

    setTimeout(()=>{
        showPage(5);
    },2000);
}

/* NO */
function noAnswer(){

    const confirmNo = confirm("แน่ใจนะ? 🥺");

    if(confirmNo){
        showPage(1);
    }
}

/* ปุ่ม NO วิ่งหนี */
document.addEventListener("mousemove",(e)=>{

    const noBtn = document.getElementById("noBtn");

    if(!noBtn) return;

    if(document.getElementById("page4").classList.contains("active")){

        const rect = noBtn.getBoundingClientRect();

        const distance = Math.hypot(
            e.clientX-(rect.left+rect.width/2),
            e.clientY-(rect.top+rect.height/2)
        );

        if(distance < 120){

            const x = Math.random()*200-100;
            const y = Math.random()*100-50;

            noBtn.style.transform =
                `translate(${x}px, ${y}px)`;
        }
    }
});

/* พลุหัวใจ */
function createFireworks(){

    for(let i=0;i<25;i++){

        const heart=document.createElement("div");

        heart.className="firework";
        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";
        heart.style.top=Math.random()*80+"vh";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },1500);
    }
}