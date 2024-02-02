import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState({
    text: "",
    character: 0,
    word: 0,
    sentence: 0,
    paragraph: 0,
    pronoun: 0,
    avgReadTime: 0,
    shortestWord: "-",
    longestWord: "-",
  });

  const findPronounWord = (text) => {
    let pronounsCount = 0;
    pronounsArray.forEach((element) => {
      let result = text.includes(element);
      // console.log(result);
      if (result) {
        pronounsCount++;
      }
    });

    return pronounsCount;
  };

  const findLongestWord = (text) => {
    let str = text.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length - 1; i++) {
      if (longest < str[i].length) {
        longest = str[i].length;
        word = str[i];
      }
    }
    return word;
  };

  function findShortestWord(text) {
    var words = text.trim().split(" ");
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length
        ? currentWord
        : shortestWord;
    }, words[0]);
    return shortest;
  }

  const handleInputChange = (e) => {
    let text = e.target.value;
    setData({
      ...data,
      text: text,
      character: text.length,
      word: text.trim().split(/\s+/).length,
      sentence: text.trim().split(". ").length,
      // sentence: text.trim().split("\n").length,
      paragraph: text.trim().split("\n\n").length,
      pronoun: findPronounWord(text),
      longestWord: findLongestWord(text),
      shortestWord: findShortestWord(text),
      avgReadTime: Math.ceil(data.word / 260),
    });
    console.log();
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="w-screen h-screen bg-gray-400">
      <header className="w-full h-[10vh] bg-slate-400 text-black flex items-center justify-between px-10">
        <h1 className="text-gray-800 text-2xl font-bold ">Text Analyzer</h1>
        <ul className="flex gap-4">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </li>
        </ul>
      </header>
      <main className="w-full h-[80vh] bg-slate-200 text-black flex justify-center items-center">
        <div className="w-1/2 h-3/4 bg-transparent rounded-lg flex flex-col gap-5">
          <div className="w-full bg-gray-100 rounded-lg h-[15%]">
            <ul className="flex justify-around items-center h-full w-full">
              <li className="text-center text-gray-400 ">
                Characters
                <br />
                <b className="text-gray-700 text-lg">{data.character}</b>
              </li>
              <li className="text-center text-gray-400">
                Words
                <br />
                <b className="text-gray-700 text-lg">
                  {data.text !== "" ? data.word : 0}
                </b>
              </li>
              <li className="text-center text-gray-400">
                Sentences
                <br />
                <b className="text-gray-700 text-lg">
                  {data.text ? data.sentence : 0}
                </b>
              </li>
              <li className="text-center text-gray-400">
                Paragraphs
                <br />
                <b className="text-gray-700 text-lg">
                  {data.text ? data.paragraph : 0}
                </b>
              </li>
              <li className="text-center text-gray-400">
                Pronouns
                <br />
                <b className="text-gray-700 text-lg">{data.pronoun}</b>
              </li>
            </ul>
          </div>
          <div className="w-full bg-gray-100 rounded-lg h-[70%] p-5">
            <textarea
              className="h-full w-full p-5"
              onChange={handleInputChange}
              value={data.text}
              name="text"
              id="text"
              cols="30"
              rows="10"
              placeholder="Type Here..."
            ></textarea>
          </div>
          <div className="w-full bg-gray-100 rounded-lg h-[15%]">
            <ul className="flex justify-around items-center h-full w-full">
              <li className="text-center text-gray-400">
                Average Reading Time
                <br />
                <b className="text-gray-700 text-lg">
                  ~{data.text ? data.avgReadTime : 0}Min.
                </b>
              </li>
              <li className="text-center text-gray-400">
                Shortest Word
                <br />
                <b className="text-gray-700 text-lg">
                  {data.shortestWord || "-"}
                </b>
              </li>
              <li className="text-center text-gray-400">
                Longest Word
                <br />
                <b className="text-gray-700 text-lg">
                  {data.longestWord || "-"}
                </b>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="w-full h-[10vh] bg-slate-400 text-black flex items-center justify-between px-10">
        <h1 className="text-gray-800 text-lg font-semibold ">
          Build By Ayush Varma
        </h1>
        <ul>About us | Contact us</ul>
      </footer>
    </div>
  );
};

export default App;

const pronounsArray = [
  "i",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "me",
  "him",
  "her",
  "us",
  "them",
  "my",
  "your",
  "his",
  "her",
  "its",
  "our",
  "their",
  "mine",
  "yours",
  "his",
  "hers",
  "its",
  "ours",
  "theirs",
  "myself",
  "yourself",
  "himself",
  "herself",
  "itself",
  "ourselves",
  "themselves",
  "I",
  "YOU",
  "HE",
  "SHE",
  "IT",
  "WE",
  "THEY",
  "ME",
  "HIM",
  "HER",
  "US",
  "THEM",
  "MY",
  "YOUR",
  "HIS",
  "HER",
  "ITS",
  "OUR",
  "THEIR",
  "MINE",
  "YOURS",
  "HIS",
  "HERS",
  "ITS",
  "OURS",
  "THEIRS",
  "MYSELF",
  "YOURSELF",
  "HIMSELF",
  "HERSELF",
  "ITSELF",
  "OURSELVES",
  "THEMSELVES",
  "I",
  "You",
  "He",
  "She",
  "It",
  "We",
  "They",
  "Me",
  "Him",
  "Her",
  "Us",
  "Them",
  "My",
  "Your",
  "His",
  "Her",
  "Its",
  "Our",
  "Their",
  "Mine",
  "Yours",
  "His",
  "Hers",
  "Its",
  "Ours",
  "Theirs",
  "Myself",
  "Yourself",
  "Himself",
  "Herself",
  "Itself",
  "Ourselves",
  "Themselves",
];
