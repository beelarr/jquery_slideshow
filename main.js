$().ready(getIt);


function getIt() {
    console.log('gettin it');
    $.ajax({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=Bwso1Aw437t1qPzFl5KObyIsxdGjSxM5Z4JyYk6D",

    }).done(function (data) {
        parseIt(data)
    })

}


function parseIt(data) {
    console.log(data.photos);
    $.each(data.photos, (key, value) => {
        console.log(value);

        if(key === 0) {
            $('#images').append(`
                <div class="item active"><img src="${value.img_src}" alt="Mars Rover Camera ${value.camera.full_name} image">
                    <div class="carousel-caption">
                        <h6>${value.camera.full_name}</h6>
                        <p>${value.earth_date}</p>
                    </div>
                </div>`);

            $(".carousel-indicators").append(`
                <li data-target="#myCarousel" data-slide-to="${key}" class="active"></li>`)
        }else{
            $('#images').append(`
                <div class="item "><img src="${value.img_src}" alt="Mars Rover Camera ${value.camera.full_name} image">
                    <div class="carousel-caption">
                        <h6>${value.camera.full_name}</h6>
                        <p>${value.earth_date}</p>
                    </div>
                </div>`);

            $(".carousel-indicators").append(`
                <li data-target="#myCarousel" data-slide-to="${key}"></li>`)
        }
    })
}

$('.fade-button').click(function () {
    console.log('fade button')
    $('#myCarousel').toggleClass('carousel-fade')
})

$(".container").hover(function(){
    $('.carousel-caption').show();
}, function(){
    $('.carousel-caption').hide();
});
