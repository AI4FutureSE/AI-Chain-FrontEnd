$(document).ready(()=>{
    // tool tips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // *** Left-bar ***
    let who = 'user'    // 'user' or 'sapper'

    // *** conversation transmission ***
    // input message
    $('#msgForm').submit(function (e){
        // * display the input message in the conversation wrapper
        let currentDialog = $('.conversation-dialog').last()
        let convWrapper = $('.conversation-wrapper')
        let msgInput = $('#msgInput')
        // if send from the same user, append message in current dialog
        if (currentDialog.attr('data-role') === who){
            currentDialog.find('.dialog-msg-wrapper').append(generateMessage(msgInput.val()))
        }
        // else create a new dialog
        else{
            convWrapper.append(generateDialog(who, msgInput.val()))
        }
        convWrapper.animate({
            scrollTop: convWrapper.prop('scrollHeight')
        }, 500)
        // wait for response
        let message = msgInput.val()
        msgInput.val('')
        msgInput.attr('disabled','disabled')


        // * send input message to server through ajax
        e.preventDefault()
        $.ajax({
            url: '/sendMsg',
            type: 'post',
            data:{
                'message': message
            },
            success: function (res){
                if (res.code === -1){
                    alert("Connection to Server Error")
                }
                else {
                    $('.conversation-wrapper').append(generateDialog('Expertise', res.answer))
                    convWrapper.animate({
                        scrollTop: convWrapper.prop('scrollHeight')
                    }, 500)
                    msgInput.removeAttr('disabled')
                }
            },
            error: function (res){
                alert('Error')
                console.log(res)
                msgInput.removeAttr('disabled')
            }
        })
    })

    // *** Dialog rendering ***
    // middle page
    function generateMessage(msg){
        return '<p class="dialog-msg">'+ msg +"</p>"
    }
    function generateDialog(user, msg){
        return "<div class=\"conversation-dialog dialog-" + user.toLowerCase() + "\" data-role=\"" + user + "\">\n" +
            "    <div class=\"dialog-portrait\">\n" +
            "        <img src=\"images/" + user.toLowerCase() + ".jpg\" class=\"dialog-portrait-img\">\n" +
            "        <p class=\"dialog-portrait-name\">" + user + "</p>\n" +
            "    </div>\n" +
            "    <div class=\"dialog-msg-wrapper\">\n" +
            "        <p class=\"dialog-msg\">" + msg + "</p>\n" +
            "    </div>\n" +
            "</div>"
    }

    // ***********
    // Chatbot
    // ***********
    // const questions = ["What is your role on the AI4M project?",
    //     "Which industry sector is your AI4M project targeted at?",
    //     "Which business areas does your AI4M project target?",
    //     "What types of AI system are you developing?"]
    //
    // const options = [["Lead", "Technician", "Consultant", "Client"],
    //     ["Health", "Mining", "Mining", "Law", "Finance", "Agribusiness", "Cyber Security", "Education", "Defence", "Infrastructure", "Manufacturing", "R&D or Innovation", "Environment"],
    //     ["Accounting and finance", "Customer service", "Human resources", "IT", "Legal, risk and compliance", "Supply chain", "Marketing", "Research and development", "Sales", "Strategy", "Other"],
    //     ["Recognition systems", "Language processing", "Automated decision making", "Recommender systems", "Computer vision", "Other"]]

    // optionClick()
    // askQuestion(0)
    // function optionClick(){
    //     $('.option').click(function (){
    //         let questionTarget = $(this).parents().closest('.dialog-option').attr('data-question-target')
    //         let questionNo = parseInt(questionTarget.substr(questionTarget.lastIndexOf('-') + 1))
    //         // remove all shown later questions
    //         for (let i = questionNo + 1; i < questions.length; i++){
    //             $('#question-' + i).remove()
    //             $('[data-question-target=question-' + i + ']').remove()
    //         }
    //         // popup the next question
    //         let userInputWrapper = $('.input-wrapper')
    //         if (questionNo < questions.length - 1){
    //             askQuestion(questionNo + 1)
    //             userInputWrapper.slideUp('fast')
    //
    //         }
    //         else if (userInputWrapper.is(':hidden')){
    //             userInputWrapper.slideDown("fast")
    //         }
    //         // set the clicked option as active
    //         $(this).siblings().removeClass('option-active')
    //         $(this).addClass('option-active')
    //     })
    // }
    // function askQuestion(questionNo){
    //     let questionWrapper = $('.dialog-question')
    //     let msgWrapper = questionWrapper.find('.dialog-msg-wrapper')
    //     let question = questions[questionNo]
    //     let opts = options[questionNo]
    //     let HTMLquestion = '<p id="question-' + questionNo + '" class="dialog-msg">' + question + '</p>\n'
    //     let HTMLoptions = '<div class="dialog-option" data-question-target="question-' + questionNo + '"> </div>\n'
    //     let optionWrapper = $(HTMLoptions)
    //     for (let i = 0; i < opts.length; i ++){
    //         optionWrapper.append('<p class="option">' + opts[i] + '</p>')
    //     }
    //     msgWrapper.append(HTMLquestion)
    //     msgWrapper.append(optionWrapper)
    //     optionClick()
    // }
})