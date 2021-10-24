export const sliceText = (text, length) => {
    let result = text
    if (text.length > length) {
        result = text.slice(0, length).trim()
        result += "..."
    }
    return result
}