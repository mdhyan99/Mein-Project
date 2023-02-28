#  1- für client

- npm install axios 
             - react-icons
             - dotenv
             - react-hook-form
             - react-hot-toast
             - react-router-dom
             - tailwind-scrollbar-hide
             - @reduxjs/toolkit
             - react-redux
  npm install axios react-icons react-hook-form react-hot-toast react-router-dom tailwind-scrollbar-hide @reduxjs/toolkit react-redux

  # 2-  für  server / api
1- ## 
  - npm init -y (für package.json)
  - npm install cors
              - mongoose
              -  express
              -   dotenv

npm install cors mongoose express dotenv
2- ## 
 ## wir mussen von mongoodb Atlas URL brinngen 
   - nach anmeldung 
   - drücken auf Database
   - wir müssen  User und password erstellen 
   - dann drücken auf connect dann connect your application dann kopieren wir URL 
   - dann speichen wir diese URL in .env mit ein name (MONGO_URL)
   - dann in indext schreiben wir (mongoose.connect(process.env.MONGO_URL,console.log("MongoDB verbunden!")))




# 3- frontend






## cors : 
// erlaubt einen Server bestimmte Ressourcen an eine Domain bereitzustellen also quasi an andere Domain  bereitzustellen und die benötigen wir hier weil wir quasi zwei verschiedene Domänen über unseren Host einmal 5174   mit 4000 und diese Ressourcen möchten wir akzeptiern