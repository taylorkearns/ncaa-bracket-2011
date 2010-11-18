$(document).ready(function()
{
    
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
        if(selected_input.attr('id').indexOf('rd1') != -1)
        {
            // Round one
            if(selected_input.attr('id').indexOf('matchup1-') != -1) { target_input = $('#rd2-matchup1-team1'); }
            else if(selected_input.attr('id').indexOf('matchup2-') != -1) { target_input = $('#rd2-matchup1-team2'); }
            else if(selected_input.attr('id').indexOf('matchup3-') != -1) { target_input = $('#rd2-matchup2-team1'); }
            else if(selected_input.attr('id').indexOf('matchup4-') != -1) { target_input = $('#rd2-matchup2-team2'); }
            else if(selected_input.attr('id').indexOf('matchup5-') != -1) { target_input = $('#rd2-matchup3-team1'); }
            else if(selected_input.attr('id').indexOf('matchup6-') != -1) { target_input = $('#rd2-matchup3-team2'); }
            else if(selected_input.attr('id').indexOf('matchup7-') != -1) { target_input = $('#rd2-matchup4-team1'); }
            else if(selected_input.attr('id').indexOf('matchup8-') != -1) { target_input = $('#rd2-matchup4-team2'); }
            else if(selected_input.attr('id').indexOf('matchup9-') != -1) { target_input = $('#rd2-matchup5-team1'); }
            else if(selected_input.attr('id').indexOf('matchup10-') != -1) { target_input = $('#rd2-matchup5-team2'); }
            else if(selected_input.attr('id').indexOf('matchup11-') != -1) { target_input = $('#rd2-matchup6-team1'); }
            else if(selected_input.attr('id').indexOf('matchup12-') != -1) { target_input = $('#rd2-matchup6-team2'); }
            else if(selected_input.attr('id').indexOf('matchup13-') != -1) { target_input = $('#rd2-matchup7-team1'); }
            else if(selected_input.attr('id').indexOf('matchup14-') != -1) { target_input = $('#rd2-matchup7-team2'); }
            else if(selected_input.attr('id').indexOf('matchup15-') != -1) { target_input = $('#rd2-matchup8-team1'); }
            else if(selected_input.attr('id').indexOf('matchup16-') != -1) { target_input = $('#rd2-matchup8-team2'); }
            else if(selected_input.attr('id').indexOf('matchup17-') != -1) { target_input = $('#rd2-matchup9-team1'); }
            else if(selected_input.attr('id').indexOf('matchup18-') != -1) { target_input = $('#rd2-matchup9-team2'); }
            else if(selected_input.attr('id').indexOf('matchup19-') != -1) { target_input = $('#rd2-matchup10-team1'); }
            else if(selected_input.attr('id').indexOf('matchup20-') != -1) { target_input = $('#rd2-matchup10-team2'); }
            else if(selected_input.attr('id').indexOf('matchup21-') != -1) { target_input = $('#rd2-matchup11-team1'); }
            else if(selected_input.attr('id').indexOf('matchup22-') != -1) { target_input = $('#rd2-matchup11-team2'); }
            else if(selected_input.attr('id').indexOf('matchup23-') != -1) { target_input = $('#rd2-matchup12-team1'); }
            else if(selected_input.attr('id').indexOf('matchup24-') != -1) { target_input = $('#rd2-matchup12-team2'); }
            else if(selected_input.attr('id').indexOf('matchup25-') != -1) { target_input = $('#rd2-matchup13-team1'); }
            else if(selected_input.attr('id').indexOf('matchup26-') != -1) { target_input = $('#rd2-matchup13-team2'); }
            else if(selected_input.attr('id').indexOf('matchup27-') != -1) { target_input = $('#rd2-matchup14-team1'); }
            else if(selected_input.attr('id').indexOf('matchup28-') != -1) { target_input = $('#rd2-matchup14-team2'); }
            else if(selected_input.attr('id').indexOf('matchup29-') != -1) { target_input = $('#rd2-matchup15-team1'); }
            else if(selected_input.attr('id').indexOf('matchup30-') != -1) { target_input = $('#rd2-matchup15-team2'); }
            else if(selected_input.attr('id').indexOf('matchup31-') != -1) { target_input = $('#rd2-matchup16-team1'); }
            else if(selected_input.attr('id').indexOf('matchup32-') != -1) { target_input = $('#rd2-matchup16-team2'); }
        }
        else if(selected_input.attr('id').indexOf('rd2') != -1)
        {
            // Round two
            if(selected_input.attr('id').indexOf('matchup1-') != -1) { target_input = $('#sweet16-matchup1-team1'); }
            else if(selected_input.attr('id').indexOf('matchup2-') != -1) { target_input = $('#sweet16-matchup1-team2'); }            
            else if(selected_input.attr('id').indexOf('matchup3-') != -1) { target_input = $('#sweet16-matchup2-team1'); }            
            else if(selected_input.attr('id').indexOf('matchup4-') != -1) { target_input = $('#sweet16-matchup2-team2'); }            
            else if(selected_input.attr('id').indexOf('matchup5-') != -1) { target_input = $('#sweet16-matchup3-team1'); }            
            else if(selected_input.attr('id').indexOf('matchup6-') != -1) { target_input = $('#sweet16-matchup3-team2'); }            
            else if(selected_input.attr('id').indexOf('matchup7-') != -1) { target_input = $('#sweet16-matchup4-team1'); }            
            else if(selected_input.attr('id').indexOf('matchup8-') != -1) { target_input = $('#sweet16-matchup4-team2'); }            
            else if(selected_input.attr('id').indexOf('matchup9-') != -1) { target_input = $('#sweet16-matchup5-team1'); }            
            else if(selected_input.attr('id').indexOf('matchup10-') != -1) { target_input = $('#sweet16-matchup5-team2'); }            
            else if(selected_input.attr('id').indexOf('matchup11-') != -1) { target_input = $('#sweet16-matchup6-team1'); }            
            else if(selected_input.attr('id').indexOf('matchup12-') != -1) { target_input = $('#sweet16-matchup6-team2'); }            
            else if(selected_input.attr('id').indexOf('matchup13-') != -1) { target_input = $('#sweet16-matchup7-team1'); }            
            else if(selected_input.attr('id').indexOf('matchup14-') != -1) { target_input = $('#sweet16-matchup7-team2'); }            
            else if(selected_input.attr('id').indexOf('matchup15-') != -1) { target_input = $('#sweet16-matchup8-team1'); }            
            else if(selected_input.attr('id').indexOf('matchup16-') != -1) { target_input = $('#sweet16-matchup8-team2'); }            
        }
        else if(selected_input.attr('id').indexOf('sweet16') != -1)
        {
            // Sweet Sixteen
            if(selected_input.attr('id').indexOf('matchup1-') != -1) { target_input = $('#elite8-matchup1-team1'); }
            else if(selected_input.attr('id').indexOf('matchup2-') != -1) { target_input = $('#elite8-matchup1-team2'); }
            else if(selected_input.attr('id').indexOf('matchup3-') != -1) { target_input = $('#elite8-matchup2-team1'); }
            else if(selected_input.attr('id').indexOf('matchup4-') != -1) { target_input = $('#elite8-matchup2-team2'); }
            else if(selected_input.attr('id').indexOf('matchup5-') != -1) { target_input = $('#elite8-matchup3-team1'); }
            else if(selected_input.attr('id').indexOf('matchup6-') != -1) { target_input = $('#elite8-matchup3-team2'); }
            else if(selected_input.attr('id').indexOf('matchup7-') != -1) { target_input = $('#elite8-matchup4-team1'); }
            else if(selected_input.attr('id').indexOf('matchup8-') != -1) { target_input = $('#elite8-matchup4-team2'); }
        }
        else if(selected_input.attr('id').indexOf('elite8') != -1)
        {
            // Elite Eight
            if(selected_input.attr('id').indexOf('matchup1-') != -1) { target_input = $('#final4-matchup1-team1'); }
            else if(selected_input.attr('id').indexOf('matchup2-') != -1) { target_input = $('#final4-matchup1-team2'); }            
            else if(selected_input.attr('id').indexOf('matchup3-') != -1) { target_input = $('#final4-matchup2-team1'); }            
            else if(selected_input.attr('id').indexOf('matchup4-') != -1) { target_input = $('#final4-matchup2-team2'); }            
        }               
        else if(selected_input.attr('id').indexOf('final4') != -1)
        {
            // Final Four
            if(selected_input.attr('id').indexOf('matchup1-') != -1) { target_input = $('#championship-team1'); }
            else if(selected_input.attr('id').indexOf('matchup2-') != -1) { target_input = $('#championship-team2'); }                        
        }               
        else if(selected_input.attr('id').indexOf('championship-') != -1)
        {
            // Championship
            target_input = $('#champion');
        }
        
        // Set the value of the target input and target label to the value of the selected input and selected label.
        // If a previous selection changes after a subsequent round has been set, capture the target value and label and
        // clear them from all subsequent rounds.
        target_label = target_input.prev('label');
        if(target_input.val() != '' && target_label != '')
        {
            var prev_target_val = target_input.val();
            var prev_target_label = target_label;
            $('input[value=prev_target_val]').not(target_input).attr('value', '');
            $('label:contains(prev_target_label)').not(target_label).text('');
        }
        target_input.attr('value', selected_val);
        target_label.text(selected_team_name);
        
    });
    
    /* ******************************************************************** */    
    
}); // end document.ready