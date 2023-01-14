function flip() {
    // Takes the users guess and stores it as a variable
    userGuess = (document.getElementById('userGuess').value);

    // Two numbers representing heads (1) and tails (0)
    const hotNum = [0,1];

    // Takes a random choice between 0 and 1
    let x = Math.random();

    // multiply x by length to get a whole number
    let wholeNum = x * hotNum.length;

    // drops the decimal to make it an integer and log the choice in the console
    let hotRes = Math.floor(wholeNum);
    console.log(hotRes);

    // if the choice === 1, the choice was heads and it will be compared to the users guess
    if (hotRes === 1) {
        document.getElementById('result').innerHTML='Heads';
    }

    // if the choice === 0, the choice was heads it will be compared to the users guess
    if (hotRes === 0) {
        document.getElementById('result').innerHTML='Tails';
    }

    if (userGuess === 'Heads' || userGuess === 'heads' && hotRes === 1) {
        document.getElementById('usercompare').innerHTML='You guessed it!';
    } else if (userGuess === 'Tails' || userGuess === 'tails' && hotRes === 0) {
        document.getElementById('usercompare').innerHTML='You guessed it!';
    } else {
        document.getElementById('usercompare').innerHTML='You didnt guess it!';
    }
}


function reset() {
    document.getElementById('result').innerHTML='';
    document.getElementById('usercompare').innerHTML='';
    document.getElementById('userGuess').innerHTML='';
}