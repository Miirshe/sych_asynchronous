console.log('before')
get_user_github(1, (userInfo) => {
    console.log('username : ', userInfo.username);
    get_user_repo((repo) => {
        get_user_comments('5K', repo[0], (repos) => {
            get_user_like(repo[0], '6K', '4K', (single_repo) => {
                console.log('repo : ', single_repo);
            })
        })
    })

})
console.log('after')

function get_user_github(id, callback) {
    setTimeout(() => {
        callback({ id: id, username: 'miirshe' })
    }, 2000)
}

function get_user_repo(callback) {
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)
}

function get_user_comments(comments, repo, callback) {
    setTimeout(() => {
        callback({ repo: repo, comments: comments })
    }, 2000)
}

function get_user_like(repo, comments, likes, callback) {
    setTimeout(() => {
        callback({ repo: repo, comments: comments, likes: likes });
    }, 2000);
}