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
        "period": "JAN/2014 - APR/2014",
        "image": "acol.png"
      },
      {
        "id": "3",
        "locale":"webamericas",
        "function": "Javascript Developer",
        "period": "JUL/2014 - FEB/2015",
        "image": "webamericas.png"
      },
      {
        "id": "4",
        "locale":"Metatron",
        "function": "Fullstack Developer",
        "period": "FEB/2015 - APR/2018",
        "image": "metatron.png"
      },
      {
        "id": "5",
        "locale":"Radix Engenharia e Software",
        "function": "Fullstack Developer",
        "period": "MAY/2018 - CURRENT",
        "image": "radix.png"
      }
    ];
  },
  getSkills() {
    return [
      {"id": "1","name":"Java",         "value":"4"},
      {"id": "2","name":"AngularJS",    "value":"4"},
      {"id": "3","name":"React",        "value":"4"},
      {"id": "4","name":"React Native", "value":"4"},
      {"id": "5","name":"NodeJS",       "value":"3"},
      {"id": "6","name":"NestJS",       "value":"3"},
      {"id": "7","name":"SQL",          "value":"4"},
      {"id": "8","name":"NoSQL",        "value":"3"}
    ]
  },
  getPersonInformations() {
    return {
      "personInfo": {
        "firstname":"Arthur",
        "lastname": "Reis",
        "middlename": "Rocha",
      },
      "contact": {
        "email": "arr90rj@gmail.com",
        "phone": "(21) 97129-9133",
        "linkedin": "linkedin.com/in/arthur-reis",
        "location": "Rio de Janeiro / Brazil"
      },
    }
  },
  getEducation() {
    return {
      "locale": "Centro Universitário Carioca",
      "status": "in progress"
    }
  }
};
