import fetch from "node-fetch";
//Objects



//POO specific is called Prototype orientation, instead of classes you have  individual objects, can
// heritate properties and so on by parent objects


//* when we create an Array, this object is based prototype, when push elements we add prototype.
//Option (1) _OLD
const WeatherObject = {
    URL: 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=',
    API_KEY: '36804a1d291e3890bc059ff92c2788f3',
    fetchData: async function(){
        const response = await fetch(`${this.URL}${this.API_KEY}`);
        const json = await response.json();
        return json;
    }
};

const weatherObject = Object.create(WeatherObject);
//console.log(await weatherObject.fetchData());

//Option (2) RECENT
//* use # for private , variables or methods
class base {

    #region = 'us' //private
    env = 'dev'
}



class  WeatherObject2 extends base {
    URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='
    API_KEY =  '36804a1d291e3890bc059ff92c2788f3'
    #env = 'qa'

    async fetchData(){
        const response = await fetch(`${this.URL}${this.API_KEY}`)
        const json = await response.json()
        return json
    }

    #getenv(){
        return `Env:  ${this.env}`
    } 

    get enviroment(){
        return `Env:  ${this.#getenv()}`
    }

    get currentEnv(){
        return `Env Child is ${this.#env}`
    }

    get parentEnv(){
        return `Env Parent is ${this.enviroment}`
    }
}

const weatherObject2 = new WeatherObject2()
console.log(weatherObject2.enviroment)
console.log(weatherObject2.currentEnv)
//console.log(await openweathermap.fetchData());
