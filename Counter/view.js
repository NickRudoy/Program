function createView({
    onIncremetBtnClick,
    onDecrementBtnClick,
    onResetBtnClick,
}) {
    const counterNode = document.querySelector('.js-counter');
    const incrementBtnNode = document.querySelector('.js-increment-btn');
    const decrementBtnNode = document.querySelector('.js-decrement-btn');
    const resetBtnNode = document.querySelector('.js-reset-btn');

    incrementBtnNode.addEventListener('click', onIncremetBtnClick);
    decrementBtnNode.addEventListener('click', onDecrementBtnClick);
    resetBtnNode.addEventListener('click', onResetBtnClick);

    return {
        render({counter}) {
            counterNode.innerHTML = counter;
        }
    }
}
