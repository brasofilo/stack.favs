$( function() {
    var get_page, $container,my_favs, current_site, $oDD,
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
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function arrayHasKey(nameKey, nameValue, myArray){
        var found = false;
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i][nameKey] == nameValue) {
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
    
    function showVisibleItemsNumber() {
        $('#filter-h2').text('Filter & Tags ' + $('.isotope .element-item:visible').length );
    }
     // </editor-fold>
   
    // <editor-fold desc="localStorage" defaultstate="collapsed">
    function removeUserStorage( site, user ) {
        var parsed, has_user,
            get_ls = localStorage.getItem( site );
            
        if( get_ls ) {
            parsed = JSON.parse( get_ls );
            has_user = arrayHasKey('user', user, parsed);
            if( has_user !== false ) {
                parsed.splice(has_user,1);
                localStorage.setItem( site, JSON.stringify( parsed ) );
                makeStoredUsers(site);
            }
        }
    }
    
    function setStorage( site, user, nick, account ) {
        var parsed, has_user,
            get_ls = localStorage.getItem( site );
            
        if( !get_ls ) {
            localStorage.setItem( site, JSON.stringify( [{ user:user, favs:my_favs, nick:nick, account:account }] ) );
        } else {
            parsed = JSON.parse( get_ls );
            has_user = arrayHasKey('user', user, parsed);
            if( has_user !== false ) {
                parsed[has_user] = { user:user, favs:my_favs, nick:nick, account:account };
            } else {
                parsed.push({ user:user, favs:my_favs, nick:nick, account:account })
            }
            localStorage.setItem( site, JSON.stringify( parsed ) );
        }
        
    }
    
    function clearCache(e) {
        e.preventDefault();
        var site = $(this).data('site');
        if (window.confirm("Clear all users?")) { 
            localStorage.removeItem(site);
            makeStoredUsers(site);
        }
    }
    
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
    // </editor-fold>
    
    // <editor-fold desc="Build interface" defaultstate="collapsed">
    function makeStoredUsers(site) {
        var get_users, buttons,
            the_site,
            is_meta = $('#super-meta-site').is(':checked'),
            get_site_url;
        
        if( typeof site === 'string' )
            the_site = site.replace('meta.','')
        else {
            if( $oDD ) {
                the_site = site.value;
            }
            else {
                the_site = $('#select-site-user .site-select').val();
            }
        } 
        
        if( is_meta ) {
            if( $oDD && site.image ) {
                the_site = site.imagecss;
            }
            else {
                the_site = $('.select-inputs .site-select option[value="'+the_site+'"]').data('meta-api');
            }
        }
        if( !the_site){ // when clicking on meta checkbox
            var index = $oDD.get("selectedOptions").data('meta-api');
            the_site = is_meta ? index : index.replace('meta.','');//sites_arr[index].site_url)
        }
        get_users = localStorage.getItem( the_site );
        
        if( get_users ) {
            get_site_url = arrayHasKey( 'api_site_parameter', the_site, sites_arr );
            get_users = JSON.parse( get_users );
            buttons = 'Stored users @'+the_site+': ';
            buttons += ' <sub><sup><a id="clear-cache" data-site="'+the_site+'" href="#">clear</a></sup></sub> ';
            
            get_users.forEach(function(v,k){
                var anchor,
                    profile = [
                        sites_arr[get_site_url].site_url,
                        '/users/',
                        v.user,
                        '?tab=favorites'
                    ],
                    view_favs = [
                        location.origin,
                        location.pathname,
                        '?site=',
                        the_site,
                        '&user=',
                        v.user
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
                    .replace( /{favCount}/g, v.favs.length )
                    .replace( '{theSite}', the_site )
                    .replace( /{user}/g, v.user )
                    .replace( /{nick}/g, v.nick )
                    .replace( '{sitesList}', sites_arr[get_site_url].site_url );
            
                buttons += anchors;
            });
            $('.select-inputs.stored').html(buttons);
            $('a.goto-user').bind("contextmenu", bindContextMenu);
            $("a.goto-user")
                .mouseenter(function(){
                    $('em.nick', this).text( $(this).data('userid') );
                })
                .mouseleave(function(){
                    $('em.nick', this).text( $(this).data('nick') );
                });
        } 
        else $('.select-inputs.stored').html('No stored users.');
    }
    
    function parseFavorites(ls_obj) {
        var favs_items = [], 
            sites_items = [], 
            tags_list = [], 
            tags_buttons = [];
        
        if( ls_obj.length === 0 ) {
            $('.isotope').html('no favorites');
            return;
        }
        
        $.each( ls_obj, function( key, val ) {
            var construct, safe_tag, safe_tags, construct;
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
                .replace( '{tagList}', val.tags.join('</span> <span class="tags">') )
            /*
            construct = ''
                + '    <div class="element-item ' + safe_tags + '" data-category="' + safe_tag + '">'
                + '        <h3 class="title"><a href="' + val.link + '" target="_blank">' + val.title + '</a></h3>'
                + '        <p class="answer_count" data-answers="' + val.answer_count + '"><strong title="Answers">' + val.answer_count + '</strong></p>'
                + '        <p class="score" data-score="' + val.score + '">score: <strong>' + val.score + '</strong></p>'
                + '        <p class="view_count" data-views="' + val.view_count + '">views: <strong>' + val.view_count + '</strong></p>'
                + '        <p class="last_activity_date" data-last="' + val.last_activity_date + '">active: <strong>' + timeConverter(val.last_activity_date) + '</strong></p>'
                + '        <p class="tags"><span class="tags">' + val.tags.join('</span> <span class="tags">') + '</span></p>'
                + '    </div>';
            */
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
            if( val.site_state !== 'linked_meta' ) {
                var meta_api_param = '',
                    site_url, meta_url, option_html;
                    
                val.related_sites.forEach(function(k,v){ 
                    if( k.relation === 'meta' ) {
                        meta_api_param = ' data-meta-api="' + k.api_site_parameter + '"';
                        meta_api_param += ' data-imagecss="' + k.api_site_parameter + '"'; // for dd-dropdown
                        meta_url_param = ' data-meta-url="' + k.site_url + '"';
                    }
                });
                
                option_html = '<option value="' + val.api_site_parameter + '"' 
                            + meta_api_param + meta_url_param 
                            + ' data-site-url="' + val.site_url + '"'
                            + ' data-image="' + val.favicon_url + '"'
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
            $oDD = $('#select-site-user .site-select').msDropdown({on:{change:makeStoredUsers}}).data('dd');
        } catch(e) {}
        if( !$oDD ) $('#select-site-user .site-select').change(makeStoredUsers);
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
            uri = 'http://api.stackexchange.com/2.2/users/' + user
                + '?pagesize=1&site=' + site
                + '&key=WfdrC3u7rmAQDwaSRYrw2w((',
            json_call = function(data){
                if( data.items.length !== 0 ) {
                    nick = data.items[0].display_name;
                    account = data.items[0].account_id;
                }
                setStorage( site, user, nick, account );
                parseFavorites(my_favs);
                makeFlair( user, site, account, isDoubleByte(nick) );
                makeStoredUsers(site);
            },
            json_error = function(){
                alert("Bad request,  error 404040404."); // no idea what could've gone wrong :)
            };
            
        $.getJSON( uri , json_call ).error( json_error );
    }
    
    function getAPI( page, site, user ) {
        var uri = 'http://api.stackexchange.com/2.2/users/' + user
            + '/favorites?page=' + page 
            + '&pagesize=100&order=desc&sort=added&site=' + site
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
    
    function requestAPIorLS(site, user) {
        var has_user,
            ls_site = localStorage.getItem(site);
            
        if( ls_site ) {
            parsed = JSON.parse(ls_site); 
            has_user = arrayHasKey( 'user', user, parsed );
            if( has_user !== false ) {
                parseFavorites(parsed[has_user].favs);
                makeStoredUsers(site);
                makeFlair( parsed[has_user].user, site, parsed[has_user].account, isDoubleByte(parsed[has_user].nick) );
            }
            else
                getAPI( get_page=1, site, user ); 
        } else {
            getAPI( get_page=1, site, user );
        }
    }
    // </editor-fold>

    // <editor-fold desc="Buttons behaviors" defaultstate="collapsed">
    function sendRequestBtn() {
        var site, parsed,
            meta_api = $( "#select-site-user .site-select option:selected" ).data('meta-api'),
            site_api = $('#select-site-user .site-select').val(),
            user = $('#user-id').val();
            
        if( site_api === 'default' ) alert('Select a site');
        else if( user==='' ) alert('Enter a User ID');
        else {
            site = $('#super-meta-site').is(':checked') ? meta_api : site_api;
            if( !site ) {
                alert('This site does not have meta')
                return;
            }
            resetUI();
            requestAPIorLS( site, user );
        }
    }
    
    function filtersBtn() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
//        filterValue = filterFns[ filterValue ] || filterValue;
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
        $(".context-menu li:eq(2)").text( 'Delete #'+$(this).data('userid') );
        $(".context-menu li:eq(0), .context-menu li:eq(2)")
                .attr('api-url', $(this).data('api-url') )
                .attr('userid', $(this).data('userid') );
        $(".context-menu li:eq(1)").attr('profile', $(this).data('profile') );
    }
    
    $("#user-id").keypress(function(event) {
        if( event.which == 13 ) {
            event.preventDefault();
            $('#send-request').click();
        }
    });
    
    $('#send-request')      .click(sendRequestBtn);
    $('#super-meta-site')   .change(makeStoredUsers);
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
        gotoUser( $(this).data('api-url'), $(this).data('userid') );
    });

    var sortOrder = false;
    $('#sorts').on( 'click', 'button', function() {
        sortOrder = !sortOrder;
        var sortValue = $(this).attr('data-sort-value');
        $('.isotope').isotope({ sortBy: sortValue, sortAscending: sortOrder});
    });
    // </editor-fold>
        
    makeDropdown(sites_arr);

    // <editor-fold desc="ORGANIZE" defaultstate="collapsed">
    /**
     * Set values if URL sending params
     */
    if( get_user_url && get_site_url ) {
        $('#user-id').val( parseInt( get_user_url, 10 ) );
        var index = get_site_url.replace( 'meta.', '' );
        
        if( get_site_url.indexOf('meta.') === 0 ) {
            get_site_url = arrayHasKey( 'api_site_parameter', get_site_url, sites_arr );
            $('#super-meta-site').prop( 'checked', true );
        }
        if($oDD) $oDD.setIndexByValue( index );
        else $('#select-site-user .site-select').val( index );
        
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
                removeUserStorage( $(this).attr('api-url'), $(this).attr('userid') );
                break;
            case "goto": 
                location.href = $(this).attr('profile'); 
                break;
            case "refresh": 
                removeUserStorage( $(this).attr('api-url'), $(this).attr('userid') );
                gotoUser( $(this).attr('api-url'), $(this).attr('userid') );
                break;
        }
        $(".context-menu").hide(100);
    });
    
    /**
     * Just testing some CSS, add ?theme=1 to the URL to see
     */
    var theme = getURLParam('theme');
    if( theme )
        $('.isotope.rainbowedZZZ').removeClass('rainbowedZZZ').addClass('rainbowed');
    // </editor-fold>
    
});
