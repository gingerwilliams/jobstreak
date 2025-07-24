export const createDate = () => {
    // Returns date in MM-DD-YYYY format
    const date = new Date();
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}