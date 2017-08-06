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
        data: { "id": "8623220@N02", "tags": "child labor, labor", "format": "json" }
    });
}