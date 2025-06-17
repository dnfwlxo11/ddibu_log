import {
  serise_2022_1,
  serise_2022_2,
  serise_2022_3,
  serise_2022_4,
  serise_2023_1,
  serise_2023_2,
  serise_2023_3,
  serise_2024_1,
  serise_2024_2,
  serise_2024_3,
  serise_2024_4,
  serise_2025_1,
  serise_2025_baseball_kbo,
  serise_2025_baseball_manggom
} from '~/data/data'

export const getSeriseData = (serise = null) => {
  if (serise === 'serise_2022_1') return serise_2022_1 || {}
  if (serise === 'serise_2022_2') return serise_2022_2 || {}
  if (serise === 'serise_2022_3') return serise_2022_3 || {}
  if (serise === 'serise_2022_4') return serise_2022_4 || {}
  if (serise === 'serise_2023_1') return serise_2023_1 || {}
  if (serise === 'serise_2023_2') return serise_2023_2 || {}
  if (serise === 'serise_2023_3') return serise_2023_3 || {}
  if (serise === 'serise_2024_1') return serise_2024_1 || {}
  if (serise === 'serise_2024_2') return serise_2024_2 || {}
  if (serise === 'serise_2024_3') return serise_2024_3 || {}
  if (serise === 'serise_2024_4') return serise_2024_4 || {}
  if (serise === 'serise_2025_1') return serise_2025_1 || {}
  if (serise === 'serise_2025_baseball_kbo') return serise_2025_baseball_kbo || {}
  if (serise === 'serise_2025_baseball_manggom') return serise_2025_baseball_manggom || {}

  return {
    serise_2022_1,
    serise_2022_2,
    serise_2022_3,
    serise_2022_4,
    serise_2023_1,
    serise_2023_2,
    serise_2023_3,
    serise_2024_1,
    serise_2024_2,
    serise_2024_3,
    serise_2024_4,
    serise_2025_1,
    serise_2025_baseball_kbo
  }
}