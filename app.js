/// <reference path="Scripts/jquery-3.2.1.js" />

//to hide the DIV element
//and
//when the user clicks on the button, opens the modal and closes when clicked on <span> (x) or anywhere on window
$(document).ready(function () {
    $("#captchaPopup").hide(); //hides intially
    $('#myDiv').click(function () {
        $("li").toggle(1000);
    });
    $('#myBtn').click(function (e) {
        $('#myModal').fadeIn('fast');
        e.preventDefault();
    });
    $('#closebtn').click(function (e) {
        $('#myModal').fadeOut('fast');
    });
});

//when the user scrolls down 20px then display the button
$("#btnTop").hide(); // hide on page load

$(window).bind('scroll', function () {
    if ($(this).scrollTop() > 20) { // show after 20 px of user scrolling
        $("#btnTop").slideDown("fast");
    }
    else {
        $("#btnTop").hide();
    }
});


//when the user clicks on the "Top" button, scroll up
$(document).ready(function () {
    $('#btnTop').click(function () {
        $("html,body").animate({ scrollTop: '0px' }, "slow");
        return false;
    });
});

//to print the resume

$(document).ready(function () {
    $('#btnDownload').click(function () {
        var toPrint = $('#content').html();
        var popupWin = window.open('', '_black', 'width=600,height=700,location=no,left=200px');
        popupWin.document.open();
        popupWin.document.write('<html><head><title>::Preview::</title><link href="Styles/StyleSheet.css" rel="stylesheet" /><link href="Styles/Profile.css" rel="stylesheet" /><link rel="stylesheet" href="https://www.w3schools.com/w3css/3/w3.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /><script src="Scripts/jquery-3.2.1.js"></script></head><body> <button type="submit" class="w3-button" id="dwnldResume" onclick="window.print()">Print</button>');
        popupWin.document.write(toPrint);
        popupWin.document.write('</body></html>');
        popupWin.document.close();
    });
});

//to display the captcha and allow download on success

$(document).ready(function () {
    $("#print").click(function (e) {
        $('#captchaPopup').fadeIn('fast');
        e.preventDefault();
    });
    $('#closebtn1').click(function (e) {
        $('#captchaPopup').fadeOut('fast');
    });
});

//for captcha like activity
$(document).ready(function () {
    $('#source li').draggable({
        helper: function () {
            return '<b><u>' + $(this).text() + '</b></u>';
        },
        revert: 'invalid',
    });

    $('#divCountries').droppable({
        accept: 'li[data-value="country"]',
        activate: function (event, ui) {
            $(this).addClass('highlight');

        },
        deactivate: function (event, ui) {
            $(this).removeClass('highlight');

        },
        drop: function (event, ui) {
            $('#countries').append(ui.draggable);

        }
    });

    $('#divCities').droppable({
        accept: 'li[data-value="city"]',
        activate: function (event, ui) {
            $(this).addClass('highlight');

        },
        deactivate: function (event, ui) {
            $(this).removeClass('highlight');

        },
        drop: function (event, ui) {
            $('#cities').append(ui.draggable);
            $('#btnDownload').removeAttr('disabled'); // to enable download button when captch is success
        }
    });
});
