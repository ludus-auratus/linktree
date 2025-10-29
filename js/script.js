const poupupVisibleTime = 1000;
let popupElement;
let popupTimer;

window.onload = async function () {
    popupElement = document.querySelector("#sharebtn-popup");

    shareButton = document.querySelector("#sharebtn-button");
    shareButton.onclick = (ev) => {
        navigator.clipboard.writeText(window.location.href);
        showSharePopup();
    };
};

function showSharePopup() {
    popupElement.classList.add("sharebtn-popup--show");
    if (popupTimer) clearTimeout(popupTimer);

    popupTimer = setTimeout(() => {
        popupElement.classList.remove("sharebtn-popup--show");
    }, poupupVisibleTime);
}
