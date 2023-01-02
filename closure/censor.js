const censor = () => {
    let memory = {}
    
    const stringFunc = (matchWord, replacedWord) => {
        if (replacedWord !== undefined) {
            memory[matchWord] = replacedWord
        } else {
        let censoredStr = matchWord;
        
        for (let shrimp in memory) {
          censoredStr = censoredStr.replace(shrimp, memory[shrimp]) // { 'dogs': 'cats', 
        }
        return censoredStr;
        }
    }
    return stringFunc
    }

    const changeScene = censor();
    changeScene('dogs', 'cats');
    changeScene('quick', 'slow');
    console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'