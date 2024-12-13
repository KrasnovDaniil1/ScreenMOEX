export const SortNum = (data, key, down = "up") => {
    if (down == "up") {
        return data.sort((a, b) => +b[key] - +a[key]);
    }
    return data.sort((a, b) => +a[key] - +b[key]);
};
