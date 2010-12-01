var rounds = ['rd1', 'rd2', 'sweet16', 'elite8', 'final4', 'championship', 'champion'];



function getTargetFromId(id)
{
    var parts = id.split('-');
    var round = parts[0];
    var matchup = parseInt(parts[1].replace('matchup', ''));
    var team = parseInt(parts[2].replace('team', ''));
    
    var next_round = getNextRound(round);
    var next_matchup = getNextMatchup(matchup);
    var next_team = getNextTeam(matchup);
    
    var selector = '#'+next_round+'-matchup'+next_matchup+'-team'+next_team;
    
    return $(selector);
}



function getNextRound(round)
{
    for(i = 0; i < rounds.length; i++)
    {
        if(rounds[i] != rounds.length - 1)
        {
            if(rounds[i] == round) { return rounds[i+1]; }
        }
        else { return null; }
    }
    return null;
}



function getNextMatchup(matchup)
{
    return matchup % 2 == 0 ? matchup / 2 : (matchup + 1) / 2;
}



function getNextTeam(matchup)
{
    return (matchup % 2 == 0) ? 2 : 1;
}



function getFutureRounds(id)
{
    round = id.split('-')[0];
    for(i = 0; i < rounds.length; i++)
    {
        if(rounds[i] != rounds.length - 1)
        {
            if(rounds[i] == round)
            {
                var round_pos = i;
                if(round_pos + 2 < rounds.length)
                {
                    var future_rounds = [];
                    for(j = round_pos + 2; j < rounds.length; j++)
                    {
                        future_rounds.push(rounds[j]);
                    }
                }
                else
                {
                    break;
                }
            }
        }
        else
        {
            break;
        }
    }
    return future_rounds;
}



function getTargetPrevVal(target, selected)
{
    var target_prev_val = null;
    if(target != selected && target != '')
    {
        target_prev_val = target;
    }
    return target_prev_val;
}



function getTargetPrevLabel(target, selected)
{
    var target_prev_label = null;
    if(target != selected && target != '')
    {
        var target_prev_label = target;
    }
    return target_prev_label;
}



/* ==================================================================== */
// ON READY
/* ==================================================================== */
$(document).ready(function()
{
    
    /* ==================================================================== */
    // BRACKET PICKS CONTROLS
    /* ==================================================================== */
    $('div.matchup label').click(function(event)
    {
        var selected_team_name = $(this).text();
        var selected_input = $(this).next('input[type="hidden"]');
        var selected_val = selected_input.val();
        var target_input = getTargetFromId(selected_input.attr('id'));
        var target_label = target_input.prev('label');
        var future_rounds = getFutureRounds(selected_input.attr('id'));

        // Store the  target previous values (null if no previous value).
        var target_prev_val = getTargetPrevVal(target_input.val(), selected_val);
        var target_prev_label = getTargetPrevLabel(target_label.text(), selected_team_name);
        
        // Set the values.
        target_input.attr('value', selected_val);
        target_label.text(selected_team_name);
        
        // Get the labels that have the same text as the target's previous label text.
        $('div.matchup label').filter(function() { return $(this).text() == target_prev_label; }).each(function()
        {
            // Get the round.
            var round = $(this).next('input').attr('id').split('-')[0];            
            // If the round is in the future_rounds array, clear the text and corresponding input value.
            if($.inArray(round, future_rounds) != -1)
            {
                $(this).text('');
                $(this).next('input').attr('value', '');
            }
        });
    });
    
    // END BRACKET PICKS CONTROLS
    
});

// END ON READY



/* ==================================================================== */
// FOR TESTING PURPOSES ONLY
/* ==================================================================== */
$(function()
{
    $('a.click-all').click(function()
    {
        $(this).parent().find('label:even').click();
    });
});

// END FOR TESTING PURPOSES ONLY


