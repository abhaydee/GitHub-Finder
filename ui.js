class UI{
    constructor(){
        this.profile=document.getElementById("profile");

    }
    showprofile(user){
        this.profile.innerHTML=`
        <div class="card card-body mb-3>
        <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-4" src="${user.avatar_url}" >
            <a href="${user.html_url}" class="btn mb-3 btn-block bg-dark text-white" target="_blank">View Profile</a>
                </div>
        <div class="col-md-9">
            <span class="badge badge-primary">Public Repos ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists ${user.public_gists}</span>
            <span class="badge badge-info">Followers ${user.followers}</span>
            <span class="badge badge-success">Following ${user.following}</span>
                <br><br>
            <ul class="list-group bg-dark">
                <li class="list-group-item">Company/Organization: ${user.company}</li>
                <li class="list-group-item">Blog/Website :${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>


            </ul>
        </div>
        </div>
        </div>
        <h3 class="page-heading mt-3 mb-3 text-warning">Latest 5 Repositories</h3>
        <div id="repos"></div>
        
        
        
        

        
        
        
        
        
        
        
        `;
    }
    showrepos(repos){
        let output='';
        repos.forEach(function(repo){
            output +=`
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>

            
            </div>
            <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks:${repo.forks_count}<span>
            </div>
            </div>
            </div>

            
            
            `;
        });
         let temp1=document.getElementById('repos').innerHTML=output;
        console.log(temp1);
    }
   
        //show alert message
    showalert(message,className){
        this.clearalert();
        const div=document.createElement("div");
        div.className=className;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector(".searchContainer");
        const search=document.querySelector(".search");
        container.insertBefore(div,search);
        setTimeout(()=>{
            this.clearalert();
        },3000);
    }

    clearalert(){
        //clear if multiple messages are found.
        const currentalert=document.querySelector(".alert");
        if(currentalert){
            currentalert.remove();
        }
    }
    clearprofile(){
        this.profile.innerHTML='';
    }
}