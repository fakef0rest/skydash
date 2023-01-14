const modalActivators = document.querySelectorAll('.modal-activator'),
      modalBlock = document.querySelector('.modal-block'),
      body = document.querySelector('body'),
      modalBlockButton = document.getElementById('modal-block');


modalActivators.forEach((item) => {
    item.onclick = function() {
        modalBlock.classList.add('modal-active');
        body.classList.add('body-background');
        document.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                modalBlock.classList.remove('modal-active');
                body.classList.remove('body-background');
            }
        });
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('body-background')) {
                modalBlock.classList.remove('modal-active');
                body.classList.remove('body-background');
            }
            if (event.target.classList.contains('modal-close-button')) {
                modalBlock.classList.remove('modal-active');
                body.classList.remove('body-background');
            } 
            if (event.target.classList.contains('modal-send-button')) {
                modalBlock.classList.remove('modal-active');
                body.classList.remove('body-background');
            } 
        })
    }

})