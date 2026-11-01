document.getElementById("year").textContent = new Date().getFullYear();

const leadForm = document.getElementById("leadForm");

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const name = (formData.get("name") || "").toString().trim();
    const contact = (formData.get("contact") || "").toString().trim();

    const message = name
      ? `Дякуємо${name ? `, ${name}` : ""}! Ваша заявка надіслана. Ми зв'яжемося з вами найближчим часом.`
      : "Дякуємо! Ваша заявка надіслана. Ми зв'яжемося з вами найближчим часом.";

    const button = leadForm.querySelector("button");
    button.disabled = true;
    button.textContent = "Відправлено";

    const note = document.createElement("p");
    note.className = "form-note";
    note.textContent = message + (contact ? ` Контакт: ${contact}` : "");
    leadForm.appendChild(note);

    leadForm.reset();
  });
}
