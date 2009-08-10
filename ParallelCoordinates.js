(function (){
  this.ParallelCoordinates = function ParallelCoordinates(canvas){
    return buildParallelCoordinates(canvas);
  };

  function buildParallelCoordinates(canvas){
    me = {};
    var _p = Processing(canvas);
    var _margin = 5;
    var _dimensions = 3;
    var _dimensionInfo = [{},{},{}];
    var _background = "rgba(0,0,0,1)";
    var _data = [];


    me.size = function size(x,y){ _p.size(x,y) };
    me.background = function background(color){ _background = color; };
    me.dimensions = function dimensions(n){
      _dimensions = n; 
      _data = [];
      for(var i=0;i<n;i++){ _dimensionInfo[i]={};};};
    me.addPoints = function addPoints(newData){ 
      _data = _data.concat( newData); 
      for(var i=0; i<newData.length; i++){
        var pt = newData[i];
        for(j=0;j<_dimensions;j++){
          var x = pt[j];
          var info = _dimensionInfo[j];
          if (info.max){
            info.max = Math.max(info.max, x);}
          else {
            info.max = x;}
          if (info.min){
            info.min = Math.min(info.min, x);}
          else {
            info.min = x;}
        }
      }
    };

    
    me.draw = function draw(){
      with(_p){
        background(_background);
        strokeWeight(.5);
        stroke(0);
        fill(255);
        drawAxis();
        drawPoints();
      }
    }

    function drawAxis(){
      _p.stroke("rgba(255,0,0,.2)");
      x=_margin;
      top=_margin;
      bottom= _p.height - _margin;
      step = ( _p.width - _margin - _margin) / (_dimensions -1);
      for(i=0;i<_dimensions;i++){
        _p.line(x,top,x,bottom);
        x += step;
      }
    };

    function scale(i,x){
      var range = _p.height - _margin - _margin;
      var max = _dimensionInfo[i].max;
      var min = _dimensionInfo[i].min;
      y = _p.height - _margin;
      y -= (range/(max-min)) * (x - min);
      return y;
    }

    function drawPoints(){
      var len = _data.length;
      _p.noFill();
      for(var i=0;i<len;i++){
        var pt = _data[i];
        console.log.apply( console, [i, len, pt]);
        var x=_margin;
        var top=_margin;
        var bottom= _p.height - _margin;
        _p.stroke(100);
        _p.strokeWeight(.5)
        _p.beginShape();
        step = ( _p.width - _margin - _margin) / (_dimensions -1);
        if(pt[_dimensions]){
          var style = pt[_dimensions];
          if(style.color){_p.stroke(style.color);};
          if(style.penWidth){_p.strokeWeight(style.penWidth);};
        };
        for(j=0;j<_dimensions;j++){
          _p.vertex(x,scale(j,pt[j]));
          x += step;
        }
        _p.endShape();
      }
    }


    return me;
  };

 })();
