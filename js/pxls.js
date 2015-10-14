var gridVal=0;

$(document).ready(function(){
    
    $('input[name=clear]').click(function(){
        $('.pixel').css('background-color','#E2E2E2');
    });
    $('input[name=grid]').click(function(){
        gridVal=prompt("Enter size of grid");
        clear();
        create(gridVal);
    });
    
});

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
    
    draw();
}

function draw()
{
    $('.pixel').mouseover(function(){
        $(this).css('background-color','#000');
    });
}