class github {
    constructor() {
        this.client_id = "ab82252cb0f7ee01080e";
        this.client_secret = "3a557ab65d015597084be0ac0b281efe8b1883b7";
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }
    async getuser(user) {
        const profileresponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileresponse.json();
        const reporesponse = await fetch(`https:/api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id} &client+secret=${this.client_secret}}`);
        const repos = await reporesponse.json();
        return {
            profile,
            repos
        }
    }
}