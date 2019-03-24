function sum() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("result").textContent = num1 + num2;
}

function bhaskara() {
  let root1 = document.getElementById("root1");
  let root2 = document.getElementById("root2");

  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  let delta = Math.pow(b, 2) - 4 * a * c;
  if(a === 0) {
    root2.textContent = ' ';
    root1.textContent = new Error('a tem que ser diferente de 0 para ser equacao do segundo grau!');
  }
  else if(delta < 0) {
    root1.textContent = "A equação não possui raíz real";
    root2.textContent = " ";
  }
  else if(!delta) {
    root1.textContent = "A equação possui apenas uma raíz real ";
    root2.textContent = "x = " + ((-b) / (2 * a));
  }
  else {
    root1.textContent = "x1 = " + (((-b) + Math.pow(delta, 0.5)) / (2 * a)) + " | ";
    root2.textContent = "x2 = " + (((-b) - Math.pow(delta, 0.5)) / (2 * a))
  }
}

function divisors() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let result = document.getElementById("divisors");

  let num1 = [];
  for(let i = n1; i > 0; i--) {
    if(!(n1 % i)) {
      num1.push(n1 / i);
    }
  }

  let num2 = [];
  for(let i = n2; i > 0; i--) {
    if(!(n2 % i)) {
      num2.push(n2 / i);
    }
  }

  let r = [];
  let size = num1.length > num2.length? num1.length : num2.length;
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      if(num1[j] == num2[i]) {
        r.push(num1[j]);
      }
    }
  }

  result.textContent = r.toString();
}
