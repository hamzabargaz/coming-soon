// function init(){$("#contactForm").show().submit(submitForm).addClass("positioned"),$('a[href="#contactForm"]').click(function(){return $("#contactForm").fadeTo("slow",.2),$("#contactForm").fadeIn("slow",function(){$("#senderName").focus()}),!1})}function submitForm(){var e=$(this);return $("#senderName").val()&&$("#senderEmail").val()&&$("#message").val()?($("#sendingMessage").fadeIn(),e.fadeOut(),$.ajax({url:e.attr("action")+"?ajax=true",type:e.attr("method"),data:e.serialize(),success:submitFinished})):($("#incompleteMessage").fadeIn().delay(messageDelay).fadeOut(),e.fadeOut().delay(messageDelay).fadeIn()),!1}function submitFinished(e){e=$.trim(e),$("#sendingMessage").fadeOut(),"success"==e?($("#successMessage").fadeIn().delay(messageDelay).fadeOut(),$("#senderName").val(""),$("#senderEmail").val(""),$("#message").val(""),$("#contactForm").delay(messageDelay+500).fadeIn()):($("#failureMessage").fadeIn().delay(messageDelay).fadeOut(),$("#contactForm").delay(messageDelay+500).fadeIn())}var messageDelay=2e3;$(init);

function init() {
    $("#contactForm").show().submit(submitForm).addClass("positioned"),
    $('a[href="#contactForm"]').click(function() {
        return $("#contactForm").fadeTo("slow", .2),
        $("#contactForm").fadeIn("slow", function() {
            $("#senderName").focus()
        }),
        !1
    })
}
function submitForm() {
    var e = $(this);
    return $("#name").val() && $("#email").val() && $("#message").val() ? ($("#sendingMessage").fadeIn(),
    e.fadeOut(),
    $.ajax({
        url: e.attr("action") + "?ajax=true",
        type: e.attr("method"),
        data: e.serialize(),
        success: submitFinished
    })) : ($("#incompleteMessage").fadeIn().delay(messageDelay).fadeOut(),
    e.fadeOut().delay(messageDelay).fadeIn()),
    !1
}
function submitFinished(e) {
    e = $.trim(e),
    $("#sendingMessage").fadeOut(),
    "success" == e ? ($("#successMessage").fadeIn().delay(messageDelay).fadeOut(),
    $("#name").val(""),
    $("#email").val(""),
    $("#message").val(""),
    $("#contactForm").delay(messageDelay + 500).fadeIn()) : ($("#failureMessage").fadeIn().delay(messageDelay).fadeOut(),
    $("#contactForm").delay(messageDelay + 500).fadeIn())
}
var messageDelay = 2e3;
$(init);
