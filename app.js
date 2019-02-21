main()

function main() {
    const textArea = document.getElementById('markdown')
    const wordCount = document.getElementById('word-count')

    textArea.addEventListener('input', handleTextInput)

    function handleTextInput(event) {
        let count = event.currentTarget.value.split(/\s+/)
        .filter(nonEmptyString).length
        wordCount.textContent = count
    }

    function nonEmptyString(text) {
        return text.length > 0
    }
}
