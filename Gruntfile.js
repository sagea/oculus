module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: [
            '/*',
            '   Oculus (v<%= pkg.version %>)',
            '   Author: <%= pkg.author %>',
            '   Github: https://github.com/sagea',
            '*/\n'
        ].join('\n'),
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            },
            src: ['src/oculus.js']
        },
        copy: {
            main: {
                src: 'src/oculus.js',
                dest: 'dist/oculus.js',
                options: {
                    process: function (content, srcpath) {
                        //console.log('<%= banner =>')
                        return grunt.config.get('banner') + content;
                    }
                }
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                banner: '<%= banner %>'
            },
            minify: {
                files: {
                    'dist/oculus.min.js': ['src/oculus.js']
                }
            }
        },
        watch: {
            src: {
                files: 'src/oculus.js',
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Watch
    grunt.registerTask('w', ['watch:src']);

    // Build
    grunt.registerTask('b', ['jshint:src', 'copy:main', 'uglify:minify']);

    // Test
    grunt.registerTask('test', []);
};