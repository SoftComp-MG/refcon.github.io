const faqs          = document.querySelectorAll('.faqs')
const faqs__title   = document.querySelectorAll('.faqs__title')

faqs__title.forEach( ( allh3 , i )=>{
    faqs__title[i].addEventListener('click', ()=>{

        faqs.forEach( ( allfaqs, i )=>{
            faqs[i].classList.remove('active')
        })
        faqs[i].classList.add('active')
    })
})