/**
 * resuslt sheet
 * 
 */
let res = new Result; 

student.map( (data,index) => {
    console.log(`
     
    Id       = ${data.id}  
    Name     = ${data.name}
    Age      = ${data.age}
    Gender   = ${data.gender}

    Subject        Markes                 Gpa                             Grade 

    Bangla    = ${data.bn}       ${res.result(data.bn).gpa}     ${res.result(data.bn).grade} 
    English   = ${data.en}       ${res.result(data.en).gpa}     ${res.result(data.en).grade} 
    Math      = ${data.math}     ${res.result(data.math).gpa}   ${res.result(data.math).grade} 
    Secince   = ${data.s}        ${res.result(data.s).gpa}      ${res.result(data.s).grade} 
    S Secince = ${data.ss}       ${res.result(data.ss).gpa}     ${res.result(data.ss).grade} 
    Religon   = ${data.rel}      ${res.result(data.rel).gpa}    ${res.result(data.rel).grade} 
    ---------------------------------------------------------
    Final Cgpa : ${res.finalResult(data.bn, data.en, data.math, data.s,data.ss, data.rel).finalCgpa}  Final Result : ${res.finalResult(data.bn, data.en, data.math, data.s,data.ss, data.rel).finalResult}                           
                               

    `);
})

