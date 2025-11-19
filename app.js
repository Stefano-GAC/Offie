// app.js

// Utilidades
function cryptoRandomId() {
  return 'id-' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
}

function toast(msg, type='info') {
  const container = document.getElementById('alertContainer');
  if (!container) return alert(msg);
  const id = cryptoRandomId();
  const map = { success:'success', info:'info', warning:'warning', danger:'danger' };
  container.insertAdjacentHTML('beforeend', `
    <div id="${id}" class="toast align-items-center text-bg-${map[type]||'info'} border-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">${msg}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  `);
  const toastEl = document.getElementById(id);
  new bootstrap.Toast(toastEl, { delay: 2500 }).show();
  setTimeout(()=>toastEl.remove(), 3000);
}

async function fileToDataUrl(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
}

// Alumnos
function getAlumnos() {
  return JSON.parse(localStorage.getItem('alumnos') || '[]');
}
function setAlumnos(arr) {
  localStorage.setItem('alumnos', JSON.stringify(arr));
}

// Cursos
function getCursos() {
  return JSON.parse(localStorage.getItem('cursos') || '[]');
}
function setCursos(arr) {
  localStorage.setItem('cursos', JSON.stringify(arr));
}

// Galería
function getGaleria() {
  return JSON.parse(localStorage.getItem('galeria') || '[]');
}
function setGaleria(arr) {
  localStorage.setItem('galeria', JSON.stringify(arr));
}

// Semilla de datos
function seedIfEmpty() {
  if (!localStorage.getItem('alumnos')) {
    setAlumnos([
      { id: cryptoRandomId(), nombre: 'Juan Pérez', email: 'juan.perez@learnit.com', curso: 'React Básico', estado: 'Activo', progreso: 80, fecha: '2025-03-01' },
      { id: cryptoRandomId(), nombre: 'María López', email: 'maria.lopez@learnit.com', curso: 'Python Avanzado', estado: 'Pendiente', progreso: 20, fecha: '2025-03-15' },
      { id: cryptoRandomId(), nombre: 'Carlos Soto', email: 'carlos.soto@learnit.com', curso: 'Diseño UX', estado: 'Activo', progreso: 55, fecha: '2025-04-02' },
      { id: cryptoRandomId(), nombre: 'Lucía Díaz', email: 'lucia.diaz@learnit.com', curso: 'Marketing Digital', estado: 'Baja', progreso: 0, fecha: '2025-02-20' },
      { id: cryptoRandomId(), nombre: 'Ana Ruiz', email: 'ana.ruiz@learnit.com', curso: 'React Básico', estado: 'Activo', progreso: 92, fecha: '2025-03-22' },
      { id: cryptoRandomId(), nombre: 'Sergio Mora', email: 'sergio.mora@learnit.com', curso: 'Python Avanzado', estado: 'Activo', progreso: 40, fecha: '2025-03-28' }
    ]);
  }
  if (!localStorage.getItem('cursos')) {
    setCursos([
      { id: cryptoRandomId(), nombre: 'React Básico', profesor: 'Juan Pérez', duracion: 20, nivel: 'Básico', categorias: ['Programación'], descripcion: 'Introducción a React y componentes.', activo: true, alumnos: 25, fecha: '2025-03-01', materialNombre: 'react_basico.pdf' },
      { id: cryptoRandomId(), nombre: 'Python Avanzado', profesor: 'María López', duracion: 30, nivel: 'Avanzado', categorias: ['Programación'], descripcion: 'Programación avanzada con Python.', activo: true, alumnos: 15, fecha: '2025-03-10', materialNombre: 'python_avanzado.pdf' },
      { id: cryptoRandomId(), nombre: 'Diseño UX', profesor: 'Esteban García', duracion: 18, nivel: 'Intermedio', categorias: ['Diseño'], descripcion: 'Fundamentos de UX y prototipado.', activo: false, alumnos: 12, fecha: '2025-03-18', materialNombre: '' }
    ]);
  }
  if (!localStorage.getItem('galeria')) {
    setGaleria([
      { id: cryptoRandomId(), src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', titulo: 'Workshop React', descripcion: 'Evento interno sobre componentes.', etiqueta: 'Evento', destacado: true },
      { id: cryptoRandomId(), src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800', titulo: 'Material Python', descripcion: 'Guía de mejores prácticas.', etiqueta: 'Material', destacado: false },
      { id: cryptoRandomId(), src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800', titulo: 'Promoción Cursos', descripcion: 'Campaña de primavera.', etiqueta: 'Promoción', destacado: false }
    ]);
  }
}
