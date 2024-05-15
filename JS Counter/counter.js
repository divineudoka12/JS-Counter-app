const counter = document.querySelector('#counter')
const btn = document.querySelectorAll('.btn')
const saveEl = document.querySelector('.saveEl')

let count = 0

btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList

    if (styles.contains('increase')) {
        count++
    } else if (styles.contains('decrease')) {
        count = Math.max(0, count -1) 
    } else if (styles.contains('reset')) {
        let countstr = count + "-"
        saveEl.textContent += countstr;
        counter.textContent += countstr
        count='0'
    }
    
    if (count > 0) {
        counter.style.color = 'green'
    }

    if (count < 0) {
        counter.style.color = 'red'
    }


    else if (count === 0) {
        counter.style.color = 'gray'
    }

    counter.textContent = count
})
})


