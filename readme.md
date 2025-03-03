Mina olika routes är index, post, newuser, update och delete.

Index är startsidan altså "/" och är den sidan är man hittar flödet. där finns en loop som frungerar som en template för alla inlägg. Den hämta data från databasen och lägger in det som ett inlägg på sidan.

Post är den sidan är man postar nya inlägg på index. där väljer man vilken användare som postar och skriver in ett meddelande. Det läggs sedan till i databasen och man blir redirectad till index där den då syns i flödet.

Newuser är en sida där man kan skapa nya användare att publicera inlägg ifrån. Där finns en ruta där man skriver in ett namn och så läggs den till i databasen för user. Då kan man även välja den användaren är man postar.

Update är routen som gör att man kan updatera ett inlägg i efterhand. man skickas till en sida med en ruta där inläggets text redan är utskriven. Där man man ändra texten och då även ändra i databasen.

Delete är en route som helt änkelt kan ta bort inlägg från databasen.


Jag har inte hunnit arbeta med säkerheten på min sida så om jag skulle haft mer tid så skulle jag göra sidan säkrare. Jag skulle även arbeta mer med design och försöka göra så att man kan logga in som användare.