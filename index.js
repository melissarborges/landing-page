function redirect() 

      var email = "melissarborges@gmail.com"
      var mailto_link = 'mailto:' + email
      window = window.open(mailto_link, 'emailWindow')
      if (window && window.open && !window.closed)         
          window.close()