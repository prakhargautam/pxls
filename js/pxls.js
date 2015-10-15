var gridVal=0;

$(document).ready(function(){
    
    $('input[name=clear]').click(function(){
        $('.pixel').css('background-color','#FFF');
        draw();
        
    });
    $('input[name=grid]').click(function(){
        gridVal=prompt("Enter size of grid");
        clear();
        create(gridVal);
    });
    $('input[name=eraser]').click(function(){
        erase();
    });
    $('input[name=pen]').click(function(){
        draw();
    });
    $('input[name=random]').click(function(){
        random_draw();
    });
});

function random_draw()
{
    var f=0;
    $('.pixel').click(function(){
        var r=Math.floor(255*Math.random());
        var g=Math.floor(255*Math.random());
        var b=Math.floor(255*Math.random());
        $(this).css('background-color','rgb('+r+','+g+','+b+')');
            if(f===0)
                f=1;
            else
                f=0;
    });
    $('.pixel').hover(function(){
        if(f===1){
        var r=Math.floor(255*Math.random());
        var g=Math.floor(255*Math.random());
        var b=Math.floor(255*Math.random());
        $(this).css('background-color','rgb('+r+','+g+','+b+')');//rgb(r,g,b)
        }
    });
}

function increment()
{
    
}

function erase()
{
    var f=0;
    $('.pixel').click(function(){
        $(this).css('background-color','#FFF');
        if(f===0)
            f=1;
        else
            f=0;
    });
    $('.pixel').hover(function(){
        if(f===1){
        $(this).css('background-color','#FFF');
        }
    });
}

function clear()
{
    /*if(size===0)
        return;
    for(var i=0;i<size;i++)
    {
        for(var j=0;j<size;j++)
        {
            $('.pixel').remove();
        }
    }
    */
    
    $('.wrapper').empty();
}

function create(size)
{
    var ppi=600/size;
    for(var i=0;i<size;i++)
    {
        for(var j=0;j<size;j++)
        {
            $('.wrapper').append('<div class="pixel"></div>');
        }
        $('.wrapper').append('<br>');
    }
    $('body').css('line-width',ppi+'px');
    $('.pixel').css('height',ppi+'px');
    $('.pixel').css('width',ppi+'px');
    
}

function draw()
{
    var f=0;
    $('.pixel').click(function(){
        $(this).css('background-color','#000');
            if(f===0)
                f=1;
            else
                f=0;
    });
    
    /*$('.pixel').click(function(){
        return;
    });*/
    $('.pixel').hover(function(){
        if(f===1){
        $(this).css('background-color','#000');
        }
    });
}
function draw2()
{
    
}
