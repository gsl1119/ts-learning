type lyricType = {
  time:number,
  text:string
}

function parseLyric(lyric:string) {
  const lyrics:lyricType[] = []
  lyrics.push({time:111,text:"天空"})
  return lyrics
}

const lyricInfos = parseLyric("asdasasd")

for (const item of lyricInfos) {
  console.log(item.time, item.text);
}

export{}