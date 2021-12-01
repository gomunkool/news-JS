import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3c38cd58960b4d2bab8544f01bddcf62', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
