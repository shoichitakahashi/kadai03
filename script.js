kadai03
=======
@@ -0,0 +1,21 @@
            $( window ).resize(function(){
                //画面サイズ表示
                $("#size").html(window.innerWidth);
                $("#chromeIcon").css({"WebkitTransform":"rotate("+window.innerWidth+"deg)"});
                $("#chromeIcon").css({"MozTransform":"rotate("+window.innerWidth+"deg)"});
            });

            $(function(){
                var bg = ["","#eee","#34495E","#1ABC9C","#2ECC71","#3498DB","#9B59B6","#95A5A6","#F1C40F","#E67E22","#E74C3C","#BDC3C7","#34495E"];
            
                var i=0;
    
                $(".boxStyle").each(
                        function(){
                            $(this).css({"background":bg[i]}).fadeOut(0).delay(100*i).fadeIn(500);
                            i++;
                        }
                );
                
            
            });
