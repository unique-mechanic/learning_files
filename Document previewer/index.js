// Function to handle file input change
function handleFileInput() {
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
  
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const fileData = new Uint8Array(e.target.result);
        previewContainer.innerHTML = ''; // Clear previous content
  
        // Check if the file is a PDF
        if (file.name.toLowerCase().endsWith('.pdf')) {
          // Display PDF using PDF.js
          displayPdf(fileData);
        } else {
          // Display image
          const preview = document.createElement('img');
          preview.src = e.target.result;
          previewContainer.appendChild(preview);
        }
      };
  
      reader.readAsArrayBuffer(file);
    } else {
      previewContainer.innerHTML = 'No file selected';
    }
  }
  
  // Function to display a PDF using PDF.js
  function displayPdf(fileData) {
    const pdfContainer = document.createElement('div');
    pdfContainer.classList.add('pdf-container');
    previewContainer.appendChild(pdfContainer);
  
    // Initialize PDF.js
    pdfjsLib.getDocument({ data: fileData }).then(pdf => {
      // Fetch the first page
      pdf.getPage(1).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
  
        // Create a canvas element to render the page
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        pdfContainer.appendChild(canvas);
  
        // Render the page on the canvas
        page.render({ canvasContext: context, viewport }).promise.then(() => {
          // PDF rendered successfully
        });
      });
    });
  }
  
  // Event listener for file input change
  document.getElementById('fileInput').addEventListener('change', handleFileInput);
  
  