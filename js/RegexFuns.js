
let regex = {
        'name': /^[A-z]+$/,
        'email': /^[a-z][a-z0-9\.]+@(gmail|yahoo|outlook|hotmail)\.(com)$/,
        'seats': /^(?:[1-9]|1[0-5])$/,
        'mobile': /01(0|1|2|5)[0-9]{8}$/,
        'message': /^[\s\S]{10,300}$/
};

function checkInput(that) {
        
        let parent = that.parentElement;

        if (that.name == 'date') {

                let now = new Date(),
                        today = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");

                that.min = today + "T07:00";
                that.max = "";

                if (that.value == '') {
                        that.classList.add("invalid");
                        parent.querySelector(".field-required").classList.remove("d-none");
                        parent.querySelector(".wrong-time").classList.add("d-none");
                } else {
                        let selectedDate = new Date(that.value),
                                selectedHours = selectedDate.getHours(),
                                selectedMinutes = selectedDate.getMinutes(),
                                selectedTime = selectedHours * 60 + selectedMinutes,
                                currentTime = now.getHours() * 60 + now.getMinutes(),
                                selectedDay = that.value.split("T")[0];

                        if ( selectedTime < 420 || selectedTime > 1260 || selectedDate <= now || selectedDay < today) {
                                that.classList.add("invalid");
                                parent.querySelector(".field-required").classList.add("d-none");
                                parent.querySelector(".wrong-time").classList.remove("d-none");
                        } else {
                                that.classList.remove("invalid");
                                parent.querySelector(".field-required").classList.add("d-none");
                                parent.querySelector(".wrong-time").classList.add("d-none");
                        }
                }

                return;
        }

        if (that.value == '') {
                that.classList.add("invalid");
                parent.querySelector(".field-required").classList.remove("d-none");
                parent.querySelector(".letters-only")?.classList.add("d-none");
                parent.querySelector(".valid-email")?.classList.add("d-none");
                parent.querySelector(".eg-number")?.classList.add("d-none");
                parent.querySelector(".oneToFifteen")?.classList.add("d-none");
                parent.querySelector(".valid-message")?.classList.add("d-none");
                that.closest(".form").firstElementChild.classList.remove("d-none");
        } else if (regex[that.name].test(that.value) == false) {
                that.classList.add("invalid");
                parent.querySelector(".field-required").classList.add("d-none");
                parent.querySelector(".letters-only")?.classList.remove("d-none");
                parent.querySelector(".valid-email")?.classList.remove("d-none");
                parent.querySelector(".eg-number")?.classList.remove("d-none");
                parent.querySelector(".oneToFifteen")?.classList.remove("d-none");
                parent.querySelector(".valid-message")?.classList.remove("d-none");
                that.closest(".form").firstElementChild.classList.remove("d-none");
        } else if (regex[that.name].test(that.value) == true) {
                that.classList.remove("invalid");
                parent.querySelector(".field-required").classList.add("d-none");
                parent.querySelector(".letters-only")?.classList.add("d-none");
                parent.querySelector(".valid-email")?.classList.add("d-none");
                parent.querySelector(".eg-number")?.classList.add("d-none");
                parent.querySelector(".oneToFifteen")?.classList.add("d-none");
                parent.querySelector(".valid-message")?.classList.add("d-none");
                that.closest(".form").firstElementChild.classList.remove("d-none");
        }
}

clearBtns.forEach(function (i) {
        i.addEventListener("click", function () {

                i.classList.add("d-none");
        
                let form = i.nextElementSibling,
                        inputsParent = form.querySelectorAll(".input-div"),
                        myTextArea = form.querySelector("textarea");
                
                inputsParent.forEach(function (parent) {
                        parent.querySelectorAll("input").forEach(function (input) {
                                input.classList.remove("invalid");
                                input.value = null;
                        })
                        parent.querySelectorAll("p").forEach(function (p) {
                                p.classList.add("d-none");
                        })
                });
                myTextArea.classList.remove("invalid");
        })
})
