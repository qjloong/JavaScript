function isPhone(aPhone) {
    var bValidate = RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/).test(aPhone);
    if (bValidate) {
        return true;
    }
    else
        return false;
}

function isEmail(aEmail) {
    var bValidate = RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(aEmail);
    if (bValidate) {
        return true;
    }
    else
        return false;
}

function isTel(tel) {
    var bValidate = RegExp(/^((\d{11})|(\d{7,8})|(\d{4}|\d{3})-(\d{7,8}))$/).test(tel);
    if (bValidate) {
        return true;
    }
    else
        return false;
}