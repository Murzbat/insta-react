import Posts from "../components/Posts";

export default class InstaService {
    constructor(){
        this._apiBase = 'http://localhost:3000/'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        
        return res.json();
        
    }
    getAllPosts = async () => {
        const res = await this.getResource('posts/');
        return res;
    }
    getAllPhotos = async () => {
        const res = await this.getResource('posts/');
        return res.map(this._transformPosts);
    }
    _transformPosts = (post) => {
        return {           //на вход получили объект с множеством свойств и делаем и как бы на выходе получвем отдельные свойства из него
            src: post.src,   
            alt: post.alt,
            id: post.id
        }
    }
}