function modal() {
    // Modul
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        description = document.querySelector('.description-btn');

    function popUp(elem) {
        elem.addEventListener('click', function () {
            overlay.style.display = 'block';
            elem.classList.add('more-spash');
            document.body.style.overflow = 'hidden';
        });
    }
    
    popUp(more);
    popUp(description);
// ---> в функцию:
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        close.classList.remove('more-spash');  
        document.body.style.overflow = '';
    }); 
}

module.exports = modal;