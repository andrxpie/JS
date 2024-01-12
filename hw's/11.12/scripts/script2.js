class News {
  #title;
  #tags;
  #date;

  constructor(title, tags, date) {
    this.#title = title;
    this.#tags = tags;
    this.#date = date;
  }

  Contains(tag) {
    for (let i = 0; i < this.#tags.length; i++)
      if (this.#tags[i] == tag) return true;
    return false;
  }

  get Title() {
    return this.#title;
  }

  get Tags() {
    return this.#tags;
  }

  get Date() {
    return this.#date;
  }
}

class NewsStrip {
  #news = new Array();

  constructor(arrayNews) {
    this.#news = arrayNews;
  }

  ShowNews() {
    console.log(`News`);
    console.log(``);

    for (let i = 0; i < this.#news.length; i++)
      console.log(`[${i + 1}] - ${this.#news[i].Title}`);

    console.log(``);
    console.log(`Bottom`);
  }

  AddNews(news) {
    this.#news.push(news);
  }

  RemoveNews(title) {
    let removeInd = this.#news.findIndex((x) => x.Title == title);

    if (removeInd != Number.NaN) this.#news.splice(removeInd, 1);
    else console.warn(`Error to find an news with title: ${title}`);
  }

  Sort() {
    this.#news.sort((x, y) => y.Date - x.Date);
  }

  NewsByTag(tag) {
    let relatedNews = [];

    for (let i = 0; i < this.#news.length; i++) {
      if (this.#news[i].Contains(tag))
        relatedNews.push(this.#news[i]);
    }

    if (relatedNews.length > 0)
      return relatedNews;
    else
      console.warn(`Page doesn.t contains news with tag \"${tag}\"`);
  }

  get Count() {
    return this.#news.length;
  }
}

let news = new NewsStrip([
  new News("News 1", ["Politics", "Cars", "Economic"], new Date(2020)),
  new News("News 2", ["Politics", "Economic"], new Date(2023)),
  new News("News 3", ["Cars"], new Date(2022)),
]);

console.log(`News count: ${news.Count}`);
console.log(``);

news.ShowNews();
console.log(``);

news.Sort();

news.ShowNews();
console.log(``);

news.AddNews(new News("News 4", ["Music"], new Date(2024)));
news.ShowNews();
console.log(``);

news.RemoveNews("News 4");
news.ShowNews();
console.log(``);

console.log(news.NewsByTag("Cars"));

let arr = new Array();
