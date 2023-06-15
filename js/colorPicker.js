window.addEventListener('DOMContentLoaded', (event) => {
  const uploadButton = document.getElementById('uploadButton');
  const fileInput = document.getElementById('uploadInput');
  const previewContainer = document.getElementById('previewContainer');

  uploadButton.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;

      previewContainer.innerHTML = '';
      previewContainer.appendChild(image);
    };

    reader.readAsDataURL(file);
  });
});