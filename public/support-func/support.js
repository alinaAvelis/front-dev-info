export function sortByDate(arr, isToDown = true) {
    const array = arr?.slice();
    if(!isToDown) {
      return array?.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
    } else if (isToDown) {
      return array?.sort((a, b) => new Date(b.releaseDate).getTime() -  new Date(a.releaseDate).getTime());
    }
}