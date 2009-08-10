`ParallelCoordinates`
======
Javascript layered in over Processing.js <http://processingjs.org> for rendering some data using the ParrallelCoordinates method.

Alpha Current Release
======
This is currently only useful for the limited use case I had, for example all the columns in your daa should be integers.

Installation
======
See the example.html

Experiment
======
<script type="text/javascript">
(function (){
  function injectScript(url){
    var headID = document.getElementsByTagName("head")[0];         
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = url;
    headID.appendChild(newScript);};

  injectScript("http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js");

})();

alert("hi there")

</script>

Authors
======
Ben Hyde <bhyde@pobox.com>

Licence.
======
Apache 2.0

