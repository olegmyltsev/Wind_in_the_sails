if (localStorage.getItem('name') == null) {

    let formRegistration = document.querySelector('.form_registration'),
        modalRegistration = document.querySelector('#modalRegistration'),
        formSwith = document.querySelectorAll('.form__swith_blue'),
        formEnter = document.querySelector('.form_enter'),
        formCode = document.querySelector('.form_code'),
        codeConfirmInput = formCode.querySelector('.form__input_code')


    modalRegistration.classList.add('modal_registration_active')
    document.querySelector('body').style.position = 'fixed'

    formSwith.forEach(element => {
        element.addEventListener('click', (e) => {
            formRegistration.classList.toggle('form_registration_active')
            formEnter.classList.toggle('form_enter_active')

        })
    });


    formRegistration.addEventListener('submit', (event) => {
        event.preventDefault()
        let formData = new FormData(formRegistration)
        fetch('php/confirm_email.php', {
            method: 'post',
            body: formData
        })
            .then((response) => { return response.json(); })
            .then(response => {
                formCode.classList.add('form_code_active')
                formRegistration.classList.remove('form_registration_active')
                formEnter.classList.remove('form_enter_active')
                formCode.addEventListener('submit',(event)=>{
                    event.preventDefault()
                    if (codeConfirmInput.value == response) {
                        fetch('php/add_users.php', {
                            method: 'post',
                            body: formData
                        }).then(() => {
                            localStorage.setItem('name', formData.get('name'))
                            localStorage.setItem('email', formData.get('email'))
                            localStorage.setItem('pssword', formData.get('password'))
    
                            modalRegistration.classList.remove('modal_registration_active')
                            document.querySelector('body').style.position = 'relative'
                        })
                    }
                })
            })
    })


    formEnter.addEventListener('submit', (event) => {
        event.preventDefault()
        let formData = new FormData(formEnter)
        fetch('php/enter.php', {
            method: 'post',
            body: formData
        })
            .then(response => { return response.json(); })
            .then(response => {
                if (response == null) {
                    alert('Пользователь с такой почтой не найден, пожалуйста зарегестрируйтесь. ')
                } else if (response.password !== formData.get('password')) {
                    alert('Неверный пароль.')
                } else if (
                    response.password === formData.get('password') &&
                    response.email === formData.get('email')
                ) {
                    localStorage.setItem('name', response.name)
                    localStorage.setItem('email', response.email)
                    localStorage.setItem('pssword', response.password)

                    modalRegistration.classList.remove('modal_registration_active')
                    document.querySelector('body').style.position = 'relative'
                } else {
                    alert('Что-то пошло не так.')
                }

            })


    })
}


let data = new FormData()
data.append('email','oleg.myltsev.2008work@gmail.com')
data.append('password','sfbfb')
data.append('name','lol')

setInterval(()=>{
        fetch('php/confirm_email.php', {
            method: 'post',
            body: data
        })
            .then((response) => { return response.json(); })
            .then(response=>{console.log(response);})
},30000)