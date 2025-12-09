function verificar(resposta) {
  const resultado = document.getElementById('resultado');
  if (resposta === 'substantivo') {
    resultado.textContent = '✅ Correto! "Cachorro" é um substantivo.';
    setTimeout(() => window.location.href = 'fase2.html', 1500);
  } else {
    resultado.textContent = '❌ Tente novamente!';
  }
}
