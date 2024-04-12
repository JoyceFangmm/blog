fetch('example.md')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('markdown-content').textContent = data;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  fetch('blog/about.md')
  .then(response => {
    if (!response.ok) {
      throw new Error('2Network response was not ok ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('markdown-content').textContent = data;
  })
  .catch(error => {
    console.error('2There has been a problem with your fetch operation:', error);
  });