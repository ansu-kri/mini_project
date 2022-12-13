let keys = document.querySelectorAll("#keyboard>div")
    //console.log(keys)
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", myCal)
    }
    let bag = "";
    function myCal() {
        //console.log('clicked keys')

        let targetNumber = event.target.innerText
        if (targetNumber == "C") {
            //clear display
            document.querySelector("#display").innerText = "";
            bag = ""
        }
        else if (targetNumber == "=") {
            // mathematial operation
            console.log(eval(bag))
            let result = eval(bag)
            //console.log(result)
            document.querySelector("#display").innerText = result;
        }
        else {
            bag = bag + targetNumber;
            document.querySelector("#display").innerText = bag;
        }

    }