var Translate3dPositionRenderer = function( scrollContainer ){
    this._scrollContainer = scrollContainer;
    this._innerScrollContainer = scrollContainer.querySelector('.scrollview-inner');
};


Translate3dPositionRenderer.isAble = function(){
    return true;
};

Translate3dPositionRenderer.prototype = {
    scrollTo : function( x, y ){
        this._innerScrollContainer.style.webkitTransform = 'translate3d(' +  ( x * -1 ) + 'px, ' +  ( y * -1 ) + 'px, 0)'
    }
};

positionRendererManager.register( Translate3dPositionRenderer );
