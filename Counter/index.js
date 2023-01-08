const INITIAL_COUNTER = 0;

const counter = createCounter(INITIAL_COUNTER);

const view = createView({
    onDecrementBtnClick: handleDecrementBTnClick,
    onIncremetBtnClick: handleIncrementBtnClick,
    onResetBtnClick: handleResetBtnClick
});

view.render({
   counter: counter.get()
});

function handleIncrementBtnClick() {
    counter.increment();
    view.render({
        counter: counter.get()
    });
};

function handleDecrementBTnClick() {
    counter.decrement();
    view.render({
        counter: counter.get()
    });
}

function handleResetBtnClick() {
    counter.reset();
    view.render({
        counter: counter.get()
    });
}