function generatePin() {
  const canvas = document.getElementById('pinCanvas');
  const ctx = canvas.getContext('2d');

  const title = document.getElementById('productTitle').value;
  const imageUrl = document.getElementById('productImage').value;

  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.onload = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height * 0.6);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);

    ctx.fillStyle = '#111';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText(title, 50, canvas.height * 0.65, canvas.width - 100);

    ctx.fillStyle = '#ff0000';
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText("🔗 Shop Now", 50, canvas.height * 0.75);
  };

  image.onerror = function () {
    alert("Image failed to load. Please use a valid image URL.");
  };

  image.src = imageUrl;
}

function downloadPin() {
  const canvas = document.getElementById('pinCanvas');
  const link = document.createElement('a');
  link.download = 'product_pin.png';
  link.href = canvas.toDataURL();
  link.click();
}