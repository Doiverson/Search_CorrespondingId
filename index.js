
// 探したいID
const a = {
    id: 1234,
}


// 一致するIDを探す
const b = [
    {
        id: 123,
        city: "Vancouver"
    },
    {
        id: 1234,
        city: "Toronto"
    },
    {
        id: 3144124143214341,
        city: "Burnaby"
    }
    ];


// const bの配列をマップで回して、1つづつIDをみる
// IDが一致したら、cityのvalueを表示させる
b.map((n, i) => {
    if(a.id === n.id){
        console.log(n.city);
    }
})
