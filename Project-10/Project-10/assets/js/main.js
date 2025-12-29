const chaptersDiv = document.getElementById("chapters");

if (chaptersDiv) {
  fetch("https://vedicscriptures.github.io/chapters")
    .then(response => response.json())
    .then(data => {
      let output = "";

      data.forEach(chapter => {
        output += `
          <div class="card col-5 my-3">
            <div class="card-body">
              <h6 class="fw-bold my-2">
                Chapter ${chapter.chapter_number}
              </h6>

              <h5 class="fw-bold my-2">
                ${chapter.transliteration}
              </h5>

              <p class="sum">
                ${chapter.summary.en}
              </p>

              <a href="chapters.html?chapter=${chapter.chapter_number}"
                 class="btn btn-primary">
                 Read More
              </a>
            </div>
          </div>`;
      });

      chaptersDiv.innerHTML = output;

      // Limit summary to 30 words
      document.querySelectorAll(".sum").forEach(el => {
        const words = el.textContent.trim().split(/\s+/);
        if (words.length > 30) {
          el.textContent = words.slice(0, 30).join(" ") + "...";
        }
      });
    })
    .catch(err => console.error("Chapter list error:", err));
}





const mainContent = document.getElementById("main_content");
if (mainContent) {
  const params = new URLSearchParams(window.location.search);
  const chapterNo = params.get("chapter");

  fetch("https://vedicscriptures.github.io/chapters")
    .then(response => response.json())
    .then(data => {
      const chapterData = data.find(
        ch => ch.chapter_number == chapterNo
      );

      if (!chapterData) {
        mainContent.innerHTML = "<h3>Chapter not found</h3>";
        return;
      }

      console.log("Loaded Chapter:", chapterData);

      mainContent.innerHTML = `
        <h2>Chapter ${chapterData.chapter_number}</h2>
        <h3 class="m-0">${chapterData.transliteration}</h3>
        <span>${chapterData.meaning.en}</span>
        <p style="font-size: 18px;" class="d-flex justify-content-center">English Summery :-${chapterData.summary.en}</p>
        <p style="font-size: 18px;" class="d-flex justify-content-center">हिंदी सारांश :-${chapterData.summary.hi}</p>
      `;
    })
    .catch(err => console.error("Single chapter error:", err));
}
// let main5 = "9909";
// document.getElementById("main_content").innerHTML = main5;