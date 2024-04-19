let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^ياض يا فينوم$/i.test(m.text)) { 
 responses = [ 
 let vn = './Menu.png'
 ]; 
 } else if (/^نيك|سكس| احا$/i.test(m.text)) { 
     responses = [ 
'✨عيب '
     ]; 
   } else if (/^عرص$/i.test(m.text)) { 
     responses = [ 
       '*عيييب .*',  
     ];
 }else if (/^ٌخول$/i.test(m.text)) { 
     responses = [ 
       'عيييب',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
