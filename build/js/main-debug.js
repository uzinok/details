window.onload = function () {
    // ролучаем все спойлеры
    let arrDetails = document.querySelectorAll('details');

    // перебираем все спойлееры для получения необходимых элементов и прослушивания событий
    for (let i = 0; i < arrDetails.length; i++) {

        // по кнопке summary будем отслеживать клик
        let elemSummary;
        // если summary отсутствует - добавляем
        if (!(arrDetails[i].querySelector('summary'))) {
            elemSummary = document.createElement('summary');
            elemSummary.innerHTML = 'подробнее';

            arrDetails[i].insertBefore(elemSummary, arrDetails[i].querySelector('.details_hide'))
        }
        // если summary есть - получаем 
        else {
            elemSummary = arrDetails[i].querySelector('summary');
        }

        // для старых браузеров скрываем контент что бы не было доступа к интерактивным элементам
        arrDetails[i].classList.add('details_h');

        // отслеживаем клик
        elemSummary.addEventListener('click', function (event) {
            
            // получаем родительский блок
            let parentBlock = this.parentNode;

            // если открыт спойлер
            if (parentBlock.classList.contains('details-visible')) {
                // отменяем действие по умолчанию для браузеров поддерживоющих <details>
                event.preventDefault();
                // с анимацией скрываем контент
                parentBlock.classList.remove('details-visible');

                // после завершения анимации
                setTimeout(function () {
                    // для старых браузеров скрываем контент что бы не было доступа к интерактивным элементам
                    parentBlock.classList.add('details_h');
                    // для новых - удаляем атрибут open
                    parentBlock.open = false;
                }, 200)
            }
            // если спойлер закрыт 
            else {
                // для старых браузеров удаляем display none для контента
                parentBlock.classList.remove('details_h');
                // через минимальный промежуток времени запускаем анимацию css появления контента
                setTimeout(function () {
                    parentBlock.classList.add('details-visible');
                }, 5)
            }
        })


    }
};