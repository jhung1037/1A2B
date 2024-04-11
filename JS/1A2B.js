$('#history').hide()
$('#input').hide()
var a, b, count, time
var ans, guess
$('#start').on('click', () => {
    count = 0
    time = 0
    ans = []
    guess = []
    for (var i = 0; i <= 9; i++)
        $('#' + i).removeAttr("disabled")
    $('#clear').removeAttr("disabled")
    $('#delete').removeAttr("disabled")
    $("#lead").empty()
    $("#lead").append('Please enter your guess.')
    $("#start").hide()
    $("#history").empty()

    var pick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (var i = 0; i < 4; i++) {
        rand = Math.floor(Math.random() * (10 - i))
        ans.push(pick[rand])
        pick[rand] = pick[9 - i]
    }

    console.log(ans)
    $('#history').show()
    $('#input').show()
})

// Submit Guess
$('#guess').on('click', () => {
    console.log(guess)
    count++
    a = 0
    b = 0
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (guess[i] == ans[j]) {
                if (i == j)
                    a++
                    else
                        b++
            }
        }
    }

    $b = $('<button>').attr('id', 'id').attr('type', 'button').attr('class', 'btn btn-outline-primary').text('Guess ' + count + ": [ " + guess + ' ] <=> ' + a + 'A' + b + 'B')
    $col = $('<div>').attr('class', 'col').append($b)
    $row = $('<div>').attr('class', 'form-group row').append($col)
    $("#history").append($row)

    for (var i = 0; i <= 9; i++) {
        $('#' + i).removeAttr("disabled")
        $("#ans" + i).val('')
    }

    $('#guess').attr('disabled', 'disabled')
    if (a == 4) {
        $b = $('<button>').attr('id', 'id').attr('type', 'button').attr('class', 'btn btn-outline-primary').text('Correct! You took ' + count + ' guesses.')
        $col = $('<div>').attr('class', 'col').append($b)
        $row = $('<div>').attr('class', 'form-group row').append($col)
        $("#history").append($row)

        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')

        $('#clear').attr('disabled', 'disabled')
        $('#delete').attr('disabled', 'disabled')
        $("#lead").empty()
        $("#lead").append('Congratulation!')
        $("#start").show()
        $("#start").empty()
        $("#start").append('Play again?')
    }

    $('#guess').attr('disabled', 'disabled')
    guess = []
    time = 0
})

// Buttons (loops?)
function handleClick(id) {
    $("#ans" + time).val(id)
    guess.push(id)
    $('#' + id).attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++) {
            $('#' + i).attr('disabled', 'disabled')
        }
    }
}
for (var i = 0; i <= 9; i++) {
    $('#'+i).on('click', function(index) {
        return function() {
            handleClick(index);
        };
    }(i));
}
$('#clear').on('click', () => {
    $('#guess').attr('disabled', 'disabled')
    for (var i = 0; i <= 9; i++) {
        $('#' + i).removeAttr("disabled")
        $("#ans" + i).val('')
    }
    guess = []
    time = 0
})
$('#delete').on('click', () => {
    if (time == 4) {
        $('#guess').attr('disabled', 'disabled')
        for (var i = 0; i <= 9; i++)
            $('#' + i).removeAttr("disabled")
        for (var i = 0; i <= 2; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
    }
    if (time > 0) {
        time--
        $('#' + guess[time]).removeAttr("disabled")
        $("#ans" + time).val('')
        guess.splice(time)
    }
})
