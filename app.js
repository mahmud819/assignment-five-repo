
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

    const updateMainBalance = mainBalanceSub(noyakhaliDonation);
    const finalMainBalance = document.getElementById('main-balance').innerText = updateMainBalance;

     // ! js for pop up button

     const popUp = document.getElementById('pop-up');
     popUp.classList.remove('hidden');
     const popUpClose = document.getElementById('pop-up-btn');
     popUpClose.addEventListener('click',function(){
        popUp.classList.add('hidden');
     })
     
    // ! history list create

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-gray-300 p-4 mx-28 my-6  rounded-md border-1-2 border-gray-violet';
    historyItem.innerHTML = `
    <p class= 'text-3xl text-black'>${noyakhaliDonation + ' ' + 'is donated for flood at Noyakhali,Bangladesh'}</p>
    <p class= 'text-3xl text-black'>${new Date().toLocaleDateString()}</p>
    `
    const historyContainer = document.getElementById('history-area');
    historyContainer.appendChild(historyItem); 


   


   
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

    const updateMainBalance = mainBalanceSub(feniDonation);
    const finalMainBalance = document.getElementById('main-balance').innerText = updateMainBalance;


    
     // ! js for pop up button

     const popUp = document.getElementById('pop-up');
     popUp.classList.remove('hidden');
     const popUpClose = document.getElementById('pop-up-btn');
     popUpClose.addEventListener('click',function(){
        popUp.classList.add('hidden');
     })

    // ! history list create

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-gray-300 p-4 mx-28 my-6  rounded-md border-1-2 border-gray-violet';
    historyItem.innerHTML = `
    <p class= 'text-3xl text-black'>${feniDonation + ' ' + 'is donated for flood at Feni,Bangladesh'}</p>
    <p class= 'text-3xl text-black'>${new Date().toLocaleDateString()}</p>
    `
    const historyContainer = document.getElementById('history-area');
    historyContainer.appendChild(historyItem); 
   
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

    const updateMainBalance = mainBalanceSub(studentDonation);
    const finalMainBalance = document.getElementById('main-balance').innerText = updateMainBalance;

    
     // ! js for pop up button

     const popUp = document.getElementById('pop-up');
     popUp.classList.remove('hidden');
     const popUpClose = document.getElementById('pop-up-btn');
     popUpClose.addEventListener('click',function(){
        popUp.classList.add('hidden');
     })

    // ! history list create

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-gray-300 p-4 mx-28 my-6  rounded-md border-1-2 border-gray-violet';
    historyItem.innerHTML = `
    <p class= 'text-3xl text-black'>${studentDonation + ' ' + 'is donated for students protest injury,Bangladesh'}</p>
    <p class= 'text-3xl text-black'>${new Date().toLocaleDateString()}</p>
    `
    const historyContainer = document.getElementById('history-area');
    historyContainer.appendChild(historyItem); 
   
});


//  ! tab change function

const donationTab = document.getElementById('donation-btn');
const historyTab = document.getElementById('history-btn');
historyTab.addEventListener('click',function(){
    historyTab.classList.add('bg-lime-500');
    historyTab.classList.remove('bg-white');
    donationTab.classList.add('bg-white','text-black');
    donationTab.classList.remove('bg-lime-500');
    document.getElementById('camphain-area').classList.add('hidden');
    document.getElementById('history-area').classList.remove('hidden');
})

donationTab.addEventListener('click',function(){
    historyTab.classList.add('bg-white');
    historyTab.classList.remove('bg-lime-500');
    donationTab.classList.add('bg-lime-500');
    donationTab.classList.remove('bg-white');
    document.getElementById('camphain-area').classList.remove('hidden');
    document.getElementById('history-area').classList.add('hidden');
})