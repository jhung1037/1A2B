$('#start').on('click', () => {

    var pick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var ans = []
    for (var i = 0; i < 4; i++) {
        rand = Math.floor(Math.random() * (10 - i))
        ans.push(pick[rand])
        pick[rand] = pick[9 - i]
    }

    $("#lead").empty()
    $("#lead").append('Please enter your guess.')
    $("#start").empty()
})

// Check answer
var a, b, count
$('#guess').on('click', (ary) => {
    count++
    a = 0
    b = 0
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (ary[i] == ans[j]) {
                if (i == j)
                    a++
                    else
                        b++
            }
        }
    }
    if (a == 4)
        console.log('Correct! You took ' + count + ' guesses.')
    else
        console.log(a + ' A ' + b + ' B ')
})