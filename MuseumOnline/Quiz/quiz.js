(function() 
 {
  var allQuestions = [{
    question: "Welk materiaal vindt jij het mooist?",
    options: ["Hout", "Marmer", "Platina", "Diamant"],
    answer: [40, 20, 30, 10],
  }, {
    question: "Wat voor dier spreekt jou het meest aan?",
    options: ["Bok", "Leeuw", "Flamingo", "Zeepaard"],
    answer: [20, 10, 30, 40],
  }, {
    question: "Van welk seizoen hou jij het meest?",
    options: ["Winter", "Lente", "Zomer","Herfts"],
    answer: [30, 40, 10, 20],
  }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
   function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          correct += allQuestions[i].answer[selectOptions[i]];

        }
        score.append('Gebaseerd op jouw antwoorden denken wij dat dit kunstwerk het best bij jou past!');
        if (correct > 0 && correct < 70) {
          score.append('<img src="woodenShrek.jpg">');
        }
        if (correct > 70 && correct < 100) {
          score.append('<img src="foodPainting.jpg">');
        }
        if (correct > 100 && correct < 121) {
          score.append('<img src="platinumCart.jpg">');
        }
        return score;
    }
})();