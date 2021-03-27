const patientList = document.querySelector('#patient-list');
const form= document.querySelector('#add-patient-form');
// create element & render task
function renderPatient(doc){
    let li = document.createElement('li');
    let Date = document.createElement('span');
    let Description = document.createElement('span');
    let cross= document.createElement('div');

    li.setAttribute('data-id', doc.id);
    // Nurse.textContent = doc.data().Nurse;
    // PatientID.textContent = doc.data().PatientID;
    Date.textContent = doc.data().Date;
    Description.textContent = doc.data().Description;
    cross.textContent = 'x';

    // li.appendChild(Nurse);
    // li.appendChild(PatientID);
    li.appendChild(Date);
    li.appendChild(Description);
    li.appendChild(cross);

    patientList.appendChild(li);

    //Deleting Data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Patient').doc(id).delete();
    });
}

// getting data
/*db.collection('Patient').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderPatient(doc);
    });
});*/

//saving data
form.addEventListener('submit', (e)=>{
   e.preventDefault();
    db.collection('Patient').add({
        // Nurse: form.Nurse.value,
        // PatientID: form.PatientID.value,
        Date: form.Date.value,
        Description: form.Description.value
    });
    form.Nurse.value='';
    // form.PatientID.value='';
    form.Date.value='';
    form.Description.value='';
});

db.collection('Patient').orderBy('Date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added')
        {
            renderPatient(change.doc);
        }
        else if (change.type == 'removed')
        {
            let li= patientList.querySelector('[data-id='+ change.doc.id + ']');
            patientList.removeChild(li);
        }
    });
});