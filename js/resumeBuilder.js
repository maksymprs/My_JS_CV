var bio = {
	"name" : "Maksym ***",
	"role" : "Software Developer",
	"contacts" : {
		"email" : "******@gmail.com", 
		"mobile" : "+380 50 *** ****",
		"github" : "maksymprs",
		"twitter" : "@MaksymPrs",
		"location" : "Kharkiv, Svobody square"
		},
	"picture" : "images/me.jpg", 
	"message" : "I'm focused on C#/.NET, Java SE and web-applications development",
	"skills" : ["C#/.NET", "JavaSE", "HTML/JavaScript/CSS", "SQL/MySQL/SQLite"],
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedNameRole = formattedName + " " + formattedRole;
		$("#header").prepend(formattedNameRole);

		$("#contacts").append(HTMLcontactGeneric);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedMessage);

		var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
		$("#header").append(formattedPicture);

		if(bio.skills.length > 0) {
			  $("#header").append(HTMLskillsStart);
			  for(var i in bio.skills){
				  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				  $("#header").append(formattedSkill);
			}
		}
	}
}
bio.display();

var work = {
	"jobs" : [
	/* {
		"employer" : "none",
		"title" : "intern",
		"location" : "Kharkiv",
		"dates" : "in progress",
		"description" : "looking for Junior/Trainee position"
	}, */
	
	{
		"employer" : "Megabank",
		"title" : "deputy Chif Risk-manrgement Officer",
		"location" : "Kharkiv, Alchevskyh 40",
		"dates" : "2006-2015",
		"description" : "I was envolved in management of the bank's risks such as market, liquidity, currency and credit risks providing appropriate management methodology and reporting system"
	}
	],
	"display": function(){
		for(var i in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formattedDescription);
		}
	
	}
}
work.display();

var education = {
	"schools" : [
		{
			"name" : "BrainAcademy",
			"location" : "Kharkiv, Otakara Yarosha 18",
			"degree" : "Associate",
			"majors" : "C#/.NET",
			"dates" : "Feb 2016 - Jun 2016"
		},
		{
			"name" : "KhNURE",
			"location" : "Kharkiv, Nauki ave 14",
			"degree" : "Specialist",
			"majors" : "Computer Science",
			"dates" : "May 2015 - Jun 2016"
		},
		{
			"name" : "KhNU",
			"location" : "Kharkiv, Svobody square 4",
			"degree" : "PhD",
			"majors" : "Economics",
			"dates" : "Sep 1990 - Jun 1995"
		}
	],

	"onlinecourses" : [
		{
			"title" : "Java programming",
			"school" : "Coursera",
			"dates" : "Jan 2016 - Mar 2016",
			"url" : "coursera.com"
		},
		
		{
			"title" : "Project Management: The Basics for Success",
			"school" : "Coursera",
			"dates" : "Nov 2015",
			"url" : "coursera.com"
		},
		{
			"title" : "Introduction to PHP and MySQL Programming",
			"school" : "Alison",
			"dates" : "Nov 2015",
			"url" : "alison.com"
		},
		{
			"title" : "Web Application Architectures",
			"school" : "Coursera",
			"dates" : "Jan 2015",
			"url" : "coursera.com"
		}
	],
	
	"display" : function(){
		for(var i in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedNameDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameDegree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedmajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			$(".education-entry:last").append(formattedmajors);
		}
		$("#education").append(HTMLonlineClasses);
		for(var i in education.onlinecourses){
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[i].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[i].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlinecourses[i].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlinecourses[i].url);
			$(".education-entry:last").append(formattedURL);

		}
	
	}

}
education.display();

var projects = {
	
	"projects" : [
	{
		"title" : "Books project",
		"type" : "Web application",
		"dates" : "May 2016 - Jun 2016",
		"description" : "Educational project. Web-site written using ASP.NET MVC, ADO.NET, EF (code first, DB first) – books storage which use SQL Server for persisting data."
		//"images": 
	},
		
	{
		"title" : "Airlines",
		"type" : "Console application",
		"description" : "Educational project. Airport information system – console app developed using generics, interfaces, abstract classes, exceptions, assemblies, logs, Unit tests, ADO.NET, EF.",
		"dates" : "Feb 2016 - Jun 2016"
		//"images": 
	},
	
	{
		"title" : "GasStations",
		"type" : "Android app",
		"description" : "My own course project – Android application which indicates LPG filling stations by retrieving data from XML. I used Google Maps API and Java.",
		"dates" : "May 2016 - Jun 2016"
		//"images": "images/GS.png"
	},
		
	{
		"title" : "Web sites",
		"type" : "Web application",
		"description" : "Developed educational projects - web-sites using HTML/JS/CSS, PHP and JavaScript-apps (VanillaJS).",
		"dates" : "Nov 2015 - Jan 2016"
		//"images":  
	}
	],
	"display" : function(){
		for(var project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDate);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			/* var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$("#projects").append(formattedImage); */
		}
	}
}

projects.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

function inName(){
	var nameArr = [];
	nameArr = bio.name.trim().split(" ");
	newName = nameArr[0].slice(0, 1).toUpperCase() + nameArr[0].slice(1).toLowerCase() + " " + nameArr[1].toUpperCase();
	return newName;
}
