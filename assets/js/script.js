document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('a[href="#aboutus"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#aboutus').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('a[href="#receipe"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#receipe').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('a[href="#gallery"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#gallery').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#home').scrollIntoView({
            behavior: 'smooth'
        });
    });

  });