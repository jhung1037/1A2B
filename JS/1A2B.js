$('#history').hide()
$('#input').hide()
var a, b, count = 0,
    time = 0
var ans = [],
    guess = []
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

    if (a == 4) {
        $b = $('<button>').attr('id', 'id').attr('type', 'button').attr('class', 'btn btn-outline-primary').text('Correct! You took ' + count + ' guesses.')
        $col = $('<div>').attr('class', 'col').append($b)
        $row = $('<div>').attr('class', 'form-group row').append($col)
        $("#history").append($row)

        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')

        $('#clear').attr('disabled', 'disabled')
        $('#delete').attr('disabled', 'disabled')
        $('#guess').attr('disabled', 'disabled')
    }

    guess = []
    time = 0
})

// Buttons (loops?)
$('#1').on('click', () => {
    $("#ans" + time).val(1)
    guess.push(1)
    $('#1').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
})
$('#2').on('click', () => {
    $("#ans" + time).val(2)
    guess.push(2)
    $('#2').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
})
$('#3').on('click', () => {
    $("#ans" + time).val(3)
    guess.push(3)
    $('#3').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
})
$('#4').on('click', () => {
    $("#ans" + time).val(4)
    guess.push(4)
    $('#4').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
})
$('#5').on('click', () => {
    $("#ans" + time).val(5)
    guess.push(5)
    $('#5').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
})
$('#6').on('click', () => {
    $("#ans" + time).val(6)
    guess.push(6)
    $('#6').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
})
$('#7').on('click', () => {
    $("#ans" + time).val(7)
    guess.push(7)
    $('#7').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
})
$('#8').on('click', () => {
    $("#ans" + time).val(8)
    guess.push(8)
    $('#8').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
})
$('#9').on('click', () => {
    $("#ans" + time).val(9)
    guess.push(9)
    $('#9').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
})
$('#clear').on('click', () => {
    $('#guess').attr('disabled', 'disabled')
    for (var i = 0; i <= 9; i++) {
        $('#' + i).removeAttr("disabled")
        $("#ans" + i).val('')
    }
    guess = []
    time = 0
})
$('#0').on('click', () => {
    $("#ans" + time).val(0)
    guess.push(0)
    $('#0').attr('disabled', 'disabled')
    time++
    if (time == 4) {
        $('#guess').removeAttr("disabled")
        for (var i = 0; i <= 3; i++) {
            $('#' + guess[i]).attr('disabled', 'disabled')
        }
        for (var i = 0; i <= 9; i++)
            $('#' + i).attr('disabled', 'disabled')
    }
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
    time--
    $('#' + guess[time]).removeAttr("disabled")
    $("#ans" + time).val('')
    guess.splice(time)
})