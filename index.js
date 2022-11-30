class Dictionary {
    #name
    #words
    constructor(name) {
        this.#name = name;
        this.#words = {}
    }

    get mainName() {
        return this.#name
    }
    get allWords() {
        return this.#words
    }


    #_addNewWord(wordKey, wordObj) {
        this.#words[wordKey] = wordObj
    }

    add(word, description, isDifficult) {
       let valuesArr = Object.keys(this.#words)
        if (valuesArr.includes(word)) {
            console.log('это слово уже есть в словаре')
        } else {
            this.#_addNewWord(word, {word, description, isDifficult})
        }

    }

    remove(word) {
        delete this.#words[word]
    }
    get(word) {
        return this.#words[word]
    }
    showAllWords() {
        let values = Object.values(this.#words)
        console.log(values)
        values.forEach(item => {
            console.log(`${item.word} - ${item.description}`)
        })


    }
}

// const dictionary = new Dictionary('Толковый словарь')
// dictionary.add('JavaScript', 'популярный язык программирования')
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// dictionary.remove('JavaScript')
// dictionary.showAllWords()
// console.log(dictionary)
//
class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }

    // add(word, description, isDifficult = true) {
    //     this.#words[word] = {
    //         word: word,
    //         description: description,
    //         isDifficult: isDifficult
    //     }
    // }

}
const hardWordsDictionary = new HardWordsDictionary('Сложные слова')

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();


console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords);
