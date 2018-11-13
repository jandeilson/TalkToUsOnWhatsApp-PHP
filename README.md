
# TalkToUsOnWhatsApp (modal window)

![Cover](https://raw.githubusercontent.com/jandeilson/talktousonwhatsapp/master/assets/images/modalwindow.png)

Through a modal window with a very simple form, you can request basic and detailed information from the user. The information collected by the form will be sent to your email, then the user will be redirected to the WhatsApp chat, where he will already have a personalized communication according to the data previously saves. It is a script very focused on the methodologies of information capture practiced in marketing agencies, so it is recommended to watch users about privacy of your personal info.

## Settings

Basic knowledge of programming language like JS and PHP, server file management and MySQL database.

To start using, you need to create a database, use the *clients__TalkToUsOnWhatsApp_JDeS.sql* file to create default structure of table in your database, add the information to your database in *conn.php* file, and then in the file *assets/js/TalkToUsOnWhatsApp_JDeS.js* change ```var TalkToUsOnWhatsApp_url = "https://yourdomain/TalkToUsOnWhatsApp";``` according to the directory you put this script.

About email configuration, I use SendGrid, but you can chose any other.

## How it works

TalkToUsOnWhatsApp has a dashboard *(https://yourdomain/TalkToUsOnWhatsApp/dashboard.html)* for you to register clients and generates a unique code to be used on the customers' website. This information serves to record in the database who will be directed the information collected by the modal window form that will be on the client site.

In the Dashboard fill in your client's information, generate your script code, add it somewhere on your client's website and you're done, your modal will be displayed, that's all.

Something like that will be generated:
```<script> var TalkToUsOnWhatsAppClientToken_JDeS = "0cbc6611f5540bd0809a388dc95a615b"; (function() { var js, el; js = document.createElement("script"); el = document.querySelector("html"); js.src="yourdomain/TalkToUsOnWhatsApp/TalkToUsOnWhatsApp_JDeS.js"; el.insertBefore(js, el.childNodes[0]); })(); </script>```

**The script has two settings, just choose from the dashboard:**

-Basic - The form will request Name;
-Advanced - The form will request Name, Phone and Message.

Your have some other stuffs to play, just custom this script like you want and need. Do not forget to share!

Any questions, we can talk about. ;)