
# About TalkToUsOnWhatsApp (modal window)

![Modal window](https://raw.githubusercontent.com/jandeilson/talktousonwhatsapp/master/assets/images/modal-window.png)

It is a script very focused on the methodologies of information capture practiced in marketing agencies, so it is recommended to watch users about privacy of your personal info.

Through a modal window with a very simple form, you can request basic and detailed information from the users client. The information collected by the form will be sent to your email, then the user will be redirected to the WhatsApp App or Web App, where he will already have a personalized communication according to the data previously captured. 


## Settings

*It is necessary basic knowledge of programming language like JS and PHP, server file management and MySQL database.*

To start using, you need to create a database, use the *clients__TalkToUsOnWhatsApp_JDeS.sql* file to create default structure of table in your database, add connection informations to your database in *conn.php* file, and then in the file *assets/js/TalkToUsOnWhatsApp_JDeS.js* change:
```js
var TalkToUsOnWhatsApp_url = "//yourdomain/TalkToUsOnWhatsApp";
```
*replace //yourdomain according to the directory you put this script.*

*Do not forget to set up directory permissions correctly. 755 directories and 644 files*

About email configuration, I used SendGrid, so in *config/processWhatsApp_0(and 1).php* have script ready to communicate via API, just include your SendGrid API Key. If you want, can chose any other way.



## How it works

TalkToUsOnWhatsApp has a generator *(//yourdomain/TalkToUsOnWhatsApp/generator.html)* for you register clients and generates a unique code to be used on the client website. Modal window generator process serves to record in the database who will be directed the information collected by the modal window form that will be on the client site.

![Generator](https://raw.githubusercontent.com/jandeilson/talktousonwhatsapp/master/assets/images/screenshot-generator.png)

In the generator fill in your client's information, get your script code, add it somewhere on your client's website and you're done, your modal will be displayed, that's all. :)

Something like that will be generated:
```html
<script> var TalkToUsOnWhatsAppClientToken_JDeS = "69a42835177d308ff1e42a84861cf9eb"; (function() { var js, el; js = document.createElement("script"); el = document.querySelector("html"); js.src="//yourdomain/TalkToUsOnWhatsApp/TalkToUsOnWhatsApp_JDeS.js"; el.insertBefore(js, el.childNodes[0]); })(); </script>
```

**The script has two different settings:**

* Basic - The form will request Name;
* Advanced - The form will request Name, Phone and Message.

Your have some other stuffs to play, just custom this script like you want and need. Do not forget to share!

Any questions, we can talk about. ;)