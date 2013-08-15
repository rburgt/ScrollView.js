var positionRendererManager = (function(){
    var renderers = [],
        rendererCount = 0;

    return {
        register: function( positionRenderer ){
            renderers.push( positionRenderer );
            rendererCount++;
        },

        getRenderer: function(){
            var PositionRenderer = null;

            for ( var i = 0; i < rendererCount && !PositionRenderer; i++ ){
                if ( renderers[ i ].isAble() ){
                    PositionRenderer = renderers[ i ];
                }
            }

            return PositionRenderer;
        }
    };
})();

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

var ScrollView = function( scrollContainer ){
    this._setScrollContainer( scrollContainer );
    this._initPositionRenerer();

};

ScrollView.prototype = {
    _setScrollContainer : function( scrollContainer ){
        this._scrollContainer = scrollContainer;
    },

    getScrollContainer : function(){
        return this._scrollContainer || null;
    },

    _initPositionRenerer : function(){
        this._positionRenderer = new (positionRendererManager.getRenderer())( this.getScrollContainer() );
    },

    scrollTo : function( x, y ){
        this._positionRenderer.scrollTo( x, y );
    }
};

//@ sourceMappingURL=ScrollView.js.map