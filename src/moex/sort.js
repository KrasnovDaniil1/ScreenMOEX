export const SortNum = (data, key, down = true) => {
    if (down) {
        return data.sort((a, b) => +b[key] - +a[key]);
    }
    return data.sort((a, b) => +a[key] - +b[key]);
};
