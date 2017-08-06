$().ready(handleButtonClick);

function jsonFlickrFeed(json) {
    // console.log(json);

    $.each(json.items, function(i, item) {
        console.log(json.items)
        // console.log(i)
        console.log(item)
        let title = item.title.split(',', 1).pop()
            console.log(title)


        let images = `<img src="${item.media.m}" alt="${item.title}">
             <div class="carousel-caption">
                <h3>${title}</h3>
                <!--<p></p>-->
              </div>`

            $('#images').html(images)
        })


}

        // $("<img />").attr("src", item.media.m).appendTo(".carousel-inner");


function handleButtonClick() {
    $("button").remove();

    $.ajax({
        url: 'https://api.flickr.com/services/feeds/photos_public.gne',
        dataType: 'jsonp',
        data: { "id": "8623220@N02", "tags": "child labor, labor", "format": "json" }
    });
}