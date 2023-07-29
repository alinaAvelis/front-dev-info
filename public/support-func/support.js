export function sortByDate(arr, isToDown = true) {
    const array = arr?.slice();
    if(!isToDown) {
      return array?.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
    } else if (isToDown) {
      return array?.sort((a, b) => new Date(b.releaseDate).getTime() -  new Date(a.releaseDate).getTime());
    }
}

export const deleteScript = (val, setErrText) => {
  try {
      if(val.toLowerCase().includes('<script') || val.toLowerCase().includes('</script>')) {
          setErrText(`Текст содержит тег script. Пожалуйста, удалите его.`)
      } else {
          setErrText(``)
      }
  } catch (err) {
      console.log(err)
  } 
}

export const deleteSimbols = (val, setErrText) => {
  try {
      const value = val.toLowerCase()
      if(value.includes('>') ||  value.includes('<') || value.includes('[') || value.includes(']')) {
          setErrText(`Удалите недопустимые символы:  >, :, <, [, ]`)
      }
  } catch (err) {
      console.log(err)
  }
}