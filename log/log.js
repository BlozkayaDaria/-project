
function onEnterPress(e) {
    var keyCode = e.keyCode; // получаем код нажатой клавиши
    var lInput = document.getElementById('login').parentNode; // лейбл логина
    var pInput = document.getElementById('password').parentNode; // лейбл пароля
    if (keyCode == 13) { // если нажат интер
        if (pInput.class == 'hide') { // и пароль спрятан,
            lInput.class = 'hide'; // прячем логин (тут нужна проверка)
            pInput.class = ''; // открываем пароль
        } else { // если мы уже вводим пароль,
            pInput.class = 'hide'; // прячем и его
            lInput.parentNode.submit(); // и отправляем форму
        }
    }
}

document.getElementById('login').addEventListener('keyDown', onEnterPress, false);
document.getElementById('password').addEventListener('keyDown', onEnterPress, false);