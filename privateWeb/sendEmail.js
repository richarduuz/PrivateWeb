let button = document.getElementById('sendEmail')
button.addEventListener('click', sendEmail)

function checkEmailAddress(email){
    let emailRegex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    let pat = new RegExp(emailRegex)
    return pat.test(email)
}

function sendEmail () {
    let p = document.getElementById('emailFlag')
    let name = document.getElementsByName('name')[0].value
    let subject = document.getElementsByName('Subject')[0].value
    let email = document.getElementsByName('_replyto')[0].value
    let message = document.getElementsByName('message')[0].value
    if (checkEmailAddress(email)){
        p.style.display = 'none'
        let postData = {'name': name, 'subject': subject, 'email': email, 'message': message}
        postData = JSON.stringify(postData)
        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open("POST", "http://3.26.29.56:3000/sendEmail", true);
        xhr.withCredentials = false
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.onload = () => {
            location.reload()
            alert('send successfully')
        }
        xhr.send(postData);
    } else {
        p.style.display = 'block'
    }
}

