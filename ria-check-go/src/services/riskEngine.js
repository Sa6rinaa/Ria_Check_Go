export function evaluateRisk(data) {
  if (data.forbidden) return "INACCEPTABLE"
  if (data.highImpact) return "ÉLEVÉ"
  if (data.userInteraction) return "LIMITÉ"
  return "MINIMAL"
}
