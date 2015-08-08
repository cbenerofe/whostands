
 var pre_images = new Array()

 function preload() {

	for (i = 0; i < preload.arguments.length; i++) {
		pre_images[i] = new Image()
		pre_images[i].src = preload.arguments[i]
	}
}


 function do_preload() {

   preload(

        "deskfm/images/logos/d-hi.gif",
        "deskfm/images/logos/d-lo.gif",
        "deskfm/images/logos/e-hi.gif",
        "deskfm/images/logos/e-lo.gif",
        "deskfm/images/logos/s-hi.gif",
        "deskfm/images/logos/s-lo.gif",
        "deskfm/images/logos/k-hi.gif",
        "deskfm/images/logos/k-lo.gif",
        "deskfm/images/logos/f-hi.gif",
        "deskfm/images/logos/f-lo.gif",
        "deskfm/images/logos/m-hi.gif",
        "deskfm/images/logos/m-lo.gif",
 
        "deskfm/images/icons/cbman-stand-l.png",
        "deskfm/images/icons/cbman-stand-r.png",
        "deskfm/images/icons/cbman-sit-l.png",
        "deskfm/images/icons/cbman-sit-r.png"

   );
}
