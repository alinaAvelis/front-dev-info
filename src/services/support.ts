
export const getDateString = (date: string) => {
    const newDate = new Date(date);
    const dayString = newDate.toLocaleString()
    return dayString;
}