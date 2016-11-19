var bio = {
    "name": "Washington Soares",
    "role": "Web Developer",
    "welcomeMessage": "Hello! Nice to meet you!",
    "biopic": "images/foto_rosto.jpg",
    "contacts": {
        "mobile": "(11)97509-42-41",
        "email": "wsoaresfilho@hotmail.com.br",
        "github": "wsoaresfilho",
        "twitter": "@wsoaresfilho",
        "location": "Bragança Paulista, SP"
    },
    "skills": ["Intelligent", "Perfectionist", "Self-taught", "Determined"]
};

var work = {
    "jobs": [{
        "employer": "10i9",
        "title": "Web Development",
        "location": "Bragança Paulista, SP",
        "dates": "12-03-2015",
        "description": "Create sites and blogs"
    }, {
        "employer": "Unigex",
        "title": "ERP Support",
        "location": "Fortaleza, CE",
        "dates": "10-03-2010",
        "description": "Give support for the ERP system"
    }]
};

var projects = {
    "projects": [{
        "title": "Projeto 1",
        "dates": "05-05-2013",
        "description": "Descrição do projeto 1",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }, {
        "title": "Projeto 2",
        "dates": "15-11-2014",
        "description": "Descrição do projeto 2",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }]
};

var education = {
    "schools": [{
        "name": "Universidade São Francisco",
        "location": "Itatiba, SP",
        "degree": "Bachelor degree",
        "dates": "12-01-2018",
        "url": "http://usf.com.br",
        "majors": ["CS"]
    }, {
        "name": "Loveland High School",
        "location": "Loveland, CO",
        "degree": "High School degree",
        "dates": "06-30-1998",
        "url": "http://thompson.k12.co.us/loveland",
        "majors": ["CS"]
    }],
    "onlineCourses": [{
        "name": "Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "10-20-2016",
        "url": "https://br.udacity.com/"
    }, {
        "name": "Server-side Development with NodeJS",
        "school": "The Hong Kong University of Science and Technology",
        "dates": "08-30-2016",
        "url": "https://www.coursera.org/"
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcome);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var skill_data = HTMLskills.replace("%data%", skill);
            $("#skills").append(skill_data);
        });
    }

    $.each(bio.contacts, function(key, value) {
        var contact_data = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value);
        $("#footerContacts").append(contact_data);
    });
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var job_data = HTMLworkEmployer.replace("%data%", job.employer);
        job_data += HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(job_data);
        job_data = HTMLworkDates.replace("%data%", job.dates);
        job_data += HTMLworkLocation.replace("%data%", job.location);
        job_data += HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(job_data);
    });
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", project.title);
        var dates = HTMLprojectDates.replace("%data%", project.dates);
        var description = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(title);
        $(".project-entry:last").append(dates);
        $(".project-entry:last").append(description);
        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var images = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(images);
            });
        }
    });
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var name = HTMLschoolName.replace("%data%", school.name);
        name += HTMLschoolDegree.replace("%data%", school.degree);
        var date = HTMLschoolDates.replace("%data%", school.dates);
        var location = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(name);
        $(".education-entry:last").append(date);
        $(".education-entry:last").append(location);
        $(".education-entry:last a").attr('href', school.url);
        if (school.majors.length > 0) {
            school.majors.forEach(function(maj) {
                var major = HTMLschoolMajor.replace("%data%", maj);
                $(".education-entry:last").append(major);
            });
        }
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(online) {
        $("#education").append(HTMLschoolStart);
        var title = HTMLonlineTitle.replace("%data%", online.name);
        title += HTMLonlineSchool.replace("%data%", online.school);
        var date = HTMLonlineDates.replace("%data%", online.dates);
        var url = HTMLonlineURL.replace("%data%", online.url);
        $(".education-entry:last").append(title + date);
        $(".education-entry:last").append(url);
    });
};

function locationizer(work_obj) {
    var warray = [];
    work_obj.jobs.forEach(function(work) {
        warray.push(work.location);
    });
    return warray;
}
//console.log(locationizer(work));

function inName(name) {
    var names = name.split(" ");
    var first = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    var last = names[1].toUpperCase();

    return first + " " + last;
}
//console.log(inName(bio.name));

$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);