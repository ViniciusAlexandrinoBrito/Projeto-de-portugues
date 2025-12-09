function verificar(resposta) {
  const resultado = document.getElementById('resultado');
  if (resposta === 'substantivo') {
    resultado.textContent = '🎉 Parabéns! Você completou todas as fases!';
    setTimeout(() => window.location.href = 'index.html', 2000);
  } else {
    resultado.textContent = '❌ Tente novamente!';
  }
}
