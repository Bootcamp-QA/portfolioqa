// SUPABASE CONFIG
const SUPABASE_URL = 'https://ifgzperqnxoomyvvytzr.supabase.co';
const SUPABASE_API_KEY = 'sb_publishable_s4C8y1rgb321cEF5B969MA_3jMwVpNJ';

// --- FORMULARIO ---
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
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

      if (!response.ok) throw new Error('Insert error');

      formMessage.textContent = 'Mensaje enviado';
      formMessage.style.color = 'green';
      form.reset();

      // Recargar la tabla si existe
      if (document.getElementById('formsTable')) {
        loadForms();
      }

    } catch (error) {
      console.error(error);
      formMessage.textContent = 'Error';
      formMessage.style.color = 'red';
    }
  });
}

// --- ADMIN TABLE ---
const tableBody = document.querySelector('#formsTable tbody');
const status = document.getElementById('status');

async function loadForms() {
  if (!tableBody || !status) return;

  status.textContent = 'Loading...';

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/forms`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_API_KEY,
        'Authorization': `Bearer ${SUPABASE_API_KEY}`
      }
    });

    if (!response.ok) throw new Error('Failed to fetch');

    const data = await response.json();

    tableBody.innerHTML = '';

    data.forEach(form => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${form.id}</td>
        <td>${form.email}</td>
        <td>${form.subject}</td>
        <td>${form.message}</td>
        <td>${form.sent_at}</td>
      `;
      tableBody.appendChild(row);
    });

    status.textContent = `Loaded ${data.length} entries`;

  } catch (error) {
    console.error(error);
    status.textContent = 'Error loading data';
  }
}

// Cargar tabla automáticamente si existe
if (tableBody) {
  loadForms();
}

});

