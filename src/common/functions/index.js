export const guidGenerator = () => {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export const isInt = (n) => { // String only accepted
    console.log("integer", n)
    if (n.match(/[a-zA-Z]/) || n.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
    ) {
        return false;
    }
    else {
        return true;
    }
};