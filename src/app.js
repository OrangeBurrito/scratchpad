main()

function main() {
    const storageKey = 'markdown'

    const textArea = document.getElementById('markdown')

    textArea.value = loadMarkdown()

    const wordCount = document.getElementById('word-count')

    textArea.addEventListener('input', handleTextInput)

    function handleTextInput(event) {
        // update word count
        let count = event.currentTarget.value.split(/\s+/)
        .filter(nonEmptyString).length
        wordCount.textContent = counthr
        //
        saveMarkdown(event.currentTarget.value)
    }

    function nonEmptyString(text) {
        return text.length > 0
    }

    function saveMarkdown(str) {
        localStorage.setItem(storageKey, str)
    }

    function loadMarkdown() {
        return localStorage.getItem(storageKey)
    }
}