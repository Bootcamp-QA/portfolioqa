// SUPABASE CONFIG
const SUPABASE_URL = 'https://ifgzperqnxoomyvvytzr.supabase.co';
const SUPABASE_API_KEY = 'sb_publishable_s4C8y1rgb321cEF5B969MA_3jMwVpNJ';

// ELEMENTOS
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Limpiar mensaje previo
  formMessage.textContent = '';
  formMessage.style.color = '';

  const data = {
    email: document.getElementById('email').value,
    subject: document.getElementById('asunto').value,
    message: document.getElementById('mensaje').value,
    name: null
  };

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/forms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_API_KEY,
        'Authorization': `Bearer ${SUPABASE_API_KEY}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Insert error');
    }

    // ÉXITO
    formMessage.textContent = 'Mensaje enviado';
    formMessage.style.color = 'green';
    form.reset();

  } catch (error) {
    console.error(error);

    // ERROR
    formMessage.textContent = 'Error';
    formMessage.style.color = 'red';
  }
});
