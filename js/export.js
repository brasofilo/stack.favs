

 function getLSlength( ls ) {
    var getIt = JSON.parse( localStorage.getItem( ls ) );
    return getIt.favs.length;
}
function getAllStoredGits() {
    var result = [];
    for( obj in localStorage ) {
        if( obj.indexOf('git.star') === 0 ) 
            result.push( { id:obj, name:obj.replace('git.star.',''), total: getLSlength(obj) } );
    }
    return result;
}
function getAllStoredSEsite( site ) {
    var result = [];
    for( obj in localStorage ) {
        if( obj.indexOf('se.'+site) > -1 ) 
            result.push( obj );
    }
    return result;
}
function getAllStoredUsers() {
    var user = '',
        site = '',
        last_site = '',
        result = 'SE USERS\r\n';
    for( obj in localStorage ) { 
        if( obj.indexOf('se.') === 0 ) {
        
            var base = obj.replace('se.',''),
                split = base.split('.');
            if( split.length === 3 ) { // is_meta
                site = split[0] + '.' + split[1];
                user = split[2];
            }
            else {
                site = split[0];
                user = split[1];
            }
            if( site !== last_site ) {
                last_site = site;
                result += '\r\n\t' + site.toUpperCase() + "\r\n";
            }
            result += '\t\t- ' + user + "\r\n";
        }
    }
    return result;
}

$( function() {
    $('#clear-all-stored-data').click(function(e){
        if (window.confirm("Clear all localstorage data?")) { 
            for( obj in localStorage ) { 
                if( obj.indexOf('se.') === 0 || obj.indexOf('git.star') === 0 )
                    localStorage.removeItem(obj);
            }
            window.location.replace(window.location.origin);
        }
    });

    $('#export-ids').click(function(e){
        e.preventDefault();
        var output = getAllStoredUsers() + '\r\nGIT USERS\r\n', 
            the_stars = getAllStoredGits();
        for( obj in the_stars ) {
            output += "\t- " + the_stars[obj].name + "\r\n";
        }
        $("#overlayDialog textarea").val(output).select();
        
        $("#overlayDialog").dialog ( {
            modal:      false,
            title:      "all stored ids",
            position:   {
                   my: "top",
                   at: "top",
                   of: document
                   , collision: "none"
            },
            width:      "auto",
            minWidth:   400,
            minHeight:  500,
            zIndex:     3666
        } )
        .dialog ("widget").draggable ("option", "containment", "none");
    });
});