window.onload = function ()
{
    setTimeout(function ()
    {
        document.body.classList.add('loaded')
       	if (window.matchMedia('(min-width: 667px)').matches) { // 
		    Draggable.create('.gallery', { // Запускаем плагин Draggable
			    bounds: 'body',
			    inertia: true
		    })
	    }
    },2500)
}