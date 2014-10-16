$( function() {
    var get_page, $container,my_favs, current_site, $oDD,
        get_user_url = getURLParam('user');
;
  
    // <editor-fold desc="Utilities" defaultstate="collapsed">
    if ( !window.log ) {
        window.log = function log() {
            for( var i=0; i<arguments.length;i++)
            console.log( arguments[i] );
        }
    }
    function timeConverter(UNIX_timestamp, full){
        var a = new Date(UNIX_timestamp*1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = (full)
        ? date + ', ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
        : date + ', ' + month + ' ' + year;
        return time;
    }
    
    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function arrayHasKey(nameKey, nameValue, myArray){
        var found = false;
        for ( var i=0; i < myArray.length; i++ ) {
            if ( myArray[i][nameKey] === nameValue ) {
                found = i;
            }
        }
        return found;
    }
/*
    function sortTags(a, b) {
      if (a.num < b.num) {
        return 1;
      }
      if (a.num > b.num) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }

    function removeTags( tags_list ) {
        var i = tags_list.length;
        while (i--) {
            if (tags_list[i].num<3)
                tags_list.splice(i,1)
        }
        return tags_list;
    }
*/
    /**
     * Detect usernames with Unicode, it bugs se-flair
     * /
    function isDoubleByte(str) {
        for (var i = 0, n = str.length; i < n; i++) {
            if (str.charCodeAt( i ) > 255) { return true; }
        }
        return false;
    }
    */
/*
    function makeFlair( user, site, account, unicode ) {
        unicode = false; // http://stackapps.com/questions/2119/#comment11865_2119
        if( !unicode ) {
            var iframe = '<iframe id="myIframe" width="210" height="58" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="$ifSource">asdf</iframe>',
                se_url   = 'http://stackexchange.com/users/$account',
                se_flair = 'http://se-flair.appspot.com/$account.html';
            se_url = se_url.replace( '$account', account );
            se_flair = se_flair.replace( '$account', account );

            iframe = iframe.replace( '$ifSource', se_flair );
            var html = '<a href="' + se_url + '">' + iframe + '</a>';
            $('.select-inputs.flair').html(html);
        } 
        else {
            site = site.replace('meta.','');
            var site_url = $('.select-inputs .site-select option[value="'+site+'"]').data('site-url'),
                meta_url = $('.select-inputs .site-select option[value="'+site+'"]').data('meta-url'),
                the_url = $('#super-meta-site').is(':checked') ? meta_url : site_url;

            var html = '<a href="' + the_url + '/users/' + user + '">'
                 + '<img src="' + the_url + '/users/flair/' + user + '.png" width="208" height="58"></a>';
            $('.select-inputs.flair').html(html);
        }
    }
    */
    function showVisibleItemsNumber() {
        $('#filter-h2').text('Filter & Tags ' + $('.isotope .element-item:visible').length );
    }

     // </editor-fold>
   
    // <editor-fold desc="localStorage" defaultstate="collapsed">
    function removeUserStorage( user ) {
        localStorage.removeItem( 'git.star.' + user );
        makeStoredUsers();
    }
    
    function setStorage( user ) {
        localStorage.setItem( 'git.star.' + user, JSON.stringify( { user:user, favs:my_favs } ) );
    }
    
    function clearCache(e) {
        e.preventDefault();
        if (window.confirm("Clear all users?")) { 
            var all = getAllStoredGits();
            for( obj in all ) {
                localStorage.removeItem(all.id);
            }
            makeStoredUsers();
        }
    }
    
    function getLSlength( ls ) {
        var getIt = JSON.parse( localStorage.getItem( ls ) );
        return getIt.favs.length;
    }
    function getAllStoredGits() {
        var result = [];
        for( obj in localStorage ) {
            if( obj.indexOf('git.star') > -1 ) 
                result.push( { id:obj, name:obj.replace('git.star.',''), total: getLSlength(obj) } );
        }
        return result;
    }

    // </editor-fold>
    
    // <editor-fold desc="Build interface" defaultstate="collapsed">
    function resetUI(){
        if( $('.isotope').data('isotope')  ) {
            $('.isotope').isotope('destroy');
        }
        my_favs = [];
        $('#filters button.tagbtn').remove();
        $('.button-group').hide();
        $('.isotope').html('');
    }
    
    function makeStoredUsers() {
        var get_users, buttons;
        
       
        
        get_users = getAllStoredGits();
        
        if( get_users.length !== 0 ) {
            buttons = 'Starred repos from: <sub><sup><a id="clear-cache" href="#">clear</a></sup></sub> ';
            
            get_users.forEach(function(v,k){
                var anchor,
                    view_favs = [
                        location.origin,
                        location.pathname,
                        '?user=',
                        v.name
                    ],
                    anchors = [
                        '<a href="{viewFavs}" class="goto-user goto-git grow"',
                        ' data-favcount="{favCount}"',
                        ' data-name="{user}"',
                        ' data-repo="{repoID}">{user}',
                        '<span><em>{favCount}</em></span></a>'
                   ];

                anchors = anchors.join('')
                    .replace( '{viewFavs}', view_favs.join('') )
                    .replace( /{favCount}/g, v.total )
                    .replace( /{user}/g, v.name )
                    .replace( '{repoID}', v.id );
            
                buttons += anchors;
            });
            $('.select-inputs.stored').html(buttons);
            $('a.goto-user').bind("contextmenu", bindContextMenu);
        } 
        else $('.select-inputs.stored').html('No stored users.');
    }

    function parseFavorites(ls_obj) {
        var favs_items = [];
        
        if( ls_obj.length === 0 ) {
            $('.isotope').html('no favorites');
            return;
        }
        
        $.each( ls_obj, function( key, val ) {
            var construct;
            
            construct = [
                '<a href="{url}" target="_blank"><div class="element-item" data-category="{language}">',
                '<h3 class="title-git">{title}</h3><div class="git-description">{description}</div>',
                '<p class="forks_count" data-forks="{forksCount}"><strong title="Forks">{forksCount}</strong></p>',
                '<p class="starred" data-starred="{starred}">starred: <strong>{starred}</strong></p>',
                '<p class="last_activity_date" data-last="{date}">active: <strong>{date}</strong></p>',
                '</div></a>'
            ];

            construct = construct.join('')
                .replace( '{language}', val.language )
                .replace( '{url}', val.html_url )
                .replace( '{title}', val.name )
                .replace( '{description}', val.description )
                .replace( /{forksCount}/g, val.forks_count )
                .replace( /{starred}/g, val.stargazers_count )
                .replace( /{date}/g, val.updated_at.substring( 0, val.updated_at.indexOf( "T" ) ) );
        
            favs_items.push( construct );
        });
        $( favs_items.join( "" ) ).prependTo( ".isotope" );
        $('.button-group').show();
        doIsotope();
        showVisibleItemsNumber();
    }

    function doIsotope() {
        // init Isotope
        $container =  $('.isotope').isotope({
            itemSelector: '.element-item',
            layoutMode: 'masonry',
            getSortData: {
                forks_count: function( $elem ) {
                    var num_val = $($elem).find('.forks_count').data('forks');
                    return parseInt( num_val, 10);
                },
                last_activity_date: function( $elem ) {
                     var num_val = $($elem).find('.last_activity_date').data('last');
                     return parseInt( num_val, 10);
                },
                starred: function( $elem ) {
                    var num_val = $($elem).find('.starred').data('starred');
                    return parseInt( num_val, 10);
                }
            },
            masonry: {
                columnWidth: 110
            },
            cellsByRow: {
                columnWidth: 220,
                rowHeight: 220
            },
            masonryHorizontal: {
                rowHeight: 110
            },
            cellsByColumn: {
                columnWidth: 220,
                rowHeight: 220
            }
        });
        
    }

    
    function getAPI( page, user ) {
        var uri = 'https://api.github.com/users/' + user + '/starred?per_page=100&page=' + page;

        $.getJSON( uri , function( data ) 
        {
            
            if( data.length === 0 ) {
                $('.isotope').html('No starred.');
                showVisibleItemsNumber();
                return;
            }
            
            $.each( data, function( key, val ) {
                my_favs.push({
                    id: val.id,
                    name: val.name,
                    full_name: val.full_name,
                    html_url: val.html_url,
                    description: val.description,
                    fork: val.fork,
                    created_at: val.created_at,
                    updated_at: val.updated_at,
                    homepage: val.homepage,
                    stargazers_count: val.stargazers_count,
                    language: val.language,
                    forks_count: val.forks_count
                });
            });
            
            if( data.length === 100 ) {
                get_page++;
                getAPI(get_page, user);
            } else {
                setStorage( user );
                parseFavorites(my_favs);
                makeStoredUsers();
            }
        }).error(function() { alert("Bad request, check the user ID."); });
    }
    
    function requestAPIorLS( user ) {
        var ls_favs = getFavorites( user );
    
        if( ls_favs  ) {
            parseFavorites(ls_favs );
            makeStoredUsers();
        } else {
            getAPI( get_page=1, user );
        }
    }
    
    function getFavorites( user ) {
        var favs = false,
            ls_user = localStorage.getItem( 'git.star.' + user );
         if( ls_user ) {
            favs = JSON.parse(ls_user).favs;
        }
        return favs;
    }
    // </editor-fold>

    // <editor-fold desc="Buttons behaviors" defaultstate="collapsed">
    function sendRequestBtn() {
        var site, parsed,
            //meta_api = $( "#select-site-user .site-select option:selected" ).data('meta-api'),
            site_api = $('#select-site-user .site-select').val();
            user = $('#user-id').val();
            
        if( user==='' ) alert('Enter a User Name');
        else {
            resetUI();
            requestAPIorLS( user );
        }
    }
    
    function filtersBtn() {
        var filterValue = $( this ).attr('data-filter');
        log(filterValue)
        // use filterFn if matches value
//        filterValue = filterFns[ filterValue ] || filterValue;
        $container.isotope({ filter: filterValue });
        setTimeout( showVisibleItemsNumber, 1000 );
    }
    
    function gotoUser( name ) {
        var url = [
            location.origin,
            location.pathname,
            '?user=',
            name
        ];
        location.href =  url.join('') ;
    }
    
    function bindContextMenu(event) {
        event.preventDefault();
        $(".context-menu").finish().toggle(100).
            css({
                top: event.pageY + "px",
                left: event.pageX + "px"
            });
        $('span',this).hide();
        
        // 0:refresh, 1:delete
        $(".context-menu li:eq(0), .context-menu li:eq(1)")
                .attr('name', $(this).data('name') )
                .attr('repo', $(this).data('repo') );
    }
    
    $("#user-id").keypress(function(event) {
        if( event.which == 13 ) {
            event.preventDefault();
            $('#send-request').click();
        }
    });
    
    $('#send-request')      .click(sendRequestBtn);
//    $('#super-meta-site')   .change(makeStoredUsers);
    $('#filters')           .on( 'click', 'button', filtersBtn );
    
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
    $('.button-group').hide();
    
    
    $(document).on('click', '#clear-cache',clearCache);
    $(document).on('click', '.select-inputs.stored button.goto-user',function(e){
        e.preventDefault();
        gotoUser( $(this).data('name') );
    });

    var sortOrder = false;
    $('#sorts').on( 'click', 'button', function() {
        sortOrder = !sortOrder;
        var sortValue = $(this).attr('data-sort-value');
        $('.isotope').isotope({ sortBy: sortValue, sortAscending: sortOrder});
    });
    // </editor-fold>
        
    makeStoredUsers();

    // <editor-fold desc="ORGANIZE" defaultstate="collapsed">
    /**
     * Set values if URL sending params
     */
    if( get_user_url ) {
        $('#user-id').val( get_user_url );
        $('#send-request').click();
    }
    
    /**
     * Right click contextual menu on user buttons
     * http://stackoverflow.com/a/20471268/1287812
     */
    $(document).bind("mousedown", function (e) {
        if (!$(e.target).parents(".context-menu").length > 0) {
            $(".context-menu").hide(100);
        }
    });
    
    /**
     * Right click contextual menu on user buttons
     */
    $(".context-menu li").click(function(){
        switch( $(this).data("action") ) {
            case "del": 
                removeUserStorage( $(this).attr('name') );
                break;
            case "refresh": 
                removeUserStorage( $(this).attr('name') );
                gotoUser( $(this).attr('name') );
                break;
        }
        $(".context-menu").hide(100);
    });
    
   
    // </editor-fold>
    
});
