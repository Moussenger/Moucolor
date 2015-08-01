module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            uglify: {
                files: "lib/**/*.js",
                tasks: ["uglify"]
            }
        },

        uglify: {
            js: {
                options: {
                },
                files: {
                    'dist/moucolor.js': [ "lib/moucolor.js" ],
                },
            }
        },

        jasmine: {
            lib: {
                src: 'lib/**/*.js',
                options: {
                    specs: 'tests/*Spec.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('devmode', ['watch']);

};