alert("Click on the Fram to see My Arts...!");

var MyImages = document.querySelectorAll('#a1, #a2');

MyImages.forEach(function (element,index) {
    element.addEventListener('click', function () {
        element.src= index+".jpg";
    });
});

