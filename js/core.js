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



/* ==================================================================== */
// ON READY
/* ==================================================================== */
$(document).ready(function()
{
    
    /* ==================================================================== */
    // BRACKET PICKS CONTROLS
    /* ==================================================================== */
    
    $('div.matchup label').click(function()
    {
        var selected_team_name = $(this).text();
        var selected_input = $(this).next('input[type="hidden"]');
        var selected_val = selected_input.val();
        var target_input = getTargetFromId(selected_input.attr('id'));
        var target_label = target_input.prev('label');
               
        // Set the values
        target_input.attr('value', selected_val);
        target_label.text(selected_team_name);
        
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



// FOR TESTING PURPOSES ONLY


