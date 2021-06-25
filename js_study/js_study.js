//for문
   for(var i = 0; i < 1; i++){
         for(var j = 0; j < 10; j++){
             console.log(i+j+"<br/>");
         }
   }
    for(var i = 0; i < 1; i++){
         for(var j = 0; j < 10; j++){
             document.write(String(i)+String(j)+"<br/>");
         }
   }


//   함수
function numbering(){
    i =0;
    while(i < 10){
        document.write(i+"<br/>");
        i += 1;
    }
}
numbering();


// 배열
    function get_members(){
        return ['jiseon', 'abcd', 'the love'];
    }

    members = get_members();   
    //members.lenght는 배열에 담긴 값을 숫자

    for(i = 0; i < members.length; i++){
        document.write(members[i].toUpperCase()+'<br/>');
        //.toUpperCase() = members[i]에 담긴 문자 를 대문자로 변환
    }

    
    var li = ['a','b','c','d','e'];
    li.push('B');   //배열 끝에 추가
    document.write(li + '<br/>');

    var li = ['a','b','c','d','e'];
    li = li.concat('B');   //복수의 원소를 배열에 추가하는 방법 / 인자로 전달된 값을 추가하는 명령
    document.write(li + '<br/>');

    var li = ['a','b','c','d','e'];
    li.unshift('B'); //배열 처음에 추가
    document.write(li+ '<br/>');

    var li = ['a','b','c','d','e'];
    li.splice(2,0,'B'); //두번째 인덱스 뒤에 삽입.
    document.write(li+ '<br/>');

    var li = ['a','b','c','d','e'];
    li.shift(); //첫번째 원소 제거 
    document.write(li + '<br/>');

    var li = ['a','b','c','d','e'];
    li.pop(); //배열의 끝점 원소 제거
    document.write(li + '<br/>');
    
    var li = ['c','e','a','b','d'];
    li.sort(); //배열 오름차순 정렬
    document.write(li + '<br/>');

    var li = ['c','e','a','b','d'];
    li.reverse(); //배열 역순 정렬
    document.write(li + '<br/>');

    // 객체

    var grades = {'jiseon':100,'yolo':90,'cat':50};
    for (key in grades){    //for in문 for(변수 in 객체변수)
        document.write("<li>키값 : "+key+" | "+"value 값 : "+ grades[key]+"</li>");
    }
    

    var grades = {
        'list' : {"jiseon":100,"yolo":90,"cat":50},     //객체안에 객체 
        'show' : function(){                            //객체안에 함수선언
            for(var name in this.list){//this : 이것. 여기선 즉 grades 를 뜻함 따라서 name 변수 안에 grades의 list를 불러옴 -> "this.list"
                document.write(name+":"+this.list[name]+"<br/>");
            }
        }
    };


grades.show(); //grades객체중 show 함수를 불러서 실행 시킴



