
let students = ["დავით", "temo", "ნინო"];
for (let i = 0; i<students.length; i++) { 
    for(let j = 0; j<students[i].length; j++) {
        if (students[i].charCodeAt(j)<4304 || students[i].charCodeAt(j)>4336){
            document.write("ნაპოვნია სიმბოლო,", + "ელემენტში:"+ students[i]
             + "რომელიც არ მიეკუთვნება ქართულ ანბანს, ეს სიმბოლოა:"
              +students[i].charAt[j]+ "</br>");
        }
    }

 }

 
 