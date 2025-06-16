export function jsonToBase64(jsonObj) {
  try {
    const jsonString = JSON.stringify(jsonObj);
    return btoa(encodeURIComponent(jsonString).replace(/%([0-9A-F]{2})/g,
    function toSolidBytes(match, p1) {
      return String.fromCharCode('0x' + p1)
    }))
  } catch (err) {}
}

export function base64ToJson(base64String) {
  try {
    const jsonString = decodeURIComponent(atob(base64String).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  
    return JSON.parse(jsonString);
  } catch (err) {}
}
