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
