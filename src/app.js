main();

function main() {
  const storageKey = "markdown";
  const titleInput = document.getElementById("title");
  const markdownInput = document.getElementById("markdown");
  const wordCount = document.getElementById("word-count");

  const doc = loadMarkdown();

  titleInput.value = doc.title;
  markdownInput.value = doc.markdown;

  updateWordCount(doc.markdown);

  markdownInput.addEventListener("input", handleMarkdownInput);

  function handleTitleInput(event) {
    doc.title = event.currentTarget.value;
    saveMarkdown(doc);
  }

  function handleMarkdownInput(event) {
    updateWordCount(event.currentTarget.value);

    doc.markdown = event.currentTarget.value;
    saveMarkdown(doc);
  }

  function nonEmptyString(text) {
    return text.length > 0;
  }

  function updateWordCount(str) {
    let count = str.split(/\s+/).filter(nonEmptyString).length;

    wordCount.textContent = count;
  }

  function saveMarkdown(doc) {
    localStorage.setItem(storageKey, JSON.stringify(doc));
  }

  function loadMarkdown() {
    const doctStr = localStorage.getItem(storageKey);
    if (doctStr === null) {
        return {title: 'test title', markdown: 'test markdown'}
    }
    return JSON.parse(doctStr)
  }
}