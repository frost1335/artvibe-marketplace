export function createSlug(inputString: string, existingSlugs: string[]) {
    // Remove leading and trailing whitespace, convert to lowercase
    let slug = inputString.trim().toLowerCase();

    // Remove special characters and replace spaces with dashes
    slug = slug.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

    // Generate a unique slug if it already exists
    let uniqueSlug = slug;
    let index = 1;
    while (existingSlugs.includes(uniqueSlug)) {
        uniqueSlug = slug + '-' + index;
        index++;
    }

    return uniqueSlug;
}