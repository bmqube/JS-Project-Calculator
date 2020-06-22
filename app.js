function insert(num) {
    document.form.meowMantik.value = document.form.meowMantik.value + num;
}

function equal(params) {
    let mew = eval(document.form.meowMantik.value)
    if (document.form.meowMantik.value != mew && mew) {
        document.form.meowMantik.value = mew;
    } else {
        document.form.meowMantik.value = "";
    }
}

function clearAC() {
    document.form.meowMantik.value = "";
}

function clearC() {
    let mew = document.form.meowMantik.value;
    document.form.meowMantik.value = mew.substring(0, mew.length - 1);
}