// Initialize the Contentful client with space ID and access token
var client = contentful.createClient({
    space: 'kixvueiswqpv',
    accessToken: 'QZCfAeAEXa9yEVO_VtL5_Rkjqi3OMxbbiJ0hC23puEc'
  });
  

  // Fetch entries of content type 'cars' from Contentful
  client.getEntries({content_type:'players'}).then(function (entries) {
    console.log(entries)
    // Iterate over each entry in the fetched items
    entries.items.forEach(function (entry) {
  
      // Create a new list item (li) element to hold the car information and image
      var li = document.createElement('li');
      li.classList.add('slide-wrapper'); // Add 'slide-wrapper' class for styling**
  
      // Create an image (img) element to display the car image
      var img = document.createElement('img');
      img.classList.add('portrait'); // Add 'portrait' class for styling
      // Construct the image URL by prepending 'https:' to the file URL from the entry
      var imageUrl = "https:" + entry.fields.portrait.fields.file.url;
      img.src = imageUrl; // Set the image source to the constructed URL
      li.appendChild(img); // Append the image to the list item
  
      // Create a div element to hold the content (title, etc.) about the car
      var contentDiv = document.createElement('div');
      contentDiv.classList.add('content'); // Add 'content' class for styling**
  
      // Create a heading (h2) element for the car's title
      var h2 = document.createElement('h2');
      h2.innerHTML = entry.fields.playerName; // Set the heading text to the car's title
      contentDiv.appendChild(h2); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.number; // Set the heading text to the car's title
      contentDiv.appendChild(p); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.height; // Set the heading text to the car's title
      contentDiv.appendChild(p); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.position; // Set the heading text to the car's title
      contentDiv.appendChild(p); // Append the heading to the content div

      // Link to details page 
      var linkToDetails = document.createElement('a')
      linkToDetails.innerHTML = 'view player profile';
      linkToDetails.href = 'details.html?id=' + entry.sys.id;
      contentDiv.appendChild(linkToDetails);
  
      // Append the content div to the list item
      li.appendChild(contentDiv);
  
      // Assuming 'cardsContainer' is the element where we want to display the cars
      // Append the list item to the cardsContainer element
      cardsContainer.appendChild(li);
    });
  });