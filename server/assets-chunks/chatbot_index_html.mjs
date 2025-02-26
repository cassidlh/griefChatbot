export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>AiChatbot</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
    </style>
<style>.urbanist-semibold{font-family:Urbanist,serif;font-weight:500;font-style:normal}.urbanist-bold{font-family:Urbanist,serif;font-optical-sizing:auto;font-weight:700;font-style:bold}body{background-color:#8eadaa;color:#fff}
</style><link rel="stylesheet" href="styles-YBSM3WPD.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-YBSM3WPD.css"></noscript><style ng-app-id="ng">.page[_ngcontent-ng-c1427192515]{background-color:#8eadab}.navBar[_ngcontent-ng-c1427192515]{background-color:#8eadad}</style><style ng-app-id="ng">.urbanist-regular[_ngcontent-ng-c2980441882]{font-family:Urbanist,serif;font-optical-sizing:auto;font-weight:600;font-style:normal}.urbanist-semibold[_ngcontent-ng-c2980441882]{font-family:Urbanist,serif;font-weight:500;font-style:normal}.urbanist-bold[_ngcontent-ng-c2980441882]{font-family:Urbanist,serif;font-optical-sizing:auto;font-weight:700;font-style:bold}.nav-bar[_ngcontent-ng-c2980441882]{display:flex;direction:horizontal;justify-content:space-between;justify-items:center}.left-nav[_ngcontent-ng-c2980441882]{display:flex;direction:horizontal;align-items:center;margin-left:30px}.nav-bar[_ngcontent-ng-c2980441882]   .left-nav[_ngcontent-ng-c2980441882]   .logo-name[_ngcontent-ng-c2980441882]{display:flex;direction:horizontal;align-items:center}.nav-bar[_ngcontent-ng-c2980441882]   .left-nav[_ngcontent-ng-c2980441882]   .logo[_ngcontent-ng-c2980441882]   img[_ngcontent-ng-c2980441882]{width:10%;height:10%}.LuminaAI[_ngcontent-ng-c2980441882]{margin-left:-400px}.options[_ngcontent-ng-c2980441882]{display:flex;direction:horizontal;margin-left:50px}.options[_ngcontent-ng-c2980441882]   h3[_ngcontent-ng-c2980441882]{margin-right:40px;font-size:14px}.right-nav[_ngcontent-ng-c2980441882]{display:flex;flex-direction:row;align-items:center;margin-right:30px;gap:15px}.right-nav[_ngcontent-ng-c2980441882]   #notif[_ngcontent-ng-c2980441882]   button[_ngcontent-ng-c2980441882], .right-nav[_ngcontent-ng-c2980441882]   #search[_ngcontent-ng-c2980441882]   button[_ngcontent-ng-c2980441882]{height:40px;width:40px;background-color:#6f88848f;border-radius:30px;border-color:transparent;color:#fff;font-size:14px}.right-nav[_ngcontent-ng-c2980441882]   #login[_ngcontent-ng-c2980441882]   button[_ngcontent-ng-c2980441882]{height:40px;width:150px;background-color:#6f88848f;border-radius:30px;border-color:transparent;color:#fff;font-size:14px}hr[_ngcontent-ng-c2980441882]{height:0px;color:#ffffffde}a[_ngcontent-ng-c2980441882]{cursor:pointer;text-decoration:none}a[_ngcontent-ng-c2980441882]:visited{color:#fff}a[_ngcontent-ng-c2980441882]:hover{color:#442e2e}.active-link[_ngcontent-ng-c2980441882]{color:red;font-weight:700}</style><style ng-app-id="ng">@font-face{font-family:Urbanist;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/urbanist/v15/L0x4DF02iFML4hGCyMqgXSFsjkK3.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Urbanist;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/urbanist/v15/L0x4DF02iFML4hGCyMqgXS9sjg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Urbanist;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/urbanist/v15/L0x-DF02iFML4hGCyMqrbS10ig.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Urbanist;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/urbanist/v15/L0x-DF02iFML4hGCyMqlbS0.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}</style><style ng-app-id="ng">html[_ngcontent-ng-c2810405579], body[_ngcontent-ng-c2810405579]{margin:0;height:100%;overflow:hidden}.circle[_ngcontent-ng-c2810405579]{border-radius:50%;background:transparent;border:2px solid rgba(142,155,152,.662);width:1300px;height:1300px;margin:0 auto;display:flex;justify-content:center;align-items:center;visibility:hidden}.c1[_ngcontent-ng-c2810405579]{width:1150px;height:1150px;visibility:visible;margin-bottom:620px}.c2[_ngcontent-ng-c2810405579]{width:1100px;height:1100px;visibility:visible}.c3[_ngcontent-ng-c2810405579]{width:1050px;height:1050px;visibility:visible}.c4[_ngcontent-ng-c2810405579]{width:1000px;height:1000px;visibility:visible}.c5[_ngcontent-ng-c2810405579]{width:950px;height:950px;visibility:visible}.c6[_ngcontent-ng-c2810405579]{width:900px;height:900px;visibility:visible}.c7[_ngcontent-ng-c2810405579]{width:850px;height:850px;visibility:visible}.c8[_ngcontent-ng-c2810405579]{width:800px;height:800px;visibility:visible}.c9[_ngcontent-ng-c2810405579]{width:750px;height:750px;visibility:visible}.c10[_ngcontent-ng-c2810405579]{width:700px;height:700px;visibility:visible}.c11[_ngcontent-ng-c2810405579]{width:650px;height:650px;visibility:visible}.c12[_ngcontent-ng-c2810405579]{width:600px;height:600px;visibility:visible}.c13[_ngcontent-ng-c2810405579]{width:550px;height:550px;visibility:visible}.c14[_ngcontent-ng-c2810405579]{width:500px;height:500px;visibility:visible}.c15[_ngcontent-ng-c2810405579]{width:450px;height:450px;visibility:visible}.c16[_ngcontent-ng-c2810405579]{width:400px;height:400px;visibility:visible}.c17[_ngcontent-ng-c2810405579]{width:350px;height:350px;visibility:visible}.c18[_ngcontent-ng-c2810405579]{width:300px;height:300px;visibility:visible}.c19[_ngcontent-ng-c2810405579]{width:250px;height:250px;visibility:visible}.c20[_ngcontent-ng-c2810405579]{width:200px;height:200px;visibility:visible}.c21[_ngcontent-ng-c2810405579]{width:150px;height:150px;visibility:visible}</style><style ng-app-id="ng">.scale-intro[_ngcontent-ng-c404416350]{display:flex;flex-direction:column;justify-content:center;align-items:center}#scale-intro-nums[_ngcontent-ng-c404416350]   p[_ngcontent-ng-c404416350]{margin:2px;text-align:center}.scale[_ngcontent-ng-c404416350]{border-bottom:white;height:10px}.questions1-5[_ngcontent-ng-c404416350]{display:flex;flex-direction:column;justify-content:left}.likert[_ngcontent-ng-c404416350]   li[_ngcontent-ng-c404416350]{display:flex;flex-direction:row;float:left;list-style-type:none}.likert[_ngcontent-ng-c404416350]   li[_ngcontent-ng-c404416350]   input[_ngcontent-ng-c404416350]{gap:40px}html[_ngcontent-ng-c404416350], body[_ngcontent-ng-c404416350]{padding:0;margin:0}.wrap[_ngcontent-ng-c404416350]{font:12px Arial,san-serif}h1.likert-header[_ngcontent-ng-c404416350]{padding-left:4.25%;margin:20px 0 0}form[_ngcontent-ng-c404416350]   .statement[_ngcontent-ng-c404416350]{display:block;font-size:14px;font-weight:700;padding:30px 0 0 4.25%;margin-bottom:10px}form[_ngcontent-ng-c404416350]   .likert[_ngcontent-ng-c404416350]{list-style:none;width:100%;margin:0;padding:0 0 35px;display:block;border-bottom:2px solid #efefef}form[_ngcontent-ng-c404416350]   .likert[_ngcontent-ng-c404416350]:last-of-type{border-bottom:0}form[_ngcontent-ng-c404416350]   .likert[_ngcontent-ng-c404416350]:before{content:"";position:relative;top:11px;left:9.5%;display:block;background-color:#efefef;height:4px;width:78%}form[_ngcontent-ng-c404416350]   .likert[_ngcontent-ng-c404416350]   li[_ngcontent-ng-c404416350]{display:inline-block;width:19%;text-align:center;vertical-align:top}form[_ngcontent-ng-c404416350]   .likert[_ngcontent-ng-c404416350]   li[_ngcontent-ng-c404416350]   input[type=radio][_ngcontent-ng-c404416350]{display:block;position:relative;top:0;left:50%;margin-left:-6px}form[_ngcontent-ng-c404416350]   .likert[_ngcontent-ng-c404416350]   li[_ngcontent-ng-c404416350]   label[_ngcontent-ng-c404416350]{width:100%}form[_ngcontent-ng-c404416350]   .buttons[_ngcontent-ng-c404416350]{margin:30px 0;padding:0 4.25%;text-align:right}form[_ngcontent-ng-c404416350]   .buttons[_ngcontent-ng-c404416350]   button[_ngcontent-ng-c404416350]{padding:5px 10px;background-color:#67ab49;border:0;border-radius:3px}form[_ngcontent-ng-c404416350]   .buttons[_ngcontent-ng-c404416350]   .clear[_ngcontent-ng-c404416350]{background-color:#e9e9e9}form[_ngcontent-ng-c404416350]   .buttons[_ngcontent-ng-c404416350]   .submit[_ngcontent-ng-c404416350]{background-color:#67ab49}form[_ngcontent-ng-c404416350]   .buttons[_ngcontent-ng-c404416350]   .clear[_ngcontent-ng-c404416350]:hover{background-color:#ccc}form[_ngcontent-ng-c404416350]   .buttons[_ngcontent-ng-c404416350]   .submit[_ngcontent-ng-c404416350]:hover{background-color:#14892c}</style><style ng-app-id="ng">.scale-intro[_ngcontent-ng-c1641600676]{display:flex;flex-direction:column;justify-content:center;align-items:center}#scale-intro-nums[_ngcontent-ng-c1641600676]   p[_ngcontent-ng-c1641600676]{margin:2px;text-align:center}.scale[_ngcontent-ng-c1641600676]{border-bottom:white;height:10px}.questions1-5[_ngcontent-ng-c1641600676]{display:flex;flex-direction:column;justify-content:left}.likert[_ngcontent-ng-c1641600676]   li[_ngcontent-ng-c1641600676]{display:flex;flex-direction:row;float:left;list-style-type:none}.likert[_ngcontent-ng-c1641600676]   li[_ngcontent-ng-c1641600676]   input[_ngcontent-ng-c1641600676]{gap:40px}html[_ngcontent-ng-c1641600676], body[_ngcontent-ng-c1641600676]{padding:0;margin:0}.wrap[_ngcontent-ng-c1641600676]{font:12px Arial,san-serif}h1.likert-header[_ngcontent-ng-c1641600676]{padding-left:4.25%;margin:20px 0 0}form[_ngcontent-ng-c1641600676]   .statement[_ngcontent-ng-c1641600676]{display:block;font-size:14px;font-weight:700;padding:30px 0 0 4.25%;margin-bottom:10px}form[_ngcontent-ng-c1641600676]   .likert[_ngcontent-ng-c1641600676]{list-style:none;width:100%;margin:0;padding:0 0 35px;display:block;border-bottom:2px solid #efefef}form[_ngcontent-ng-c1641600676]   .likert[_ngcontent-ng-c1641600676]:last-of-type{border-bottom:0}form[_ngcontent-ng-c1641600676]   .likert[_ngcontent-ng-c1641600676]:before{content:"";position:relative;top:11px;left:9.5%;display:block;background-color:#efefef;height:4px;width:78%}form[_ngcontent-ng-c1641600676]   .likert[_ngcontent-ng-c1641600676]   li[_ngcontent-ng-c1641600676]{display:inline-block;width:19%;text-align:center;vertical-align:top}form[_ngcontent-ng-c1641600676]   .likert[_ngcontent-ng-c1641600676]   li[_ngcontent-ng-c1641600676]   input[type=radio][_ngcontent-ng-c1641600676]{display:block;position:relative;top:0;left:50%;margin-left:-6px}form[_ngcontent-ng-c1641600676]   .likert[_ngcontent-ng-c1641600676]   li[_ngcontent-ng-c1641600676]   label[_ngcontent-ng-c1641600676]{width:100%}form[_ngcontent-ng-c1641600676]   .buttons[_ngcontent-ng-c1641600676]{margin:30px 0;padding:0 4.25%;text-align:right}form[_ngcontent-ng-c1641600676]   .buttons[_ngcontent-ng-c1641600676]   button[_ngcontent-ng-c1641600676]{padding:5px 10px;background-color:#67ab49;border:0;border-radius:3px}form[_ngcontent-ng-c1641600676]   .buttons[_ngcontent-ng-c1641600676]   .clear[_ngcontent-ng-c1641600676]{background-color:#e9e9e9}form[_ngcontent-ng-c1641600676]   .buttons[_ngcontent-ng-c1641600676]   .submit[_ngcontent-ng-c1641600676]{background-color:#67ab49}form[_ngcontent-ng-c1641600676]   .buttons[_ngcontent-ng-c1641600676]   .clear[_ngcontent-ng-c1641600676]:hover{background-color:#ccc}form[_ngcontent-ng-c1641600676]   .buttons[_ngcontent-ng-c1641600676]   .submit[_ngcontent-ng-c1641600676]:hover{background-color:#14892c}</style></head>
<body>
  <app-root ng-version="19.1.7" _nghost-ng-c1427192515 ng-server-context="ssg"><div _ngcontent-ng-c1427192515 class="navBar"><app-nav-bar _ngcontent-ng-c1427192515 _nghost-ng-c2980441882><nav _ngcontent-ng-c2980441882 style="position: sticky;"><div _ngcontent-ng-c2980441882 class="nav-bar"><div _ngcontent-ng-c2980441882 class="left-nav"><div _ngcontent-ng-c2980441882 class="logo-name"><div _ngcontent-ng-c2980441882 class="logo"><img _ngcontent-ng-c2980441882 src="images/logo.png" alt="LUMINA AI"></div><div _ngcontent-ng-c2980441882 class="LuminaAI"><h2 _ngcontent-ng-c2980441882 class="urbanist-bold"> LUMINA AI </h2></div></div><div _ngcontent-ng-c2980441882 class="options"><a _ngcontent-ng-c2980441882 href="/home"><h3 _ngcontent-ng-c2980441882 routerlink="/home" routerlinkactive="active-link" class="urbanist-semibold"> Home </h3></a><a _ngcontent-ng-c2980441882 href="/chatbot"><h3 _ngcontent-ng-c2980441882 routerlink="/chatbot" routerlinkactive="active-link" class="urbanist-semibold"> Chatbot </h3></a><a _ngcontent-ng-c2980441882 href="/resources"><h3 _ngcontent-ng-c2980441882 routerlink="/resources" routerlinkactive="active-link" class="urbanist-semibold"> Resources </h3></a><a _ngcontent-ng-c2980441882 routerlink="/about" routerlinkactive="active-link"><h3 _ngcontent-ng-c2980441882 class="urbanist-semibold">About Us</h3></a></div></div><div _ngcontent-ng-c2980441882 class="right-nav"><div _ngcontent-ng-c2980441882 id="notif"><button _ngcontent-ng-c2980441882> N </button></div><div _ngcontent-ng-c2980441882 id="search"><button _ngcontent-ng-c2980441882> S </button></div><div _ngcontent-ng-c2980441882 id="login"><button _ngcontent-ng-c2980441882> Username </button></div></div></div></nav><hr _ngcontent-ng-c2980441882><router-outlet _ngcontent-ng-c2980441882></router-outlet><app-chatbot _nghost-ng-c404416350><div _ngcontent-ng-c404416350 style="position: relative;"><div _ngcontent-ng-c404416350 class="scale-intro urbanist-bold"><p _ngcontent-ng-c404416350> Please read each statement carefully and rate how much you agree or disagree using the following scale: </p><div _ngcontent-ng-c404416350 id="scale-intro-nums"><p _ngcontent-ng-c404416350> 0 - Strongly Disagree </p><p _ngcontent-ng-c404416350> 1 - Disagree </p><p _ngcontent-ng-c404416350> 2 - Slightly Disagree </p><p _ngcontent-ng-c404416350> 3 - Slightly Agree </p><p _ngcontent-ng-c404416350> 4 - Agree </p><p _ngcontent-ng-c404416350> 5 - Strongly Agree </p></div><p _ngcontent-ng-c404416350> Select the number that best reflects your experience or feelings. There are no right or wrong answers — please respond honestly. </p></div><div _ngcontent-ng-c404416350 class="wrap"><form _ngcontent-ng-c404416350><app-likert _ngcontent-ng-c404416350 question="Question 1" groupname="q1" _nghost-ng-c1641600676><label _ngcontent-ng-c1641600676 class="statement">Question 1</label><ul _ngcontent-ng-c1641600676 class="likert"><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="strongly_agree" name="q1"><label _ngcontent-ng-c1641600676>Strongly agree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="agree" name="q1"><label _ngcontent-ng-c1641600676>Agree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="neutral" name="q1"><label _ngcontent-ng-c1641600676>Neutral</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="disagree" name="q1"><label _ngcontent-ng-c1641600676>Disagree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="strongly_disagree" name="q1"><label _ngcontent-ng-c1641600676>Strongly disagree</label></li></ul></app-likert><app-likert _ngcontent-ng-c404416350 question="Question 2." groupname="q2" _nghost-ng-c1641600676><label _ngcontent-ng-c1641600676 class="statement">Question 2.</label><ul _ngcontent-ng-c1641600676 class="likert"><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="strongly_agree" name="q2"><label _ngcontent-ng-c1641600676>Strongly agree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="agree" name="q2"><label _ngcontent-ng-c1641600676>Agree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="neutral" name="q2"><label _ngcontent-ng-c1641600676>Neutral</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="disagree" name="q2"><label _ngcontent-ng-c1641600676>Disagree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="strongly_disagree" name="q2"><label _ngcontent-ng-c1641600676>Strongly disagree</label></li></ul></app-likert><app-likert _ngcontent-ng-c404416350 question="Question 3" groupname="q3" _nghost-ng-c1641600676><label _ngcontent-ng-c1641600676 class="statement">Question 3</label><ul _ngcontent-ng-c1641600676 class="likert"><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="strongly_agree" name="q3"><label _ngcontent-ng-c1641600676>Strongly agree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="agree" name="q3"><label _ngcontent-ng-c1641600676>Agree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="neutral" name="q3"><label _ngcontent-ng-c1641600676>Neutral</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="disagree" name="q3"><label _ngcontent-ng-c1641600676>Disagree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="strongly_disagree" name="q3"><label _ngcontent-ng-c1641600676>Strongly disagree</label></li></ul></app-likert><app-likert _ngcontent-ng-c404416350 question="Question 4" groupname="q4" _nghost-ng-c1641600676><label _ngcontent-ng-c1641600676 class="statement">Question 4</label><ul _ngcontent-ng-c1641600676 class="likert"><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="strongly_agree" name="q4"><label _ngcontent-ng-c1641600676>Strongly agree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="agree" name="q4"><label _ngcontent-ng-c1641600676>Agree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="neutral" name="q4"><label _ngcontent-ng-c1641600676>Neutral</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="disagree" name="q4"><label _ngcontent-ng-c1641600676>Disagree</label></li><li _ngcontent-ng-c1641600676><input _ngcontent-ng-c1641600676 type="radio" value="strongly_disagree" name="q4"><label _ngcontent-ng-c1641600676>Strongly disagree</label></li></ul></app-likert><div _ngcontent-ng-c404416350 class="buttons"><button _ngcontent-ng-c404416350 class="clear">Clear</button><button _ngcontent-ng-c404416350 class="submit">Submit</button></div></form></div></div></app-chatbot><!----></app-nav-bar></div><app-circles _ngcontent-ng-c1427192515 _nghost-ng-c2810405579><body _ngcontent-ng-c2810405579><div _ngcontent-ng-c2810405579 class="circle"><div _ngcontent-ng-c2810405579 class="circle c1"><div _ngcontent-ng-c2810405579 class="circle c2"><div _ngcontent-ng-c2810405579 class="circle c3"><div _ngcontent-ng-c2810405579 class="circle c4"><div _ngcontent-ng-c2810405579 class="circle c5"><div _ngcontent-ng-c2810405579 class="circle c6"><div _ngcontent-ng-c2810405579 class="circle c7"><div _ngcontent-ng-c2810405579 class="circle c8"><div _ngcontent-ng-c2810405579 class="circle c9"><div _ngcontent-ng-c2810405579 class="circle c10"><div _ngcontent-ng-c2810405579 class="circle c11"><div _ngcontent-ng-c2810405579 class="circle c12"><div _ngcontent-ng-c2810405579 class="circle c13"><div _ngcontent-ng-c2810405579 class="circle c14"><div _ngcontent-ng-c2810405579 class="circle c15"><div _ngcontent-ng-c2810405579 class="circle c16"><div _ngcontent-ng-c2810405579 class="circle c17"><div _ngcontent-ng-c2810405579 class="circle c18"><div _ngcontent-ng-c2810405579 class="circle c19"><div _ngcontent-ng-c2810405579 class="circle c20"><div _ngcontent-ng-c2810405579 class="circle c21"></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></body></app-circles></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-TB7FTILU.js" type="module"></script>

</body></html>`;