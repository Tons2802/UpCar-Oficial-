const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((button) => {
  button.addEventListener('click', () => {
    const currentItem = button.parentElement;
    const isActive = currentItem.classList.contains('active');

    faqQuestions.forEach((itemButton) => {
      itemButton.parentElement.classList.remove('active');
    });

    if (!isActive) {
      currentItem.classList.add('active');
    }
  });
});

const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

whatsappLinks.forEach((link) => {
  link.addEventListener('click', () => {
    console.log('Usuário clicou em um botão de WhatsApp.');
  });
});
