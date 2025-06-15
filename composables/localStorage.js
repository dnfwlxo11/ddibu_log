export const getLocalStorageItem = (key) => {
  if (!localStorage?.getItem(key)) return null
  return JSON.parse(localStorage?.getItem(key))
}

export const setLocalStorageItem = (key, value) => {
  let data = getLocalStorageItem("ddibu_log") || {}

  if (key === 'filter') {
    localStorage.setItem("ddibu_log", JSON.stringify({ ...data, filter: value }))
    return
  } 
  
  if (key === 'show') {
    localStorage.setItem("ddibu_log", JSON.stringify({ ...data, show: value }))
    return
  }
  
  if (data?.['data']?.[key]) {
    delete data['data'][key]
    return localStorage.setItem("ddibu_log", JSON.stringify(data))
  }

  if (!data?.['data']) data['data'] = {}
  data['data'][key] = value

  return localStorage.setItem("ddibu_log", JSON.stringify(data))
}