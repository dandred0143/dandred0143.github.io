const prompts = [
  "Are you sure?🥲",
  "Really sure??😔",
  "Are you positive?😟",
  "Myqueen please...☹️",
  "Just think about it!🥺",
  "If you say no, I will be really sad...🥹",
  "I will be very sad...😢",
  "I will be very very very sad...😭",
  "Ok fine, I will stop asking...😠",
  "Just kidding, say yes please! 😭❤️"
];

let promptIndex = 0;

function handleNo() {
  const btnNo = document.querySelector('.no-button');
  const btnYes = document.querySelector('.yes-button');

  // Change the text of the No button
  btnNo.textContent = prompts[promptIndex];
  promptIndex = (promptIndex + 1) % prompts.length;

  // Increase the size of the Yes button
  const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
  btnYes.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYes() {
  // Redirect to the yes_page.html
  window.location.href = "yes_page.html";
}
