// Scrool to Top Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("totop").style.display = "block";
  } else {
    document.getElementById("totop").style.display = "none";
  }
}

function scrolltotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// https://drive.google.com/file/d/17FvLqWiLliDzjT5Lv3mE1Le4WTbfqLaF/preview
function create_doc_viewer(pdf_file) {
  pdf_file_viewer = books_links[pdf_file];
  var new_win = open('https://hagit-aharonof.github.io/WebPages/DocViewer.html','pdf viewer');
  html_to_write = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <iframe src="` + pdf_file_viewer + `" width="100%" height="1000" allow="autoplay"></iframe>
                    </body>
                    </html>`
  new_win.document.write(html_to_write);
}

function refresh_and_go(url) {
  location.reload()
  location.href = url;
}
