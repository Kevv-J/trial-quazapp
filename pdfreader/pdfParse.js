const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('Quiz1.pdf');

// console.log(dataBuffer)

pdf(dataBuffer).then(function(data) {
 
    // number of pages
    // console.log(data.numpages);
    // // number of rendered pages
    // console.log(data.numrender);
    // // PDF info
    // console.log(data.info);
    // // PDF metadata
    // console.log(data.metadata); 
    // // PDF.js version
    // // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // PDF text


    // console.log(data.text) 
    var i = 2;
    str = data.text
    console.log(str)
    while(i < str.length)
    {
        //Get quizName from PDF
        var quizname='';
        while(str[i] != '\n')
        {
            quizname += str[i++]
        }
        console.log(quizname, i);
        i++;

        //Get accessKey from PDF
        var accesskey='';
        while(str[i] != '\n')
        {
            accesskey += str[i++]
        }
        console.log(accesskey, i);
        i++;

        //Get startTime from PDF
        var starttime='';
        while(str[i] != '\n')
        {
            starttime += str[i++]
        }
        console.log(starttime, i);
        i++;

        //Get endTime from PDF
        var endtime='';
        while(str[i] != '\n')
        {
            endtime += str[i++]
        }
        console.log(endtime, i);
        console.log( str[i],str[i+1])
        i++;
        i++;
        i++;
        console.log("HI")

        // console.log( str[i],str[i+1],str[i+2],str[i+3]);
        //Get qData from PDF
        var qdata=[];
        while(str[i] != '\n' && str[i] != '!')
        {
            
            //Get questionName from PDF
            var questionText =''
            while(str[i] != '\n')
            {
                questionText += str[i++]
            }
            i++;

            //Get options from PDF
            var options=[]
            while(str[i] != '\n')
            {
                var option = '';
                
                while(str[i] != '\n')
                {
                    option += str[i++]
                    
                }
                
                i++
                if(str[i] === ' ')
                    i++
                
                options.push(option);
                
            }
            
            i++
            qdata.push({
                questiontext : questionText,
                options : options
            });
            
            
        }
        // console.log(i)
        console.log(i,str[i],str[i+1],str[i+2],str[i+3]);

        // console.log(str[i],str[i+1],str[i+2],str[i+3]);
        while(str[i] != '\n')
        {
            i++;
        }
        i++
        console.log(i,str[i],str[i+1],str[i+2],str[i+3]);

        // console.log(i,str[i]);
        var answers = [];
        while(str[i] != '\n' && i < str.length)
        {
            var answer = '';
            
            while(str[i] != '\n')
            {
                answer += str[i++];
                

            }
            i++;
            // console.log(answer,i,str[i]);
            answers.push(answer-1);
            if(str[i] === ' ')
                    i++
            
        }
        console.log(answers, i);


        break;
    }
});