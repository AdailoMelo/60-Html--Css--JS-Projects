let res = document.querySelector('.res');
let calculate = document.querySelector('.btn-calculate');

calculate.addEventListener('click', () => {
    let birth_date = document.querySelector('.birth-input');
    birth_date = birth_date.value.split('-');
    for (index in birth_date){
        birth_date[index] = Number(birth_date[index]);
    }

    actual_date = new Date();
    actual_date = [actual_date.getFullYear(), actual_date.getMonth() + 1, actual_date.getDate()];

    let age = actual_date[0] - birth_date[0];

    if (birth_date[1] === actual_date[1]){
        if (birth_date[2] > actual_date[2]){
            age--;
        } 
    } else if (birth_date[1] > actual_date[1]) {
        age--;
    }

    res.innerHTML = `Your age is: ${age}`;
});