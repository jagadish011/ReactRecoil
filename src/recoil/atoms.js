import { atom, selector } from "recoil";
import axios from "axios";

export const postsState = atom({
    key: "postsState",
    default:[],
});

export const fetchPostsSelector = selector({
    key: "fetchPostsSelector",
    get: async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return res.data
    }
})