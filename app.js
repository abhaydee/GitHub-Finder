const gitHub=new github;

const ui=new UI;
const searchuser=document.getElementById("searchUser");

searchuser.addEventListener('keyup', (e)=>{
    //get input text;
    const usertext=e.target.value;
    if(usertext!=''){
        gitHub.getuser(usertext)
        .then(data =>{
            //console.log(data);
            if(data.profile.message==="Not Found"){
                    //show alert
                    ui.showalert("user not found","alert alert-danger");
            }
            else{
                    //display the profile.
                    ui.showprofile(data.profile);
                    ui.showrepos(data.repos);

            }
        })
    }
    else{
        //clearprofile
        ui.clearprofile();
    }
});