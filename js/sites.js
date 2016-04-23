/**
 * Reduced version from the API
 * - modified api_site_parameter for Meta.SE, only "meta" was breaking indexOf('meta')
 * - removed http://cdn.sstatic.net/ in front of all icon_url
 * 
 * @type Array
 */
var sites_arr = [
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.stackoverflow",
        "site_url": "http://meta.stackoverflow.com",
        "name": "Meta Stack Overflow"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackoverflow.com",
        "name": "Stack Overflow Chat"
      }
    ],
    "launch_date": 1221436800,
    "high_resolution_icon_url": "stackoverflow/img/apple-touch-icon@2.png",
    "favicon_url": "stackoverflow/img/favicon.ico",
    "audience": "professional and enthusiast programmers",
    "site_url": "http://stackoverflow.com",
    "api_site_parameter": "stackoverflow",
    "logo_url": "stackoverflow/img/logo.png",
    "name": "Stack Overflow",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.serverfault",
        "site_url": "http://meta.serverfault.com",
        "name": "Meta Server Fault"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1243296000,
    "high_resolution_icon_url": "serverfault/img/apple-touch-icon@2.png",
    "twitter_account": "ServerFault",
    "favicon_url": "serverfault/img/favicon.ico",
    "audience": "professional system and network administrators",
    "site_url": "http://serverfault.com",
    "api_site_parameter": "serverfault",
    "logo_url": "serverfault/img/logo.png",
    "name": "Server Fault",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.superuser",
        "site_url": "http://meta.superuser.com",
        "name": "Meta Super User"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1250553600,
    "high_resolution_icon_url": "superuser/img/apple-touch-icon@2.png",
    "twitter_account": "super_user",
    "favicon_url": "superuser/img/favicon.ico",
    "audience": "computer enthusiasts and power users",
    "site_url": "http://superuser.com",
    "api_site_parameter": "superuser",
    "logo_url": "superuser/img/logo.png",
    "name": "Super User",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "chat",
        "site_url": "http://chat.meta.stackexchange.com",
        "name": "Meta Stack Exchange Chat"
      }
    ],
    "launch_date": 1246147200,
    "high_resolution_icon_url": "stackexchangemeta/img/apple-touch-icon@2.png",
    "favicon_url": "stackexchangemeta/img/favicon.ico",
    "audience": "meta-discussion of the Stack Exchange family of Q&amp;A websites",
    "site_url": "http://meta.stackexchange.com",
    "api_site_parameter": "meta.main",
    "logo_url": "stackexchangemeta/img/logo.png",
    "name": "Meta Stack Exchange",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.webapps",
        "site_url": "http://meta.webapps.stackexchange.com",
        "name": "Web Applications Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1285804800,
    "open_beta_date": 1278460800,
    "closed_beta_date": 1277856000,
    "high_resolution_icon_url": "webapps/img/apple-touch-icon@2.png",
    "twitter_account": "StackWebApps",
    "favicon_url": "webapps/img/favicon.ico",
    "audience": "power users of web applications",
    "site_url": "http://webapps.stackexchange.com",
    "api_site_parameter": "webapps",
    "logo_url": "webapps/img/logo.png",
    "name": "Web Applications",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "webapps",
        "site_url": "http://webapps.stackexchange.com",
        "name": "Web Applications Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "webappsmeta/img/apple-touch-icon@2.png",
    "favicon_url": "webappsmeta/img/favicon.ico",
    "audience": "power users of web applications",
    "site_url": "http://meta.webapps.stackexchange.com",
    "api_site_parameter": "meta.webapps",
    "logo_url": "webappsmeta/img/logo.png",
    "name": "Web Applications Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.gaming",
        "site_url": "http://meta.gaming.stackexchange.com",
        "name": "Arqade Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1286323200,
    "open_beta_date": 1279065600,
    "closed_beta_date": 1278460800,
    "high_resolution_icon_url": "gaming/img/apple-touch-icon@2.png",
    "twitter_account": "TheArqade",
    "favicon_url": "gaming/img/favicon.ico",
    "audience": "passionate videogamers on all platforms",
    "site_url": "http://gaming.stackexchange.com",
    "api_site_parameter": "gaming",
    "logo_url": "gaming/img/logo.png",
    "name": "Arqade",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "gaming",
        "site_url": "http://gaming.stackexchange.com",
        "name": "Arqade"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "gamingmeta/img/apple-touch-icon@2.png",
    "favicon_url": "gamingmeta/img/favicon.ico",
    "audience": "passionate videogamers on all platforms",
    "site_url": "http://meta.gaming.stackexchange.com",
    "api_site_parameter": "meta.gaming",
    "logo_url": "gamingmeta/img/logo.png",
    "name": "Arqade Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.webmasters",
        "site_url": "http://meta.webmasters.stackexchange.com",
        "name": "Webmasters Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1286928000,
    "open_beta_date": 1279152000,
    "closed_beta_date": 1278547200,
    "high_resolution_icon_url": "webmasters/img/apple-touch-icon@2.png",
    "twitter_account": "StackWebmasters",
    "favicon_url": "webmasters/img/favicon.ico",
    "audience": "pro webmasters",
    "site_url": "http://webmasters.stackexchange.com",
    "api_site_parameter": "webmasters",
    "logo_url": "webmasters/img/logo.png",
    "name": "Webmasters",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "webmasters",
        "site_url": "http://webmasters.stackexchange.com",
        "name": "Webmasters Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "webmastersmeta/img/apple-touch-icon@2.png",
    "favicon_url": "webmastersmeta/img/favicon.ico",
    "audience": "pro webmasters",
    "site_url": "http://meta.webmasters.stackexchange.com",
    "api_site_parameter": "meta.webmasters",
    "logo_url": "webmastersmeta/img/logo.png",
    "name": "Webmasters Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.cooking",
        "site_url": "http://meta.cooking.stackexchange.com",
        "name": "Seasoned Advice Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1287014400,
    "open_beta_date": 1279238400,
    "closed_beta_date": 1278633600,
    "high_resolution_icon_url": "cooking/img/apple-touch-icon@2.png",
    "twitter_account": "StackCooking",
    "favicon_url": "cooking/img/favicon.ico",
    "audience": "professional and amateur chefs",
    "site_url": "http://cooking.stackexchange.com",
    "api_site_parameter": "cooking",
    "logo_url": "cooking/img/logo.png",
    "name": "Seasoned Advice",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "cooking",
        "site_url": "http://cooking.stackexchange.com",
        "name": "Seasoned Advice"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "cookingmeta/img/apple-touch-icon@2.png",
    "favicon_url": "cookingmeta/img/favicon.ico",
    "audience": "professional and amateur chefs",
    "site_url": "http://meta.cooking.stackexchange.com",
    "api_site_parameter": "meta.cooking",
    "logo_url": "cookingmeta/img/logo.png",
    "name": "Seasoned Advice Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.gamedev",
        "site_url": "http://meta.gamedev.stackexchange.com",
        "name": "Game Development Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1287619200,
    "open_beta_date": 1279670400,
    "closed_beta_date": 1279065600,
    "high_resolution_icon_url": "gamedev/img/apple-touch-icon@2.png",
    "twitter_account": "StackGameDev",
    "favicon_url": "gamedev/img/favicon.ico",
    "audience": "professional and independent game developers",
    "site_url": "http://gamedev.stackexchange.com",
    "api_site_parameter": "gamedev",
    "logo_url": "gamedev/img/logo.png",
    "name": "Game Development",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "gamedev",
        "site_url": "http://gamedev.stackexchange.com",
        "name": "Game Development Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "gamedevmeta/img/apple-touch-icon@2.png",
    "favicon_url": "gamedevmeta/img/favicon.ico",
    "audience": "professional and independent game developers",
    "site_url": "http://meta.gamedev.stackexchange.com",
    "api_site_parameter": "meta.gamedev",
    "logo_url": "gamedevmeta/img/logo.png",
    "name": "Game Development Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.photo",
        "site_url": "http://meta.photo.stackexchange.com",
        "name": "Photography Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1288224000,
    "open_beta_date": 1279756800,
    "closed_beta_date": 1279152000,
    "high_resolution_icon_url": "photo/img/apple-touch-icon@2.png",
    "twitter_account": "StackPhotos",
    "favicon_url": "photo/img/favicon.ico",
    "audience": "professional, enthusiast and amateur photographers",
    "site_url": "http://photo.stackexchange.com",
    "api_site_parameter": "photo",
    "logo_url": "photo/img/logo.png",
    "name": "Photography",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "photo",
        "site_url": "http://photo.stackexchange.com",
        "name": "Photography Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "photometa/img/apple-touch-icon@2.png",
    "favicon_url": "photometa/img/favicon.ico",
    "audience": "professional, enthusiast and amateur photographers",
    "site_url": "http://meta.photo.stackexchange.com",
    "api_site_parameter": "meta.photo",
    "logo_url": "photometa/img/logo.png",
    "name": "Photography Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.stats",
        "site_url": "http://meta.stats.stackexchange.com",
        "name": "Cross Validated Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1288828800,
    "open_beta_date": 1280102400,
    "closed_beta_date": 1279497600,
    "high_resolution_icon_url": "stats/img/apple-touch-icon@2.png",
    "twitter_account": "StackStats",
    "favicon_url": "stats/img/favicon.ico",
    "audience": "people interested in statistics, machine learning, data analysis, data mining, and data visualization",
    "site_url": "http://stats.stackexchange.com",
    "api_site_parameter": "stats",
    "logo_url": "stats/img/logo.png",
    "name": "Cross Validated",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "stats",
        "site_url": "http://stats.stackexchange.com",
        "name": "Cross Validated"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "statsmeta/img/apple-touch-icon@2.png",
    "favicon_url": "statsmeta/img/favicon.ico",
    "audience": "people interested in statistics, machine learning, data analysis, data mining, and data visualization",
    "site_url": "http://meta.stats.stackexchange.com",
    "api_site_parameter": "meta.stats",
    "logo_url": "statsmeta/img/logo.png",
    "name": "Cross Validated Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.math",
        "site_url": "http://meta.math.stackexchange.com",
        "name": "Mathematics Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1287964800,
    "open_beta_date": 1280188800,
    "closed_beta_date": 1279584000,
    "high_resolution_icon_url": "math/img/apple-touch-icon@2.png",
    "twitter_account": "StackMath",
    "favicon_url": "math/img/favicon.ico",
    "audience": "people studying math at any level and professionals in related fields",
    "site_url": "http://math.stackexchange.com",
    "api_site_parameter": "math",
    "logo_url": "math/img/logo.png",
    "name": "Mathematics",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "math",
        "site_url": "http://math.stackexchange.com",
        "name": "Mathematics Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "mathmeta/img/apple-touch-icon@2.png",
    "favicon_url": "mathmeta/img/favicon.ico",
    "audience": "people studying math at any level and professionals in related fields",
    "site_url": "http://meta.math.stackexchange.com",
    "api_site_parameter": "meta.math",
    "logo_url": "mathmeta/img/logo.png",
    "name": "Mathematics Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.diy",
        "site_url": "http://meta.diy.stackexchange.com",
        "name": "Home Improvement Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1299110400,
    "open_beta_date": 1280275200,
    "closed_beta_date": 1279670400,
    "high_resolution_icon_url": "diy/img/apple-touch-icon@2.png",
    "twitter_account": "StackDIY",
    "favicon_url": "diy/img/favicon.ico",
    "audience": "contractors and serious DIYers",
    "site_url": "http://diy.stackexchange.com",
    "api_site_parameter": "diy",
    "logo_url": "diy/img/logo.png",
    "name": "Home Improvement",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "diy",
        "site_url": "http://diy.stackexchange.com",
        "name": "Home Improvement Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "diymeta/img/apple-touch-icon@2.png",
    "favicon_url": "diymeta/img/favicon.ico",
    "audience": "contractors and serious DIYers",
    "site_url": "http://meta.diy.stackexchange.com",
    "api_site_parameter": "meta.diy",
    "logo_url": "diymeta/img/logo.png",
    "name": "Home Improvement Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "superuser",
        "site_url": "http://superuser.com",
        "name": "Super User"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "superusermeta/img/apple-touch-icon@2.png",
    "favicon_url": "superusermeta/img/favicon.ico",
    "audience": "computer enthusiasts and power users",
    "site_url": "http://meta.superuser.com",
    "api_site_parameter": "meta.superuser",
    "logo_url": "superusermeta/img/logo.png",
    "name": "Meta Super User",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "serverfault",
        "site_url": "http://serverfault.com",
        "name": "Server Fault"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "serverfaultmeta/img/apple-touch-icon@2.png",
    "favicon_url": "serverfaultmeta/img/favicon.ico",
    "audience": "system administrators and IT professionals",
    "site_url": "http://meta.serverfault.com",
    "api_site_parameter": "meta.serverfault",
    "logo_url": "serverfaultmeta/img/logo.png",
    "name": "Meta Server Fault",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.gis",
        "site_url": "http://meta.gis.stackexchange.com",
        "name": "Geographic Information Systems Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1299456000,
    "open_beta_date": 1280361600,
    "closed_beta_date": 1279756800,
    "high_resolution_icon_url": "gis/img/apple-touch-icon@2.png",
    "twitter_account": "StackGIS",
    "favicon_url": "gis/img/favicon.ico",
    "audience": "cartographers, geographers and GIS professionals",
    "site_url": "http://gis.stackexchange.com",
    "api_site_parameter": "gis",
    "logo_url": "gis/img/logo-small.png",
    "name": "Geographic Information Systems",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "gis",
        "site_url": "http://gis.stackexchange.com",
        "name": "Geographic Information Systems Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "gismeta/img/apple-touch-icon@2.png",
    "favicon_url": "gismeta/img/favicon.ico",
    "audience": "cartographers, geographers and GIS professionals",
    "site_url": "http://meta.gis.stackexchange.com",
    "api_site_parameter": "meta.gis",
    "logo_url": "gismeta/img/logo-small.png",
    "name": "Geographic Information Systems Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.tex",
        "site_url": "http://meta.tex.stackexchange.com",
        "name": "TeX - LaTeX Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1289433600,
    "open_beta_date": 1280707200,
    "closed_beta_date": 1280102400,
    "high_resolution_icon_url": "tex/img/apple-touch-icon@2.png",
    "twitter_account": "StackTeX",
    "favicon_url": "tex/img/favicon.ico",
    "audience": "users of TeX, LaTeX, ConTeXt, and related typesetting systems",
    "site_url": "http://tex.stackexchange.com",
    "api_site_parameter": "tex",
    "logo_url": "tex/img/logo.png",
    "name": "TeX - LaTeX",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "tex",
        "site_url": "http://tex.stackexchange.com",
        "name": "TeX - LaTeX Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "texmeta/img/apple-touch-icon@2.png",
    "favicon_url": "texmeta/img/favicon.ico",
    "audience": "users of TeX, LaTeX, ConTeXt, and related typesetting systems",
    "site_url": "http://meta.tex.stackexchange.com",
    "api_site_parameter": "meta.tex",
    "logo_url": "texmeta/img/logo.png",
    "name": "TeX - LaTeX Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.askubuntu",
        "site_url": "http://meta.askubuntu.com",
        "name": "Ask Ubuntu Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1286668800,
    "open_beta_date": 1280880000,
    "closed_beta_date": 1280275200,
    "high_resolution_icon_url": "askubuntu/img/apple-touch-icon@2.png",
    "twitter_account": "AskUbuntu",
    "favicon_url": "askubuntu/img/favicon.ico",
    "audience": "Ubuntu users and developers",
    "site_url": "http://askubuntu.com",
    "api_site_parameter": "askubuntu",
    "logo_url": "askubuntu/img/logo.png",
    "name": "Ask Ubuntu",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "askubuntu",
        "site_url": "http://askubuntu.com",
        "name": "Ask Ubuntu"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "askubuntumeta/img/apple-touch-icon@2.png",
    "favicon_url": "askubuntumeta/img/favicon.ico",
    "audience": "Ubuntu users and developers",
    "site_url": "http://meta.askubuntu.com",
    "api_site_parameter": "meta.askubuntu",
    "logo_url": "askubuntumeta/img/logo.png",
    "name": "Ask Ubuntu Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.money",
        "site_url": "http://meta.money.stackexchange.com",
        "name": "Personal Finance &amp; Money Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1393459200,
    "open_beta_date": 1281484800,
    "closed_beta_date": 1280880000,
    "high_resolution_icon_url": "money/img/apple-touch-icon@2.png",
    "twitter_account": "StackFinance",
    "favicon_url": "money/img/favicon.ico",
    "audience": "people who want to be financially literate",
    "site_url": "http://money.stackexchange.com",
    "api_site_parameter": "money",
    "logo_url": "money/img/logo.png",
    "name": "Personal Finance &amp; Money",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "money",
        "site_url": "http://money.stackexchange.com",
        "name": "Personal Finance &amp; Money Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "moneymeta/img/apple-touch-icon@2.png",
    "favicon_url": "moneymeta/img/favicon.ico",
    "audience": "people who want to be financially literate",
    "site_url": "http://meta.money.stackexchange.com",
    "api_site_parameter": "meta.money",
    "logo_url": "moneymeta/img/logo.png",
    "name": "Personal Finance &amp; Money Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.english",
        "site_url": "http://meta.english.stackexchange.com",
        "name": "English Language &amp; Usage Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1290384000,
    "open_beta_date": 1281571200,
    "closed_beta_date": 1280966400,
    "high_resolution_icon_url": "english/img/apple-touch-icon@2.png",
    "twitter_account": "StackEnglish",
    "favicon_url": "english/img/favicon.ico",
    "audience": "linguists, etymologists, and serious English language enthusiasts",
    "site_url": "http://english.stackexchange.com",
    "api_site_parameter": "english",
    "logo_url": "english/img/logo.png",
    "name": "English Language &amp; Usage",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "english",
        "site_url": "http://english.stackexchange.com",
        "name": "English Language &amp; Usage Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "englishmeta/img/apple-touch-icon@2.png",
    "favicon_url": "englishmeta/img/favicon.ico",
    "audience": "linguists, etymologists, and serious English language enthusiasts",
    "site_url": "http://meta.english.stackexchange.com",
    "api_site_parameter": "meta.english",
    "logo_url": "englishmeta/img/logo.png",
    "name": "English Language &amp; Usage Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1274313600,
    "high_resolution_icon_url": "stackapps/img/apple-touch-icon@2.png",
    "favicon_url": "stackapps/img/favicon.ico",
    "audience": "apps, scripts, and development with the Stack Exchange API",
    "site_url": "http://stackapps.com",
    "api_site_parameter": "stackapps",
    "logo_url": "stackapps/img/logo.png",
    "name": "Stack Apps",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.ux",
        "site_url": "http://meta.ux.stackexchange.com",
        "name": "User Experience Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1325548800,
    "open_beta_date": 1281916800,
    "closed_beta_date": 1281312000,
    "high_resolution_icon_url": "ux/img/apple-touch-icon@2.png",
    "twitter_account": "StackUX",
    "favicon_url": "ux/img/favicon.ico",
    "audience": "user experience researchers and experts",
    "site_url": "http://ux.stackexchange.com",
    "api_site_parameter": "ux",
    "logo_url": "ux/img/logo.png",
    "name": "User Experience",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "ux",
        "site_url": "http://ux.stackexchange.com",
        "name": "User Experience Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "uxmeta/img/apple-touch-icon@2.png",
    "favicon_url": "uxmeta/img/favicon.ico",
    "audience": "user experience researchers and experts",
    "site_url": "http://meta.ux.stackexchange.com",
    "api_site_parameter": "meta.ux",
    "logo_url": "uxmeta/img/logo.png",
    "name": "User Experience Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.unix",
        "site_url": "http://meta.unix.stackexchange.com",
        "name": "Unix &amp; Linux Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1294790400,
    "open_beta_date": 1282003200,
    "closed_beta_date": 1281398400,
    "high_resolution_icon_url": "unix/img/apple-touch-icon@2.png",
    "twitter_account": "StackUnix",
    "favicon_url": "unix/img/favicon.ico",
    "audience": "users of Linux, FreeBSD and other Un*x-like operating systems.",
    "site_url": "http://unix.stackexchange.com",
    "api_site_parameter": "unix",
    "logo_url": "unix/img/logo.png",
    "name": "Unix &amp; Linux",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "unix",
        "site_url": "http://unix.stackexchange.com",
        "name": "Unix &amp; Linux Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "unixmeta/img/apple-touch-icon@2.png",
    "favicon_url": "unixmeta/img/favicon.ico",
    "audience": "users of Linux, FreeBSD and other Un*x-like operating systems.",
    "site_url": "http://meta.unix.stackexchange.com",
    "api_site_parameter": "meta.unix",
    "logo_url": "unixmeta/img/logo.png",
    "name": "Unix &amp; Linux Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.wordpress",
        "site_url": "http://meta.wordpress.stackexchange.com",
        "name": "WordPress Development Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1297641600,
    "open_beta_date": 1282089600,
    "closed_beta_date": 1281484800,
    "high_resolution_icon_url": "wordpress/img/apple-touch-icon@2.png",
    "twitter_account": "StackWordPress",
    "favicon_url": "wordpress/img/favicon.ico",
    "audience": "WordPress developers and administrators",
    "site_url": "http://wordpress.stackexchange.com",
    "api_site_parameter": "wordpress",
    "logo_url": "wordpress/img/logo.png",
    "name": "WordPress Development",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "wordpress",
        "site_url": "http://wordpress.stackexchange.com",
        "name": "WordPress Development Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "wordpressmeta/img/apple-touch-icon@2.png",
    "favicon_url": "wordpressmeta/img/favicon.ico",
    "audience": "WordPress developers and administrators",
    "site_url": "http://meta.wordpress.stackexchange.com",
    "api_site_parameter": "meta.wordpress",
    "logo_url": "wordpressmeta/img/logo.png",
    "name": "WordPress Development Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.cstheory",
        "site_url": "http://meta.cstheory.stackexchange.com",
        "name": "Theoretical Computer Science Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1291075200,
    "open_beta_date": 1282521600,
    "closed_beta_date": 1281916800,
    "high_resolution_icon_url": "cstheory/img/apple-touch-icon@2.png",
    "twitter_account": "StackCSTheory",
    "favicon_url": "cstheory/img/favicon.ico",
    "audience": "theoretical computer scientists and researchers in related fields",
    "site_url": "http://cstheory.stackexchange.com",
    "api_site_parameter": "cstheory",
    "logo_url": "cstheory/img/logo.png",
    "name": "Theoretical Computer Science",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "cstheory",
        "site_url": "http://cstheory.stackexchange.com",
        "name": "Theoretical Computer Science Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "cstheorymeta/img/apple-touch-icon@2.png",
    "favicon_url": "cstheorymeta/img/favicon.ico",
    "audience": "theoretical computer scientists and researchers in related fields",
    "site_url": "http://meta.cstheory.stackexchange.com",
    "api_site_parameter": "meta.cstheory",
    "logo_url": "cstheorymeta/img/logo.png",
    "name": "Theoretical Computer Science Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.apple",
        "site_url": "http://meta.apple.stackexchange.com",
        "name": "Ask Different Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1296172800,
    "open_beta_date": 1282608000,
    "closed_beta_date": 1282003200,
    "high_resolution_icon_url": "apple/img/apple-touch-icon@2.png",
    "twitter_account": "askdifferent",
    "favicon_url": "apple/img/favicon.ico",
    "audience": "power users of Apple hardware and software",
    "site_url": "http://apple.stackexchange.com",
    "api_site_parameter": "apple",
    "logo_url": "apple/img/logo.png",
    "name": "Ask Different",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "apple",
        "site_url": "http://apple.stackexchange.com",
        "name": "Ask Different"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "applemeta/img/apple-touch-icon@2.png",
    "favicon_url": "applemeta/img/favicon.ico",
    "audience": "power users of Apple hardware and software",
    "site_url": "http://meta.apple.stackexchange.com",
    "api_site_parameter": "meta.apple",
    "logo_url": "applemeta/img/logo.png",
    "name": "Ask Different Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.rpg",
        "site_url": "http://meta.rpg.stackexchange.com",
        "name": "Role-playing Games Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1334102400,
    "open_beta_date": 1282780800,
    "closed_beta_date": 1282176000,
    "high_resolution_icon_url": "rpg/img/apple-touch-icon@2.png",
    "twitter_account": "StackRPG",
    "favicon_url": "rpg/img/favicon.ico",
    "audience": "gamemasters and players of tabletop, paper-and-pencil role-playing games",
    "site_url": "http://rpg.stackexchange.com",
    "api_site_parameter": "rpg",
    "logo_url": "rpg/img/logo.png",
    "name": "Role-playing Games",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "rpg",
        "site_url": "http://rpg.stackexchange.com",
        "name": "Role-playing Games Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "rpgmeta/img/apple-touch-icon@2.png",
    "favicon_url": "rpgmeta/img/favicon.ico",
    "audience": "gamemasters and players of tabletop, paper-and-pencil role-playing games",
    "site_url": "http://meta.rpg.stackexchange.com",
    "api_site_parameter": "meta.rpg",
    "logo_url": "rpgmeta/img/logo.png",
    "name": "Role-playing Games Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.bicycles",
        "site_url": "http://meta.bicycles.stackexchange.com",
        "name": "Bicycles Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1312243200,
    "open_beta_date": 1283299200,
    "closed_beta_date": 1282694400,
    "high_resolution_icon_url": "bicycles/img/apple-touch-icon@2.png",
    "twitter_account": "StackBicycles",
    "favicon_url": "bicycles/img/favicon.ico",
    "audience": "people who build and repair bicycles, people who train cycling, or commute on bicycles",
    "site_url": "http://bicycles.stackexchange.com",
    "api_site_parameter": "bicycles",
    "logo_url": "bicycles/img/logo.png",
    "name": "Bicycles",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "bicycles",
        "site_url": "http://bicycles.stackexchange.com",
        "name": "Bicycles Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "bicyclesmeta/img/apple-touch-icon@2.png",
    "favicon_url": "bicyclesmeta/img/favicon.ico",
    "audience": "people who build and repair bicycles, people who train cycling, or commute on bicycles",
    "site_url": "http://meta.bicycles.stackexchange.com",
    "api_site_parameter": "meta.bicycles",
    "logo_url": "bicyclesmeta/img/logo.png",
    "name": "Bicycles Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.programmers",
        "site_url": "http://meta.programmers.stackexchange.com",
        "name": "Programmers Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1292457600,
    "open_beta_date": 1283904000,
    "closed_beta_date": 1283299200,
    "high_resolution_icon_url": "programmers/img/apple-touch-icon@2.png",
    "twitter_account": "StackProgrammer",
    "favicon_url": "programmers/img/favicon.ico",
    "audience": "professional programmers interested in conceptual questions about software development",
    "site_url": "http://programmers.stackexchange.com",
    "api_site_parameter": "programmers",
    "logo_url": "programmers/img/logo.png",
    "name": "Programmers",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "programmers",
        "site_url": "http://programmers.stackexchange.com",
        "name": "Programmers Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "programmersmeta/img/apple-touch-icon@2.png",
    "favicon_url": "programmersmeta/img/favicon.ico",
    "audience": "professional programmers interested in conceptual questions about software development",
    "site_url": "http://meta.programmers.stackexchange.com",
    "api_site_parameter": "meta.programmers",
    "logo_url": "programmersmeta/img/logo.png",
    "name": "Programmers Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.electronics",
        "site_url": "http://meta.electronics.stackexchange.com",
        "name": "Electrical Engineering Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1300665600,
    "open_beta_date": 1285718400,
    "closed_beta_date": 1285718400,
    "high_resolution_icon_url": "electronics/img/apple-touch-icon@2.png",
    "twitter_account": "StackElectronix",
    "favicon_url": "electronics/img/favicon.ico",
    "audience": "electronics and electrical engineering professionals, students, and enthusiasts",
    "site_url": "http://electronics.stackexchange.com",
    "api_site_parameter": "electronics",
    "logo_url": "electronics/img/logo.png",
    "name": "Electrical Engineering",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "electronics",
        "site_url": "http://electronics.stackexchange.com",
        "name": "Electrical Engineering Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "electronicsmeta/img/apple-touch-icon@2.png",
    "favicon_url": "electronicsmeta/img/favicon.ico",
    "audience": "electronic hardware hacking enthusiasts",
    "site_url": "http://meta.electronics.stackexchange.com",
    "api_site_parameter": "meta.electronics",
    "logo_url": "electronicsmeta/img/logo.png",
    "name": "Electrical Engineering Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.android",
        "site_url": "http://meta.android.stackexchange.com",
        "name": "Android Enthusiasts Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1300924800,
    "open_beta_date": 1284940800,
    "closed_beta_date": 1284336000,
    "high_resolution_icon_url": "android/img/apple-touch-icon@2.png",
    "twitter_account": "StackAndroid",
    "favicon_url": "android/img/favicon.ico",
    "audience": "enthusiasts and power users of the Android operating system",
    "site_url": "http://android.stackexchange.com",
    "api_site_parameter": "android",
    "logo_url": "android/img/logo.png",
    "name": "Android Enthusiasts",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "android",
        "site_url": "http://android.stackexchange.com",
        "name": "Android Enthusiasts Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "androidmeta/img/apple-touch-icon@2.png",
    "favicon_url": "androidmeta/img/favicon.ico",
    "audience": "enthusiasts and power users of the Android operating system",
    "site_url": "http://meta.android.stackexchange.com",
    "api_site_parameter": "meta.android",
    "logo_url": "androidmeta/img/logo.png",
    "name": "Android Enthusiasts Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.boardgames",
        "site_url": "http://meta.boardgames.stackexchange.com",
        "name": "Board &amp; Card Games Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1288051200,
    "closed_beta_date": 1287446400,
    "twitter_account": "StackBoardGames",
    "favicon_url": "boardgames/img/favicon.ico",
    "audience": "people who like playing board games, designing board games or modifying the rules of existing board games",
    "site_url": "http://boardgames.stackexchange.com",
    "api_site_parameter": "boardgames",
    "logo_url": "boardgames/img/logo.png",
    "name": "Board &amp; Card Games",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "boardgames",
        "site_url": "http://boardgames.stackexchange.com",
        "name": "Board &amp; Card Games Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "boardgamesmeta/img/favicon.ico",
    "audience": "people who like playing board games, designing board games or modifying the rules of existing board games",
    "site_url": "http://meta.boardgames.stackexchange.com",
    "api_site_parameter": "meta.boardgames",
    "logo_url": "boardgamesmeta/img/logo.png",
    "name": "Board &amp; Card Games Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.physics",
        "site_url": "http://meta.physics.stackexchange.com",
        "name": "Physics Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1298505600,
    "open_beta_date": 1289260800,
    "closed_beta_date": 1288656000,
    "high_resolution_icon_url": "physics/img/apple-touch-icon@2.png",
    "twitter_account": "StackPhysics",
    "favicon_url": "physics/img/favicon.ico",
    "audience": "active researchers, academics and students of physics",
    "site_url": "http://physics.stackexchange.com",
    "api_site_parameter": "physics",
    "logo_url": "physics/img/logo.png",
    "name": "Physics",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "physics",
        "site_url": "http://physics.stackexchange.com",
        "name": "Physics Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "physicsmeta/img/apple-touch-icon@2.png",
    "favicon_url": "physicsmeta/img/favicon.ico",
    "audience": "active researchers, academics and students of physics",
    "site_url": "http://meta.physics.stackexchange.com",
    "api_site_parameter": "meta.physics",
    "logo_url": "physicsmeta/img/logo.png",
    "name": "Physics Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.homebrew",
        "site_url": "http://meta.homebrew.stackexchange.com",
        "name": "Homebrewing Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1289779200,
    "closed_beta_date": 1289174400,
    "twitter_account": "StackHomebrew",
    "favicon_url": "homebrew/img/favicon.ico",
    "audience": "dedicated home brewers and serious enthusiasts",
    "site_url": "http://homebrew.stackexchange.com",
    "api_site_parameter": "homebrew",
    "logo_url": "homebrew/img/logo.png",
    "name": "Homebrewing",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "homebrew",
        "site_url": "http://homebrew.stackexchange.com",
        "name": "Homebrewing Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "homebrewmeta/img/favicon.ico",
    "audience": "dedicated home brewers and serious enthusiasts",
    "site_url": "http://meta.homebrew.stackexchange.com",
    "api_site_parameter": "meta.homebrew",
    "logo_url": "homebrewmeta/img/logo.png",
    "name": "Homebrewing Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.security",
        "site_url": "http://meta.security.stackexchange.com",
        "name": "Information Security Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1310428800,
    "open_beta_date": 1290038400,
    "closed_beta_date": 1289433600,
    "high_resolution_icon_url": "security/img/apple-touch-icon@2.png",
    "twitter_account": "StackSecurity",
    "favicon_url": "security/img/favicon.ico",
    "audience": "Information security professionals",
    "site_url": "http://security.stackexchange.com",
    "api_site_parameter": "security",
    "logo_url": "security/img/logo.png",
    "name": "Information Security",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "security",
        "site_url": "http://security.stackexchange.com",
        "name": "Information Security Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "securitymeta/img/apple-touch-icon@2.png",
    "favicon_url": "securitymeta/img/favicon.ico",
    "audience": "Information security professionals",
    "site_url": "http://meta.security.stackexchange.com",
    "api_site_parameter": "meta.security",
    "logo_url": "securitymeta/img/logo.png",
    "name": "Information Security Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.writers",
        "site_url": "http://meta.writers.stackexchange.com",
        "name": "Writers Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1290643200,
    "closed_beta_date": 1290038400,
    "twitter_account": "StackWriters",
    "favicon_url": "writers/img/favicon.ico",
    "audience": "authors, editors, reviewers, professional writers, and aspiring writers",
    "site_url": "http://writers.stackexchange.com",
    "api_site_parameter": "writers",
    "logo_url": "writers/img/logo.png",
    "name": "Writers",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "writers",
        "site_url": "http://writers.stackexchange.com",
        "name": "Writers Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "writersmeta/img/favicon.ico",
    "audience": "authors, editors, reviewers, professional writers, and aspiring writers",
    "site_url": "http://meta.writers.stackexchange.com",
    "api_site_parameter": "meta.writers",
    "logo_url": "writersmeta/img/logo.png",
    "name": "Writers Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.video",
        "site_url": "http://meta.video.stackexchange.com",
        "name": "Video Production Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1292284800,
    "closed_beta_date": 1291680000,
    "twitter_account": "StackAVP",
    "favicon_url": "avp/img/favicon.ico",
    "audience": "engineers, producers, editors, and enthusiasts spanning the fields of video, and media creation",
    "site_url": "http://video.stackexchange.com",
    "api_site_parameter": "video",
    "logo_url": "avp/img/logo.png",
    "name": "Video Production",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "video",
        "site_url": "http://video.stackexchange.com",
        "name": "Video Production Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "avpmeta/img/favicon.ico",
    "audience": "engineers, producers, editors, and enthusiasts spanning the fields of video, and media creation",
    "site_url": "http://meta.video.stackexchange.com",
    "api_site_parameter": "meta.video",
    "logo_url": "avpmeta/img/logo.png",
    "name": "Video Production Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.graphicdesign",
        "site_url": "http://meta.graphicdesign.stackexchange.com",
        "name": "Graphic Design Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1396396800,
    "open_beta_date": 1294704000,
    "closed_beta_date": 1294099200,
    "high_resolution_icon_url": "graphicdesign/img/apple-touch-icon@2.png",
    "twitter_account": "StackDesign",
    "favicon_url": "graphicdesign/img/favicon.ico",
    "audience": "Graphic Design professionals, students, and enthusiasts",
    "site_url": "http://graphicdesign.stackexchange.com",
    "api_site_parameter": "graphicdesign",
    "logo_url": "graphicdesign/img/logo.png",
    "name": "Graphic Design",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "graphicdesign",
        "site_url": "http://graphicdesign.stackexchange.com",
        "name": "Graphic Design Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "graphicdesignmeta/img/apple-touch-icon@2.png",
    "favicon_url": "graphicdesignmeta/img/favicon.ico",
    "audience": "Graphic Design professionals, students, and enthusiasts",
    "site_url": "http://meta.graphicdesign.stackexchange.com",
    "api_site_parameter": "meta.graphicdesign",
    "logo_url": "graphicdesignmeta/img/logo.png",
    "name": "Graphic Design Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.dba",
        "site_url": "http://meta.dba.stackexchange.com",
        "name": "Database Administrators Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1313452800,
    "open_beta_date": 1294617600,
    "closed_beta_date": 1294012800,
    "high_resolution_icon_url": "dba/img/apple-touch-icon@2.png",
    "twitter_account": "StackDBAs",
    "favicon_url": "dba/img/favicon.ico",
    "audience": "database professionals who wish to improve their database skills and learn from others in the community",
    "site_url": "http://dba.stackexchange.com",
    "api_site_parameter": "dba",
    "logo_url": "dba/img/logo.png",
    "name": "Database Administrators",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "dba",
        "site_url": "http://dba.stackexchange.com",
        "name": "Database Administrators Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "dbameta/img/apple-touch-icon@2.png",
    "favicon_url": "dbameta/img/favicon.ico",
    "audience": "database professionals who wish to improve their database skills and learn from others in the community",
    "site_url": "http://meta.dba.stackexchange.com",
    "api_site_parameter": "meta.dba",
    "logo_url": "dbameta/img/logo.png",
    "name": "Database Administrators Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.scifi",
        "site_url": "http://meta.scifi.stackexchange.com",
        "name": "Science Fiction &amp; Fantasy Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1323734400,
    "open_beta_date": 1295308800,
    "closed_beta_date": 1294704000,
    "high_resolution_icon_url": "scifi/img/apple-touch-icon@2.png",
    "twitter_account": "StackSciFi",
    "favicon_url": "scifi/img/favicon.ico",
    "audience": "science fiction and fantasy enthusiasts",
    "site_url": "http://scifi.stackexchange.com",
    "api_site_parameter": "scifi",
    "logo_url": "scifi/img/logo.png",
    "name": "Science Fiction &amp; Fantasy",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "scifi",
        "site_url": "http://scifi.stackexchange.com",
        "name": "Science Fiction &amp; Fantasy Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "scifimeta/img/apple-touch-icon@2.png",
    "favicon_url": "scifimeta/img/favicon.ico",
    "audience": "science fiction and fantasy enthusiasts",
    "site_url": "http://meta.scifi.stackexchange.com",
    "api_site_parameter": "meta.scifi",
    "logo_url": "scifimeta/img/logo.png",
    "name": "Science Fiction &amp; Fantasy Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.codereview",
        "site_url": "http://meta.codereview.stackexchange.com",
        "name": "Code Review Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1296000000,
    "closed_beta_date": 1295395200,
    "twitter_account": "StackCodeReview",
    "favicon_url": "codereview/img/favicon.ico",
    "audience": "peer programmer code reviews",
    "site_url": "http://codereview.stackexchange.com",
    "api_site_parameter": "codereview",
    "logo_url": "codereview/img/logo.png",
    "name": "Code Review",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "codereview",
        "site_url": "http://codereview.stackexchange.com",
        "name": "Code Review Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "codereviewmeta/img/favicon.ico",
    "audience": "peer programmer code reviews",
    "site_url": "http://meta.codereview.stackexchange.com",
    "api_site_parameter": "meta.codereview",
    "logo_url": "codereviewmeta/img/logo.png",
    "name": "Code Review Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.codegolf",
        "site_url": "http://meta.codegolf.stackexchange.com",
        "name": "Programming Puzzles &amp; Code Golf Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1296691200,
    "closed_beta_date": 1296086400,
    "twitter_account": "StackCodeGolf",
    "favicon_url": "codegolf/img/favicon.ico",
    "audience": "programming puzzle enthusiasts and code golfers",
    "site_url": "http://codegolf.stackexchange.com",
    "api_site_parameter": "codegolf",
    "logo_url": "codegolf/img/logo.png",
    "name": "Programming Puzzles &amp; Code Golf",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "codegolf",
        "site_url": "http://codegolf.stackexchange.com",
        "name": "Programming Puzzles &amp; Code Golf Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "codegolfmeta/img/favicon.ico",
    "audience": "programming puzzle enthusiasts and code golfers",
    "site_url": "http://meta.codegolf.stackexchange.com",
    "api_site_parameter": "meta.codegolf",
    "logo_url": "codegolfmeta/img/logo.png",
    "name": "Programming Puzzles &amp; Code Golf Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.quant",
        "site_url": "http://meta.quant.stackexchange.com",
        "name": "Quantitative Finance Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1297036800,
    "closed_beta_date": 1296432000,
    "twitter_account": "StackQuant",
    "favicon_url": "quant/img/favicon.ico",
    "audience": "finance professionals and academics",
    "site_url": "http://quant.stackexchange.com",
    "api_site_parameter": "quant",
    "logo_url": "quant/img/logo.png",
    "name": "Quantitative Finance",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "quant",
        "site_url": "http://quant.stackexchange.com",
        "name": "Quantitative Finance Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "quantmeta/img/favicon.ico",
    "audience": "finance professionals and academics",
    "site_url": "http://meta.quant.stackexchange.com",
    "api_site_parameter": "meta.quant",
    "logo_url": "quantmeta/img/logo.png",
    "name": "Quantitative Finance Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.pm",
        "site_url": "http://meta.pm.stackexchange.com",
        "name": "Project Management Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1297641600,
    "closed_beta_date": 1297036800,
    "twitter_account": "StackProjects",
    "favicon_url": "pm/img/favicon.ico",
    "audience": "project managers",
    "site_url": "http://pm.stackexchange.com",
    "api_site_parameter": "pm",
    "logo_url": "pm/img/logo.png",
    "name": "Project Management",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "pm",
        "site_url": "http://pm.stackexchange.com",
        "name": "Project Management Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "pmmeta/img/favicon.ico",
    "audience": "project managers",
    "site_url": "http://meta.pm.stackexchange.com",
    "api_site_parameter": "meta.pm",
    "logo_url": "pmmeta/img/logo.png",
    "name": "Project Management Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.skeptics",
        "site_url": "http://meta.skeptics.stackexchange.com",
        "name": "Skeptics Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1332288000,
    "open_beta_date": 1299196800,
    "closed_beta_date": 1298505600,
    "high_resolution_icon_url": "skeptics/img/apple-touch-icon@2.png",
    "twitter_account": "StackSkeptic",
    "favicon_url": "skeptics/img/favicon.ico",
    "audience": "scientific skepticism",
    "site_url": "http://skeptics.stackexchange.com",
    "api_site_parameter": "skeptics",
    "logo_url": "skeptics/img/logo.png",
    "name": "Skeptics",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "skeptics",
        "site_url": "http://skeptics.stackexchange.com",
        "name": "Skeptics Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "skepticsmeta/img/apple-touch-icon@2.png",
    "favicon_url": "skepticsmeta/img/favicon.ico",
    "audience": "scientific skepticism",
    "site_url": "http://meta.skeptics.stackexchange.com",
    "api_site_parameter": "meta.skeptics",
    "logo_url": "skepticsmeta/img/logo.png",
    "name": "Skeptics Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.fitness",
        "site_url": "http://meta.fitness.stackexchange.com",
        "name": "Physical Fitness Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1299542400,
    "closed_beta_date": 1298937600,
    "twitter_account": "StackFitness",
    "favicon_url": "fitness/img/favicon.ico",
    "audience": "physical fitness professionals, athletes, trainers, and those providing health-related needs",
    "site_url": "http://fitness.stackexchange.com",
    "api_site_parameter": "fitness",
    "logo_url": "fitness/img/logo.png",
    "name": "Physical Fitness",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "fitness",
        "site_url": "http://fitness.stackexchange.com",
        "name": "Physical Fitness Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "fitnessmeta/img/favicon.ico",
    "audience": "physical fitness professionals, athletes, trainers, and those providing health-related needs",
    "site_url": "http://meta.fitness.stackexchange.com",
    "api_site_parameter": "meta.fitness",
    "logo_url": "fitnessmeta/img/logo.png",
    "name": "Physical Fitness Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.drupal",
        "site_url": "http://meta.drupal.stackexchange.com",
        "name": "Drupal Answers Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1314662400,
    "open_beta_date": 1299628800,
    "closed_beta_date": 1299024000,
    "high_resolution_icon_url": "drupal/img/apple-touch-icon@2.png",
    "twitter_account": "StackDrupal",
    "favicon_url": "drupal/img/favicon.ico",
    "audience": "Drupal developers and administrators",
    "site_url": "http://drupal.stackexchange.com",
    "api_site_parameter": "drupal",
    "logo_url": "drupal/img/logo.png",
    "name": "Drupal Answers",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "drupal",
        "site_url": "http://drupal.stackexchange.com",
        "name": "Drupal Answers"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "drupalmeta/img/apple-touch-icon@2.png",
    "favicon_url": "drupalmeta/img/favicon.ico",
    "audience": "Drupal developers and administrators",
    "site_url": "http://meta.drupal.stackexchange.com",
    "api_site_parameter": "meta.drupal",
    "logo_url": "drupalmeta/img/logo.png",
    "name": "Drupal Answers Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.mechanics",
        "site_url": "http://meta.mechanics.stackexchange.com",
        "name": "Motor Vehicle Maintenance &amp; Repair Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1300060800,
    "closed_beta_date": 1299456000,
    "twitter_account": "StackMechanics",
    "favicon_url": "mechanics/img/favicon.ico",
    "audience": "mechanics and DIY enthusiast owners of cars, trucks, and motorcycles",
    "site_url": "http://mechanics.stackexchange.com",
    "api_site_parameter": "mechanics",
    "logo_url": "mechanics/img/logo.png",
    "name": "Motor Vehicle Maintenance &amp; Repair",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "mechanics",
        "site_url": "http://mechanics.stackexchange.com",
        "name": "Motor Vehicle Maintenance &amp; Repair Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "mechanicsmeta/img/favicon.ico",
    "audience": "mechanics and DIY enthusiast owners of cars, trucks, and motorcycles",
    "site_url": "http://meta.mechanics.stackexchange.com",
    "api_site_parameter": "meta.mechanics",
    "logo_url": "mechanicsmeta/img/logo.png",
    "name": "Motor Vehicle Maintenance &amp; Repair Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.parenting",
        "site_url": "http://meta.parenting.stackexchange.com",
        "name": "Parenting Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1301961600,
    "closed_beta_date": 1301356800,
    "twitter_account": "StackParenting",
    "favicon_url": "parenting/img/favicon.ico",
    "audience": "parents, grandparents, nannies and others with a parenting role",
    "site_url": "http://parenting.stackexchange.com",
    "api_site_parameter": "parenting",
    "logo_url": "parenting/img/logo.png",
    "name": "Parenting",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "parenting",
        "site_url": "http://parenting.stackexchange.com",
        "name": "Parenting Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "parentingmeta/img/favicon.ico",
    "audience": "parents, grandparents, nannies and others with a parenting role",
    "site_url": "http://meta.parenting.stackexchange.com",
    "api_site_parameter": "meta.parenting",
    "logo_url": "parentingmeta/img/logo.png",
    "name": "Parenting Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.sharepoint",
        "site_url": "http://meta.sharepoint.stackexchange.com",
        "name": "SharePoint Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1315872000,
    "open_beta_date": 1302134400,
    "closed_beta_date": 1302134400,
    "high_resolution_icon_url": "sharepoint/img/apple-touch-icon@2.png",
    "twitter_account": "StackSharePoint",
    "favicon_url": "sharepoint/img/favicon.ico",
    "audience": "SharePoint enthusiasts",
    "site_url": "http://sharepoint.stackexchange.com",
    "api_site_parameter": "sharepoint",
    "logo_url": "sharepoint/img/logo.png",
    "name": "SharePoint",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "sharepoint",
        "site_url": "http://sharepoint.stackexchange.com",
        "name": "SharePoint Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "sharepointmeta/img/apple-touch-icon@2.png",
    "favicon_url": "sharepointmeta/img/favicon.ico",
    "audience": "SharePoint enthusiasts",
    "site_url": "http://meta.sharepoint.stackexchange.com",
    "api_site_parameter": "meta.sharepoint",
    "logo_url": "sharepointmeta/img/logo.png",
    "name": "SharePoint Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.music",
        "site_url": "http://meta.music.stackexchange.com",
        "name": "Musical Practice &amp; Performance Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1304380800,
    "closed_beta_date": 1303776000,
    "twitter_account": "StackMusic",
    "favicon_url": "music/img/favicon.ico",
    "audience": "musicians, students, and enthusiasts",
    "site_url": "http://music.stackexchange.com",
    "api_site_parameter": "music",
    "logo_url": "music/img/logo.png",
    "name": "Musical Practice &amp; Performance",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "music",
        "site_url": "http://music.stackexchange.com",
        "name": "Musical Practice &amp; Performance Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "musicmeta/img/favicon.ico",
    "audience": "musicians, students, and enthusiasts",
    "site_url": "http://meta.music.stackexchange.com",
    "api_site_parameter": "meta.music",
    "logo_url": "musicmeta/img/logo.png",
    "name": "Musical Practice &amp; Performance Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.sqa",
        "site_url": "http://meta.sqa.stackexchange.com",
        "name": "Software Quality Assurance &amp; Testing Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1304985600,
    "closed_beta_date": 1304380800,
    "twitter_account": "StackSQA",
    "favicon_url": "sqa/img/favicon.ico",
    "audience": "software quality control experts, automation engineers, and software testers",
    "site_url": "http://sqa.stackexchange.com",
    "api_site_parameter": "sqa",
    "logo_url": "sqa/img/logo.png",
    "name": "Software Quality Assurance &amp; Testing",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "sqa",
        "site_url": "http://sqa.stackexchange.com",
        "name": "Software Quality Assurance &amp; Testing Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "sqameta/img/favicon.ico",
    "audience": "software quality control experts, automation engineers, and software testers",
    "site_url": "http://meta.sqa.stackexchange.com",
    "api_site_parameter": "meta.sqa",
    "logo_url": "sqameta/img/logo.png",
    "name": "Software Quality Assurance &amp; Testing Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.judaism",
        "site_url": "http://meta.judaism.stackexchange.com",
        "name": "Mi Yodeya Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1336435200,
    "open_beta_date": 1304985600,
    "closed_beta_date": 1304985600,
    "high_resolution_icon_url": "judaism/img/apple-touch-icon@2.png",
    "twitter_account": "StackJudaism",
    "favicon_url": "judaism/img/favicon.ico",
    "audience": "those who base their lives on Jewish law and tradition and anyone interested in learning more",
    "site_url": "http://judaism.stackexchange.com",
    "api_site_parameter": "judaism",
    "logo_url": "judaism/img/logo.png",
    "name": "Mi Yodeya",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "judaism",
        "site_url": "http://judaism.stackexchange.com",
        "name": "Mi Yodeya"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "judaismmeta/img/apple-touch-icon@2.png",
    "favicon_url": "judaismmeta/img/favicon.ico",
    "audience": "those who base their lives on Jewish law and tradition and anyone interested in learning more",
    "site_url": "http://meta.judaism.stackexchange.com",
    "api_site_parameter": "meta.judaism",
    "logo_url": "judaismmeta/img/logo.png",
    "name": "Mi Yodeya Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.german",
        "site_url": "http://meta.german.stackexchange.com",
        "name": "German Language Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1306800000,
    "closed_beta_date": 1306195200,
    "twitter_account": "StackGerman",
    "favicon_url": "german/img/favicon.ico",
    "audience": "speakers of German wanting to discuss the finer points of the language and translation",
    "site_url": "http://german.stackexchange.com",
    "api_site_parameter": "german",
    "logo_url": "german/img/logo.png",
    "name": "German Language",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "german",
        "site_url": "http://german.stackexchange.com",
        "name": "German Language Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "germanmeta/img/favicon.ico",
    "audience": "speakers of German wanting to discuss the finer points of the language and translation",
    "site_url": "http://meta.german.stackexchange.com",
    "api_site_parameter": "meta.german",
    "logo_url": "germanmeta/img/logo.png",
    "name": "German Language Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.japanese",
        "site_url": "http://meta.japanese.stackexchange.com",
        "name": "Japanese Language Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1307404800,
    "closed_beta_date": 1306800000,
    "twitter_account": "StackJapanese",
    "favicon_url": "japanese/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Japanese language",
    "site_url": "http://japanese.stackexchange.com",
    "api_site_parameter": "japanese",
    "logo_url": "japanese/img/logo.png",
    "name": "Japanese Language",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "japanese",
        "site_url": "http://japanese.stackexchange.com",
        "name": "Japanese Language Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "japanesemeta/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Japanese language",
    "site_url": "http://meta.japanese.stackexchange.com",
    "api_site_parameter": "meta.japanese",
    "logo_url": "japanesemeta/img/logo.png",
    "name": "Japanese Language Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.philosophy",
        "site_url": "http://meta.philosophy.stackexchange.com",
        "name": "Philosophy Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1308096000,
    "closed_beta_date": 1307404800,
    "twitter_account": "StackPhilosophy",
    "favicon_url": "philosophy/img/favicon.ico",
    "audience": "those interested in logical reasoning",
    "site_url": "http://philosophy.stackexchange.com",
    "api_site_parameter": "philosophy",
    "logo_url": "philosophy/img/logo.png",
    "name": "Philosophy",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "philosophy",
        "site_url": "http://philosophy.stackexchange.com",
        "name": "Philosophy Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "philosophymeta/img/favicon.ico",
    "audience": "those interested in logical reasoning",
    "site_url": "http://meta.philosophy.stackexchange.com",
    "api_site_parameter": "meta.philosophy",
    "logo_url": "philosophymeta/img/logo.png",
    "name": "Philosophy Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.gardening",
        "site_url": "http://meta.gardening.stackexchange.com",
        "name": "Gardening &amp; Landscaping Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1308096000,
    "closed_beta_date": 1307491200,
    "twitter_account": "StackGardening",
    "favicon_url": "gardening/img/favicon.ico",
    "audience": "gardeners and landscapers",
    "site_url": "http://gardening.stackexchange.com",
    "api_site_parameter": "gardening",
    "logo_url": "gardening/img/logo.png",
    "name": "Gardening &amp; Landscaping",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "gardening",
        "site_url": "http://gardening.stackexchange.com",
        "name": "Gardening &amp; Landscaping Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "gardeningmeta/img/favicon.ico",
    "audience": "gardeners and landscapers",
    "site_url": "http://meta.gardening.stackexchange.com",
    "api_site_parameter": "meta.gardening",
    "logo_url": "gardeningmeta/img/logo.png",
    "name": "Gardening &amp; Landscaping Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.travel",
        "site_url": "http://meta.travel.stackexchange.com",
        "name": "Travel Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1358812800,
    "open_beta_date": 1309219200,
    "closed_beta_date": 1308614400,
    "high_resolution_icon_url": "travel/img/apple-touch-icon@2.png",
    "twitter_account": "StackTravel",
    "favicon_url": "travel/img/favicon.ico",
    "audience": "road warriors and seasoned travelers",
    "site_url": "http://travel.stackexchange.com",
    "api_site_parameter": "travel",
    "logo_url": "travel/img/logo.png",
    "name": "Travel",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "travel",
        "site_url": "http://travel.stackexchange.com",
        "name": "Travel Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "travelmeta/img/apple-touch-icon@2.png",
    "favicon_url": "travelmeta/img/favicon.ico",
    "audience": "road warriors and seasoned travelers",
    "site_url": "http://meta.travel.stackexchange.com",
    "api_site_parameter": "meta.travel",
    "logo_url": "travelmeta/img/logo.png",
    "name": "Travel Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.productivity",
        "site_url": "http://meta.productivity.stackexchange.com",
        "name": "Personal Productivity Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1309305600,
    "closed_beta_date": 1308700800,
    "twitter_account": "StackProd",
    "favicon_url": "productivity/img/favicon.ico",
    "audience": "people wanting to improve their personal productivity",
    "site_url": "http://productivity.stackexchange.com",
    "api_site_parameter": "productivity",
    "logo_url": "productivity/img/logo.png",
    "name": "Personal Productivity",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "productivity",
        "site_url": "http://productivity.stackexchange.com",
        "name": "Personal Productivity Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "productivitymeta/img/favicon.ico",
    "audience": "people wanting to improve their personal productivity",
    "site_url": "http://meta.productivity.stackexchange.com",
    "api_site_parameter": "meta.productivity",
    "logo_url": "productivitymeta/img/logo.png",
    "name": "Personal Productivity Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.crypto",
        "site_url": "http://meta.crypto.stackexchange.com",
        "name": "Cryptography Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1312243200,
    "closed_beta_date": 1310428800,
    "twitter_account": "StackCrypto",
    "favicon_url": "crypto/img/favicon.ico",
    "audience": "software developers, mathematicians and others interested in cryptography",
    "site_url": "http://crypto.stackexchange.com",
    "api_site_parameter": "crypto",
    "logo_url": "crypto/img/logo.png",
    "name": "Cryptography",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "crypto",
        "site_url": "http://crypto.stackexchange.com",
        "name": "Cryptography Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "cryptometa/img/favicon.ico",
    "audience": "software developers, mathematicians and others interested in cryptography",
    "site_url": "http://meta.crypto.stackexchange.com",
    "api_site_parameter": "meta.crypto",
    "logo_url": "cryptometa/img/logo.png",
    "name": "Cryptography Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.dsp",
        "site_url": "http://meta.dsp.stackexchange.com",
        "name": "Signal Processing Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1315267200,
    "closed_beta_date": 1313452800,
    "twitter_account": "StackSignals",
    "favicon_url": "dsp/img/favicon.ico",
    "audience": "practitioners of the art and science of signal, image and video processing",
    "site_url": "http://dsp.stackexchange.com",
    "api_site_parameter": "dsp",
    "logo_url": "dsp/img/logo.png",
    "name": "Signal Processing",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "dsp",
        "site_url": "http://dsp.stackexchange.com",
        "name": "Signal Processing Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "dspmeta/img/favicon.ico",
    "audience": "practitioners of the art and science of signal, image and video processing",
    "site_url": "http://meta.dsp.stackexchange.com",
    "api_site_parameter": "meta.dsp",
    "logo_url": "dspmeta/img/logo.png",
    "name": "Signal Processing Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.french",
        "site_url": "http://meta.french.stackexchange.com",
        "name": "French Language Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1314144000,
    "closed_beta_date": 1313539200,
    "twitter_account": "StackFrench",
    "favicon_url": "french/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the French language",
    "site_url": "http://french.stackexchange.com",
    "api_site_parameter": "french",
    "logo_url": "french/img/logo.png",
    "name": "French Language",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "french",
        "site_url": "http://french.stackexchange.com",
        "name": "French Language Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "frenchmeta/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the French language",
    "site_url": "http://meta.french.stackexchange.com",
    "api_site_parameter": "meta.french",
    "logo_url": "frenchmeta/img/logo.png",
    "name": "French Language Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.christianity",
        "site_url": "http://meta.christianity.stackexchange.com",
        "name": "Christianity Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1369785600,
    "open_beta_date": 1314662400,
    "closed_beta_date": 1314057600,
    "high_resolution_icon_url": "christianity/img/apple-touch-icon@2.png",
    "twitter_account": "StackChristian",
    "favicon_url": "christianity/img/favicon.ico",
    "audience": "committed Christians, experts in Christianity and those interested in learning more",
    "site_url": "http://christianity.stackexchange.com",
    "api_site_parameter": "christianity",
    "logo_url": "christianity/img/logo.png",
    "name": "Christianity",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "christianity",
        "site_url": "http://christianity.stackexchange.com",
        "name": "Christianity Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "christianitymeta/img/apple-touch-icon@2.png",
    "favicon_url": "christianitymeta/img/favicon.ico",
    "audience": "committed Christians, experts in Christianity and those interested in learning more",
    "site_url": "http://meta.christianity.stackexchange.com",
    "api_site_parameter": "meta.christianity",
    "logo_url": "christianitymeta/img/logo.png",
    "name": "Christianity Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.bitcoin",
        "site_url": "http://meta.bitcoin.stackexchange.com",
        "name": "Bitcoin Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1315353600,
    "closed_beta_date": 1314662400,
    "twitter_account": "StackBitcoin",
    "favicon_url": "bitcoin/img/favicon.ico",
    "audience": "Bitcoin crypto-currency enthusiasts",
    "site_url": "http://bitcoin.stackexchange.com",
    "api_site_parameter": "bitcoin",
    "logo_url": "bitcoin/img/logo.png",
    "name": "Bitcoin",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "bitcoin",
        "site_url": "http://bitcoin.stackexchange.com",
        "name": "Bitcoin Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "bitcoinmeta/img/favicon.ico",
    "audience": "Bitcoin crypto-currency enthusiasts",
    "site_url": "http://meta.bitcoin.stackexchange.com",
    "api_site_parameter": "meta.bitcoin",
    "logo_url": "bitcoinmeta/img/logo.png",
    "name": "Bitcoin Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.linguistics",
        "site_url": "http://meta.linguistics.stackexchange.com",
        "name": "Linguistics Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1316476800,
    "closed_beta_date": 1315872000,
    "twitter_account": "StackLinguist",
    "favicon_url": "linguistics/img/favicon.ico",
    "audience": "professional linguists and others with an interest in linguistic research and theory",
    "site_url": "http://linguistics.stackexchange.com",
    "api_site_parameter": "linguistics",
    "logo_url": "linguistics/img/logo.png",
    "name": "Linguistics",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "linguistics",
        "site_url": "http://linguistics.stackexchange.com",
        "name": "Linguistics Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "linguisticsmeta/img/favicon.ico",
    "audience": "professional linguists and others with an interest in linguistic research and theory",
    "site_url": "http://meta.linguistics.stackexchange.com",
    "api_site_parameter": "meta.linguistics",
    "logo_url": "linguisticsmeta/img/logo.png",
    "name": "Linguistics Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.hermeneutics",
        "site_url": "http://meta.hermeneutics.stackexchange.com",
        "name": "Biblical Hermeneutics Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1318291200,
    "closed_beta_date": 1317686400,
    "twitter_account": "StackBibleHerm",
    "favicon_url": "hermeneutics/img/favicon.ico",
    "audience": "professors, theologians, and those interested in exegetical analysis of biblical texts",
    "site_url": "http://hermeneutics.stackexchange.com",
    "api_site_parameter": "hermeneutics",
    "logo_url": "hermeneutics/img/logo.png",
    "name": "Biblical Hermeneutics",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "hermeneutics",
        "site_url": "http://hermeneutics.stackexchange.com",
        "name": "Biblical Hermeneutics Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "hermeneuticsmeta/img/favicon.ico",
    "audience": "professors, theologians, and those interested in exegetical analysis of biblical texts",
    "site_url": "http://meta.hermeneutics.stackexchange.com",
    "api_site_parameter": "meta.hermeneutics",
    "logo_url": "hermeneuticsmeta/img/logo.png",
    "name": "Biblical Hermeneutics Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.history",
        "site_url": "http://meta.history.stackexchange.com",
        "name": "History Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1319500800,
    "closed_beta_date": 1318291200,
    "twitter_account": "StackHistory",
    "favicon_url": "history/img/favicon.ico",
    "audience": "historians and history buffs",
    "site_url": "http://history.stackexchange.com",
    "api_site_parameter": "history",
    "logo_url": "history/img/logo.png",
    "name": "History",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "history",
        "site_url": "http://history.stackexchange.com",
        "name": "History Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "historymeta/img/favicon.ico",
    "audience": "historians and history buffs",
    "site_url": "http://meta.history.stackexchange.com",
    "api_site_parameter": "meta.history",
    "logo_url": "historymeta/img/logo.png",
    "name": "History Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.bricks",
        "site_url": "http://meta.bricks.stackexchange.com",
        "name": "LEGO&#174; Answers Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1320105600,
    "closed_beta_date": 1319500800,
    "twitter_account": "StackBrix",
    "favicon_url": "bricks/img/favicon.ico",
    "audience": "LEGO&#174; and building block enthusiasts",
    "site_url": "http://bricks.stackexchange.com",
    "api_site_parameter": "bricks",
    "logo_url": "bricks/img/logo.png",
    "name": "LEGO&#174; Answers",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "bricks",
        "site_url": "http://bricks.stackexchange.com",
        "name": "LEGO&#174; Answers"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "bricksmeta/img/favicon.ico",
    "audience": "LEGO&#174; and building block enthusiasts",
    "site_url": "http://meta.bricks.stackexchange.com",
    "api_site_parameter": "meta.bricks",
    "logo_url": "bricksmeta/img/logo.png",
    "name": "LEGO&#174; Answers Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.spanish",
        "site_url": "http://meta.spanish.stackexchange.com",
        "name": "Spanish Language Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1321920000,
    "closed_beta_date": 1321315200,
    "twitter_account": "StackSpanish",
    "favicon_url": "spanish/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Spanish language",
    "site_url": "http://spanish.stackexchange.com",
    "api_site_parameter": "spanish",
    "logo_url": "spanish/img/logo.png",
    "name": "Spanish Language",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "spanish",
        "site_url": "http://spanish.stackexchange.com",
        "name": "Spanish Language Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "spanishmeta/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Spanish language",
    "site_url": "http://meta.spanish.stackexchange.com",
    "api_site_parameter": "meta.spanish",
    "logo_url": "spanishmeta/img/logo.png",
    "name": "Spanish Language Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.scicomp",
        "site_url": "http://meta.scicomp.stackexchange.com",
        "name": "Computational Science Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1323129600,
    "closed_beta_date": 1322524800,
    "twitter_account": "StackSciComp",
    "favicon_url": "scicomp/img/favicon.ico",
    "audience": "scientists using computers to solve scientific problems",
    "site_url": "http://scicomp.stackexchange.com",
    "api_site_parameter": "scicomp",
    "logo_url": "scicomp/img/logo.png",
    "name": "Computational Science",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "scicomp",
        "site_url": "http://scicomp.stackexchange.com",
        "name": "Computational Science Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "scicompmeta/img/favicon.ico",
    "audience": "scientists using computers to solve scientific problems",
    "site_url": "http://meta.scicomp.stackexchange.com",
    "api_site_parameter": "meta.scicomp",
    "logo_url": "scicompmeta/img/logo.png",
    "name": "Computational Science Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.movies",
        "site_url": "http://meta.movies.stackexchange.com",
        "name": "Movies &amp; TV Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1323216000,
    "closed_beta_date": 1322611200,
    "twitter_account": "StackMovies",
    "favicon_url": "movies/img/favicon.ico",
    "audience": "movie and tv enthusiasts",
    "site_url": "http://movies.stackexchange.com",
    "api_site_parameter": "movies",
    "logo_url": "movies/img/logo.png",
    "name": "Movies &amp; TV",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "movies",
        "site_url": "http://movies.stackexchange.com",
        "name": "Movies &amp; TV Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "moviesmeta/img/favicon.ico",
    "audience": "movie and tv enthusiasts",
    "site_url": "http://meta.movies.stackexchange.com",
    "api_site_parameter": "meta.movies",
    "logo_url": "moviesmeta/img/logo.png",
    "name": "Movies &amp; TV Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.chinese",
        "site_url": "http://meta.chinese.stackexchange.com",
        "name": "Chinese Language Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1324425600,
    "closed_beta_date": 1323734400,
    "twitter_account": "StackChinese",
    "favicon_url": "chinese/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Chinese language",
    "site_url": "http://chinese.stackexchange.com",
    "api_site_parameter": "chinese",
    "logo_url": "chinese/img/logo.png",
    "name": "Chinese Language",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "chinese",
        "site_url": "http://chinese.stackexchange.com",
        "name": "Chinese Language Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "chinesemeta/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Chinese language",
    "site_url": "http://meta.chinese.stackexchange.com",
    "api_site_parameter": "meta.chinese",
    "logo_url": "chinesemeta/img/logo.png",
    "name": "Chinese Language Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.biology",
        "site_url": "http://meta.biology.stackexchange.com",
        "name": "Biology Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1324425600,
    "closed_beta_date": 1323820800,
    "twitter_account": "StackBiology",
    "favicon_url": "biology/img/favicon.ico",
    "audience": "biology researchers, academics, and students",
    "site_url": "http://biology.stackexchange.com",
    "api_site_parameter": "biology",
    "logo_url": "biology/img/logo.png",
    "name": "Biology",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "biology",
        "site_url": "http://biology.stackexchange.com",
        "name": "Biology Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "biologymeta/img/favicon.ico",
    "audience": "biology researchers, academics, and students",
    "site_url": "http://meta.biology.stackexchange.com",
    "api_site_parameter": "meta.biology",
    "logo_url": "biologymeta/img/logo.png",
    "name": "Biology Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.poker",
        "site_url": "http://meta.poker.stackexchange.com",
        "name": "Poker Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1327363200,
    "closed_beta_date": 1326153600,
    "twitter_account": "StackPoker",
    "favicon_url": "poker/img/favicon.ico",
    "audience": "serious players and enthusiasts of poker",
    "site_url": "http://poker.stackexchange.com",
    "api_site_parameter": "poker",
    "logo_url": "poker/img/logo.png",
    "name": "Poker",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "poker",
        "site_url": "http://poker.stackexchange.com",
        "name": "Poker Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "pokermeta/img/favicon.ico",
    "audience": "serious players and enthusiasts of poker",
    "site_url": "http://meta.poker.stackexchange.com",
    "api_site_parameter": "meta.poker",
    "logo_url": "pokermeta/img/logo.png",
    "name": "Poker Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.mathematica",
        "site_url": "http://meta.mathematica.stackexchange.com",
        "name": "Mathematica Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1342483200,
    "open_beta_date": 1327449600,
    "closed_beta_date": 1326758400,
    "high_resolution_icon_url": "mathematica/img/apple-touch-icon@2.png",
    "twitter_account": "StackMma",
    "favicon_url": "mathematica/img/favicon.ico",
    "audience": "users of Mathematica",
    "site_url": "http://mathematica.stackexchange.com",
    "api_site_parameter": "mathematica",
    "logo_url": "mathematica/img/logo.png",
    "name": "Mathematica",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "mathematica",
        "site_url": "http://mathematica.stackexchange.com",
        "name": "Mathematica Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "mathematicameta/img/apple-touch-icon@2.png",
    "favicon_url": "mathematicameta/img/favicon.ico",
    "audience": "users of Mathematica",
    "site_url": "http://meta.mathematica.stackexchange.com",
    "api_site_parameter": "meta.mathematica",
    "logo_url": "mathematicameta/img/logo.png",
    "name": "Mathematica Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.cogsci",
        "site_url": "http://meta.cogsci.stackexchange.com",
        "name": "Cognitive Sciences Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1327449600,
    "closed_beta_date": 1326844800,
    "twitter_account": "StackCogSci",
    "favicon_url": "cogsci/img/favicon.ico",
    "audience": "practitioners, researchers, and students in cognitive science, psychology, neuroscience, and psychiatry",
    "site_url": "http://cogsci.stackexchange.com",
    "api_site_parameter": "cogsci",
    "logo_url": "cogsci/img/logo.png",
    "name": "Cognitive Sciences",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "cogsci",
        "site_url": "http://cogsci.stackexchange.com",
        "name": "Cognitive Sciences Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "cogscimeta/img/favicon.ico",
    "audience": "practitioners, researchers, and students in cognitive science, psychology, neuroscience, and psychiatry",
    "site_url": "http://meta.cogsci.stackexchange.com",
    "api_site_parameter": "meta.cogsci",
    "logo_url": "cogscimeta/img/logo.png",
    "name": "Cognitive Sciences Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.outdoors",
        "site_url": "http://meta.outdoors.stackexchange.com",
        "name": "The Great Outdoors Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1327968000,
    "closed_beta_date": 1327363200,
    "twitter_account": "StackOutdoors",
    "favicon_url": "outdoors/img/favicon.ico",
    "audience": "people who love outdoor activities, excursions, and outdoorsmanship",
    "site_url": "http://outdoors.stackexchange.com",
    "api_site_parameter": "outdoors",
    "logo_url": "outdoors/img/logo.png",
    "name": "The Great Outdoors",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "outdoors",
        "site_url": "http://outdoors.stackexchange.com",
        "name": "The Great Outdoors Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "outdoorsmeta/img/favicon.ico",
    "audience": "people who love outdoor activities, excursions, and outdoorsmanship",
    "site_url": "http://meta.outdoors.stackexchange.com",
    "api_site_parameter": "meta.outdoors",
    "logo_url": "outdoorsmeta/img/logo.png",
    "name": "The Great Outdoors Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.martialarts",
        "site_url": "http://meta.martialarts.stackexchange.com",
        "name": "Martial Arts Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1328572800,
    "closed_beta_date": 1327968000,
    "twitter_account": "StackMartialArt",
    "favicon_url": "martialarts/img/favicon.ico",
    "audience": "students and teachers of all martial arts",
    "site_url": "http://martialarts.stackexchange.com",
    "api_site_parameter": "martialarts",
    "logo_url": "martialarts/img/logo.png",
    "name": "Martial Arts",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "martialarts",
        "site_url": "http://martialarts.stackexchange.com",
        "name": "Martial Arts Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "martialartsmeta/img/favicon.ico",
    "audience": "students and teachers of all martial arts",
    "site_url": "http://meta.martialarts.stackexchange.com",
    "api_site_parameter": "meta.martialarts",
    "logo_url": "martialartsmeta/img/logo.png",
    "name": "Martial Arts Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.sports",
        "site_url": "http://meta.sports.stackexchange.com",
        "name": "Sports Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1329264000,
    "closed_beta_date": 1328659200,
    "twitter_account": "StackSport",
    "favicon_url": "sports/img/favicon.ico",
    "audience": "participants in team and individual sport activities",
    "site_url": "http://sports.stackexchange.com",
    "api_site_parameter": "sports",
    "logo_url": "sports/img/logo.png",
    "name": "Sports",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "sports",
        "site_url": "http://sports.stackexchange.com",
        "name": "Sports Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "sportsmeta/img/favicon.ico",
    "audience": "participants in team and individual sport activities",
    "site_url": "http://meta.sports.stackexchange.com",
    "api_site_parameter": "meta.sports",
    "logo_url": "sportsmeta/img/logo.png",
    "name": "Sports Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.academia",
        "site_url": "http://meta.academia.stackexchange.com",
        "name": "Academia Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1398211200,
    "open_beta_date": 1329782400,
    "closed_beta_date": 1329177600,
    "high_resolution_icon_url": "academia/img/apple-touch-icon@2.png",
    "twitter_account": "StackAcademia",
    "favicon_url": "academia/img/favicon.ico",
    "audience": "academics and those enrolled in higher education",
    "site_url": "http://academia.stackexchange.com",
    "api_site_parameter": "academia",
    "logo_url": "academia/img/logo.png",
    "name": "Academia",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "academia",
        "site_url": "http://academia.stackexchange.com",
        "name": "Academia Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "academiameta/img/apple-touch-icon@2.png",
    "favicon_url": "academiameta/img/favicon.ico",
    "audience": "academics and those enrolled in higher education",
    "site_url": "http://meta.academia.stackexchange.com",
    "api_site_parameter": "meta.academia",
    "logo_url": "academiameta/img/logo.png",
    "name": "Academia Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.cs",
        "site_url": "http://meta.cs.stackexchange.com",
        "name": "Computer Science Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1332201600,
    "closed_beta_date": 1330992000,
    "twitter_account": "StackCompSci",
    "favicon_url": "cs/img/favicon.ico",
    "audience": "students, researchers and practitioners of computer science",
    "site_url": "http://cs.stackexchange.com",
    "api_site_parameter": "cs",
    "logo_url": "cs/img/logo.png",
    "name": "Computer Science",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "cs",
        "site_url": "http://cs.stackexchange.com",
        "name": "Computer Science Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "csmeta/img/favicon.ico",
    "audience": "students, researchers and practitioners of computer science",
    "site_url": "http://meta.cs.stackexchange.com",
    "api_site_parameter": "meta.cs",
    "logo_url": "csmeta/img/logo.png",
    "name": "Computer Science Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.workplace",
        "site_url": "http://meta.workplace.stackexchange.com",
        "name": "The Workplace Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1392854400,
    "open_beta_date": 1334620800,
    "closed_beta_date": 1334016000,
    "high_resolution_icon_url": "workplace/img/apple-touch-icon@2.png",
    "twitter_account": "StackWorkplace",
    "favicon_url": "workplace/img/favicon.ico",
    "audience": "members of the workforce navigating the professional setting",
    "site_url": "http://workplace.stackexchange.com",
    "api_site_parameter": "workplace",
    "logo_url": "workplace/img/logo.png",
    "name": "The Workplace",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "workplace",
        "site_url": "http://workplace.stackexchange.com",
        "name": "The Workplace Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "workplacemeta/img/apple-touch-icon@2.png",
    "favicon_url": "workplacemeta/img/favicon.ico",
    "audience": "members of the workforce navigating the professional setting",
    "site_url": "http://meta.workplace.stackexchange.com",
    "api_site_parameter": "meta.workplace",
    "logo_url": "workplacemeta/img/logo.png",
    "name": "The Workplace Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.windowsphone",
        "site_url": "http://meta.windowsphone.stackexchange.com",
        "name": "Windows Phone Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1335830400,
    "closed_beta_date": 1335225600,
    "twitter_account": "StackWinPhone",
    "favicon_url": "windowsphone/img/favicon.ico",
    "audience": "enthusiasts and power users of Windows Phone OS",
    "site_url": "http://windowsphone.stackexchange.com",
    "api_site_parameter": "windowsphone",
    "logo_url": "windowsphone/img/logo.png",
    "name": "Windows Phone",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "windowsphone",
        "site_url": "http://windowsphone.stackexchange.com",
        "name": "Windows Phone Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "windowsphonemeta/img/favicon.ico",
    "audience": "enthusiasts and power users of Windows Phone OS",
    "site_url": "http://meta.windowsphone.stackexchange.com",
    "api_site_parameter": "meta.windowsphone",
    "logo_url": "windowsphonemeta/img/logo.png",
    "name": "Windows Phone Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.chemistry",
        "site_url": "http://meta.chemistry.stackexchange.com",
        "name": "Chemistry Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1336435200,
    "closed_beta_date": 1335312000,
    "twitter_account": "StackChemistry",
    "favicon_url": "chemistry/img/favicon.ico",
    "audience": "scientists, academics, teachers and students",
    "site_url": "http://chemistry.stackexchange.com",
    "api_site_parameter": "chemistry",
    "logo_url": "chemistry/img/logo.png",
    "name": "Chemistry",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "chemistry",
        "site_url": "http://chemistry.stackexchange.com",
        "name": "Chemistry Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "chemistrymeta/img/favicon.ico",
    "audience": "scientists, academics, teachers and students",
    "site_url": "http://meta.chemistry.stackexchange.com",
    "api_site_parameter": "meta.chemistry",
    "logo_url": "chemistrymeta/img/logo.png",
    "name": "Chemistry Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.chess",
        "site_url": "http://meta.chess.stackexchange.com",
        "name": "Chess Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1337040000,
    "closed_beta_date": 1335830400,
    "twitter_account": "StackChess",
    "favicon_url": "chess/img/favicon.ico",
    "audience": "serious players and enthusiasts of chess",
    "site_url": "http://chess.stackexchange.com",
    "api_site_parameter": "chess",
    "logo_url": "chess/img/logo.png",
    "name": "Chess",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "chess",
        "site_url": "http://chess.stackexchange.com",
        "name": "Chess Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "chessmeta/img/favicon.ico",
    "audience": "serious players and enthusiasts of chess",
    "site_url": "http://meta.chess.stackexchange.com",
    "api_site_parameter": "meta.chess",
    "logo_url": "chessmeta/img/logo.png",
    "name": "Chess Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.raspberrypi",
        "site_url": "http://meta.raspberrypi.stackexchange.com",
        "name": "Raspberry Pi Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1340064000,
    "closed_beta_date": 1339459200,
    "twitter_account": "StackRaspi",
    "favicon_url": "raspberrypi/img/favicon.ico",
    "audience": "users and developers of hardware and software for Raspberry Pi",
    "site_url": "http://raspberrypi.stackexchange.com",
    "api_site_parameter": "raspberrypi",
    "logo_url": "raspberrypi/img/logo.png",
    "name": "Raspberry Pi",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "raspberrypi",
        "site_url": "http://raspberrypi.stackexchange.com",
        "name": "Raspberry Pi Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "raspberrypimeta/img/favicon.ico",
    "audience": "users and developers of hardware and software for Raspberry Pi",
    "site_url": "http://meta.raspberrypi.stackexchange.com",
    "api_site_parameter": "meta.raspberrypi",
    "logo_url": "raspberrypimeta/img/logo.png",
    "name": "Raspberry Pi Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.russian",
        "site_url": "http://meta.russian.stackexchange.com",
        "name": "Russian Language Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1340668800,
    "closed_beta_date": 1339545600,
    "twitter_account": "StackRussian",
    "favicon_url": "russian/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Russian language",
    "site_url": "http://russian.stackexchange.com",
    "api_site_parameter": "russian",
    "logo_url": "russian/img/logo.png",
    "name": "Russian Language",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "russian",
        "site_url": "http://russian.stackexchange.com",
        "name": "Russian Language Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "russianmeta/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Russian language",
    "site_url": "http://meta.russian.stackexchange.com",
    "api_site_parameter": "meta.russian",
    "logo_url": "russianmeta/img/logo.png",
    "name": "Russian Language Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.islam",
        "site_url": "http://meta.islam.stackexchange.com",
        "name": "Islam Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1340668800,
    "closed_beta_date": 1340064000,
    "twitter_account": "StackIslam",
    "favicon_url": "islam/img/favicon.ico",
    "audience": "Muslims, experts in Islam, and those interested in learning more about Islam",
    "site_url": "http://islam.stackexchange.com",
    "api_site_parameter": "islam",
    "logo_url": "islam/img/logo.png",
    "name": "Islam",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "islam",
        "site_url": "http://islam.stackexchange.com",
        "name": "Islam Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "islammeta/img/favicon.ico",
    "audience": "Muslims, experts in Islam, and those interested in learning more about Islam",
    "site_url": "http://meta.islam.stackexchange.com",
    "api_site_parameter": "meta.islam",
    "logo_url": "islammeta/img/logo.png",
    "name": "Islam Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.salesforce",
        "site_url": "http://meta.salesforce.stackexchange.com",
        "name": "Salesforce Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1410307200,
    "open_beta_date": 1344988800,
    "closed_beta_date": 1343692800,
    "high_resolution_icon_url": "salesforce/img/apple-touch-icon@2.png",
    "twitter_account": "StackSalesforce",
    "favicon_url": "salesforce/img/favicon.ico",
    "audience": "Salesforce administrators, implementation experts, developers and anybody in-between",
    "site_url": "http://salesforce.stackexchange.com",
    "api_site_parameter": "salesforce",
    "logo_url": "salesforce/img/logo.png",
    "name": "Salesforce",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "salesforce",
        "site_url": "http://salesforce.stackexchange.com",
        "name": "Salesforce Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "salesforcemeta/img/apple-touch-icon@2.png",
    "favicon_url": "salesforcemeta/img/favicon.ico",
    "audience": "Salesforce administrators, implementation experts, developers and anybody in-between",
    "site_url": "http://meta.salesforce.stackexchange.com",
    "api_site_parameter": "meta.salesforce",
    "logo_url": "salesforcemeta/img/logo.png",
    "name": "Salesforce Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.patents",
        "site_url": "http://meta.patents.stackexchange.com",
        "name": "Ask Patents Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1348099200,
    "favicon_url": "patents/img/favicon.ico",
    "audience": "people interested in improving and participating in the patent system",
    "site_url": "http://patents.stackexchange.com",
    "api_site_parameter": "patents",
    "logo_url": "patents/img/logo.png",
    "name": "Ask Patents",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "patents",
        "site_url": "http://patents.stackexchange.com",
        "name": "Ask Patents"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "patentsmeta/img/favicon.ico",
    "audience": "people interested in improving and participating in the patent system",
    "site_url": "http://meta.patents.stackexchange.com",
    "api_site_parameter": "meta.patents",
    "logo_url": "patentsmeta/img/logo.png",
    "name": "Ask Patents Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.genealogy",
        "site_url": "http://meta.genealogy.stackexchange.com",
        "name": "Genealogy &amp; Family History Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1350345600,
    "closed_beta_date": 1349740800,
    "twitter_account": "StackGenealogy",
    "favicon_url": "genealogy/img/favicon.ico",
    "audience": "expert genealogists and people interested in genealogy or family history",
    "site_url": "http://genealogy.stackexchange.com",
    "api_site_parameter": "genealogy",
    "logo_url": "genealogy/img/logo.png",
    "name": "Genealogy &amp; Family History",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "genealogy",
        "site_url": "http://genealogy.stackexchange.com",
        "name": "Genealogy &amp; Family History Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "genealogymeta/img/favicon.ico",
    "audience": "expert genealogists and people interested in genealogy or family history",
    "site_url": "http://meta.genealogy.stackexchange.com",
    "api_site_parameter": "meta.genealogy",
    "logo_url": "genealogymeta/img/logo.png",
    "name": "Genealogy &amp; Family History Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.robotics",
        "site_url": "http://meta.robotics.stackexchange.com",
        "name": "Robotics Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1352160000,
    "closed_beta_date": 1350950400,
    "twitter_account": "StackRobotics",
    "favicon_url": "robotics/img/favicon.ico",
    "audience": "professional robotic engineers, hobbyists, researchers and students",
    "site_url": "http://robotics.stackexchange.com",
    "api_site_parameter": "robotics",
    "logo_url": "robotics/img/logo.png",
    "name": "Robotics",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "robotics",
        "site_url": "http://robotics.stackexchange.com",
        "name": "Robotics Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "roboticsmeta/img/favicon.ico",
    "audience": "professional robotic engineers, hobbyists, researchers and students",
    "site_url": "http://meta.robotics.stackexchange.com",
    "api_site_parameter": "meta.robotics",
    "logo_url": "roboticsmeta/img/logo.png",
    "name": "Robotics Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.expressionengine",
        "site_url": "http://meta.expressionengine.stackexchange.com",
        "name": "ExpressionEngine&#174; Answers Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1353974400,
    "closed_beta_date": 1352937600,
    "twitter_account": "StackExpression",
    "favicon_url": "expressionengine/img/favicon.ico",
    "audience": "administrators, end users, developers and designers for ExpressionEngine&#174; CMS",
    "site_url": "http://expressionengine.stackexchange.com",
    "api_site_parameter": "expressionengine",
    "logo_url": "expressionengine/img/logo.png",
    "name": "ExpressionEngine&#174; Answers",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "expressionengine",
        "site_url": "http://expressionengine.stackexchange.com",
        "name": "ExpressionEngine&#174; Answers"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "expressionenginemeta/img/favicon.ico",
    "audience": "administrators, end users, developers and designers for ExpressionEngine&#174; CMS",
    "site_url": "http://meta.expressionengine.stackexchange.com",
    "api_site_parameter": "meta.expressionengine",
    "logo_url": "expressionenginemeta/img/logo.png",
    "name": "ExpressionEngine&#174; Answers Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.politics",
        "site_url": "http://meta.politics.stackexchange.com",
        "name": "Politics Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1355788800,
    "closed_beta_date": 1354579200,
    "twitter_account": "StackPolitics",
    "favicon_url": "politics/img/favicon.ico",
    "audience": "people interested in governments, policies, and political processes",
    "site_url": "http://politics.stackexchange.com",
    "api_site_parameter": "politics",
    "logo_url": "politics/img/logo.png",
    "name": "Politics",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "politics",
        "site_url": "http://politics.stackexchange.com",
        "name": "Politics Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "politicsmeta/img/favicon.ico",
    "audience": "people interested in governments, policies, and political processes",
    "site_url": "http://meta.politics.stackexchange.com",
    "api_site_parameter": "meta.politics",
    "logo_url": "politicsmeta/img/logo.png",
    "name": "Politics Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.anime",
        "site_url": "http://meta.anime.stackexchange.com",
        "name": "Anime &amp; Manga Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1355788800,
    "closed_beta_date": 1355184000,
    "twitter_account": "StackAnime",
    "favicon_url": "anime/img/favicon.ico",
    "audience": "anime and manga fans",
    "site_url": "http://anime.stackexchange.com",
    "api_site_parameter": "anime",
    "logo_url": "anime/img/logo.png",
    "name": "Anime &amp; Manga",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "anime",
        "site_url": "http://anime.stackexchange.com",
        "name": "Anime &amp; Manga Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "animemeta/img/favicon.ico",
    "audience": "anime and manga fans",
    "site_url": "http://meta.anime.stackexchange.com",
    "api_site_parameter": "meta.anime",
    "logo_url": "animemeta/img/logo.png",
    "name": "Anime &amp; Manga Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.magento",
        "site_url": "http://meta.magento.stackexchange.com",
        "name": "Magento Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1359417600,
    "closed_beta_date": 1358812800,
    "twitter_account": "StackMagento",
    "favicon_url": "magento/img/favicon.ico",
    "audience": "users of the Magento e-Commerce platform",
    "site_url": "http://magento.stackexchange.com",
    "api_site_parameter": "magento",
    "logo_url": "magento/img/logo.png",
    "name": "Magento",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "magento",
        "site_url": "http://magento.stackexchange.com",
        "name": "Magento Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "magentometa/img/favicon.ico",
    "audience": "users of the Magento e-Commerce platform",
    "site_url": "http://meta.magento.stackexchange.com",
    "api_site_parameter": "meta.magento",
    "logo_url": "magentometa/img/logo.png",
    "name": "Magento Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.ell",
        "site_url": "http://meta.ell.stackexchange.com",
        "name": "English Language Learners Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1359504000,
    "closed_beta_date": 1358899200,
    "twitter_account": "StackEnglishLL",
    "favicon_url": "ell/img/favicon.ico",
    "audience": "speakers of other languages learning English",
    "site_url": "http://ell.stackexchange.com",
    "api_site_parameter": "ell",
    "logo_url": "ell/img/logo.png",
    "name": "English Language Learners",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "ell",
        "site_url": "http://ell.stackexchange.com",
        "name": "English Language Learners Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "ellmeta/img/favicon.ico",
    "audience": "speakers of other languages learning English",
    "site_url": "http://meta.ell.stackexchange.com",
    "api_site_parameter": "meta.ell",
    "logo_url": "ellmeta/img/logo.png",
    "name": "English Language Learners Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.sustainability",
        "site_url": "http://meta.sustainability.stackexchange.com",
        "name": "Sustainable Living Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1360022400,
    "closed_beta_date": 1359417600,
    "twitter_account": "StackSustain",
    "favicon_url": "sustainability/img/favicon.ico",
    "audience": "folks dedicated to a lifestyle that can be maintained indefinitely without depleting available resources",
    "site_url": "http://sustainability.stackexchange.com",
    "api_site_parameter": "sustainability",
    "logo_url": "sustainability/img/logo.png",
    "name": "Sustainable Living",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "sustainability",
        "site_url": "http://sustainability.stackexchange.com",
        "name": "Sustainable Living Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "sustainabilitymeta/img/favicon.ico",
    "audience": "folks dedicated to a lifestyle that can be maintained indefinitely without depleting available resources",
    "site_url": "http://meta.sustainability.stackexchange.com",
    "api_site_parameter": "meta.sustainability",
    "logo_url": "sustainabilitymeta/img/logo.png",
    "name": "Sustainable Living Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.tridion",
        "site_url": "http://meta.tridion.stackexchange.com",
        "name": "Tridion Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1363046400,
    "closed_beta_date": 1361232000,
    "twitter_account": "StackTridion",
    "favicon_url": "tridion/img/favicon.ico",
    "audience": "Tridion developers and administrators",
    "site_url": "http://tridion.stackexchange.com",
    "api_site_parameter": "tridion",
    "logo_url": "tridion/img/logo.png",
    "name": "Tridion",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "tridion",
        "site_url": "http://tridion.stackexchange.com",
        "name": "Tridion Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "tridionmeta/img/favicon.ico",
    "audience": "Tridion developers and administrators",
    "site_url": "http://meta.tridion.stackexchange.com",
    "api_site_parameter": "meta.tridion",
    "logo_url": "tridionmeta/img/logo.png",
    "name": "Tridion Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.reverseengineering",
        "site_url": "http://meta.reverseengineering.stackexchange.com",
        "name": "Reverse Engineering Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1364774400,
    "closed_beta_date": 1363651200,
    "twitter_account": "StackReverseEng",
    "favicon_url": "reverseengineering/img/favicon.ico",
    "audience": "researchers and developers who explore the principles of a system through analysis of its structure, function, and operation",
    "site_url": "http://reverseengineering.stackexchange.com",
    "api_site_parameter": "reverseengineering",
    "logo_url": "reverseengineering/img/logo.png",
    "name": "Reverse Engineering",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "reverseengineering",
        "site_url": "http://reverseengineering.stackexchange.com",
        "name": "Reverse Engineering Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "reverseengineeringmeta/img/favicon.ico",
    "audience": "researchers and developers who explore the principles of a system through analysis of its structure, function, and operation",
    "site_url": "http://meta.reverseengineering.stackexchange.com",
    "api_site_parameter": "meta.reverseengineering",
    "logo_url": "reverseengineeringmeta/img/logo.png",
    "name": "Reverse Engineering Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.networkengineering",
        "site_url": "http://meta.networkengineering.stackexchange.com",
        "name": "Network Engineering Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1368576000,
    "closed_beta_date": 1367884800,
    "twitter_account": "StackNetworkEng",
    "favicon_url": "networkengineering/img/favicon.ico",
    "audience": "network engineers",
    "site_url": "http://networkengineering.stackexchange.com",
    "api_site_parameter": "networkengineering",
    "logo_url": "networkengineering/img/logo.png",
    "name": "Network Engineering",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "networkengineering",
        "site_url": "http://networkengineering.stackexchange.com",
        "name": "Network Engineering Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "networkengineeringmeta/img/favicon.ico",
    "audience": "network engineers",
    "site_url": "http://meta.networkengineering.stackexchange.com",
    "api_site_parameter": "meta.networkengineering",
    "logo_url": "networkengineeringmeta/img/logo.png",
    "name": "Network Engineering Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.opendata",
        "site_url": "http://meta.opendata.stackexchange.com",
        "name": "Open Data Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1369094400,
    "closed_beta_date": 1367971200,
    "twitter_account": "StackOpenData",
    "favicon_url": "opendata/img/favicon.ico",
    "audience": "developers and researchers interested in open data",
    "site_url": "http://opendata.stackexchange.com",
    "api_site_parameter": "opendata",
    "logo_url": "opendata/img/logo.png",
    "name": "Open Data",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "opendata",
        "site_url": "http://opendata.stackexchange.com",
        "name": "Open Data Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "opendatameta/img/favicon.ico",
    "audience": "developers and researchers interested in open data",
    "site_url": "http://meta.opendata.stackexchange.com",
    "api_site_parameter": "meta.opendata",
    "logo_url": "opendatameta/img/logo.png",
    "name": "Open Data Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.freelancing",
        "site_url": "http://meta.freelancing.stackexchange.com",
        "name": "Freelancing Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1370304000,
    "closed_beta_date": 1369094400,
    "twitter_account": "StackFreelance",
    "favicon_url": "freelancing/img/favicon.ico",
    "audience": " self-employed and freelance workers",
    "site_url": "http://freelancing.stackexchange.com",
    "api_site_parameter": "freelancing",
    "logo_url": "freelancing/img/logo.png",
    "name": "Freelancing",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "freelancing",
        "site_url": "http://freelancing.stackexchange.com",
        "name": "Freelancing Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "freelancingmeta/img/favicon.ico",
    "audience": " self-employed and freelance workers",
    "site_url": "http://meta.freelancing.stackexchange.com",
    "api_site_parameter": "meta.freelancing",
    "logo_url": "freelancingmeta/img/logo.png",
    "name": "Freelancing Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.blender",
        "site_url": "http://meta.blender.stackexchange.com",
        "name": "Blender Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1369785600,
    "closed_beta_date": 1369180800,
    "twitter_account": "StackBlender",
    "favicon_url": "blender/img/favicon.ico",
    "audience": "people who use Blender to create 3D graphics, animations, or games",
    "site_url": "http://blender.stackexchange.com",
    "api_site_parameter": "blender",
    "logo_url": "blender/img/logo.png",
    "name": "Blender",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "blender",
        "site_url": "http://blender.stackexchange.com",
        "name": "Blender Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "blendermeta/img/favicon.ico",
    "audience": "people who use Blender to create 3D graphics, animations, or games",
    "site_url": "http://meta.blender.stackexchange.com",
    "api_site_parameter": "meta.blender",
    "logo_url": "blendermeta/img/logo.png",
    "name": "Blender Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.mathoverflow.net",
        "site_url": "http://meta.mathoverflow.net",
        "name": "MathOverflow Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1254154260,
    "high_resolution_icon_url": "mathoverflow/img/apple-touch-icon@2.png",
    "favicon_url": "mathoverflow/img/favicon.ico",
    "audience": "professional mathematicians",
    "site_url": "http://mathoverflow.net",
    "api_site_parameter": "mathoverflow.net",
    "logo_url": "mathoverflow/img/logo.png",
    "name": "MathOverflow",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "mathoverflow.net",
        "site_url": "http://mathoverflow.net",
        "name": "MathOverflow"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "high_resolution_icon_url": "mathoverflowmeta/img/apple-touch-icon@2.png",
    "favicon_url": "mathoverflowmeta/img/favicon.ico",
    "audience": "professional mathematicians",
    "site_url": "http://meta.mathoverflow.net",
    "api_site_parameter": "meta.mathoverflow.net",
    "logo_url": "mathoverflowmeta/img/logo.png",
    "name": "MathOverflow Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.space",
        "site_url": "http://meta.space.stackexchange.com",
        "name": "Space Exploration Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1374451200,
    "closed_beta_date": 1373932800,
    "twitter_account": "StackSpaceExp",
    "favicon_url": "space/img/favicon.ico",
    "audience": "spacecraft operators, scientists, engineers, and enthusiasts",
    "site_url": "http://space.stackexchange.com",
    "api_site_parameter": "space",
    "logo_url": "space/img/logo.png",
    "name": "Space Exploration",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "space",
        "site_url": "http://space.stackexchange.com",
        "name": "Space Exploration Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "spacemeta/img/favicon.ico",
    "audience": "spacecraft operators, scientists, engineers, and enthusiasts",
    "site_url": "http://meta.space.stackexchange.com",
    "api_site_parameter": "meta.space",
    "logo_url": "spacemeta/img/logo.png",
    "name": "Space Exploration Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.sound",
        "site_url": "http://meta.sound.stackexchange.com",
        "name": "Sound Design Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "launch_date": 1289347200,
    "favicon_url": "sound/img/favicon.ico",
    "audience": "sound engineers, producers, editors, and enthusiasts",
    "site_url": "http://sound.stackexchange.com",
    "api_site_parameter": "sound",
    "logo_url": "sound/img/logo.png",
    "name": "Sound Design",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "sound",
        "site_url": "http://sound.stackexchange.com",
        "name": "Sound Design Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "soundmeta/img/favicon.ico",
    "audience": "sound designers",
    "site_url": "http://meta.sound.stackexchange.com",
    "api_site_parameter": "meta.sound",
    "logo_url": "soundmeta/img/logo.png",
    "name": "Sound Design Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.astronomy",
        "site_url": "http://meta.astronomy.stackexchange.com",
        "name": "Astronomy Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1381190400,
    "closed_beta_date": 1379980800,
    "twitter_account": "StackAstronomy",
    "favicon_url": "astronomy/img/favicon.ico",
    "audience": "astronomers and astrophysicists",
    "site_url": "http://astronomy.stackexchange.com",
    "api_site_parameter": "astronomy",
    "logo_url": "astronomy/img/logo.png",
    "name": "Astronomy",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "astronomy",
        "site_url": "http://astronomy.stackexchange.com",
        "name": "Astronomy Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "astronomymeta/img/favicon.ico",
    "audience": "astronomers and astrophysicists",
    "site_url": "http://meta.astronomy.stackexchange.com",
    "api_site_parameter": "meta.astronomy",
    "logo_url": "astronomymeta/img/logo.png",
    "name": "Astronomy Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.tor",
        "site_url": "http://meta.tor.stackexchange.com",
        "name": "Tor Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1380585600,
    "closed_beta_date": 1380067200,
    "twitter_account": "StackTor",
    "favicon_url": "tor/img/favicon.ico",
    "audience": "researchers, developers, and users of Tor",
    "site_url": "http://tor.stackexchange.com",
    "api_site_parameter": "tor",
    "logo_url": "tor/img/logo.png",
    "name": "Tor",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "tor",
        "site_url": "http://tor.stackexchange.com",
        "name": "Tor Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "tormeta/img/favicon.ico",
    "audience": "researchers, developers, and users of Tor",
    "site_url": "http://meta.tor.stackexchange.com",
    "api_site_parameter": "meta.tor",
    "logo_url": "tormeta/img/logo.png",
    "name": "Tor Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.pets",
        "site_url": "http://meta.pets.stackexchange.com",
        "name": "Pets Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1382400000,
    "closed_beta_date": 1381190400,
    "twitter_account": "StackPets",
    "favicon_url": "pets/img/favicon.ico",
    "audience": "pet owners, caretakers, breeders, veterinarians, and trainers",
    "site_url": "http://pets.stackexchange.com",
    "api_site_parameter": "pets",
    "logo_url": "pets/img/logo.png",
    "name": "Pets",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "pets",
        "site_url": "http://pets.stackexchange.com",
        "name": "Pets Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "petsmeta/img/favicon.ico",
    "audience": "pet owners, caretakers, breeders, veterinarians, and trainers",
    "site_url": "http://meta.pets.stackexchange.com",
    "api_site_parameter": "meta.pets",
    "logo_url": "petsmeta/img/logo.png",
    "name": "Pets Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.ham",
        "site_url": "http://meta.ham.stackexchange.com",
        "name": "Amateur Radio Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1383004800,
    "closed_beta_date": 1382400000,
    "twitter_account": "StackHam",
    "favicon_url": "ham/img/favicon.ico",
    "audience": "amateur radio enthusiasts",
    "site_url": "http://ham.stackexchange.com",
    "api_site_parameter": "ham",
    "logo_url": "ham/img/logo.png",
    "name": "Amateur Radio",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "ham",
        "site_url": "http://ham.stackexchange.com",
        "name": "Amateur Radio Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "hammeta/img/favicon.ico",
    "audience": "amateur radio enthusiasts",
    "site_url": "http://meta.ham.stackexchange.com",
    "api_site_parameter": "meta.ham",
    "logo_url": "hammeta/img/logo.png",
    "name": "Amateur Radio Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.italian",
        "site_url": "http://meta.italian.stackexchange.com",
        "name": "Italian Language Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1384732800,
    "closed_beta_date": 1383609600,
    "twitter_account": "StackItalian",
    "favicon_url": "italian/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Italian language",
    "site_url": "http://italian.stackexchange.com",
    "api_site_parameter": "italian",
    "logo_url": "italian/img/logo.png",
    "name": "Italian Language",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "italian",
        "site_url": "http://italian.stackexchange.com",
        "name": "Italian Language Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "italianmeta/img/favicon.ico",
    "audience": "students, teachers, and linguists wanting to discuss the finer points of the Italian language",
    "site_url": "http://meta.italian.stackexchange.com",
    "api_site_parameter": "meta.italian",
    "logo_url": "italianmeta/img/logo.png",
    "name": "Italian Language Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.pt.stackoverflow",
        "site_url": "http://meta.pt.stackoverflow.com",
        "name": "Stack Overflow em Portugu&#234;s Meta"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1390953600,
    "closed_beta_date": 1386806400,
    "twitter_account": "StackOverflowPT",
    "favicon_url": "br/img/favicon.ico",
    "audience": "programadores profissionais e entusiastas",
    "site_url": "http://pt.stackoverflow.com",
    "api_site_parameter": "pt.stackoverflow",
    "logo_url": "br/img/logo.png",
    "name": "Stack Overflow em Portugu&#234;s",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "pt.stackoverflow",
        "site_url": "http://pt.stackoverflow.com",
        "name": "Stack Overflow em Portugu&#234;s"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "brmeta/img/favicon.ico",
    "audience": "professional and enthusiast programmers",
    "site_url": "http://meta.pt.stackoverflow.com",
    "api_site_parameter": "meta.pt.stackoverflow",
    "logo_url": "brmeta/img/logo.png",
    "name": "Stack Overflow em Portugu&#234;s Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.aviation",
        "site_url": "http://meta.aviation.stackexchange.com",
        "name": "Aviation Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1387843200,
    "closed_beta_date": 1387238400,
    "twitter_account": "StackAviation",
    "favicon_url": "aviation/img/favicon.ico",
    "audience": "aircraft pilots, mechanics, and enthusiasts",
    "site_url": "http://aviation.stackexchange.com",
    "api_site_parameter": "aviation",
    "logo_url": "aviation/img/logo.png",
    "name": "Aviation",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "aviation",
        "site_url": "http://aviation.stackexchange.com",
        "name": "Aviation Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "aviationmeta/img/favicon.ico",
    "audience": "aircraft pilots, mechanics, and enthusiasts",
    "site_url": "http://meta.aviation.stackexchange.com",
    "api_site_parameter": "meta.aviation",
    "logo_url": "aviationmeta/img/logo.png",
    "name": "Aviation Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.ebooks",
        "site_url": "http://meta.ebooks.stackexchange.com",
        "name": "Ebooks Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1387843200,
    "closed_beta_date": 1387324800,
    "twitter_account": "StackEbooks",
    "favicon_url": "ebooks/img/favicon.ico",
    "audience": "ebook publishers and readers",
    "site_url": "http://ebooks.stackexchange.com",
    "api_site_parameter": "ebooks",
    "logo_url": "ebooks/img/logo.png",
    "name": "Ebooks",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "ebooks",
        "site_url": "http://ebooks.stackexchange.com",
        "name": "Ebooks Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "ebooksmeta/img/favicon.ico",
    "audience": "ebook publishers and readers",
    "site_url": "http://meta.ebooks.stackexchange.com",
    "api_site_parameter": "meta.ebooks",
    "logo_url": "ebooksmeta/img/logo.png",
    "name": "Ebooks Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.beer",
        "site_url": "http://meta.beer.stackexchange.com",
        "name": "Beer Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1390867200,
    "closed_beta_date": 1390262400,
    "twitter_account": "BeerStack",
    "favicon_url": "beer/img/favicon.ico",
    "audience": "beer aficionados and collectors",
    "site_url": "http://beer.stackexchange.com",
    "api_site_parameter": "beer",
    "logo_url": "beer/img/logo.png",
    "name": "Beer",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "beer",
        "site_url": "http://beer.stackexchange.com",
        "name": "Beer Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "beermeta/img/favicon.ico",
    "audience": "beer aficionados and collectors",
    "site_url": "http://meta.beer.stackexchange.com",
    "api_site_parameter": "meta.beer",
    "logo_url": "beermeta/img/logo.png",
    "name": "Beer Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.softwarerecs",
        "site_url": "http://meta.softwarerecs.stackexchange.com",
        "name": "Software Recommendations Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1392681600,
    "closed_beta_date": 1391472000,
    "twitter_account": "StackSoftRecs",
    "favicon_url": "softwarerecs/img/favicon.ico",
    "audience": "people seeking specific software recommendations",
    "site_url": "http://softwarerecs.stackexchange.com",
    "api_site_parameter": "softwarerecs",
    "logo_url": "softwarerecs/img/logo.png",
    "name": "Software Recommendations",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "softwarerecs",
        "site_url": "http://softwarerecs.stackexchange.com",
        "name": "Software Recommendations Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "softwarerecsmeta/img/favicon.ico",
    "audience": "people seeking specific software recommendations",
    "site_url": "http://meta.softwarerecs.stackexchange.com",
    "api_site_parameter": "meta.softwarerecs",
    "logo_url": "softwarerecsmeta/img/logo.png",
    "name": "Software Recommendations Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.arduino",
        "site_url": "http://meta.arduino.stackexchange.com",
        "name": "Arduino Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1393372800,
    "closed_beta_date": 1392076800,
    "twitter_account": "StackArduino",
    "favicon_url": "arduino/img/favicon.ico",
    "audience": "developers of open-source hardware and software that is compatible with Arduino",
    "site_url": "http://arduino.stackexchange.com",
    "api_site_parameter": "arduino",
    "logo_url": "arduino/img/logo.png",
    "name": "Arduino",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "arduino",
        "site_url": "http://arduino.stackexchange.com",
        "name": "Arduino Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "arduinometa/img/favicon.ico",
    "audience": "developers of open-source hardware and software that is compatible with Arduino",
    "site_url": "http://meta.arduino.stackexchange.com",
    "api_site_parameter": "meta.arduino",
    "logo_url": "arduinometa/img/logo.png",
    "name": "Arduino Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.cs50",
        "site_url": "http://meta.cs50.stackexchange.com",
        "name": "CS50 Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "cs50/img/favicon.ico",
    "audience": "students of Harvard University&#39;s CS50",
    "site_url": "http://cs50.stackexchange.com",
    "api_site_parameter": "cs50",
    "logo_url": "cs50/img/logo.png",
    "name": "CS50",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "cs50",
        "site_url": "http://cs50.stackexchange.com",
        "name": "CS50 Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "cs50meta/img/favicon.ico",
    "audience": "students of Harvard University&#39;s CS50",
    "site_url": "http://meta.cs50.stackexchange.com",
    "api_site_parameter": "meta.cs50",
    "logo_url": "cs50meta/img/logo.png",
    "name": "CS50 Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.edx-cs169-1x",
        "site_url": "http://meta.edx-cs169-1x.stackexchange.com",
        "name": "edx-cs169-1x Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "edx-cs169-1x/img/favicon.ico",
    "audience": "students of BerkeleyX CS169.1x: Engineering Software as a Service",
    "site_url": "http://edx-cs169-1x.stackexchange.com",
    "api_site_parameter": "edx-cs169-1x",
    "logo_url": "edx-cs169-1x/img/logo.png",
    "name": "edx-cs169-1x",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "edx-cs169-1x",
        "site_url": "http://edx-cs169-1x.stackexchange.com",
        "name": "edx-cs169-1x Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "edx-cs169-1xmeta/img/favicon.ico",
    "audience": "students of BerkeleyX CS169.1x: Engineering Software as a Service",
    "site_url": "http://meta.edx-cs169-1x.stackexchange.com",
    "api_site_parameter": "meta.edx-cs169-1x",
    "logo_url": "edx-cs169-1xmeta/img/logo.png",
    "name": "edx-cs169-1x Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.expatriates",
        "site_url": "http://meta.expatriates.stackexchange.com",
        "name": "Expatriates Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1395100800,
    "closed_beta_date": 1394582400,
    "favicon_url": "expatriates/img/favicon.ico",
    "audience": "people living abroad on a long-term basis",
    "site_url": "http://expatriates.stackexchange.com",
    "api_site_parameter": "expatriates",
    "logo_url": "expatriates/img/logo.png",
    "name": "Expatriates",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "expatriates",
        "site_url": "http://expatriates.stackexchange.com",
        "name": "Expatriates Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "expatriatesmeta/img/favicon.ico",
    "audience": "people living abroad on a long-term basis",
    "site_url": "http://meta.expatriates.stackexchange.com",
    "api_site_parameter": "meta.expatriates",
    "logo_url": "expatriatesmeta/img/logo.png",
    "name": "Expatriates Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.matheducators",
        "site_url": "http://meta.matheducators.stackexchange.com",
        "name": "Mathematics Educators Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1395705600,
    "closed_beta_date": 1394668800,
    "favicon_url": "matheducators/img/favicon.ico",
    "audience": "those involved in the field of teaching mathematics",
    "site_url": "http://matheducators.stackexchange.com",
    "api_site_parameter": "matheducators",
    "logo_url": "matheducators/img/logo.png",
    "name": "Mathematics Educators",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "matheducators",
        "site_url": "http://matheducators.stackexchange.com",
        "name": "Mathematics Educators Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "matheducatorsmeta/img/favicon.ico",
    "audience": "those involved in the field of teaching mathematics",
    "site_url": "http://meta.matheducators.stackexchange.com",
    "api_site_parameter": "meta.matheducators",
    "logo_url": "matheducatorsmeta/img/logo.png",
    "name": "Mathematics Educators Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "stackoverflow",
        "site_url": "http://stackoverflow.com",
        "name": "Stack Overflow"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackoverflow.com",
        "name": "Meta Stack Overflow Chat"
      }
    ],
    "high_resolution_icon_url": "stackoverflowmeta/img/apple-touch-icon@2.png",
    "favicon_url": "stackoverflowmeta/img/favicon.ico",
    "audience": "professional and enthusiast programmers",
    "site_url": "http://meta.stackoverflow.com",
    "api_site_parameter": "meta.stackoverflow",
    "logo_url": "stackoverflowmeta/img/logo.png",
    "name": "Meta Stack Overflow",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.earthscience",
        "site_url": "http://meta.earthscience.stackexchange.com",
        "name": "Earth Science Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1398124800,
    "closed_beta_date": 1397520000,
    "favicon_url": "earthscience/img/favicon.ico",
    "audience": "those interested in the geology, meteorology, oceanography, and environmental sciences",
    "site_url": "http://earthscience.stackexchange.com",
    "api_site_parameter": "earthscience",
    "logo_url": "earthscience/img/logo.png",
    "name": "Earth Science",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "earthscience",
        "site_url": "http://earthscience.stackexchange.com",
        "name": "Earth Science Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "earthsciencemeta/img/favicon.ico",
    "audience": "those interested in the geology, meteorology, oceanography, and environmental sciences",
    "site_url": "http://meta.earthscience.stackexchange.com",
    "api_site_parameter": "meta.earthscience",
    "logo_url": "earthsciencemeta/img/logo.png",
    "name": "Earth Science Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.joomla",
        "site_url": "http://meta.joomla.stackexchange.com",
        "name": "Joomla Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1398729600,
    "closed_beta_date": 1398124800,
    "favicon_url": "joomla/img/favicon.ico",
    "audience": "Joomla! administrators, users, developers and designers",
    "site_url": "http://joomla.stackexchange.com",
    "api_site_parameter": "joomla",
    "logo_url": "joomla/img/logo.png",
    "name": "Joomla",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "joomla",
        "site_url": "http://joomla.stackexchange.com",
        "name": "Joomla Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "joomlameta/img/favicon.ico",
    "audience": "Joomla! administrators, users, developers and designers",
    "site_url": "http://meta.joomla.stackexchange.com",
    "api_site_parameter": "meta.joomla",
    "logo_url": "joomlameta/img/logo.png",
    "name": "Joomla Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.datascience",
        "site_url": "http://meta.datascience.stackexchange.com",
        "name": "Data Science Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1402272000,
    "closed_beta_date": 1399939200,
    "favicon_url": "datascience/img/favicon.ico",
    "audience": "Data science professionals, Machine Learning specialists, and those interested in learning more about the field",
    "site_url": "http://datascience.stackexchange.com",
    "api_site_parameter": "datascience",
    "logo_url": "datascience/img/logo.png",
    "name": "Data Science",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "datascience",
        "site_url": "http://datascience.stackexchange.com",
        "name": "Data Science Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "datasciencemeta/img/favicon.ico",
    "audience": "Data science professionals, Machine Learning specialists, and those interested in learning more about the field",
    "site_url": "http://meta.datascience.stackexchange.com",
    "api_site_parameter": "meta.datascience",
    "logo_url": "datasciencemeta/img/logo.png",
    "name": "Data Science Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.puzzling",
        "site_url": "http://meta.puzzling.stackexchange.com",
        "name": "Puzzling Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1401148800,
    "closed_beta_date": 1400025600,
    "favicon_url": "puzzling/img/favicon.ico",
    "audience": "those who study the creation and solving of puzzles",
    "site_url": "http://puzzling.stackexchange.com",
    "api_site_parameter": "puzzling",
    "logo_url": "puzzling/img/logo.png",
    "name": "Puzzling",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "puzzling",
        "site_url": "http://puzzling.stackexchange.com",
        "name": "Puzzling Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "puzzlingmeta/img/favicon.ico",
    "audience": "those who study the creation and solving of puzzles",
    "site_url": "http://meta.puzzling.stackexchange.com",
    "api_site_parameter": "meta.puzzling",
    "logo_url": "puzzlingmeta/img/logo.png",
    "name": "Puzzling Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.craftcms",
        "site_url": "http://meta.craftcms.stackexchange.com",
        "name": "Craft CMS Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1403049600,
    "closed_beta_date": 1402444800,
    "favicon_url": "craftcms/img/favicon.ico",
    "audience": "administrators, end users, developers and designers for Craft CMS",
    "site_url": "http://craftcms.stackexchange.com",
    "api_site_parameter": "craftcms",
    "logo_url": "craftcms/img/logo.png",
    "name": "Craft CMS",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "craftcms",
        "site_url": "http://craftcms.stackexchange.com",
        "name": "Craft CMS Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "craftcmsmeta/img/favicon.ico",
    "audience": "administrators, end users, developers and designers for Craft CMS",
    "site_url": "http://meta.craftcms.stackexchange.com",
    "api_site_parameter": "meta.craftcms",
    "logo_url": "craftcmsmeta/img/logo.png",
    "name": "Craft CMS Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.buddhism",
        "site_url": "http://meta.buddhism.stackexchange.com",
        "name": "Buddhism Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1403568000,
    "closed_beta_date": 1402963200,
    "favicon_url": "buddhism/img/favicon.ico",
    "audience": "people practicing or interested in Buddhist philosophy, teaching, and practice",
    "site_url": "http://buddhism.stackexchange.com",
    "api_site_parameter": "buddhism",
    "logo_url": "buddhism/img/logo.png",
    "name": "Buddhism",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "buddhism",
        "site_url": "http://buddhism.stackexchange.com",
        "name": "Buddhism Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "buddhismmeta/img/favicon.ico",
    "audience": "people practicing or interested in Buddhist philosophy, teaching, and practice",
    "site_url": "http://meta.buddhism.stackexchange.com",
    "api_site_parameter": "meta.buddhism",
    "logo_url": "buddhismmeta/img/logo.png",
    "name": "Buddhism Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.hinduism",
        "site_url": "http://meta.hinduism.stackexchange.com",
        "name": "Hinduism Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1404086400,
    "closed_beta_date": 1403049600,
    "favicon_url": "hinduism/img/favicon.ico",
    "audience": "followers of the Hindu religion and those interested in learning more about Hinduism",
    "site_url": "http://hinduism.stackexchange.com",
    "api_site_parameter": "hinduism",
    "logo_url": "hinduism/img/logo.png",
    "name": "Hinduism",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "hinduism",
        "site_url": "http://hinduism.stackexchange.com",
        "name": "Hinduism Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "hinduismmeta/img/favicon.ico",
    "audience": "followers of the Hindu religion and those interested in learning more about Hinduism",
    "site_url": "http://meta.hinduism.stackexchange.com",
    "api_site_parameter": "meta.hinduism",
    "logo_url": "hinduismmeta/img/logo.png",
    "name": "Hinduism Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.moderators",
        "site_url": "http://meta.moderators.stackexchange.com",
        "name": "Moderators Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1407196800,
    "closed_beta_date": 1406592000,
    "favicon_url": "moderators/img/favicon.ico",
    "audience": "community managers, administrators, and moderators",
    "site_url": "http://moderators.stackexchange.com",
    "api_site_parameter": "moderators",
    "logo_url": "moderators/img/logo.png",
    "name": "Moderators",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "moderators",
        "site_url": "http://moderators.stackexchange.com",
        "name": "Moderators Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "moderatorsmeta/img/favicon.ico",
    "audience": "community managers, administrators, and moderators",
    "site_url": "http://meta.moderators.stackexchange.com",
    "api_site_parameter": "meta.moderators",
    "logo_url": "moderatorsmeta/img/logo.png",
    "name": "Moderators Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.startups",
        "site_url": "http://meta.startups.stackexchange.com",
        "name": "Startups Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1408320000,
    "closed_beta_date": 1406678400,
    "favicon_url": "startups/img/favicon.ico",
    "audience": "entrepreneurs faced with delivering a new product or service under conditions of significant uncertainty",
    "site_url": "http://startups.stackexchange.com",
    "api_site_parameter": "startups",
    "logo_url": "startups/img/logo.png",
    "name": "Startups",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "startups",
        "site_url": "http://startups.stackexchange.com",
        "name": "Startups Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "startupsmeta/img/favicon.ico",
    "audience": "entrepreneurs faced with delivering a new product or service under conditions of significant uncertainty",
    "site_url": "http://meta.startups.stackexchange.com",
    "api_site_parameter": "meta.startups",
    "logo_url": "startupsmeta/img/logo.png",
    "name": "Startups Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.worldbuilding",
        "site_url": "http://meta.worldbuilding.stackexchange.com",
        "name": "Worldbuilding Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1411948800,
    "closed_beta_date": 1410825600,
    "favicon_url": "worldbuilding/img/favicon.ico",
    "audience": "writers/artists using science, geography and culture to construct imaginary worlds and settings",
    "site_url": "http://worldbuilding.stackexchange.com",
    "api_site_parameter": "worldbuilding",
    "logo_url": "worldbuilding/img/logo.png",
    "name": "Worldbuilding",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "worldbuilding",
        "site_url": "http://worldbuilding.stackexchange.com",
        "name": "Worldbuilding Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "worldbuildingmeta/img/favicon.ico",
    "audience": "writers/artists using science, geography and culture to construct imaginary worlds and settings",
    "site_url": "http://meta.worldbuilding.stackexchange.com",
    "api_site_parameter": "meta.worldbuilding",
    "logo_url": "worldbuildingmeta/img/logo.png",
    "name": "Worldbuilding Meta",
    "site_type": "meta_site"
  },
  {
    "related_sites": [
      {
        "relation": "meta",
        "api_site_parameter": "meta.emacs",
        "site_url": "http://meta.emacs.stackexchange.com",
        "name": "Emacs Meta Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "open_beta_date": 1412640000,
    "closed_beta_date": 1411430400,
    "favicon_url": "emacs/img/favicon.ico",
    "audience": "for those using, extending or developing emacs",
    "site_url": "http://emacs.stackexchange.com",
    "api_site_parameter": "emacs",
    "logo_url": "emacs/img/logo.png",
    "name": "Emacs",
    "site_type": "main_site"
  },
  {
    "related_sites": [
      {
        "relation": "parent",
        "api_site_parameter": "emacs",
        "site_url": "http://emacs.stackexchange.com",
        "name": "Emacs Stack Exchange"
      },
      {
        "relation": "chat",
        "site_url": "http://chat.stackexchange.com",
        "name": "Chat Stack Exchange"
      }
    ],
    "favicon_url": "emacsmeta/img/favicon.ico",
    "audience": "for those using, extending or developing emacs",
    "site_url": "http://meta.emacs.stackexchange.com",
    "api_site_parameter": "meta.emacs",
    "logo_url": "emacsmeta/img/logo.png",
    "name": "Emacs Meta",
    "site_type": "meta_site"
  }
];
