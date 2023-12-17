Q - what is req,res,next in server?
ans-req me client side se data aata hai or res server side se data bhejne ke kaam aata hai res ke pass aise control hote hai. and next middleware me use hota hai d rew ko aage forward karta hai agar next ka use nahi kiya to jam ho jaygi req..

Q-2 Rout parameter kya hote hai
rout params where as any rout chaging dynamically jaise profile ke liye har badda alag alag hota hai
/adil /faisla/shdmeen :username se ham iski banayenge
so in case we have to us params

---

Teamplate engine

---

EJS is just like a html with embeded js..
Ye Node.js ke liye bana gaya hai aur dynamic web pages banane mein madad karta hai. Template engines ka istemal HTML pages mein dynamic content ko integrate karne ke liye hota hai.

points--to integrate ejs

1.  ejs install npm i ejs
    2.config ejs
    app.set("view engine","ejs")
    3.ek views folder banao
    4.usme ejs files banano
    5.send ki jgah render karo

---

Static FILES

---

1.create folder called public
2.create three folder inside it callled as ,images,stylesheet, javascript
3.config the express static file
app.use(express.static("./public))
4.understatnd the path

---

Error handling

---

see documetationgit in
