function insert(num) {
    let mew = document.form.meowMantik.value;
    let len = mew.length;
    if ((num == 0 && len && ((0 <= mew[len-1] && mew[len-1] <= 9) || mew[len-1] == '.')) || (0 < num && num <= 9) || ((num == '+' || num == '-' || num == '*' || num == '/') && (len && 0 <= mew[len - 1] && mew[len - 1] <= 9))) {
            document.form.meowMantik.value = mew + num;
    }
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