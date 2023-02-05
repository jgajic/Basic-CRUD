const inputIme = document.querySelector('.inputIme');
const inputPrezime = document.querySelector('.inputPrezime');
const inputGodine = document.querySelector('.inputGodine');
const btnDodaj = document.querySelector('.btnDodaj');
const tabelaUnos = document.querySelector('.tabela-unos');

const btnSnimi = document.querySelector('.btnSnimi');
const btnNazad = document.querySelector('.btnNazad');


const osobe = [
    {
        ime: 'Milos',
        prezime: 'Lomovic',
        godine: 38
    },
    {
        ime: 'Joca',
        prezime: 'Gajic',
        godine: 36
    },
    {
        ime: 'Goran',
        prezime: 'Planic',
        godine: 54
    },
    {
        ime: 'Zoran',
        prezime: 'Milic',
        godine: 45
    },

];

// const osobe = [];

let editIdx = null;


window.addEventListener('load', () => {
    procitaj();
});



btnDodaj.addEventListener('click', () => {
    dodaj();
    procitaj();
});





btnNazad.addEventListener('click', () => {

    btnDodaj.hidden = false;
    btnSnimi.hidden = true;
    btnNazad.hidden = true;

    inputIme.value = '';
    inputPrezime.value = '';
    inputGodine.value = '';

    inputIme.focus();

    editIdx = null;
    console.log(editIdx);
});


btnSnimi.addEventListener('click', () => {

    osobe[editIdx].ime = inputIme.value;
    osobe[editIdx].prezime = inputPrezime.value;
    osobe[editIdx].godine = inputGodine.value;

    btnDodaj.hidden = false;
    btnSnimi.hidden = true;
    btnNazad.hidden = true;

    inputIme.value = '';
    inputPrezime.value = '';
    inputGodine.value = '';

    inputIme.focus();

    editIdx = null;
    // console.log(editIdx);

    procitaj();

});


const procitaj = () => {

    tabelaUnos.innerHTML = '';
    osobe.forEach((osoba, idx) => {
        tabelaUnos.innerHTML += `
        <tr>
            <th>${idx + 1}</th>
            <td>${osoba.ime}</td>
            <td>${osoba.prezime}</td>
            <td>${osoba.godine}</td>
            <td><button class="btn btn-warning" onClick="izmeni(${idx})">Edit</button></td>
            <td><button class="btn btn-danger" onClick="obrisi(${idx})">Delete</button></td>
        </tr>
        `;
    });
};


const dodaj = () => {

    if (inputIme.value !== '' && inputPrezime.value !== '' && inputGodine.value > 0) {
        osobe.push({
            ime: inputIme.value,
            prezime: inputPrezime.value,
            godine: inputGodine.value
        });

        inputIme.value = '';
        inputPrezime.value = '';
        inputGodine.value = '';
    } else {
        alert('All fields are required ');
    }


    inputIme.focus();
};


const obrisi = (idx) => {
    osobe.splice(idx, 1);
    procitaj();
};


const izmeni = (idx) => {

    inputIme.value = osobe[idx].ime;
    inputPrezime.value = osobe[idx].prezime;
    inputGodine.value = osobe[idx].godine;

    btnDodaj.hidden = true;

    btnSnimi.hidden = false;
    btnNazad.hidden = false;

    editIdx = idx;

};


