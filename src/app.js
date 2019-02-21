main()

function main() {
    const storageKey = 'markdown'

    const textArea = document.getElementById('markdown')
    const wordCount = document.getElementById('word-count')

    textArea.value = loadMarkdown()
    updateWordCount(textArea.value)

    
    textArea.addEventListener('input', handleTextInput)
    
    function handleTextInput(event) {
        updateWordCount(event.currentTarget.value)
        saveMarkdown(event.currentTarget.value)
    }

    function nonEmptyString(text) {
        return text.length > 0
    }

    function updateWordCount(str) {
        let count = str.split(/\s+/)
        .filter(nonEmptyString).length

        wordCount.textContent = count;
    }

    function saveMarkdown(str) {
        localStorage.setItem(storageKey, str)
    }

    function loadMarkdown() {
        return localStorage.getItem(storageKey)
    }
}