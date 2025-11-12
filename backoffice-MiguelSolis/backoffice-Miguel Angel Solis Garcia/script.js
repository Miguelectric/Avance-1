// Función para redirigir a login si se intenta acceder a home directamente
function checkAccess() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'home.html') {
        alert('Acceso denegado. Redirigiendo al login.');
        window.location.href = 'login.html';
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', checkAccess);

// Redirección automática desde index.html
if (window.location.pathname.endsWith('index.html')) {
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000); // Redirige después de 2 segundos
}
