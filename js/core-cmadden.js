
var rounds = ["rd1", "rd2", "sweet16", "elite8", "final4", "championship"];

$(document).ready(function()
{
    $(".lost-game").click(function(event)
    {
        event.preventDefault();
        flagLosses($(this).attr("id"));
    });
    
    
    /* ******************************************************************** */
    // Bracket picks controls
    /* ******************************************************************** */
    
    // If an input label (team name) is clicked..
    $('div.matchup label').click(function()
    {
        var selected_team_name = $(this).text();
        var selected_input = $(this).next('input[type="hidden"]');
        var selected_val = selected_input.val();
        var target_input;
        var target_label;
        // Determine the target input
       target_input = getTargetFromId(selected_input.attr("id"));
               
        // Set the value of the target input and target label to the value of the selected input and selected label.
        // If a previous selection changes after a subsequent round has been set, capture the target value and label and
        // clear them from all subsequent rounds.
        target_label = target_input.prev('label');
        if(target_input.val() != '' && target_label.text() != '')
        {
            
        }
        target_input.attr('value', selected_val);
        target_label.text(selected_team_name);
        
    });
    
    /* ******************************************************************** */    
    
}); // end document.ready


function flagLosses(id)
{   
    // Current loss
    var losing_team_id = id.replace("lost-", "");
    var losing_team = $("#" + losing_team_id);
    $(losing_team).prev("label").addClass("loss");
    var team_name = $(losing_team).prev("label").text();
    
    
    // Subsequent losses
    var id_parts = losing_team_id.split("-"); // sweet16-matchup1-team1
    var round = id_parts[0];
    var matchup = parseInt((id_parts[1]).replace("matchup", ""));
    var next_round = getNextRound(round);
    var next_matchup = getNextMatchup(matchup);
    var next_team = getNextTeam(matchup);
    while(next_round)
    {
        var selector = "#" + next_round + "-matchup" + next_matchup + "-team" + next_team;
        var next_team_name = $(selector).prev("label").text();
        
        if(next_team_name == team_name)
        {
            $(selector).prev("label").addClass("loss");
        
            next_round = getNextRound(next_round);
            next_matchup = getNextMatchup(next_matchup);
            next_team = getNextTeam(next_matchup);
        }
        else { break; }
    }
}

function getTargetFromId(id)
{
    var id_parts = id.split("-"); // sweet16-matchup1-team1
    var round = id_parts[0];
    var matchup = parseInt((id_parts[1]).replace("matchup", ""));
    var team = parseInt((id_parts[2]).replace("team", ""));
    
    var next_round = getNextRound(round);
    var next_matchup = getNextMatchup(matchup);
    var next_team = getNextTeam(matchup);
    
    var selector = "#" + next_round + "-matchup" + next_matchup + "-team" + next_team;
    
    return $(selector);
}

function getNextRound(round)
{
    for(i = 0; i < rounds.length; i++)
    {
        if(rounds[i] == round)
        {
            if(i != (rounds.length - 1))
            {
                return rounds[i + 1];
            }
            else
            {
                return null;    
            }
        }
    }
    return null;
}


function getNextMatchup(matchup)
{
    if(matchup % 2 == 0)
    {
        return matchup / 2;
    }
    else
    {
        return (matchup + 1) / 2;    
    }
}

function getNextTeam(matchup)
{
    if(matchup % 2 == 0)
    {
        return 2;
    }
    else
    {
        return 1;    
    }
}