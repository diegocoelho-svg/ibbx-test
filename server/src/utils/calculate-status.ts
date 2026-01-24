export function calculateStatus(temperature: number, vibration: number) {
  if (temperature > 80 || vibration > 15) {
    return 'ALERT'
  }

  return 'NORMAL'
}
