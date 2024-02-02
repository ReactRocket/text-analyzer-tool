const pronounsArray = [
  "I",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "my",
  "your",
  "his",
  "her",
  "its",
  "our",
  "their",
  "myself",
  "yourself",
  "himself",
  "herself",
  "itself",
  "ourselves",
  "yourselves",
  "themselves",
  "this",
  "that",
  "these",
  "those",
  "who",
  "whom",
  "whose",
  "which",
  "that",
  "who",
  "whom",
  "whose",
  "which",
  "what",
];

var text = "you I hgj hgjk kjhjklhjk";

const findPronounWord = (text) => {
  let pronounsCount = 0;
  pronounsArray.forEach((element) => {
    let result = text.includes(element);
    console.log(result);
    if (result) {
      pronounsCount++;
    }
  });

  return pronounsCount;
};

findPronounWord(text);


<div>
<div>
  <h1 htmlFor="text">Enter Your Text</h1>
  <textarea
    onChange={handleInputChange}
    value={data.text}
    name="text"
    id="text"
    cols="30"
    rows="10"
    placeholder="Type Here..."
  ></textarea>
</div>
<ol>
  <li>Characters:{data.character}</li>
  <li>Words:{data.text !== "" ? data.word : 0}</li>
  <li>Sentences:{data.sentence}</li>
  <li>Paragraphs:{data.paragraph}</li>
  <li>Pronouns:{data.pronoun}</li>
  <li>Shortest Word:{data.shortestWord}</li>
  <li>Longest Word:{data.longestWord}</li>
  <li>Average Reading Time: ~{data.avgReadTime} min</li>
</ol>
</div>