const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate = () => {
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if(minEl.value === '' && maxEl.value === '') {
        alert("Iltimos min va max qiymatlarini kiriting");
        return;
    }
    if(minEl.value === '') {
        alert("Iltimos min qiymatni kiriting");
        return;
    }
    if( maxEl.value === '') {
        alert("Iltimos  max qiymatini kiriting");
        return;
    }
    if (minEl.value > maxEl.value) {
        alert('Min maxdan kichik bulishi kerak !');
        return;
    }

    const placeholderEl = document.querySelector('#placeholder');
    placeholderEl.textContent = getRandomNumber(min, max)
}

const btnEl = document.getElementById('generate');
btnEl.addEventListener('click', generate);