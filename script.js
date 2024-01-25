document.addEventListener("DOMContentLoaded", function() {
  // Replace 'your-cat-gif-url' with the URL of your cute cat GIF
  const catGifUrl = 'cat gif.gif';
  
  // Set the cat GIF
  document.getElementById('catGif').innerHTML = `<img src="${catGifUrl}" alt="Cute Cat GIF">`;

  // Add click event to the "Ask Her Out" button
  document.getElementById('askButton').addEventListener('click', function() {
    alert('ayoooo a3mil click 3al message');
  });
});

  