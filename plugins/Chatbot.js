let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^فينوم$/i.test(m.text)) { 
 responses = [ 
 'تحت امرك اطلب؟'
 ]; 
 } else if (/^بوووت|بموووووووووت|بوت$/i.test(m.text)) { 
     responses = [ 
'✨تحت امرك فينوم موجود '
     ]; 
   } else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
 }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       '😉✨شغال شغال تست فينوم مسيطر متقلقش',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
