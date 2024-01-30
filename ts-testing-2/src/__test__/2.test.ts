import { postsPrinter, GetPosts, getPosts, Post } from "../2";

//test suite
describe("postPrinter Function", () => {
    //test case
    test("callback function should be called once", () => {
        //Given
        const posts: Post[] = [
            {
                id: 1,
                body: "post 1 body",
                title: "post 1 title",
                userId: 1
            }
        ]

        const mockCallback: jest.MockedFunction<GetPosts> = jest.fn(() => {
            return new Promise((resolve, reject) => {
                resolve(posts)
            })
        })

        //Given
        postsPrinter(mockCallback)

        //Then
        expect(mockCallback.mock.calls).toHaveLength(1)
    });

    test("Error should be thrown", () => {
        //Given
        const posts: Post[] = [
            {
                id: 1,
                body: "post 1 body",
                title: "post 1 title",
                userId: 1
            }
        ]

        const mockCallback: jest.MockedFunction<GetPosts> = jest.fn(() => {
            return new Promise((resolve, reject) => {
                reject(new Error("Error"))
            })
        })

        const result = postsPrinter(mockCallback)

        //Then
        expect(result).rejects.toThrow(Error)
    });
})

describe("getPosts Function", () => {
    test("should return the data it gets as is", () => {
        const posts: Post[] = [
            {
                id: 1,
                body: "post 1 body",
                title: "post 1 title",
                userId: 1
            }
        ];

        global.fetch = jest.fn(() => {
            return new Promise((resolve, reject) => {
                resolve({
                    ok: true,
                    json: () => {
                        return new Promise<Post[]>((resolve, reject) => {
                            resolve(posts)
                        })
                    }
                })
            })
        }) as jest.Mock

        getPosts().then((data) => {
            expect(data).toEqual(posts)
        })
    })

    test("should return error", () => {
        const posts: Post[] = [
            {
                id: 1,
                body: "post 1 body",
                title: "post 1 title",
                userId: 1
            }
        ];

        global.fetch = jest.fn(() => {
            return new Promise((resolve, reject) => {
                resolve({
                    ok: false,
                    status: 500,
                })
            })
        }) as jest.Mock

        getPosts().catch((error) => {
            expect(error.message).toEqual("HTTP error! Status: 500")
        })
    })
})
