const serise_2022_1 = await import('~/assets/pedia/pokemon/serise_2022_1.json')
const serise_2022_2 = await import('~/assets/pedia/pokemon/serise_2022_2.json')
const serise_2022_3 = await import('~/assets/pedia/pokemon/serise_2022_3.json')
const serise_2022_4 = await import('~/assets/pedia/pokemon/serise_2022_4.json')
const serise_2023_1 = await import('~/assets/pedia/pokemon/serise_2023_1.json')
const serise_2023_2 = await import('~/assets/pedia/pokemon/serise_2023_2.json')
const serise_2023_3 = await import('~/assets/pedia/pokemon/serise_2023_3.json')
const serise_2024_1 = await import('~/assets/pedia/pokemon/serise_2024_1.json')
const serise_2024_2 = await import('~/assets/pedia/pokemon/serise_2024_2.json')
const serise_2024_3 = await import('~/assets/pedia/pokemon/serise_2024_3.json')
const serise_2024_4 = await import('~/assets/pedia/pokemon/serise_2024_4.json')
const serise_2025_1 = await import('~/assets/pedia/pokemon/serise_2025_1.json')

export const getSeriseData = (serise) => {
  if (serise === 'serise_2022_1') return serise_2022_1?.default || {}
  if (serise === 'serise_2022_2') return serise_2022_2?.default || {}
  if (serise === 'serise_2022_3') return serise_2022_3?.default || {}
  if (serise === 'serise_2022_4') return serise_2022_4?.default || {}
  if (serise === 'serise_2023_1') return serise_2023_1?.default || {}
  if (serise === 'serise_2023_2') return serise_2023_2?.default || {}
  if (serise === 'serise_2023_3') return serise_2023_3?.default || {}
  if (serise === 'serise_2024_1') return serise_2024_1?.default || {}
  if (serise === 'serise_2024_2') return serise_2024_2?.default || {}
  if (serise === 'serise_2024_3') return serise_2024_3?.default || {}
  if (serise === 'serise_2024_4') return serise_2024_4?.default || {}
  if (serise === 'serise_2025_1') return serise_2025_1?.default || {}
  
  return {}
}