var qrCode = document.getElementById("qrCode");
var qrText = document.getElementById("qrText");
var qrImage = document.getElementById("qrImage");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
        + qrText.value;
        qrCode.classList.add("show-img");
    } else {
        setTimeout(() => {
            qrText.classList.add("error");
        }, 1000);
    }
}
