function word_char_counter(paragraph: string):{characters: number, words : number}{
    const remove_whitespace = paragraph.replace(/\s/g,'');
    
    let char_count = remove_whitespace.length;

    let word_count = paragraph.split(/\s+/).filter(word => word !== remove_whitespace).length
    return {characters: char_count, words:word_count}

}

let paragraph = "The user will enter a english paragraph and all that is needed is to just to implement counting characters and words without whitespaces.Create a GitHub repository for the project and submit its URL in the project submission form."

console.log(`Number of characters: ${word_char_counter(paragraph).characters}`);
console.log(`Number of words: ${word_char_counter(paragraph).words}`);


