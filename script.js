document.getElementById('year').textContent = new Date().getFullYear();

const leadForm = document.getElementById('leadForm');

if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const company = (formData.get('company') || '').toString().trim();
    const contact = (formData.get('contact') || '').toString().trim();

    const message = company
      ? `Дякуємо, ${company}! Ваш запит надіслано. Ми зв'яжемося з вами найближчим часом.`
      : 'Дякуємо! Ваш запит надіслано. Ми зв\'яжемося з вами найближчим часом.';

    const button = leadForm.querySelector('button');
    button.disabled = true;
    button.textContent = 'Надіслано';

    const note = document.createElement('p');
    note.className = 'form-note';
    note.textContent = message + (contact ? ` Контакт: ${contact}` : '');
    leadForm.appendChild(note);

    leadForm.reset();
  });
}
