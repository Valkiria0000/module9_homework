
/*Задание 4.
Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.

Подсказка: получение данных из input.

const value = document.querySelector('input').value;
*/
const btn = document.querySelector('.btn');
const gallary = document.querySelector('.gallary');

btn.addEventListener('click', () => {
    const widthImg = +document.querySelector('.input-width').value;
    const heightImg = +document.querySelector('.input-height').value;

    if (heightImg < 100 || heightImg > 300 || widthImg < 100 || widthImg > 300) {
        gallary.innerHTML = `<p>Одно из чисел вне диапазона от 100 до 300</p>`;
    } else if (isNaN(widthImg) || isNaN(heightImg)) {
        gallary.innerHTML = `<p>Ошибка! Введено не число!</p>`;
       } else {
        fetch(`https://picsum.photos/${widthImg}/${heightImg}`)
        .then((response) => {
            gallary.innerHTML = `
            <div class="card">
                <img src="${response.url}">
            </div>`;
        })
        .catch(() => {console.log('error')});
    }
})







