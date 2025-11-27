const links = document.querySelectorAll('a');
console.log(links);

links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // ← отменяем переход по ссылке
      console.log('Клик по ссылке:', link.href);
    });
  });
