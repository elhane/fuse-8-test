const insertMessage = (block, message) => {
  const h2 = document.createElement('h2');
  h2.classList.add('error');
  h2.textContent = message;
  block.appendChild(h2);
};

export {insertMessage};
