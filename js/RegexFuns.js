
let regex = {
        'name': /^[A-z]+$/,
        'email': /^[a-z][a-z0-9\.]+@(gmail|yahoo|outlook|hotmail)\.(com)$/,
        'seats': /^[0-9]{1,2}$/,
        'mobile': /\(+2?\)01(0|1|2|5)[0-9]{8}$/
};

function checkInput(that) {
        console.log(that)

        if (that.value == regex.name) {
                console.log("yes")
        } else {
                console.log("no")
        }
}