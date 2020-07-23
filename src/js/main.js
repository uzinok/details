window.onload = function () {
    let arrDetails = document.querySelectorAll('details');

    for (let i = 0; i < arrDetails.length; i++) {
        arrDetails[i].addEventListener('click', function (event) {
            if (this.classList.contains('details-open')) {
                event.preventDefault();
                this.classList.remove('details-open');
                setTimeout(function () {
                    arrDetails[i].open = false;
                }, 200)
            } else {
                setTimeout(function () {
                    console.log(i)
                    arrDetails[i].classList.add('details-open')
                }, 5)
            }
        })
    }
};