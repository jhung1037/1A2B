$('#history').hide()
$('#input').hide()
var a, b, count = 0
var ans = []
$('#start').on('click', () => {

    $("#lead").empty()
    $("#lead").append('Please enter your guess.')
    $("#start").hide()

    var pick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (var i = 0; i < 4; i++) {
        rand = Math.floor(Math.random() * (10 - i))
        ans.push(pick[rand])
        pick[rand] = pick[9 - i]
    }

    $('#history').show()
    $('#input').show()
})

// Check answer
$('#guess').on('click', () => {
    var guess = $('ans').value
    count++
    /*
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
*/

    $b = $('<button>').attr('type', 'button').attr('class', 'btn btn-outline-primary').text('Guess ' + count + ": [ " + guess + ' , ' + a + 'A' + b + 'B' + ' ]')
    $col = $('<div>').attr('class', 'col').append($b)
    $row = $('<div>').attr('class', 'form-group row').append($col)
    $("#history").append($row)
        // if (a == 4)
        //$("#check").append('Correct! You took ' + count + ' guesses.')
        //  else
        //     $("#check").append(a + ' A ' + b + ' B ')
})