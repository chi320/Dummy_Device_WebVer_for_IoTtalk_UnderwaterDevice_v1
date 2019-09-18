 $(function(){
        csmapi.set_endpoint ('https://test.iottalk.tw');
        var profile = {
		    'dm_name': 'Dummy_Device2',          
			'idf_list':[Switch1,RedLedI,WhiteLedI],
			'odf_list':[tempO, humiO, volt5O, volt12O, gyro_pitchO, gyro_rollO],
		        'd_name': 'UnderwaterDevice',
        };
		/*
        function Dummy_Sensor(){
            return Math.random();
        }
		'Switch1','RedLed','WhiteLed'
		*/
        function tempO(data){
           $('.ODF_temp')[0].innerText=data[0];
        }
		
		function humiO(data){
           $('.ODF_humi')[0].innerText=data[0];
        }
		
		function volt5O(data){
           $('.ODF_volt5')[0].innerText=data[0];
        }
		
		function volt12O(data){
           $('.ODF_volt12')[0].innerText=data[0];
        }
		
		function gyro_pitchO(data){
           $('.ODF_gyro_pitch')[0].innerText=data[0];
        }
		
		function gyro_rollO(data){
           $('.ODF_gyro_roll')[0].innerText=data[0];
        }
		
		function Switch1(data){
           ;
        }
		
		function RedLedI(data){
           ;
        }
		
		function WhiteLedI(data){
           ;
        }
      
/*******************************************************************/                
        function ida_init(){
	    console.log(profile.d_name);
	}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
