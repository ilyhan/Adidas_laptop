//смена фото по времени
var image = document.getElementById('img');
        var images = ['img/men.jpg', 'img/women.jpg'];
        var a = 0;

        function SetImage() {
            if (a == 0) {
                image.src = images[a];
                a = 1;
            } else {
                image.src = images[a];
                a = 0;
            }

        }

        setInterval(SetImage, 1000);
