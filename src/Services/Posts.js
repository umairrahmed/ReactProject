// export default async function getPosts(){

//     // var data=await fetch('http://localhost:3000/posts')
//     //     .then(res=> { return res.json()})
//     //     .then(data=>{return (data.reverse())})
//     //     return data    

//     return [{title:"Hellow",body:"dsbcjsbcj"}]
        

// };

function getPosts() {
    return (  
         fetch('https://reactappjsonserver.herokuapp.com/posts')
        .then(res=> res.json())
        .then(data=>data.reverse())

    );

}

export default getPosts;