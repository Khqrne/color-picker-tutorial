document.getElementById('colorInput').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('hexValue').textContent = color;
    document.getElementById('rgbValue').textContent = hexToRgb(color);

    document.body.style.backgroundColor = color;
});

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('copyHex').addEventListener('click', function() {
    const hexText = document.getElementById('hexValue').textContent;
    navigator.clipboard.writeText(hexText);
    alert("HEX-Code " + hexText + " In Zwischenablage kopiert");
});

document.getElementById('copyRgb').addEventListener('click', function() {
    const rgbText = document.getElementById('rgbValue').textContent;
    navigator.clipboard.writeText(rgbText);
    alert("RGB-Code " + rgbText + " In zwischenablage kopiert");
});
