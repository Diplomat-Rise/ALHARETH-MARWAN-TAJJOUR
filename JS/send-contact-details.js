function createContactPopup() {
  if (document.getElementById('contactPopup')) {
    document.getElementById('contactPopup').style.display = 'flex';
    return;
  }

  const popupHTML = `
    <div id="contactPopup" class="share-modal" style="display: flex;">
      <div class="share-modal-content small">
        <span class="close-modal" onclick="document.getElementById('contactPopup').remove()">×</span>
        <h3>Send Your Contact</h3>
        <form id="contactForm">
          <div class="form-group">
            <label for="userName">Name <span class="required">*</span></label>
            <input type="text" id="userName" required />
          </div>
          <div class="form-group">
            <label for="userPhone">Phone Number <span class="required">*</span></label>
            <input type="tel" id="userPhone" required />
          </div>
          <div class="form-group">
            <label for="userEmail">Email <span class="required">*</span></label>
            <input type="email" id="userEmail" required />
          </div>
          <div class="form-group">
            <label for="userMessage">Message <span class="required">*</span></label>
            <textarea id="userMessage" rows="3" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send via WhatsApp</button>
        </form>
        <div id="formMessage" class="message"></div>
      </div>
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = popupHTML;
  document.body.appendChild(wrapper);

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const userMessage = document.getElementById('userMessage').value.trim();
    const messageBox = document.getElementById('formMessage');

    if (!name || !phone || !email || !userMessage) {
      messageBox.textContent = "Please fill in all fields.";
      messageBox.className = "message error";
      return;
    }

    const message = encodeURIComponent(
      `Hi, here are my contact details:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${userMessage}`
    );

    const recipientNumber = "+971589826204"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${recipientNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
  });
}

document.querySelector('.send-contact-button').addEventListener('click', createContactPopup);

