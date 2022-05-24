import {addPostAC, deletePost, profileReducer} from "./profile-reducer";

test('length of posts should be incremented', () => {
    let action = addPostAC('it-kama.com')
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'it\'s my first post', likesCount: 23},
            {id: 3, message: 'it\'s my second post', likesCount: 323},
            {id: 4, message: 'it\'s my third post', likesCount: 7},
        ],
        profile: {
            aboutMe: 'aboutMe',
            contacts: {
                facebook: 'facebook',
                website: 'website',
                vk: 'vk',
                twitter: 'twitter',
                instagram: 'instagram',
                youtube: 'youtube',
                github: 'github',
                mainLink: 'mainLink'
            },
            lookingForAJob: false,
            lookingForAJobDescription: 'lookingForAJobDescription',
            fullName: 'fullName',
            userId: 0,
            photos: {
                small: 'string',
                large: 'string'

            }
        },
        status: "",
        newPostText: ""
    }
    let newState= profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].message).toBe('it-kama.com')
})
test('length of posts should be decremented', () => {
    let action = deletePost(1)
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'it\'s my first post', likesCount: 23},
            {id: 3, message: 'it\'s my second post', likesCount: 323},
            {id: 4, message: 'it\'s my third post', likesCount: 7},
        ],
        profile: {
            aboutMe: 'aboutMe',
            contacts: {
                facebook: 'facebook',
                website: 'website',
                vk: 'vk',
                twitter: 'twitter',
                instagram: 'instagram',
                youtube: 'youtube',
                github: 'github',
                mainLink: 'mainLink'
            },
            lookingForAJob: false,
            lookingForAJobDescription: 'lookingForAJobDescription',
            fullName: 'fullName',
            userId: 0,
            photos: {
                small: 'string',
                large: 'string'

            }
        },
        status: "",
        newPostText: ""
    }
    let newState= profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})