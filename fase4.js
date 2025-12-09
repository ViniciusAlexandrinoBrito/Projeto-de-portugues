function verificar(resposta) {
  const resultado = document.getElementById('resultado');
  if (resposta === 'adjetivo') {
    resultado.textContent = '✅ Correto! "Rápido" é um adjetivo.';
    setTimeout(() => window.location.href = 'fase5.html', 1500);
  } else {
    resultado.textContent = '❌ Tente novamente!';
  }
}
