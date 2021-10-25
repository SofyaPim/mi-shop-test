function showCards() {
    const dailyBtn = document.querySelector('[data-dailybtn]'),
        erBtn = document.querySelector('[data-erbtn]'),
        dailyCards = document.querySelectorAll('[data-daily]'),
        erCards = document.querySelectorAll('[data-er]');
    dailyBtn.classList.add('active');
    erCards.forEach(item => {
        item.style.display = 'none';
    });
    erBtn.addEventListener('click', (e) => {
        e.target.classList.add('active');
        dailyBtn.classList.remove('active');
        erCards.forEach(item => {
            item.style.display = 'flex';
        });
        dailyCards.forEach(item => {
            item.style.display = 'none';
        });
    })
    dailyBtn.addEventListener('click', (e) => {
        e.target.classList.add('active');
        erBtn.classList.remove('active');
        dailyCards.forEach(item => {
            item.style.display = 'flex';
        });
        erCards.forEach(item => {
            item.style.display = 'none';
        });
    })

}
showCards();