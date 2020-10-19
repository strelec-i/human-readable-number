module.exports = function toReadable (number) {

    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimal = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 
    if (number <= 19) return numbers[number];
 
    if (number >= 20 && number <= 99) {
       if (number % 10 === 0) {
          return decimal[number / 10 - 1]
       } else {
          let dec = Math.trunc(number / 10);
          let units = number - dec * 10;
          return `${decimal[dec - 1]} ${numbers[units]}`
       }
    }
 
    if (number >= 100 && number <= 999) {
        if (number % 100 === 0) {
             return `${numbers[number / 100]} hundred`
            } else {
                    let hundreds = Math.trunc(number / 100);
                    let dec = number - hundreds * 100;
                    if (dec % 10 === 0) {
                        return `${numbers[hundreds]} hundred ${decimal[dec / 10 - 1]}`
                    } else if (dec <= 19) {
                        return `${numbers[hundreds]} hundred ${numbers[dec]}`
                    } else {
                        let dec = Math.trunc((number - hundreds * 100) / 10);
                        let units = number - hundreds * 100 - dec * 10;
                        return `${numbers[hundreds]} hundred ${decimal[dec - 1]} ${numbers[units]}`
                    }
                }
    }

}