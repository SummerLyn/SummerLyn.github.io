/**
 * Created by summerlynbryant on 12/28/16.
 *
 */



var isOn = false;

        $('#myOnButton').click(function() {
            if(isOn == false) {
            $('#myLightBulb').attr('src', 'lightBulb_copy/images/lightOn.jpg');
            isOn = true;
            }

            else {

                  isOn = false;
                $('#myLightBulb').attr('src', 'lightBulb_copy/images/lightOff.jpg');


            }
        });

