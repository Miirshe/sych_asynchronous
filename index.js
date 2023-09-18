console.log('before')
get_user_github(1, (userInfo) => {

    get_user_repo((repo) => {
        display_user_name(userInfo.username)
        display_repositories(repo)
        get_user_comments(repo[0], '5K', display_comments)
        get_user_like(repo[0], '4K', display_likes);
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

function get_user_comments(repo, comments, callback) {
    setTimeout(() => {
        callback({ repo: repo, comments: comments })
    }, 2000)
}

function get_user_like(repo, likes, callback) {
    setTimeout(() => {
        callback({ repo: repo, likes: likes });
    }, 2000);
}


// Named Functions

function display_user_name(username) {
    console.log('username : ', username);
}

function display_repositories(repo) {
    console.log('repo : ', repo);
}

function display_comments(comments) {
    console.log('repo comments : ', comments);
}

function display_likes(likes) {
    console.log('repo likes : ', likes);
}