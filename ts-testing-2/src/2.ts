export interface Post {
    userId: number; id: number; title: string; body: string;
}

export function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
    }).then((data: Post[]) => data).catch((error) => {
        throw error
    })
}

export type GetPosts = typeof getPosts;

export function postsPrinter(cb: GetPosts) {
    return cb().then((data) => {
        data.forEach((post: Post) => {
            console.log(`Title: ${post.title}`)
            console.log(`Body: ${post.body}`)
        });
    }).catch((error) => {
        throw error
    })
}
