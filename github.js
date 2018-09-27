class github{
    constructor(){
        this.client_id="b5be12603fec04fbf356";
        this.client_secret="4ae96b667ccd54a73597f6b03551d27ad55c2f59";
        this.repos_count=5;
        this.repos_sort='created:asc';
    }
    async getuser(user){
        const profileresponse =await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile=await profileresponse.json();
        const reporesponse=await fetch(`https:/api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id} &client+secret=${this.client_secret}}`);
        const repos=await reporesponse.json();
        return {
            profile,
            repos
        }
    }
}