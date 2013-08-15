/* global module:false*/

module.exports = function(grunt) {
    var paths = {
        build: 'build/',
        source: 'src/'
    };

    var scrollViewIncludes = [
        '<%= paths.source %>/positionrenderer/Manager.js',
        '<%= paths.source %>/positionrenderer/Translate3d.js',
        '<%= paths.source %>/ScrollView.js'
    ];

    grunt.initConfig({
        paths: paths,
        
        // copy: {
        //     js: {
        //         files: [{
        //             expand: true,
        //             cwd: '<%= paths.scripts %>',
        //             src: '**/*.js',
        //             dest: '<%= paths.temp + paths.scripts %>'
        //         }, {
        //             '<%= paths.dist + paths.scripts %>respond.min.js': '<%= paths.components %>respond/respond.min.js'
        //         }]
        //     },
        //     dist: {
        //         files: {
        //             '<%= paths.dist + paths.stylesheets %>style.css': '<%= paths.temp + paths.stylesheets %>style.css'
        //         }
        //     }
        // },

        concat_sourcemap: {
            devbuild: {
                files : {
                    '<%= paths.build %>ScrollView.js' : scrollViewIncludes
                }
            },
        },

        uglify: {
            build: {
                options: {
                    preserveComments: 'some'
                },
                files: {
                    '<%= paths.build %>ScrollView.min.js': scrollViewIncludes
                }
            }
        },

        clean: {
            all: [
                '<%= paths.build %>'
            ]
        },

        watch: {
            devbuild: {
                files: '<%= paths.source %>**',
                tasks: [
                    'devbuild'
                ]
            }
        }
    });
    
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('devbuild', ['concat_sourcemap:devbuild']);

    return grunt.registerTask('default', ['uglify:build']);
};
