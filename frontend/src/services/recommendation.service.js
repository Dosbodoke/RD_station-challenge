const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products
) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = '',
  } = formData;

  // Valida se há dados necessários para fazer recomendações
  if (
    !selectedRecommendationType ||
    (selectedPreferences.length === 0 && selectedFeatures.length === 0)
  ) {
    return [];
  }

  // Calcula score para cada produto baseado nas preferências e funcionalidades selecionadas
  const scoredProducts = products.map((product) => {
    let score = 0;

    selectedPreferences.forEach((preference) => {
      if (product.preferences && product.preferences.includes(preference)) {
        score += 1;
      }
    });

    selectedFeatures.forEach((feature) => {
      if (product.features && product.features.includes(feature)) {
        score += 1;
      }
    });

    return { ...product, score };
  });

  const validProducts = scoredProducts.filter((product) => product.score > 0);

  if (validProducts.length === 0) {
    return [];
  }

  // Ordena produtos por score (maior para menor)
  validProducts.sort((a, b) => b.score - a.score);

  // Aplica lógica específica baseada no tipo de recomendação
  if (selectedRecommendationType === 'SingleProduct') {
    // Para produto único, encontra produtos com a pontuação máxima
    const maxScore = validProducts[0].score;
    const topProducts = validProducts.filter(
      (product) => product.score === maxScore
    );

    // Em caso de empate, retorna o último produto (critério 5)
    return [topProducts[topProducts.length - 1]];
  } else if (selectedRecommendationType === 'MultipleProducts') {
    // Para múltiplos produtos, retorna todos os válidos ordenados por score
    return validProducts;
  }

  return [];
};

export default { getRecommendations };
