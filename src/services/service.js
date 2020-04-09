export const service = {
  getExperiences() {
    return [
      {
        "id": "1",
        "locale":"Stefanini",
        "function": "Java Developer",
        "period": "JUL/2012 - JAN/2014",
        "image": "stefanini.png"
      },
      {
        "id": "2",
        "locale":"Acol Consultoria & Sistemas",
        "function": "Java Developer",
        "period": "JAN/2014 - ABR/2014",
        "image": "acol.png"
      },
      {
        "id": "3",
        "locale":"webamericas",
        "function": "Javascript Developer",
        "period": "JUL/2014 - FEV/2015",
        "image": "webamericas.png"
      },
      {
        "id": "4",
        "locale":"Metatron",
        "function": "Fullstack Developer",
        "period": "FEV/2015 - ABR/2018",
        "image": "metatron.png"
      },
      {
        "id": "5",
        "locale":"Radix Engenharia e Software",
        "function": "Fullstack Developer",
        "period": "MAI/2018 - ATUAL",
        "image": "radix.png"
      }
    ];
  },
  getSkills(){
    return [
      {"id": "1","name":"Java",      "value":"8"},
      {"id": "2","name":"AngularJS", "value":"8"},
      {"id": "3","name":"Node",      "value":"6"},
      {"id": "4","name":"React",     "value":"6"},
      {"id": "5","name":"NestJS",    "value":"6"},
      {"id": "6","name":"SQL",       "value":"7"},
      {"id": "7","name":"MongoDB",   "value":"6"}
    ]
  },
  getPersonInformations(){
    return {
      "personInfo": {
        "firstname":"Arthur",
        "lastname": "Reis",
        "middlename": "Rocha",
        "fullname": "Arthur Rocha Reis"
      },
      "contact": {
        "email": "arr90rj@gmail.com",
        "phone": "(21) 97129-9133",
        "linkedin": "linkedin.com/in/arthur-reis",
        "location": "Rio de Janeiro / Brazil"
      },
    }
  },
  getEducation(){
    return {
      "locale": "Centro Universitário Carioca",
      "status": "in progress"
    }
  }

};
