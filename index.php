<!DOCTYPE HTML>
<html>
<head>
    <title></title>
    <style type="text/css">
        div.matchup { margin-bottom: 10px; }
        form label { display: block; }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
    <script>
        $(document).ready(function()
        {
            // if an input label (team name) is clicked..
            $('div.matchup label').click(function()
            {
                var selected_team_name = $(this).text();
                var selected_input = $(this).next('input[type="hidden"]');
                var selected_val = selected_input.val();
                var target_input;
                // determine the target input
                if(selected_input.attr('id').indexOf('rd1') != -1)
                {
                    if(selected_input.attr('id').indexOf('matchup1') != -1)
                    {
                        target_input = $('#rd2-matchup1-team1');
                    }
                    else if(selected_input.attr('id').indexOf('matchup2') != -1)
                    {
                        
                    }
                }
                else if(selected_input.attr('id').indexOf('rd2') != -1)
                {
                    
                }
                else if(selected_input.attr('id').indexOf('sweet16') != -1)
                {
                    
                }
                else if(selected_input.attr('id').indexOf('elite8') != -1)
                {
                    
                }               
                else if(selected_input.attr('id').indexOf('final4') != -1)
                {
                    
                }               
                else if(selected_input.attr('id').indexOf('championship') != -1)
                {
                    
                }               
                // set the value of the target input to the value of the selected input
                // and also set the team name accordingly
                target_input.attr('value', selected_val);
                target_input.prev('label').text(selected_team_name);
            });
        });
    </script>
</head>
<body>
    
<form>
    <h2>Round 1</h2>
    <div class="rd1 matchup">    
        <label for="rd1-matchup1-team1">Northwestern</label><input type="hidden" id="rd1-matchup1-team1" value="northwestern" />    
        <label for="rd1-matchup1-team2">Syracuse</label><input type="hidden" id="rd1-matchup1-team2" value="syracuse" />
    </div>
    <div class="rd1 matchup">
        <label for="rd1-matchup2-team1">North Carolina</label><input type="hidden" id="rd1-matchup2-team1" value="north-carolina" />    
        <label for="rd1-matchup2-team2">Memphis</label><input type="hidden" id="rd1-matchup2-team2" value="memphis" />
    </div>
    <div class="rd1 matchup">    
        <label for="rd1-matchup3-team1">Michigan St.</label><input type="hidden" id="rd1-matchup3-team1" value="michigan-state" />    
        <label for="rd1-matchup3-team2">Duke</label><input type="hidden" id="rd1-matchup3-team2" value="duke" />
    </div>
    <div class="rd1 matchup">
        <label for="rd1-matchup4-team1">Ohio St.</label><input type="hidden" id="rd1-matchup4-team1" value="ohio-state" />    
        <label for="rd1-matchup4-team2">Oregon</label><input type="hidden" id="rd1-matchup4-team2" value="oregon" />
    </div>
    <h2>Round 2</h2>
    <div class="rd2 matchup">
        <label for="rd2-matchup1-team1"></label><input type="hidden" id="rd2-matchup1-team1" value="" />
        <label for="rd2-matchup1-team2"></label><input type="hidden" id="rd2-matchup1-team2" value="" />                
    </div>
    <div class="rd2 matchup">
        <label for="rd2-matchup2-team1"></label><input type="hidden" id="rd2-matchup2-team1" value="" />
        <label for="rd2-matchup2-team2"></label><input type="hidden" id="rd2-matchup2-team2" value="" />                
    </div>
    <h2>Sweet 16</h2>
    <div class="sweet16 matchup">
        <label for="sweet16-matchup1-team1"></label><input type="hidden" id="sweet16-matchup1-team1" value="" />
        <label for="sweet16-matchup2-team2"></label><input type="hidden" id="sweet16-matchup2-team2" value="" />                
    </div class="matchup">
    <h2>Elite 8</h2>
    <div class="elite8 matchup">
        <label for="elite8-matchup1-team1"></label><input type="hidden" id="elite8-matchup1-team1" value="" />
    </div>
</form>
    
</body>    
</html>