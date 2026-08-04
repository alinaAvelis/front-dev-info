

export function sortByDate(arr, isToDown = true) {
    const array = arr?.slice();
    if (!isToDown) {
        return array?.sort(
            (a, b) =>
                new Date(a.releaseDate).getTime() -
                new Date(b.releaseDate).getTime()
        );
    } else if (isToDown) {
        return array?.sort(
            (a, b) =>
                new Date(b.releaseDate).getTime() -
                new Date(a.releaseDate).getTime()
        );
    }
}


export const getDateString = (date) => {
    const newDate = new Date(date);
    const dayString = newDate.toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return dayString;
};
