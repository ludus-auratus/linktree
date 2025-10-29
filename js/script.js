const poupupVisibleTime = 1000;
let popupElement;
let popupTimer;

const qrcodeApi = "https://api.qrserver.com/v1/create-qr-code";

window.onload = async function () {
    popupElement = document.querySelector("#sharebtn-popup");

    shareButton = document.querySelector("#sharebtn-button");
    shareButton.onclick = (ev) => {
        navigator.clipboard.writeText(window.location.href);
        showSharePopup();
    };

    const qrcodeElement = document.querySelector("#qrcode");
    const qrcodeImgElement = document.querySelector("#qrcode-img");
    qrcodeImgElement.onload = (ev) => {
        qrcodeElement.classList.add("qrcode--show");
    };

    const qrcodeUrl = new URL("https://api.qrserver.com/v1/create-qr-code");
    qrcodeUrl.searchParams.set("size", "120x120");
    qrcodeUrl.searchParams.set("data", document.location.href);

    qrcodeImgElement.src = qrcodeUrl.toString();
};

function showSharePopup() {
    popupElement.classList.add("sharebtn-popup--show");
    if (popupTimer) clearTimeout(popupTimer);

    popupTimer = setTimeout(() => {
        popupElement.classList.remove("sharebtn-popup--show");
    }, poupupVisibleTime);
}
