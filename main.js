const https = require("https");
const fs = require("fs");
const m  = [`https://api.feeddd.org/feeds/611dc9308fae751e23640712 人民日报`, 
            `https://api.feeddd.org/feeds/6110783449ef7514d0b91ae1 差评`, 
            `https://api.feeddd.org/feeds/611d17108fae751e2363fe8f 洞见`,
            `https://api.feeddd.org/feeds/617ce0d8b9a7e049c38b151f TeacherGwen`,
            `https://api.feeddd.org/feeds/6132e69f1269c358aa0e773e 奔跑中的奶酪`,
            `https://api.feeddd.org/feeds/613381f81269c358aa0ea989 程序员鱼皮`,
            `https://api.feeddd.org/feeds/6135d59c1269c358aa0f28ff 程序员成长指北`,
            `https://api.feeddd.org/feeds/6135d59c1269c358aa0f2907 程序员cxuan`,
            `https://api.feeddd.org/feeds/6135d59c1269c358aa0f293f 程序员小灰`];
for (let i = 0; i < m.length; ++i){
    let u = m[i].split(" ")[0]; 
    let n = m[i].split(" ")[1]; 
    https.get(u, function(response){
        response.pipe(fs.createWriteStream(`${n}.xml`));
    });
}
