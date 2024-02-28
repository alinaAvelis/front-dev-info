// import { THEMES } from "../shared/enums";

// env
const env = process.env.NODE_ENV;
export const IS_DEV_MODE = env === "development" ? true : false;

export const CURRENT_YEAR = new Date().getFullYear();

export function slugToTitle(slug) {
    const words = slug.split("-");
    const titleWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return titleWords.join(" ");
}

/**
 *
 * @param classes string
 * @returns string
 */
export const combineClasses = function (...classes) {
    return classes.filter((item) => !!item).join(" ");
};

// /**
//  * Changes Dark / Light Theme
//  */
// export const changeTheme = () => {
//   const lsTheme = localStorage.getItem("theme");
//   localStorage.setItem(
//     "theme",
//     lsTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
//   );

//   if (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }

//   location.reload();
// };

/**
 * Add no scroll class to body when modal isopen
 */
export const addBodyNoScroll = () => {
    document.body.classList.add("no-scroll");
};

/**
 * Removes no scroll class to body when modal isopen
 */
export const removeBodyNoScroll = () => {
    document.body.classList.remove("no-scroll");
};

/**
 * Generates a random linear gradient color using HSL color model.
 * @return {string} The generated linear gradient color in string format.
 */
export const getRandomGradientColor = () => {
    const hue1 = Math.floor(Math.random() * 360);
    const hue2 = (hue1 + Math.floor(Math.random() * 180)) % 360;
    const saturation = 75 + Math.floor(Math.random() * 25);
    const lightness1 = 50 + Math.floor(Math.random() * 25);
    const lightness2 = 50 + Math.floor(Math.random() * 25);
    return `linear-gradient(${hue1}deg, hsl(${hue1}, ${saturation}%, ${lightness1}%), hsl(${hue2}, ${saturation}%, ${lightness2}%))`;
};

export const getRandomHexColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

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

export const deleteScript = (val, setErrText) => {
    try {
        if (
            val.toLowerCase().includes("<script") ||
            val.toLowerCase().includes("</script>")
        ) {
            setErrText(`Текст содержит тег script. Пожалуйста, удалите его.`);
        } else {
            setErrText(``);
        }
    } catch (err) {
        console.log(err);
    }
};

export const deleteSimbols = (val, setErrText) => {
    try {
        const value = val.toLowerCase();
        if (
            value.includes(">") ||
            value.includes("<") ||
            value.includes("[") ||
            value.includes("]")
        ) {
            setErrText(`Удалите недопустимые символы:  >, :, <, [, ]`);
        }
    } catch (err) {
        console.log(err);
    }
};

export const getDateString = (date) => {
    const newDate = new Date(date);
    const dayString = newDate.toLocaleString("ru-Ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return dayString;
};
