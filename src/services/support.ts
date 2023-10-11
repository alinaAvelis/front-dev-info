
export const getDateString = (date: string) => {
    const newDate = new Date(date);
    const dayString = newDate.toLocaleString("ru-Ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    return dayString;
}