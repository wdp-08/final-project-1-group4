var box = document.querySelector('.Form')
var button = document.querySelector('.Kontak')

            button.addEventListener('click', toggleBox)

            function toggleBox(){
                box.classList.toggle('Form')
            }