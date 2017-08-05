$("button").on("click", handleButtonClick);

function jsonFlickrFeed(json) {
    console.log(json);

    $.each(json.items, function(i, item) {
        $("<img />").attr("src", item.media.m).appendTo("#images");
    });
};

function handleButtonClick() {
    $("button").remove();

    $.ajax({
        url: 'https://api.flickr.com/services/feeds/photos_public.gne',
        dataType: 'jsonp',
        data: { "tags": "lewis-hines", "format": "json" }
    });
}