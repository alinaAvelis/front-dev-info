
export const scriptErrorHandle = (val: string) => {
    try {
        if (
            val.toLowerCase().includes("<script") ||
            val.toLowerCase().includes("</script>")
        ) {
            return true
        }

        return false
    } catch (err) {
        console.log(err);
    }
};

export const simbolsErrorHandle = (val: string) => {
    try {
        const value = val.toLowerCase();
        if (
            value.includes(">") ||
            value.includes("<") ||
            value.includes("[") ||
            value.includes("]")
        ) {
            return true
        }

        return false
    } catch (err) {
        console.log(err);
    }
};