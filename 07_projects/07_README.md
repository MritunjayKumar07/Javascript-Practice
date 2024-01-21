# Projects

## Topics Covered:

1. [Color Changer](#color-changer)
2. [Your Body Mass](#your-body-mass)
3. [Digital Clock](#digital-clock)
4. [Guess The Number](#guess-the-number)

## Color Changer

```HTML
<!DOCTYPE html>
<html lang="en">
  <body>
    <h1>Color Changer:</h1>
    <div class="buttons">
      <button class="#000000">#000000</button>
      <button class="#FFFFFF">#FFFFFF</button>
      <button class="#FFA384">#FFA384</button>
      <button class="#FF0000">#FF0000</button>
    </div>
  </body>
</html>

```

```javascript
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
buttons.forEach((but) => {
  but.addEventListener("click", (e) => {
    // body.style.background = but.className;
    //or
    if (e.target.className === but.className) {
      body.style.background = but.className;
    }
  });
});
```

## Your Body Mass

```HTML
<!DOCTYPE html>
<html lang="en">
  <body>
    <h1>Calculate Your Body Mass (BMI)</h1>
    <form>
      Height(cm): <input type="text" id="height" /><br /><br />
      Weight(kg): <input type="text" id="weight" /><br /><br />
      <button>Calcilate</button>
    </form>
    <div></div>
  </body>
</html>

```

```javascript
const form = document.querySelector("form");
//ya do vale ka yah is taraha sa select na kera andar ma ker form ka.
// const height = document.getElementById("height");
// const Weight = document.getElementById("weight");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  /* e.preventDefault();  use to stope defoult option a form when submit its data get or post to data base thats way its refresh. to stop this to refresh use this.*/

  const height = parseInt(document.getElementById("height").value);
  const Weight = parseInt(document.getElementById("weight").value);
  document.querySelector("div").innerHTML = `BMI is : ${
    Weight / ((height * height) / 10000).toFixed(2)
  }`;
});
```

## Digital Clock

```HTML
<!DOCTYPE html>
<html lang="en">
  <body>
    <h2>Your local time</h2>
    <p id="time">hh:mm:ss</p>
  </body>
</html>

```

```javascript
const time = document.getElementById("time");
setInterval(() => {
  //Most IMP for Intriview
  const localTime = new Date();
  time.innerHTML = localTime.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(localTime.toLocaleTimeString(undefined, { hour12: true }));
}, 1000);
```

## Guess The Number

```HTML
<!DOCTYPE html>
<html lang="en">
  <body>
    <h2>Guess the number bitween 1 to 100.</h2>
    <form>
      <input
        type="text"
        name="GuessNumber"
        inputmode="numeric"
        placeholder="gased number"
      />
      <button>Submit</button>
    </form>
    <p><strong>Preview Guess</strong>:<strong class="Preview"></strong></p>
    <p>
      <strong>Guess Remaining</strong>:<strong class="Remaining">10</strong>
    </p>
    <button id="refresh">Refresh</button>
  </body>
</html>

```

```javascript
let GuessAray = [];
const randomNumber = Math.floor(Math.random() * 100);
const form = document.querySelector("form");
const storeForm = form.innerHTML;
const refresh = document.querySelector("#refresh");
const Preview = document.querySelector(".Preview");
const Remaining = document.querySelector(".Remaining");

refresh.addEventListener("click", (e) => {
  GuessAray = [];
  Preview.innerHTML = " ";
  Remaining.innerHTML = "10";
  form.innerHTML = storeForm;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("input");
  input = Number(input.value);
  if (input > 100 || input < 1) {
    alert("Please number enter bitween 1 to 100!");
  } else {
    Preview.innerHTML += `${input}, `;
    Remaining.innerHTML = 10 - (GuessAray.length + 1);
    GuessAray.push(input);
    if (randomNumber === input) {
      form.innerHTML = `<h2>Congratulation! You guessed it right, You win!<h2>`;
    } else if (randomNumber < input) {
      alert("Your guess is too high! Try again.");
    } else if (randomNumber > input) {
      alert("Your guess is too low! Try again.");
    }
  }

  if (GuessAray.length > 9) {
    form.innerHTML = `<h2>You complit the game!<h2>`;
  }
});
```
