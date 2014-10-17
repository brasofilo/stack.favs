/**
 * Stack Exchange favorites
 * version  1.1
 * author   brasofilo
 * licence  MIT
 * homepage http://brasofilo.github.io/stack.favs/
 * 
 */
$( function() {
    var get_page, $container,my_favs, current_site, current_user, $oDD,
        get_user_url = getURLParam('user'),
        get_site_url = getURLParam('site');
;
  
    // <editor-fold desc="Utilities" defaultstate="collapsed">
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

    /**
     * Detect usernames with Unicode, it bugs se-flair
     */
    function isDoubleByte(str) {
        for (var i = 0, n = str.length; i < n; i++) {
            if (str.charCodeAt( i ) > 255) { return true; }
        }
        return false;
    }

    function makeFlair( user, site, account ) {
        var unicode = false; // http://stackapps.com/questions/2119/#comment11865_2119
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
    
    function showVisibleItemsNumber() {
        $('#filter-h2').text('Filter & Tags ' + $('.isotope .element-item:visible').length );
    }
    
    /**
     * Fill ID buttons with spaces so rollover with nick doesn't jump width too much
     * 
     * @returns string
     */
    function makeIDfullLength( userid, nick ){
        var uid = userid + '', // convert to string
            n = nick.length,
            remain, extend;

       uid = uid.length;
       if( n < uid )
            return userid;
        
        remain = parseInt( ( (n - uid) / 2 ), 10 ) + 1;
        extend = Array(remain).join('&nbsp;');
        return extend + userid + extend;
        
    }

     // </editor-fold>
   
    // <editor-fold desc="localStorage" defaultstate="collapsed">
    function storageRemoveItem( site, user ) {
        localStorage.removeItem( 'se.' + site + '.' + user );
        makeStoredUsers(site); 
    }
    
    function storageSet( site, user, nick, account ) {
        localStorage.setItem( 'se.' + site + '.' + user, JSON.stringify( { user:user, favs:my_favs, nick:nick, account:account } ) );    }
    
    /**
     * Get a specific site user
     * @param string site
     * @param string user
     * @returns obj/boolean
     */
    function storageGetItem( site, user ) {
        var ls_site = localStorage.getItem('se.' + site + '.' + user);
    
        if( !ls_site ) 
            return false;
            
        return JSON.parse( ls_site );
    }
    
    function storageRemoveAll(e) {
        e.preventDefault();
        var site = getAllStoredSEsite(); // export.js
        if (window.confirm("Clear all users?")) { 
            if( site.length !== 0 ) {
                site.forEach(function(v,k){ 
                    localStorage.removeItem(v);
                });
            }
            makeStoredUsers(site);
        }
    }
    
    // </editor-fold>
    
    // <editor-fold desc="Build interface" defaultstate="collapsed">
    function resetUI(){
        if( $('.isotope').data('isotope')  ) {
            $('.isotope').isotope('destroy');
        }
        my_favs = [];
        $('#filters button.tagbtn').remove();
        $('.button-group .is-checked').removeClass('is-checked');
        $('.button-group button:first-of-type').addClass('is-checked');
        $('.button-group').hide();
        $('.isotope').html('');
    }
    
    /**
     * Clears the box
     */
    function resetStoredUsers() {
        $('.select-inputs.stored').html('No stored users.');
    }
    /**
     * Update current user value
     * @returns void
     */
    function setCurrentUser() {
        current_user = ($('#user-id').val() === '') ? false : $('#user-id').val();
    }

    function makeStoredUsers(site) {
        var get_users, buttons,
            the_site = site,
            is_meta,
            get_site_url;
    
        setCurrentUser();
       
        is_meta = ( 
                $('#super-meta-site').is(':checked')  
                && (site !== 'meta.main' && site.indexOf('meta.') !== 0)
                && site !== 'stackapps'
        ); 
        if( is_meta ) {
            the_site = 'meta.' + site;
            $('h1 .site-logo img').addClass('filter-gray');
        } 
        else {
            $('h1 .site-logo img').removeClass('filter-gray');
        }
        
        
        get_site_url = arrayHasKey( 'api_site_parameter', site, sites_arr );
        if( get_site_url !== false ) {
            get_site_url = sites_arr[get_site_url].site_url;
        }
        
        get_users = getAllStoredSEsite(the_site);
        
        if( get_users && get_users.length > 0) {

            buttons = 'Stored users @' + the_site+': ';
            buttons += ' <sub><sup><a id="clear-cache" data-site="' + the_site + '" href="#">clear</a></sup></sub> ';
            
            get_users.forEach(function(v,k){
                var anchor,
                    user_id = v.replace('se.', '').replace(the_site+'.', ''),
                    get_ls = storageGetItem( the_site, user_id ),
                    profile = [
                        get_site_url,
                        '/users/',
                        user_id,
                        '?tab=favorites'
                    ],
                    view_favs = [
                        location.origin,
                        location.pathname,
                        '?site=',
                        the_site,
                        '&user=',
                        user_id
                    ],
                    anchors = [
                        '<a href="{viewFavs}" class="goto-user grow" data-profile="{profile}"',
                        ' data-favcount="{favCount}" data-api-url="{theSite}"',
                        ' data-userid="{user}" data-nick="{nick}"><em class="nick">{nick}</em>',
                        '<span><em>{favCount}</em>',
                        '<img src="{sitesList}/users/flair/{user}.png"',
                        ' width="208" height="58"></span></a>'
                   ];

                anchors = anchors.join('')
                    .replace( '{viewFavs}', view_favs.join('') )
                    .replace( '{profile}', profile.join('') )
                    .replace( /{favCount}/g, get_ls.favs.length )
                    .replace( '{theSite}', the_site )
                    .replace( /{user}/g, get_ls.user )
                    .replace( /{nick}/g, get_ls.nick )
                    .replace( '{sitesList}', get_site_url );
            
                buttons += anchors;
            });
            $('.select-inputs.stored').html(buttons);
            $('a.goto-user').bind("contextmenu", bindContextMenu);
            $("a.goto-user")
                .mouseenter(function(){
                    var uid = $(this).data('userid'),
                        nick = $(this).data('nick');
                    $('em.nick', this).html( makeIDfullLength( uid, nick ) );
                })
                .mouseleave(function(){
                    $('em.nick', this).text( $(this).data('nick') );
                });
        } 
        else 
            resetStoredUsers();
    }

    function parseFavorites( favorites ) {
        var favs_items = [], 
            sites_items = [], 
            tags_list = [], 
            tags_buttons = [];
        
        if( favorites.length === 0 ) {
            $('.isotope').html('no favorites');
            return;
        }
        
        $.each( favorites, function( key, val ) {
            var construct, safe_tag, safe_tags;
            $.each(val.tags, function(k,v){
                var has_tag = arrayHasKey('tag', v, tags_list);
                if( has_tag === false ) {
                    safe_tag = v.replace(/\./g,'')
                    tags_list.push( {num: parseInt('1', 10), tag: v});
                }
                else {
                    tags_list[has_tag].num = parseInt(tags_list[has_tag].num,10) + 1;
                }
            });
            safe_tag = val.tags[0].replace(/\./g,'').replace(/#/g,'hash');
            safe_tags = val.tags.join(' ').replace(/\./g,'').replace(/#/g,'hash');
            
            
            construct = [
                '<div class="element-item {tagClasses}" data-category="{tagSingle}">',
                '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3>',
                '<p class="answer_count" data-answers="{answerCount}"><strong title="Answers">{answerCount}</strong></p>',
                '<p class="score" data-score="{score}">score: <strong>{score}</strong></p>',
                '<p class="view_count" data-views="{viewCount}">views: <strong>{viewCount}</strong></p>',
                '<p class="last_activity_date" data-last="{timestamp}">active: <strong>{date}</strong></p>',
                '<p class="tags"><span class="tags">{tagList}</span></p>',
                '</div>'
            ];

            construct = construct.join('')
                .replace( '{tagClasses}', safe_tags )
                .replace( '{tagSingle}', safe_tag )
                .replace( '{url}', val.link )
                .replace( '{title}', val.title )
                .replace( /{answerCount}/g, val.answer_count )
                .replace( /{score}/g, val.score )
                .replace( /{viewCount}/g, val.view_count )
                .replace( '{timestamp}', val.last_activity_date )
                .replace( '{date}', timeConverter(val.last_activity_date) )
                .replace( '{tagList}', val.tags.join('</span> <span class="tags">') );
        
            favs_items.push( construct );
        });
        tags_list.sort(sortTags);
        tags_list = removeTags(tags_list);
        for(var i=0;i<tags_list.length;i++){
            safe_tag = tags_list[i].tag.replace(/\./g,'').replace(/#/g,'hash');
            tags_buttons.push( '<button class="iso-button tagbtn" data-filter=".'+ safe_tag +'">'+tags_list[i].tag+'</button>' );
        }

        $( tags_buttons.join( "" ) ).appendTo( "#filters" );
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
                answer_count: function( $elem ) {
                    var num_val = $($elem).find('.answer_count').data('answers');
                    return parseInt( num_val, 10);
                },
                last_activity_date: function( $elem ) {
                     var num_val = $($elem).find('.last_activity_date').data('last');
                     return parseInt( num_val, 10);
                },
                score: function( $elem ) {
                    var num_val = $($elem).find('.score').data('score');
                    return parseInt( num_val, 10);
                },
                view_count: function( $elem ) {
                    var num_val = $($elem).find('.view_count').data('views');
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

    function makeDropdown( sites ) {
        var site_items = ['<option value="default">Select a site</option>'];
        $.each( sites, function( key, val ) 
        {
            if( val.site_type === 'main_site' ) {
                var meta_api_param = '',
                    meta_url_param = '',
                    site_url, option_html;
                    
                val.related_sites.forEach(function(k,v){ 
                    if( k.relation === 'meta' ) {
                        meta_api_param = ' data-meta-api="' + k.api_site_parameter + '"';
                        meta_url_param = ' data-meta-url="' + k.site_url + '"';
                    }
                });
                
                option_html = '<option value="' + val.api_site_parameter + '"' 
                            + meta_api_param + meta_url_param 
                            + ' data-site-url="' + val.site_url + '"'
                            + ' data-image="http://cdn.sstatic.net/' + val.favicon_url + '"'
                            + ' data-imagecss="http://cdn.sstatic.net/' + val.high_resolution_icon_url + '"' // for dd-dropdown
                            + '>' + val.name + '</option>';
                site_items.push( option_html );
            }
        });

        $( "<select/>", {
            class: "site-select",
            html: site_items.join( "" )
        }).prependTo( "#select-site-user" );
        
        $('#select-site-user .site-select').wrap('<span class="select-inputs sites-dd"></span>');
        try {
            $oDD = $('#select-site-user .site-select').msDropdown({on:{change:function(e){
                        console.log('dropdown',e)
                        current_site = e.value !== 'default' ? e.value : false;
                        refreshDropDown( current_site, e.imagecss );
                    }}}).data('dd');
        } catch(e) {}
        if( !$oDD ) $('#select-site-user .site-select').change(function(){
            current_site = $(this).val() !== 'default' ? $(this).val() : false;
            refreshDropDown( current_site );
        });
    }
    
    /**
     * Dropdown listener
     * 
     * @param {string} current_site
     * @returns void
     */
    function refreshDropDown( current_site, high_res_icon ) {
        if( current_site === 'meta.main')
            $('#select-site-user .select-inputs.meta-cb').hide();
        else
            $('#select-site-user .select-inputs.meta-cb').show();
        setCurrentUser();
        if( current_site ) {
            $('h1 .site-logo').html('<img src="'+high_res_icon+'" />');
            makeStoredUsers(current_site);
        }
        else {
            $('h1 .site-logo').html('<img src="http://cdn.sstatic.net/stackexchange/img/apple-touch-icon.png" />');
            resetStoredUsers();
        }
        
    }
    // </editor-fold>

    // <editor-fold desc="API" defaultstate="collapsed">
    /**
     * Get user after getting favorites
     * - dispatches final actions to build the webapp
     */
    function getAPIUser( site, user ){
        var account,
            nick = user,
            get_site = ( site === 'meta.main' ) ? 'meta' : site,
            uri = 'http://api.stackexchange.com/2.2/users/' + user
                + '?pagesize=1&site=' + get_site
                + '&key=WfdrC3u7rmAQDwaSRYrw2w((',
            json_call = function(data){
                if( data.items.length !== 0 ) {
                    nick = data.items[0].display_name;
                    account = data.items[0].account_id;
                }
                storageSet( site, user, nick, account );
                parseFavorites(my_favs);
                makeFlair( user, site, account );
                makeStoredUsers(site);
            },
            json_error = function(){
                alert("Bad request,  error 404040404."); // no idea what could've gone wrong :)
            };
            
        $.getJSON( uri , json_call ).error( json_error );
    }
    
    function getAPI( page, site, user ) {
        var get_site = ( site === 'meta.main' ) ? 'meta' : site,
            uri = 'http://api.stackexchange.com/2.2/users/' + user
            + '/favorites?page=' + page 
            + '&pagesize=100&order=desc&sort=added&site=' + get_site
            + '&key=WfdrC3u7rmAQDwaSRYrw2w((';

        $.getJSON( uri , function( data ) 
        {
            if( data.items.length === 0 ) {
                $('.isotope').html('No favorites.');
                $('.select-inputs.flair').html('');
                showVisibleItemsNumber();
                return;
            }
            
            console.log('QUOTA #' + data.quota_remaining );
            $.each( data.items, function( key, val ) {
                my_favs.push(val);
            });
            
            if(data.has_more) {
                if( parseInt( data.quota_remaining, 10 ) < 5 ) {
                    alert( 'quota less than 5');
                } else {
                    get_page++;
                    getAPI(get_page, site, user);
                }
            } else {
                getAPIUser( site, user );
            }
        }).error(function() { alert("Bad request, check the user ID."); });
    }
    
    function requestAPIorLS( site, user) {
        current_user = user;
        var ls_site_user = storageGetItem( site, user );
        if( ls_site_user ) {
            my_favs = ls_site_user.favs;
            parseFavorites(my_favs);
            makeStoredUsers(site);
            makeFlair( ls_site_user.user, site, ls_site_user.account );
        } else {
            getAPI( get_page=1, site, user );
        }
    }
    // </editor-fold>

    // <editor-fold desc="Buttons behaviors" defaultstate="collapsed">
    function sendRequestBtn() {
        var site,
            meta_api = $( "#select-site-user .site-select option:selected" ).data('meta-api'),
            site_api = $('#select-site-user .site-select').val(),
            user = $('#user-id').val();
    
        site = $('#super-meta-site').is(':checked') ? meta_api : site_api;
        
        if( site_api === 'default' ) alert('Select a site');
        else if( user==='' ) alert('Enter a User ID');
        else {
            
            if( !site && site_api !== 'meta.main' ) {
                alert('This site does not have meta')
                return;
            }
            resetUI();
            requestAPIorLS( site, user );
        }
    }
    
    function filtersBtn() {
        var filterValue = $( this ).attr('data-filter');
        $container.isotope({ filter: filterValue });
        setTimeout( showVisibleItemsNumber, 1000 );
    }
    
    function gotoUser( api_url, user_id ) {
        var url = [
            location.origin,
            location.pathname,
            '?site=',
            api_url,
            '&user=',
            user_id
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
        // 0:refresh, 1:profile, 2:delete
        $(".context-menu li:eq(0), .context-menu li:eq(2)")
                .attr('api-url', $(this).data('api-url') )
                .attr('userid', $(this).data('userid') );
        $(".context-menu li:eq(1)").attr('profile', $(this).data('profile') );
        $(".context-menu li:eq(2)").text( 'Delete #'+$(this).data('userid') );
    }
    
    $("#user-id").keypress(function(event) {
        if( event.which == 13 ) {
            event.preventDefault();
            $('#send-request').click();
        }
    });
    
    $('#send-request')      .click(sendRequestBtn);
    $('#filters')           .on( 'click', 'button', filtersBtn );
    $('#super-meta-site')   .change(function(){
        makeStoredUsers( $('#select-site-user .site-select').val() );
    });
    
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
    $('.button-group').hide();
    
    $(document).on('click', '#clear-cache',storageRemoveAll);
    $(document).on('click', '.select-inputs.stored button.goto-user',function(e){
        e.preventDefault();
        gotoUser( $(this).data('api-url'), $(this).data('userid') );
    });

    var sortOrder = false;
    $('#sorts').on( 'click', 'button', function() {
        sortOrder = !sortOrder;
        var sortValue = $(this).attr('data-sort-value');
        $('.isotope').isotope({ sortBy: sortValue, sortAscending: sortOrder});
    });
    // </editor-fold>
        
    // <editor-fold desc="Contextual menu" defaultstate="collapsed">
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
        var url = $(this).attr('api-url'),
            userid = $(this).attr('userid'),
            profile = $(this).attr('profile');
            
        switch( $(this).data("action") ) {
            case "del": 
                storageRemoveItem( url, userid );
                break;
            case "goto": 
                location.href = profile; 
                break;
            case "refresh": 
                storageRemoveItem( url, userid );
                gotoUser( url, userid );
                break;
        }
        $(".context-menu").hide(100);
    });    
    // </editor-fold>
    

    // <editor-fold desc="Start up" defaultstate="collapsed">
    makeDropdown(sites_arr);

    /**
     * Set values if URL sending params
     */
    if( get_user_url && get_site_url ) {
        var userid = parseInt( get_user_url, 10 );
        $('#user-id').val( userid );
        current_user = userid;
        
        var is_meta_main = ( get_site_url === 'meta.main' ),
            index = ( is_meta_main ) ? get_site_url : get_site_url.replace( 'meta.', '' );
        
        if( get_site_url.indexOf('meta.') === 0 && !is_meta_main ) {
            get_site_url = arrayHasKey( 'api_site_parameter', get_site_url, sites_arr );
            $('#super-meta-site').prop( 'checked', true );
        }
        if( is_meta_main ) $('#select-site-user .select-inputs.meta-cb').hide();
        else $('#select-site-user .select-inputs.meta-cb').show();
        
        if($oDD) $oDD.setIndexByValue( index );
        else $('#select-site-user .site-select').val( index );
        
        $('#send-request').click();
    }
    
    
    /**
     * Just testing some CSS, add ?theme=1 to the URL to see
     */
    var theme = getURLParam('theme');
    if( theme )
        $('.isotope.rainbowedZZZ').removeClass('rainbowedZZZ').addClass('rainbowed');
    // </editor-fold>
    
});
