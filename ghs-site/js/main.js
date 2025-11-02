    // Mobile menu
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    burger?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
});

    // Simple slider
    const slides = document.getElementById('slides');
    const dots = document.getElementById('dots');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let index = 0;
    const total = slides.children.length;

    function renderDots(){
    dots.innerHTML = '';
    for(let i=0;i<total;i++){
    const d = document.createElement('button');
    d.className = 'dot' + (i===index ? ' active' : '');
    d.setAttribute('aria-label', `Слайд ${i+1}`);
    d.addEventListener('click', ()=>{ index = i; update(); });
    dots.appendChild(d);
}
}

    function update(){
    slides.style.transform = `translateX(-${index*100}%)`;
    const ds = dots.querySelectorAll('.dot');
    ds.forEach((el,i)=>{
    el.classList.toggle('active', i===index);
});
}

    prev.addEventListener('click', ()=>{ index = (index-1+total)%total; update(); });
    next.addEventListener('click', ()=>{ index = (index+1)%total; update(); });

    renderDots();
    update();

    // Keyboard support
    document.addEventListener('keydown', (e)=>{
    if(e.key==='ArrowLeft') prev.click();
    if(e.key==='ArrowRight') next.click();
});
