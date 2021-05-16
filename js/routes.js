
var routes = [
  {
    path: '/',
    url: './index.html',
    pageBeforeIn: function(){

      init()

    }
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  {
    path: '/setup/',
    url: './pages/setup.html',
    on: {
      pageInit: function () {
        select();
      },
      pageBeforeIn: function(){
        app.dialog.close()
        var smartSelect = app.smartSelect.get("#selectders")
        smartSelect.openPage()

        selectedones = JSON.parse(localStorage.selected)

        document.getElementById("selectderslist").childNodes.forEach((x)=>{

          selectedones.forEach((y)=>{

            if(x.innerHTML == y){ x.setAttribute("selected","") }

          })



        })

      }
    }
  },
  {
    path: '/edit/',
    url: './pages/edit.html',
    on: {
      pageInit: function () {
        select();
        
      },
      pageBeforeIn: function(){
        app.dialog.close()
        var smartSelect = app.smartSelect.get("#selectders")
        smartSelect.openPage()

        selectedones = JSON.parse(localStorage.selected)

        document.getElementById("selectderslist").childNodes.forEach((x)=>{

          selectedones.forEach((y)=>{


            if(x.innerHTML == y.replace("İ","I")){ x.setAttribute("selected","") }

          })



        })

      },
      
    }
  },
  {
    path: '/settings/',
    url: './pages/settings.html',
    on: {
      pageInit: function () {
        
      },
      pageBeforeIn: function(){

        var dmodeswitch = app.toggle.get("#dmodeswitch");

        if(localStorage.tadpDmode == "true"){

          dmodeswitch.checked = true;

        }

        dmodeswitch.on("toggleChange",()=>{



          if( dmodeswitch.checked == true){
            localStorage.tadpDmode = "true";
            document.body.classList.add("theme-dark")
            document.body.classList.add("color-theme-blue")
          }else if( dmodeswitch.checked == false){
            localStorage.tadpDmode = "false";
            document.body.classList.remove("theme-dark")
            document.body.classList.remove("color-theme-blue")
          }

        })

        localStorage.tadpseenSettings = "1"
      }
    }
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    componentUrl: './pages/dynamic-route.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
