(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'Henry', ' Working with this team was an incredible experience. From the initial consultation to the final delivery, their attention to detail and professionalism were outstanding. They not only met but exceeded our expectations. The quality of their work is unmatched, and their dedication to client satisfaction is truly commendable.')
    createCustomer(1, 'Robert', ' Working with this team was an incredible experience. From the initial consultation to the final delivery, their attention to detail and professionalism were outstanding. They not only met but exceeded our expectations. The quality of their work is unmatched, and their dedication to client satisfaction is truly commendable.')
    createCustomer(2, 'Amy', ' Working with this team was an incredible experience. From the initial consultation to the final delivery, their attention to detail and professionalism were outstanding. They not only met but exceeded our expectations. The quality of their work is unmatched, and their dedication to client satisfaction is truly commendable.')
    createCustomer(3, 'Tyrell', ' Working with this team was an incredible experience. From the initial consultation to the final delivery, their attention to detail and professionalism were outstanding. They not only met but exceeded our expectations. The quality of their work is unmatched, and their dedication to client satisfaction is truly commendable.')
    createCustomer(4, 'Wanda', ' Working with this team was an incredible experience. From the initial consultation to the final delivery, their attention to detail and professionalism were outstanding. They not only met but exceeded our expectations. The quality of their work is unmatched, and their dedication to client satisfaction is truly commendable.')

    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if(e.target.parentElement.classList.contains('prevBtn')) {
                if(index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if(index === customers.length) {
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
    
})()