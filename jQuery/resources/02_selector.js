$(function(){
    document.querySelector("#id1").style.color ="red";
    //jquery 영역 내부에서는 되도록 jquery메서드/함수만 사용
    
    //jQuery방식의 요소선택
    //$("선택자")
    // 선택한 jquery의 메서드를 사용하여 값을 변경
    $("#id2").css("color","pink")
    $("#id2").html("내부요소 변경")
    
    //태그선택자
    $("p").css("color","blue")

    //클래스 선택자
    $(".item").css({'backgroundColor':'lightGray','color':'red'})
    $(".item").click(function(){
        console.log('클릭됨')
    })
})
