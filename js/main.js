let username=document.getElementById('name');
let email=document.getElementById('email');
let password=document.getElementById('password');
let btn=document.getElementById('signup');
let loginemail=document.getElementById('signinemail');
let loginpassword=document.getElementById('signinpassword');
let btn2=document.getElementById('signin');
let savedata=[];
if(localStorage.getItem('userdata')!=null){
    savedata=JSON.parse(localStorage.getItem('userdata'));
}
function signup(){
    if(isemptysignup()==false){
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false;
    }
    let data={
        Name:username.value,
        Email:email.value,
        Password:password.value,
    }
    savedata.push(data);
    localStorage.setItem('userdata',JSON.stringify(savedata));
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
    if (isemailexist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    } else {
        savedata.push(data)
        localStorage.setItem('userdata', JSON.stringify(savedata))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    }
}
btn.addEventListener('click',function(){
    signup();
})
btn2.addEventListener('click',function(){
    signin();

})
function isemptysignup(){
    if(username.value==""||password.value==""||email.value==""){
        return false;
    }
    else{
        return true;
    }
}
function isemailexist(){
    for(let i=0;i<savedata.length;i++){
        if(savedata[i].email.toLowerCase()==loginemail.value.toLowerCase()){
            return false;
        }
    }
}
function isemptylogin(){
    if(loginemail.value==""||loginpassword.value==""){
        return false;
    }
    else{
        return true;
    }
}
function signin(){
    if(isemptylogin()==false){
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var mail=loginemail.value;
    var pass=loginpassword.value;
    for(let i=0;i<savedata.length;i++){
        if(savedata[i].email.toLowerCase() == mail.toLowerCase() && savedata[i].password.toLowerCase() == pass.toLowerCase()){
            localStorage.setItem('sessionUsername', savedata[i].name);
            window.open('sessionname.html')
        }
        else{
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }

    }
}