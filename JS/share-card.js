function createShareModal() {
    // Check if modal already exists
    if (document.getElementById('shareModal')) {
      document.getElementById('shareModal').style.display = 'flex';
      return;
    }

    const modalHTML = `
      <div id="shareModal" class="share-modal" style="display: flex;">
        <div class="share-modal-content">
          <span class="close-modal" onclick="document.getElementById('shareModal').remove()">×</span>
          <h3>Share This Card</h3>
          <div class="share-buttons">
            <a class="modal-share-button whatsapp-share" href="https://wa.me/?text=https://diplomat-rise.github.io/HUSSAM-OUSAMA-ASAAD/" target="_blank" title="Share on WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a class="modal-share-button facebook-share" href="https://www.facebook.com/sharer/sharer.php?u=https://diplomat-rise.github.io/HUSSAM-OUSAMA-ASAAD/" target="_blank" title="Share on Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a class="modal-share-button twitter-share" href="https://twitter.com/intent/tweet?url=https://diplomat-rise.github.io/HUSSAM-OUSAMA-ASAAD/" target="_blank" title="Share on Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="modal-share-button email-share" href="mailto:?subject=Check%20out%20this%20business%20card&body=https://diplomat-rise.github.io/HUSSAM-OUSAMA-ASAAD/" title="Share via Email">
              <i class="fas fa-envelope"></i>
            </a>
            <a class="modal-share-button telegram-share" href="https://t.me/share/url?url=https://diplomat-rise.github.io/HUSSAM-OUSAMA-ASAAD/" target="_blank" title="Share on Telegram">
              <i class="fab fa-telegram"></i>
            </a>
            <a class="modal-share-button linkedin-share" href="https://www.linkedin.com/sharing/share-offsite/?url=https://diplomat-rise.github.io/HUSSAM-OUSAMA-ASAAD/" target="_blank" title="Share on LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a class="modal-share-button messenger-share" href="fb-messenger://share/?link=https://diplomat-rise.github.io/HUSSAM-OUSAMA-ASAAD/" target="_blank" title="Share on Messenger">
              <i class="fab fa-facebook-messenger"></i>
            </a>
          </div>

        </div>
      </div>
    `;

    const modalWrapper = document.createElement('div');
    modalWrapper.innerHTML = modalHTML;
    document.body.appendChild(modalWrapper);
  }

  // Attach to Share Card button
  document.querySelector('.share-card-button').addEventListener('click', createShareModal);

