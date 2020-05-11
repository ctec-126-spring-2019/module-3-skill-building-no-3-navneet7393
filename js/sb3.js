// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1() {
    let output = ''
    output = `One, two, one, two, three, four </br>
    Yes I needed some time to get away</br>
    I needed some peace of mind</br>
    Some peace of mind that'll stay</br>
    So I thumbed it, now it's six in L.A.</br>
    Maybe a Greyhound could be my way </br></br>` 

    return output
}

function verse2() {
    let output = ''
    output = `Police and niggers, that's </br>
    Get outta my way</br>
    Don't need to buy none of your</br>
    Gold chains today</br>
    Now don't need no bracelets</br>
    Clamped in front of my back</br>
    Just need my ticket 'till then</br>
    Won't you cut me some slack</br></br>`

    return output
}

function chorus1() {
    let output = ''
    output = `You're one in a million</br>
    Yeah that's what you are</br>
    You're one in a million babe</br>
    You're a shooting star</br>
    Maybe some day we'll see you</br>
    Before you make us cry</br>
    You know we tried to reach you</br>
    But you were much to high</br>
    Much too high</br>
    Much too high</br>
    Much too high</br></br>`

    return output
}

function chorus2() {
    let output = ''
    output = `Immigrants and fagots</br>
    They make no sense to me</br>
    They come to our country</br>
    And think they'll do as they please</br>
    Like start some mini-Iran</br>
    Or spread some fucking disease</br>
    And they talk so many God damn ways</br>
    It's all Greek to me</br></br>`

    return output
}



function main() {
    let finalOutput = '' // used to build lyrics string
    // call verse and chorus functions  
    finalOutput = verse1() + verse2() + chorus1() + chorus2()
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}