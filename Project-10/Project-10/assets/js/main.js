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
const verseContainer = document.getElementById("ver");

if (mainContent) {
  const params = new URLSearchParams(window.location.search);
  const chapterNo = Number(params.get("chapter"));

  fetch("https://vedicscriptures.github.io/chapters")
    .then(response => response.json())
    .then(data => {
      const chapterData = data.find(
        ch => ch.chapter_number === chapterNo
      );

      if (!chapterNo || isNaN(chapterNo)) {
        mainContent.innerHTML = "<h3>Invalid chapter number</h3>";
        return;
      }

      else {
        if (!chapterData) {
          mainContent.innerHTML = "<h3>Chapter not found</h3>";
          return;
        }

        console.log("Loaded Chapter:", chapterData);

        // let versesHtml = [];
        const versesHtml = new Array(chapterData.verses_count);

        for (let i = 1; i <= chapterData.verses_count; i++) {
          fetch(`https://vedicscriptures.github.io/slok/${chapterData.chapter_number}/${i}`)
            .then(res => res.json())
            .then(data => {
              const verseText = data.siva.et.replace(/^\d+\.\d+\s*/, "");
              // const cleanedText = data.siva.et.replace(/^\d+\.\d+\.\s*/, "");
              versesHtml[data.verse - 1] = `
              <div class="verse-box d-flex border-top border-bottom border-1">
                <h5 class="c1 m-0" style="font-size:20px; width:15%;">Verse ${data.verse}</h5>
                <p class="m-0" style="font-size:22px; width:85%;">${verseText}</p>
              </div>
              `;
              // <p style="font-size:22px; width:85%;">${data.siva.et}</p>
              document.getElementById("ver").innerHTML = versesHtml.join("");
            });
        }

        // console.log(`${chapterNo}`)
        // console.log(`${}`)

        mainContent.innerHTML = `
        <nav aria-label="breadcrumb" class="">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="./index.html" class="text-decoration-none c1">Home</a></li>
               <li class="breadcrumb-item active" aria-current="page">Chapte ${chapterData.chapter_number}</li>
           </ol>
        </nav>
        <h2>Chapter ${chapterData.chapter_number}</h2>
        <h3 class="m-0">${chapterData.transliteration}</h3>
        <span>${chapterData.meaning.en}</span>
        <p style="font-size: 18px;" class="d-flex justify-content-center">English Summery :-${chapterData.summary.en}</p>
        
        `;
        // <img src="./assets/images/banner/gita-02.jpg" width="125%" height="700px" alt="">
        // <p style="font-size: 18px;" class="d-flex justify-content-center">हिंदी सारांश :-${chapterData.summary.hi}</p>
      }


    })
    // for (let i = 1;  < data54.verses_count; i++) {
    //   // const element = array[];
    //   console.log(i)
    // }

    .catch(err => console.error("Single chapter error:", err));
}
// let main5 = "9909";
// document.getElementById("main_content").innerHTML = main5;