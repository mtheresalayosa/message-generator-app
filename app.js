const verses = [
  {
    book: "Ephesians 5:15-16",
    verse:
      "Be very careful, then, how you live — not as unwise but as wise, making the most of every opportunity, because the days are evil.",
    meaning:
      "Take advantage of new opportunities to strengthen your faith and create meaning in your everyday life.",
  },
  {
    book: "Proverbs 27:19",
    verse: "As water reflects the face, so one's life reflects the heart.",
    meaning:
      "Your life is a reflection of the ideals and faith you hold in your heart. The areas where you spend time and energy reveal what’s really important to you.",
  },
  {
    book: "Proverbs 21:21",
    verse:
      "Whoever pursues righteousness and love finds life, prosperity, and honor.",
    meaning:
      "Prioritizing your spiritual growth will allow you to flourish. Continuing to develop your relationship with God is the key to building a life that brings you pride.",
  },
  {     
    book: "John 6:35",
    verse:
      "Then Jesus declared, 'I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.",
    meaning:
      "Jesus tells that by dedicating yourself to Him, he will provide for you. Your spiritual needs will be fulfilled, as will some of your other tangible needs.",
  },
  {
    book: "Proverbs 10:17",
    verse:
      "Whoever heeds discipline shows the way to life, but whoever ignores correction leads others astray.",
    meaning:
      "Remaining steadfast and dedicated in your faith allows you to lead by example. You must be open to direction from God in order to continue being a good example of faith.",
  },
  {
    book: "Acts 20:24",
    verse:
      "However, I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me — the task of testifying to the good news of God’s grace.",
    meaning:
      "One of the best things you can do as a follower of God is to share His grace with others. By doing so, you create meaning in your own life.",
  },
  {
    book: "Matthew 6:34",
    verse:
      "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    meaning:
      "It’s easy to get caught up worrying about the future. But as this verse reminds you, it’s important to focus on the here and now. Take your life day-by-day.",
  },
  {
    book: "1 John 5:12",
    verse:
      "Whoever has the Son has life; whoever does not have the Son of God does not have life.",
    meaning:
      "Welcoming Jesus into your world and giving your spirit over to Him will help ensure that you have a fulfilling and happy life.",
  },
];
const generateRandomNumber = (num) => Math.floor(Math.random() * num);

function randomBibleVerses() {
  const getRandomVerse = verses[generateRandomNumber(verses.length)];

  const formatMessage = `\n============================================================ \nVerse Of The Day\n\n${getRandomVerse.book}\n "${getRandomVerse.verse}"\n\nThe Good News:\n ${getRandomVerse.meaning}\n\n=============================================================\n`;

  return formatMessage;
}

console.log(randomBibleVerses());
