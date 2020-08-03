var paragraph = document.getElementById('paragraph');
var photo = document.getElementById('x');
var text = document.getElementById('info');

text.innerHTML = "Thank you <br /> for choosing <br />THE INFORMATOR";

var pb = document.getElementById('pb');
pb.addEventListener("click", pbFunction);
function pbFunction() {
    text.innerHTML = "";
    pb.style.backgroundColor = "#ad51c9";
    pb.style.color = "#281a41";
    pb.style.borderTopLeftRadius = "30px";
    pb.style.borderBottomRightRadius = "30px";
    pb.style.borderTopRightRadius = "7px";
    pb.style.borderBottomLeftRadius = "7px";
    lcdp.style.backgroundColor = "#281a41";
    lcdp.style.color = "#ad51c9";
    doctor.style.backgroundColor = "#281a41";
    doctor.style.color = "#ad51c9";
    scorpion.style.backgroundColor = "#281a41";
    scorpion.style.color = "#ad51c9";
    you.style.backgroundColor = "#281a41";
    you.style.color = "#ad51c9";
    paragraph.innerHTML = "Peaky Blinders is a British period crime drama television series created by Steven Knight. Set in Birmingham, England, the series follows the exploits of the Shelby crime family in the direct aftermath of the First World War.The fictional family is loosely based on a real 19th century urban youth gang of the same name, who were active in the city from the 1890s to the early twentieth century. Peaky Blinders features an ensemble cast, with Cillian Murphy, Helen McCrory, and Paul Anderson starring as Tommy Shelby, Elizabeth Polly Gray, and Arthur Shelby respectively, the gang's senior members. Peaky Blinders is a gangster family located in Birmingham, England. The family operates under the orders of a bookmaker, named Thommas Shelby, the main character of the series. Working hard he expands the bussines making most of it legal. On the first season the main problem is Billy Kimber. As always, Tommy Shelby will do anything to get out of trouble. <br /> This Show has a wonderful cast, starring Cillian Murpy as Tommy Shelby, Helen McCrory as Elizabeth Gray or how they call her Polly, Paul Anderson as Arthur Shelby, Tom Hardy as Alfie Solomons and a lot more.<br /> Down below you have pictures in order: three out of four Shelby Brothers (from the left) John, Tommy and Arthur. Second picture: Polly Gray and Aberama Gold.";
    photo.innerHTML = "<img src='images/blinders.jpg' width='500' title='Shelby brothers' />" + " " + "<img src='images/polly.jpg' width='500' title='Polly Gray and Aberama Gold' />";
}

var lcdp = document.getElementById('lcdp');
lcdp.addEventListener("click", lcdpFunction);
function lcdpFunction() {
    text.innerHTML = "";
    lcdp.style.backgroundColor = "#ad51c9";
    lcdp.style.color = "#281a41";
    lcdp.style.borderTopLeftRadius = "30px";
    lcdp.style.borderBottomRightRadius = "30px";
    lcdp.style.borderTopRightRadius = "7px";
    lcdp.style.borderBottomLeftRadius = "7px";
    pb.style.backgroundColor = "#281a41";
    pb.style.color = "#ad51c9";
    doctor.style.backgroundColor = "#281a41";
    doctor.style.color = "#ad51c9";
    scorpion.style.backgroundColor = "#281a41";
    scorpion.style.color = "#ad51c9";
    you.style.backgroundColor = "#281a41";
    you.style.color = "#ad51c9";
    paragraph.innerHTML = "Money Heist (Spanish: La casa de papel, transl. The House of Paper) is a Spanish heist crime drama television series created by Álex Pina. The series was filmed in Madrid, Spain. Significant portions of part 3 were also filmed in Panama, Thailand and Florence, Italy. The narrative is told in a real-time-like fashion and relies on flashbacks, time-jumps, hidden character motivations, and an unreliable narrator for complexity. The series subverts the heist genre by being told from the perspective of a woman, Tokyo, (Úrsula Corberó) and having a strong Spanish identity, where emotional dynamics offset the perfect strategic crime. The Italian anti-fascist song Bella ciao, which plays multiple times throughout the series, became a summer hit across Europe in 2018. The whole idea of the heist is the idea of The Professor. In reality this is the idea of his father, but The Professor made the whole plan to get in the bank and make the money. On the second season they manage to get out of the bank, but on the third season they get in another bank, to save Rio who was arrested. This idea belongs to Berlin, brother of Professor, and his friend named Palermo. Starring Álvaro Morte as Professor, Úrsula Corberó as Tokio, Jaime Lorente as Denver, it is one of the best TV Shows on these days.";
    photo.innerHTML = "<img src='images/lcdp.jpg' width='500' title='La Casa de Papel bank' />" + " " + "<img src='images/professor.jpg' width='500' title='Rio, Professor, Nairobi, Tokio and Denver' />";
}

var doctor = document.getElementById('tgd');
doctor.addEventListener("click", doctorFunction);
function doctorFunction() {
    text.innerHTML = "";
    doctor.style.backgroundColor = "#ad51c9";
    doctor.style.color = "#281a41";
    doctor.style.borderTopLeftRadius = "30px";
    doctor.style.borderBottomRightRadius = "30px";
    doctor.style.borderTopRightRadius = "7px";
    doctor.style.borderBottomLeftRadius = "7px";
    pb.style.backgroundColor = "#281a41";
    pb.style.color = "#ad51c9";
    lcdp.style.backgroundColor = "#281a41";
    lcdp.style.color = "#ad51c9";
    scorpion.style.backgroundColor = "#281a41";
    scorpion.style.color = "#ad51c9";
    you.style.backgroundColor = "#281a41";
    you.style.color = "#ad51c9";
    paragraph.innerHTML = "The Good Doctor is an American medical drama television series based on the 2013 award-winning South Korean series of the same name. The series stars Freddie Highmore as Shaun Murphy, a young autistic savant surgical resident at the fictional San Jose St. Bonaventure Hospital. Antonia Thomas, Hill Harper, Christina Chang, Richard Schiff, Will Yun Lee, Paige Spara, and Tamlyn Tomita also star in the show. Nicholas Gonzalez, Beau Garrett, and Jasika Nicole used to also star in the show, but their characters were written off. Shaun has savant syndrome which excsses abilities far beyond average, mainly the memory. Shaun remembers everything he learned, perfectly, and by this he saves a lot of lifes. He has a toy scalpel which he was given by his brother who died in front of Shauns eyes.";
    photo.innerHTML = "<img src='images/doctor.jpg' width='500' title='The Good Doctor' />" + " " + "<img src='images/shaun.jpg' width='500' title='Claire and Shaun' />";
}

var scorpion = document.getElementById('scorpion');
scorpion.addEventListener("click", scorpionFunction);
function scorpionFunction() {
    text.innerHTML = "";
    scorpion.style.backgroundColor = "#ad51c9";
    scorpion.style.color = "#281a41";
    scorpion.style.borderTopLeftRadius = "30px";
    scorpion.style.borderBottomRightRadius = "30px";
    scorpion.style.borderTopRightRadius = "7px";
    scorpion.style.borderBottomLeftRadius = "7px";
    pb.style.backgroundColor = "#281a41";
    pb.style.color = "#ad51c9";
    lcdp.style.backgroundColor = "#281a41";
    lcdp.style.color = "#ad51c9";
    doctor.style.backgroundColor = "#281a41";
    doctor.style.color = "#ad51c9";
    you.style.backgroundColor = "#281a41";
    you.style.color = "#ad51c9";
    paragraph.innerHTML = "Scorpion is an American action drama television series created by Nick Santora for CBS. The series stars Elyes Gabel, Katharine McPhee, Eddie Kaye Thomas, and Jadyn Wong, among others. Loosely based on the life of its executive producer and self-proclaimed computer expert Walter O'Brien, the series centers on O'Brien and his friends helping to solve complex global problems and save lives. Scorpion is said to be the last line of defence against complex, high-tech threats around the globe. Drawing on a diverse set of skills and experience such as coding, psychology, and engineering, they are able to solve these situations. The team tackles a variety of problems, many of which are extremely complicated. While they are frequently called into service by the Department of Homeland Security, they also accept work from private individuals and organizations. Walter has an IQ level of 197, Einstein IQ level was 160. Walter was arrested when he was 11, while hacking NASA to get their blueprints for his bedroom walls. Toby is a doctor who finished Harvard, psychiatrist and biheviorist. Happy Quin is a mechanical engineer and Sylvester is a gifted mathematician and statistician, a human calculator.";
    photo.innerHTML = "<img src='images/scorpion.jpg' width='500' title='Scorpion'/>" + " " + "<img src='images/walter.jpg' width='500' title='Toby, Walter, Sylvester, Cabe and Happy' />";
}

var you = document.getElementById('you');
you.addEventListener("click", youFunction);
function youFunction() {
    text.innerHTML = "";
    you.style.backgroundColor = "#ad51c9";
    you.style.color = "#281a41";
    you.style.borderTopLeftRadius = "30px";
    you.style.borderBottomRightRadius = "30px";
    you.style.borderTopRightRadius = "7px";
    you.style.borderBottomLeftRadius = "7px";
    pb.style.backgroundColor = "#281a41";
    pb.style.color = "#ad51c9";
    lcdp.style.backgroundColor = "#281a41";
    lcdp.style.color = "#ad51c9";
    doctor.style.backgroundColor = "#281a41";
    doctor.style.color = "#ad51c9";
    scorpion.style.backgroundColor = "#281a41";
    scorpion.style.color = "#ad51c9";
    paragraph.innerHTML = "You is an American psychological thriller television series developed by Greg Berlanti and Sera Gamble. Produced by Warner Horizon Television, in association with Alloy Entertainment and A&E Studios, the first season is based on the 2014 novel by Caroline Kepnes and follows Joe Goldberg, a New York bookstore manager and serial killer who falls in love with a customer named Guinevere Beck and quickly develops an extreme, toxic, and delusional obsession. The first season, which was released in 2018, stars Penn Badgley, Elizabeth Lail, Luca Padovan, Zach Cherry, and Shay Mitchell. For the second season, Ambyr Childers was upgraded to a series regular, joining newly cast Victoria Pedretti, James Scully, Jenna Ortega and Carmela Zumbado. The first season follows the story of Joe Goldberg, a bookstore manager in New York, who upon meeting Guinevere Beck, an aspiring writer, becomes infatuated with her. He feeds his toxic obsession using social media and other technology to track her presence and remove obstacles to their romance. In the second season, Joe Goldberg moves from New York to Los Angeles to escape his past, and starts over with a new identity. When he meets avid chef Love Quinn, Joe begins falling into his old patterns of obsession and violence. As Joe attempts to forge a new love in the City of Angels, he strives to make his relationship with Love succeed at all costs, to avoid the fate of his past romantic endeavors.";
    photo.innerHTML = "<img src='images/you.jpg' width='500' title='You'/>" + " " + "<img src='images/joe.jpg' width='500' title='Joe and Guinevere Beck' />";
}

var clear = document.getElementById('clear');
clear.addEventListener("click", clearFunction);
function clearFunction() {
    pb.style.backgroundColor = "#281a41";
    pb.style.color = "#ad51c9";
    lcdp.style.backgroundColor = "#281a41";
    lcdp.style.color = "#ad51c9";
    doctor.style.backgroundColor = "#281a41";
    doctor.style.color = "#ad51c9";
    scorpion.style.backgroundColor = "#281a41";
    scorpion.style.color = "#ad51c9";
    you.style.backgroundColor = "#281a41";
    you.style.color = "#ad51c9";
    text.innerHTML = "Thank you <br /> for choosing <br />THE INFORMATOR";
    paragraph.innerHTML = "";
    photo.innerHTML = "";
}