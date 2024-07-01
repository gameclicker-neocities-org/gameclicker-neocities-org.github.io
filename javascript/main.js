let coins = document.getElementById('Coins').value;
const text = document.getElementById('Coins_show');
const button_click = document.getElementById('button_click');

function text_click() {
    text.textContent = "Coins: " + coins;
    document.title = "Coins: " + coins + " - game clicker";
}

text_click();
button_click.addEventListener('click', function() {
  coins += 1;
  text_click();
});
