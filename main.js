document.addEventListener('DOMContentLoaded', () => {
    const wrapperTopImg = document.querySelector('.wrapper_top img');
    const wrapperBottomImgs = document.querySelectorAll('.wrapper_bottom img');

    wrapperBottomImgs.forEach(img => {
        img.addEventListener('click', () => {
            wrapperTopImg.src = img.src;
        });
    });

    let cartCount = 0;
    const addToCartBtn = document.querySelector('.add_btn');
    const cartCounter = document.createElement('span');
    cartCounter.className = 'cart-counter';
    cartCounter.innerText = cartCount;
    document.querySelector('.nav_right').appendChild(cartCounter);

    addToCartBtn.addEventListener('click', () => {
        cartCount += 1;
        cartCounter.innerText = cartCount;
    });

    let itemCount = 0;
    const incrementBtn = document.querySelector('.increment-btn');
    const decrementBtn = document.querySelector('.decrement-btn');
    const counterDisplay = document.querySelector('.counter');

    incrementBtn.addEventListener('click', () => {
        itemCount += 1;
        counterDisplay.innerText = itemCount;
    });

    decrementBtn.addEventListener('click', () => {
        if (itemCount > 0) {
            itemCount -= 1;
            counterDisplay.innerText = itemCount;
        }
    });
});
