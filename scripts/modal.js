function showForm() {
    const triggers = document.querySelectorAll('.card-btn'),
        popup = document.querySelector('.popup'),
        close = popup.querySelector('.close'),
        popupImg = popup.querySelector('img'),
        cardTitle = popup.querySelector('.card-title'),
        price = popup.querySelector('.prices'),
        overlay = popup.querySelector('.form-overlay');


    console.log(price);

    function openPopup() {

        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';

    }

    function closePopup() {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }


    triggers.forEach(btn => {
        btn.addEventListener('click', () => {
            let cardImg = btn.parentNode.querySelector('img');
            let src = cardImg.getAttribute('src');
            popupImg.setAttribute('src', src);
            cardTitle.innerHTML = btn.parentNode.querySelector('.card-title').innerHTML;

            price.innerHTML = btn.parentNode.querySelector('.prices').innerHTML;
            console.log(src);
            console.log(btn.parentNode.querySelector('.prices'))
            openPopup();
        });
    })
    close.addEventListener('click', () => {
        closePopup();
    })
    overlay.addEventListener('click', () => {
        closePopup();
    })

}
showForm();