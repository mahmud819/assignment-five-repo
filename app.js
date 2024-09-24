
// ! js code for Noyakhali  section

document.getElementById('noyakhali-donate-btn')
.addEventListener('click',function(){
    const noyakhaliDonation = parseFloat(inputFieldValue('noyakhali-input-field'));
    
    if(isNaN(noyakhaliDonation)){
        alert('faild to donation');
        return;
    }
// ! section balance calculation

   const noykhaliBalance = parseFloat(getStatusFieldValue('noyakhali-balance-field'));
   const newNoyakhaliBalance = noyakhaliDonation+noykhaliBalance;
   const finalNoyakhaliBalance = document.getElementById('noyakhali-balance-field').innerText = newNoyakhaliBalance;
   
// ! section balance reduce from main balance calculation

    const updateMainBalance = mainBalanceSub(finalNoyakhaliBalance);
    const finalMainBalance = document.getElementById('main-balance').innerText = updateMainBalance;

   console.log(finalMainBalance);
});




// ! js code for feni  section

document.getElementById('feni-donate-btn')
.addEventListener('click',function(){
    const feniDonation = parseFloat(inputFieldValue('feni-input-field'));
    
    if(isNaN(feniDonation)){
        alert('faild to donation');
        return;
    }
// ! section balance calculation

   const feniBalance = parseFloat(getStatusFieldValue('feni-balance-field'));
   const newFeniBalance = feniDonation+feniBalance;
   const finalFeniBalance = document.getElementById('feni-balance-field').innerText = newFeniBalance;
   
// ! section balance reduce from main balance calculation

    const updateMainBalance = mainBalanceSub(finalFeniBalance);
    const finalMainBalance = document.getElementById('main-balance').innerText = updateMainBalance;

   console.log(finalMainBalance);
});



//  ! js code for student protest

document.getElementById('studen-donate-btn')
.addEventListener('click',function(){
    const studentDonation = parseFloat(inputFieldValue('student-input-field'));
    
    if(isNaN(studentDonation)){
        alert('faild to donation');
        return;
    }
// ! section balance calculation

   const studentBalance = parseFloat(getStatusFieldValue('student-balance-field'));
   const newStudentBalance = studentDonation+studentBalance;
   const finalStudentBalance = document.getElementById('student-balance-field').innerText = newStudentBalance;
   
// ! section balance reduce from main balance calculation

    const updateMainBalance = mainBalanceSub(finalStudentBalance);
    const finalMainBalance = document.getElementById('main-balance').innerText = updateMainBalance;

   console.log(finalMainBalance);
});