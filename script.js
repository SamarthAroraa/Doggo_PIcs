var dropdown = $("#dropdown");
var list;
var allow = true;
var next = $("#next");
var getButton = $("#submit");
var image_bod = $("#canvas");

(function () {
  $.get("https://dog.ceo/api/breeds/list/all", function (data) {
    list = data.message;
    list = Object.keys(list);
    for (let i in list) {
      breed = String(list[i]);
      let new_entry =
        "<option value=" +
        breed +
        ">" +
        breed[0].toUpperCase() +
        breed.slice(1) +
        "</option>";
      dropdown.append(new_entry);
      //   console.log(new_entry);
    }
    // console.log(Object.keys(list));
  });
})();

function new_image() {
  let query = dropdown.val();

  let api_link = "https://dog.ceo/api/breed/" + query + "/images/random";
  $("#canvas img").remove();
  $.get(api_link, function (data) {
    let image = data.message;
    console.log(image);
    let image_obj = '<img src="' + image + '" alt="' + query + '">';
    // console.log(image_bod);
    image_bod.append(image_obj);
  });
}

dropdown.change(function () {
  allow = true;
});

getButton.click(function () {
  if (allow) {
    allow = false;
    new_image();
  }
});

next.click(function () {
  new_image();
});
