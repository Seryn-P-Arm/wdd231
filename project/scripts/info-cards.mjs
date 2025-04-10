// infoCards.mjs

document.addEventListener("DOMContentLoaded", () => {
    const modals = {
      "community-modal": {
        title: "Community Member Perks",
        content: `
          <ul>
            <li>💸 10% off all merch!</li>
            <li>🖼️ Early access to new artworks</li>
            <li>📣 Shoutouts on social and site</li>
            <li>🎁 Surprise seasonal goodies</li>
          </ul>
        `
      },
      "partner-modal": {
        title: "Partner & Collab Benefits",
        content: `
          <ul>
            <li>🧾 Shared merch profits</li>
            <li>🎨 Exclusive co-branded items</li>
            <li>🚀 Spotlight in our community gallery</li>
            <li>🤝 Priority on new projects & events</li>
          </ul>
        `
      }
    };
  
    document.querySelectorAll("button[data-modal]").forEach(button => {
      button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        const modalData = modals[modalId];
        showModal(modalData.title, modalData.content);
      });
    });
  
    function showModal(title, content) {
      const modal = document.createElement("div");
      modal.className = "custom-modal";
      modal.innerHTML = `
        <div class="modal-content">
          <h2>${title}</h2>
          <div>${content}</div>
          <button class="close-btn">Close</button>
        </div>
      `;
      document.body.appendChild(modal);
  
      modal.querySelector(".close-btn").addEventListener("click", () => {
        modal.classList.add("fade-out");
        setTimeout(() => modal.remove(), 300);
      });
  
      setTimeout(() => modal.classList.add("fade-in"), 10);
    }
  });
  