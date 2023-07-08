export const cutText  = (text: string, number: number) => {
    return text.substring(0, number) + '...'
}

export const createSlug = (text: string) => {
    return text.toLowerCase().replace(/\s/g, '-');
}

export const getDateString = (date: string) => {
    const newDate = new Date(date);
    const dayString = newDate.toLocaleString()
    return dayString;
}