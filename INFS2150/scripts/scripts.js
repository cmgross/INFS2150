function generateMenu() {
    var links = "<li><a href='index.html'>Home</a></li>" +
        "<li><a href='throws.html'>Throws</a></li>" +
        "<li><a href='contact.html'>Classes</a></li>" +
        "<li><a href='contact.html'>Kilts</a></li>" +
        "<li><a href='contact.html'>Organizations</a></li>" +
        "<li><a href='contact.html'>Festivals</a></li>" +
        "<li><a href='contact.html'>Sign Up</a></li>";
    document.getElementById("mainnav").innerHTML = links;
}