const https = require("https");
const fs = require("fs");
const m  = [`https://mckuhei.mcmodule.org/huge_2023-06-06_11.19.41.png huge-2023`];
for (let i = 0; i < m.length; ++i){
    let u = m[i].split(" ")[0]; 
    let n = m[i].split(" ")[1]; 
    https.get(u, function(response){
        response.pipe(fs.createWriteStream(`${n}.png`));
    });
}
