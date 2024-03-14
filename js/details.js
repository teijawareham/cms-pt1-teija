var textInURL = window.location.search;
//console.log(textInURL);
var parametersInURL = new URLSearchParams (textInURL);
//console.log(parametersInURL);
var id = parametersInURL.get('id');
//console.log(id);

// Initialize the Contentful client with space ID and access token
var client = contentful.createClient({
    space: 'kixvueiswqpv',
    accessToken: 'QZCfAeAEXa9yEVO_VtL5_Rkjqi3OMxbbiJ0hC23puEc'
  });

  client.getEntry(id).then(function(entry) {
    console.log(entry);
    var name = document.createElement('h3');
    name.innerHTML = entry.fields.name;

    // Create a new list item (li) element to hold the car information and image
    var li = document.createElement('li');
    li.classList.add('detail-wrapper'); // Add 'slide-wrapper' class for styling**

    // Create an image (img) element to display the car image
    var img = document.createElement('img');
    img.classList.add('portrait'); // Add 'portrait' class for styling
    // Construct the image URL by prepending 'https:' to the file URL from the entry
    var imageUrl = "https:" + entry.fields.portrait.fields.file.url;
    img.src = imageUrl; // Set the image source to the constructed URL
    li.appendChild(img); // Append the image to the list item

    // Create a div element to hold the content (title, etc.) about the car
    var contentDiv = document.createElement('div');
    playerCard.classList.add('content'); // Add 'content' class for styling**

    // Create a heading (h2) element for the car's title
    var h2 = document.createElement('h2');
    h2.innerHTML = entry.fields.playerName; // Set the heading text to the car's title
    playerCard.appendChild(h2); // Append the heading to the content div

    var p = document.createElement('p');
      p.innerHTML = entry.fields.number; // Set the heading text to the car's title
      playerCard.appendChild(p); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.height; // Set the heading text to the car's title
      playerCard.appendChild(p); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.position; // Set the heading text to the car's title
      playerCard.appendChild(p); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.playerProfile; // Set the heading text to the car's title
      playerCard.appendChild(p); // Append the heading to the content div

    // Assuming 'cardsContainer' is the element where we want to display the cars
      // Append the list item to the cardsContainer element
      playerCard.appendChild(li);
  });