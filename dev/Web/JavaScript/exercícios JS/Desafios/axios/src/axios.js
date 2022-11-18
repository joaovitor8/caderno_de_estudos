import axios from "axios";

axios.get('https://api.github.com/users/JoaoVitor8')
    .then(res => {
        console.log(res);
});
