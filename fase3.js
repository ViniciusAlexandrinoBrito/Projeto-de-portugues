function verificar(resposta) {
  const resultado = document.getElementById('resultado');
  if (resposta === 'substantivo') {
    resultado.textContent = '✅ Correto! "Casa" é um substantivo.';
    setTimeout(() => window.location.href = 'fase4.html', 1500);
  } else {
    resultado.textContent = '❌ Tente novamente!';
  }
}
