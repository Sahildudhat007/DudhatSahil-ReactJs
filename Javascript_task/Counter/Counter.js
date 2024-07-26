let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counterValue.innerHTML = counter;
    }
});

resetBtn.addEventListener('click', reset);
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}