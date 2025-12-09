// Contact form AJAX submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    const formData = new FormData(form);

    // Get language from page
    const lang = document.documentElement.lang || 'es';

    // Messages based on language
    const messages = {
      es: {
        sending: 'Enviando...',
        success: '¡Mensaje enviado correctamente! Te responderemos pronto.',
        error: 'Error al enviar el mensaje. Por favor, intenta de nuevo.'
      },
      en: {
        sending: 'Sending...',
        success: 'Message sent successfully! We\'ll get back to you soon.',
        error: 'Error sending message. Please try again.'
      },
      fr: {
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès! Nous vous répondrons bientôt.',
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
      }
    };

    const msg = messages[lang] || messages.es;

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = msg.sending;

    // Remove any existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        showMessage(form, msg.success, 'success');
        form.reset();
      } else {
        // Error response from server
        showMessage(form, msg.error, 'error');
      }
    } catch (error) {
      // Network error
      showMessage(form, msg.error, 'error');
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });

  function showMessage(form, message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;

    // Insert after the submit button
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.insertAdjacentElement('afterend', messageDiv);

    // Auto-remove success message after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        messageDiv.remove();
      }, 5000);
    }
  }
});
