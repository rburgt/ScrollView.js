(function(){

    var Translate3dPositionRenderer = function( scrollContainer ){
        this._scrollContainer = scrollContainer;
        this._innerScrollContainer = scrollContainer.querySelector('.scrollview-inner');
    };

    Translate3dPositionRenderer.prototype = {
        scrollTo : function( x, y ){
            this._innerScrollContainer.style.webkitTransform = 'translate3d(' +  ( x * -1 ) + 'px, ' +  ( y * -1 ) + 'px, 0)'
        }
    };



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
            this._positionRenderer = new Translate3dPositionRenderer( this.getScrollContainer() );
        },

        scrollTo : function( x, y ){
            this._positionRenderer.scrollTo( x, y );
        }

    };


    if ( window.define ){
        window.define('scrollview/scrollview', ScrollView);
    } else {
        window.ScrollView = ScrollView;
    }
})();