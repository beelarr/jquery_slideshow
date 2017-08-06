$().ready(startTheShow);

function jsonFlickrFeed(json) {
    $.each(json.items, function(i, item) {
        let title = item.title.split(',', 1).pop();
            console.log(title);
            console.log(item.media.m);

        if(i === 0) {
            $('#images').append(`
                <div class="item active"><img src="${item.media.m}" alt="${item.title}">
                    <div class="carousel-caption">
                        <h6>${title}</h6>
                        <!--<p></p>-->
                    </div>
                </div>`)
        }else{
            $('#images').append(`
                <div class="item"><img src="${item.media.m}" alt="${item.title}">
                    <div class="carousel-caption">
                        <h6>${title}</h6>
                        <!--<p></p>-->
                    </div>
                </div>`)
            }


    })


}

function startTheShow() {
    $.ajax({
        url: 'https://api.flickr.com/services/feeds/photos_public.gne',
        dataType: 'jsonp',
        data: { "id": "8623220@N02", "tags": "child labor, labor", "format": "json" }
    });
}