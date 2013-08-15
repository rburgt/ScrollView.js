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
