let json = 'information.json';

function init(){
    loadJSON(function(response){
        var info = JSON.parse(response);
        console.log(info);

        loadPersonInfo(info.personInfo, info.experiences[info.experiences.length-1]);
        loadPersonContact(info.contact);
        loadSkills(info.skills);
        loadExperiences(info.experiences);
    });
}

function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("aplication/json");
    xhr.open('GET', json, true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(xhr.responseText);
        }
    }
    xhr.send(null);
}

function loadPersonInfo(info, current) {
    let fullname = document.getElementById('fullname');
    fullname.innerText = getFullname(info);

    document.getElementById('current-function').innerText = current.function;
    document.getElementById('current-job').innerText = current.locale;

    function getFullname(names) {
        let fullname = names.firstname + ' ' + names.middlename + ' ' + names.lastname;
        return fullname;
    }
}

function loadPersonContact(contact) {

    let personContact = document.getElementById('person-contact');

    let email = document.createElement("span");
    email.setAttribute('class', 'email');
    email.innerText = contact.email;
    email.append(document.createElement('br'));

    let phone = document.createElement("span");
    phone.setAttribute('class', 'phone');
    phone.innerText = contact.phone;
    phone.append(document.createElement('br'));

    let linkedin = document.createElement("span");
    let link = document.createElement("a");
    linkedin.setAttribute('class', 'linkedin');
    linkedin.appendChild(link);
    link.setAttribute('href', contact.linkedin);
    link.setAttribute('target', '_blank');
    link.innerText = contact.linkedin;
    linkedin.append(document.createElement('br'));

    let location = document.createElement("span");
    location.setAttribute('class', 'location');
    location.innerText = contact.location;
    location.append(document.createElement('br'));

    personContact.appendChild(email);
    personContact.appendChild(phone);
    personContact.appendChild(linkedin);
    personContact.appendChild(location);
}

function loadSkills(skills) {

    let divSkills = document.getElementById("skills");
    let ul = document.createElement("ul");
    skills.forEach(skill => {
        let li = document.createElement("li");
        let skillNode = `<span class="subtitle">${skill.name}</span> <progress class="progress is-link" value="${skill.value}" max="10">${skill.value}</progress>`;
        let divSkill = document.createElement('div');
        divSkill.innerHTML = skillNode;
        li.appendChild(divSkill);
        ul.appendChild(li);
    });
    divSkills.appendChild(ul);
}

function loadExperiences(experiences) {
    let divExperiences = document.getElementById("experiences");

    let cards = document.createElement('div');

    experiences.sort((a,b) => {return a-b});

    experiences.forEach(experience => {

        let cardExperience = document.createElement("div");
        cardExperience.setAttribute('class', 'card-experience zoom');

        let cardContent = document.createElement('div');
        cardContent.setAttribute('class', 'card-content');

        let media = document.createElement('div');
        media.setAttribute('class', 'media');

        let mediaLeft = document.createElement('div');
        mediaLeft.setAttribute('class', 'media-left');

        let figure = document.createElement('figure');
        //figure.setAttribute('class', 'image is-48x48');

        let image = document.createElement('img');
        //image.setAttribute('src', 'https://bulma.io/images/placeholders/96x96.png');
        image.setAttribute('src', `assets/images/${experience.image}`);
        image.setAttribute('alt', 'no image');
        image.setAttribute('height', '48px');
        image.setAttribute('width', '48px');

        figure.appendChild(image);
        mediaLeft.appendChild(figure);

        let mediaContent = document.createElement('div');
        mediaContent.setAttribute('class', 'media-content');

        let pTitle = document.createElement('p');
        pTitle.setAttribute('class', 'title is-4');
        pTitle.textContent = experience.function;

        let pSubtitle = document.createElement('p');
        pSubtitle.setAttribute('class', 'subtitle is-6');
        pSubtitle.textContent = experience.locale;

        mediaContent.appendChild(pTitle);
        mediaContent.appendChild(pSubtitle);

        media.appendChild(mediaLeft);
        media.appendChild(mediaContent);


        let content = document.createElement('div');
        content.setAttribute('class', 'content');
        content.innerText = experience.period;

        cardContent.appendChild(media);
        cardContent.appendChild(content);
        cardExperience.appendChild(cardContent);

        cards.appendChild(cardExperience);
    });
    divExperiences.appendChild(cards);

}

init();
