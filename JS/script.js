// getting username password button p body
const user_inp = document.getElementById('username');
const pass_inp = document.getElementById('password');
const btn = document.querySelector('button');
const msg = document.querySelector('p');
const bd = document.querySelector('body');
// validation
const handleSub = ()=>{
       const user = user_inp.value;
       const pass = pass_inp.value;
       // username must be more than 5 charachter
       if (user.length<=5)
       return alert('Username must be at least 5 characterslong');
       // condition with regex for uppercase lowercase number in password
       const hasUpper = /[A-z]/.test(pass);
       const hasLower = /[A-z]/.test(pass);
       const hasNumber = /[0-9]/.test(pass);
       if(!(hasUpper && hasLower && hasNumber)){
              return alert('Password must contain at least one uppercase letter, one lowercase letter, and one number.');
       }else{
              msg.textContent='Form Submitted successfully!';
              user_inp.value = '';
              pass_inp.value = '';
              bd.appendChild(msg);
              msg.style.opacity = 1;
       }
};

btn.addEventListener('click',handleSub);