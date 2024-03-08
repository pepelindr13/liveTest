let allStudents = []
function submit() {
    if(localStorage.allstudents){
        allStudents = JSON.parse(localStorage.getItem('allstudents'))
    }
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let mailphone = document.getElementById('mailphone').value

    if (firstname === '' || lastname === '' || mailphone === '') {
        empty.style.display = 'block'
        setTimeout(()=>{
            empty.style.display ='none'
        }, 3000);
    } else {
        let confirmation = confirm('Do you want to submit?')
        if (confirmation == true) {

            let studentObj = {firstname,lastname,mailphone}
            let  pushedStudents = allStudents.push(studentObj)
    
            if (pushedStudents) {
                console.log(pushedStudents);
                alert("Successfull")
                // setTimeout(()=>{
                //     success.style.display = 'none'
                // }, 3000);
                localStorage.setItem('allstudents', JSON.stringify(allStudents))
                window.location.href = 'dashboard.html'
                
            } else {
                alert('Failed to submit')
            }
            
            console.log(allStudents);
        
            document.getElementById('firstname').value = ''
            document.getElementById('lastname').value = ''
            document.getElementById('mailphone').value = ''

           
            } else {
                alert ('Check Again')
            }
            display()
        }
}

